const IMAGE_PATTERN = /^!\[([^\]]*)\]\(([^)]+)\)$/;
const TABLE_ROW_PATTERN = /^\|.*\|$/;
const TABLE_SEPARATOR_PATTERN = /^\|?[\s:-]+(?:\|[\s:-]+)+\|?$/;
const HTML_BLOCK_PATTERN = /^<(div|section|article|aside|header|footer|nav|main)/i;

const DANGEROUS_TAG_SOURCE = '<(script|iframe|object|embed|form|input|textarea|button|style|link|meta|base)[^>]*>';

function isExternalHref(href: string) {
  return /^(https?:)?\/\//i.test(href);
}

// 清理 HTML：移除可执行标签、事件处理器和危险协议
// 注意：不使用 dotAll 标志（tsconfig target 为 ES2017），换行用 [\s\S] 匹配
function sanitizeHtml(html: string): string {
  let clean = html.replace(new RegExp(`${DANGEROUS_TAG_SOURCE}[\\s\\S]*?<\\/\\1\\s*>`, "gi"), "");
  clean = clean.replace(new RegExp(DANGEROUS_TAG_SOURCE, "gi"), "");

  clean = clean.replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "");
  clean = clean.replace(/\s(?:href|src|xlink:href)\s*=\s*(?:"\s*(?:javascript|vbscript|data:text\/html)[^"]*"|'\s*(?:javascript|vbscript|data:text\/html)[^']*')/gi, "");

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
