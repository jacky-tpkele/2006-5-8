const IMAGE_PATTERN = /^!\[([^\]]*)\]\(([^)]+)\)$/;
const TABLE_ROW_PATTERN = /^\|.*\|$/;
const TABLE_SEPARATOR_PATTERN = /^\|?[\s:-]+(?:\|[\s:-]+)+\|?$/;
const HTML_BLOCK_PATTERN = /^<(div|section|article|aside|header|footer|nav|main)/i;

// 允许的安全 HTML 标签（用于布局和样式）
const ALLOWED_HTML_TAGS = ['div', 'section', 'article', 'aside', 'header', 'footer', 'nav', 'main', 'span', 'a', 'img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'li', 'strong', 'em', 'br'];
const ALLOWED_ATTRIBUTES = ['style', 'href', 'src', 'alt', 'class', 'id', 'target', 'rel', 'title', 'width', 'height'];

function isExternalHref(href: string) {
  return /^(https?:)?\/\//i.test(href);
}

// 清理 HTML：只允许白名单标签和属性
function sanitizeHtml(html: string): string {
  // 移除危险标签
  let clean = html.replace(/<(script|iframe|object|embed|form|input|textarea|button)[^>]*>.*?<\/\1>/gis, '');
  clean = clean.replace(/<(script|iframe|object|embed|form|input|textarea|button)[^>]*>/gi, '');

  // 移除事件处理器属性
  clean = clean.replace(/\s+on\w+\s*=\s*["'][^"']*["']/gi, '');
  clean = clean.replace(/\s+on\w+\s*=\s*[^\s>]*/gi, '');

  return clean;
}

export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return char;
    }
  });
}

export function renderMarkdownInlineHtml(text: string) {
  const codeTokens: string[] = [];
  let html = escapeHtml(text.trim());

  html = html.replace(/`([^`]+)`/g, (_match, code) => {
    codeTokens.push(code);
    return `__CODE_${codeTokens.length - 1}__`;
  });

  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_match, alt, url) => {
    return `<img src="${escapeHtml(url)}" alt="${escapeHtml(alt)}">`;
  });

  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label, href) => {
    const safeHref = escapeHtml(href);
    const externalAttrs = isExternalHref(href) ? ' target="_blank" rel="noopener noreferrer"' : "";
    return `<a href="${safeHref}" class="text-link"${externalAttrs}>${label}</a>`;
  });

  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");

  html = html.replace(/__CODE_(\d+)__/g, (_match, index) => {
    const code = codeTokens[Number(index)] ?? "";
    return `<code>${code}</code>`;
  });

  return html;
}

function splitTableRow(row: string) {
  return row
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

export function parseMarkdownTable(block: string) {
  const lines = block
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) return null;
  if (!lines.some((line) => TABLE_SEPARATOR_PATTERN.test(line))) return null;
  if (!lines.every((line) => TABLE_ROW_PATTERN.test(line) || TABLE_SEPARATOR_PATTERN.test(line))) return null;

  const header = splitTableRow(lines[0]);
  const rows = lines
    .slice(2)
    .filter((line) => TABLE_ROW_PATTERN.test(line))
    .map(splitTableRow);

  return { header, rows };
}

export function renderMarkdownBlockHtml(block: string) {
  const text = block.trim();
  if (!text) return "";

  // 检测是否是 HTML 块（以 HTML 标签开头）
  if (HTML_BLOCK_PATTERN.test(text)) {
    return sanitizeHtml(text);
  }

  const imageMatch = text.match(IMAGE_PATTERN);
  if (imageMatch) {
    return `<p class="markdown-image-block"><img src="${escapeHtml(imageMatch[2])}" alt="${escapeHtml(imageMatch[1])}"></p>`;
  }

  const table = parseMarkdownTable(text);
  if (table) {
    const head = table.header
      .map((cell) => `<th scope="col">${renderMarkdownInlineHtml(cell)}</th>`)
      .join("");
    const body = table.rows
      .map((row) => `<tr>${row.map((cell) => `<td>${renderMarkdownInlineHtml(cell)}</td>`).join("")}</tr>`)
      .join("");

    return `
      <div class="markdown-table-wrap">
        <table class="markdown-table">
          <thead><tr>${head}</tr></thead>
          <tbody>${body}</tbody>
        </table>
      </div>
    `.trim();
  }

  return `<p>${renderMarkdownInlineHtml(text.replace(/\n+/g, " "))}</p>`;
}
