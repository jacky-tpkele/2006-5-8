// 文件位置：D:/TPKELE/5月5日网站/src/app/blog/preview/[postId]/page.tsx
// 用途：审核工作台的 "在网站预览"。和 /blog/[slug] 渲染逻辑一致，
//      但走 token 校验 + 不限 status，noindex 不被收录。

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { headers } from "next/headers";
import { InquiryModal } from "@/components/InquiryModal";
import { findProduct, site } from "@/data/site";

type RouteParams = { postId: string };
type SearchParams = { token?: string };

export const dynamic = "force-dynamic"; // 永远不缓存
export const revalidate = 0;

async function fetchPreviewPost(postId: string, token: string) {
  const h = await headers();
  const host = h.get("host") || "www.tpkele.com";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || `${protocol}://${host}`;

  const url = `${baseUrl}/api/blog/preview?postId=${encodeURIComponent(postId)}&token=${encodeURIComponent(token)}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    let errMsg = "Preview unavailable";
    try {
      const j = await res.json();
      errMsg = j.error || errMsg;
    } catch {}
    return { error: errMsg, status: res.status };
  }
  const data = await res.json();
  return { post: data.post };
}

// 永远 noindex（双保险，token 失效时已是 401，不会到这里）
export const metadata: Metadata = {
  title: "Preview · TPKele Blog",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
const imgPattern = /^!\[([^\]]*)\]\(([^)]+)\)$/;

function renderParagraph(text: string, key: number) {
  // 段落级图片：单独的 ![alt](url) 渲染为 <img>
  const t = text.trim();
  const imgMatch = t.match(imgPattern);
  if (imgMatch) {
    const [, alt, url] = imgMatch;
    return (
      <p key={key} style={{ textAlign: "center" }}>
        {/* 用 <img> 而非 <Image>：预览阶段 URL 来自 Cloudinary，未在 next.config 域名白名单时 <Image> 会失败 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={url} alt={alt} style={{ maxWidth: "100%", height: "auto", borderRadius: 6 }} />
      </p>
    );
  }

  const segments: Array<string | { label: string; href: string }> = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) segments.push(text.slice(lastIndex, match.index));
    segments.push({ label: match[1], href: match[2] });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) segments.push(text.slice(lastIndex));
  linkPattern.lastIndex = 0;
  return (
    <p key={key}>
      {segments.map((seg, i) =>
        typeof seg === "string" ? (
          <Fragment key={i}>{seg}</Fragment>
        ) : (
          <Link key={i} href={seg.href} className="text-link">
            {seg.label}
          </Link>
        )
      )}
    </p>
  );
}

// 把 markdown 转章节（H2 起）。比 api/blog/route.ts 多识别 ![img](url) 行作为段落
function parseMarkdownToSections(markdown: string) {
  const sections: Array<{ heading: string; paragraphs: string[]; bullets: string[] }> = [];
  const lines = markdown.split("\n");
  let current: { heading: string; paragraphs: string[]; bullets: string[] } | null = null;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      if (current) sections.push(current);
      current = { heading: line.replace(/^##\s+/, "").trim(), paragraphs: [], bullets: [] };
    } else if (/^[-*]\s+/.test(line)) {
      if (current) current.bullets.push(line.replace(/^[-*]\s+/, "").trim());
    } else if (line.trim() && current) {
      if (!line.startsWith("#")) current.paragraphs.push(line.trim());
    }
  }
  if (current) sections.push(current);
  return sections;
}

export default async function BlogPreviewPage({
  params,
  searchParams,
}: {
  params: Promise<RouteParams>;
  searchParams: Promise<SearchParams>;
}) {
  const { postId } = await params;
  const sp = await searchParams;
  const token = sp.token;

  if (!token) {
    return (
      <main className="section">
        <h1>Preview Unavailable</h1>
        <p style={{ color: "#888" }}>缺少访问令牌（请从 CRM 审核工作台进入）</p>
      </main>
    );
  }

  const result = await fetchPreviewPost(postId, token);
  if ("error" in result) {
    if (result.status === 401) {
      return (
        <main className="section">
          <h1>预览链接已失效</h1>
          <p style={{ color: "#888" }}>请回到 CRM 审核工作台，重新点 "🌐 在网站预览" 生成新链接（每个链接 1 小时有效）。</p>
        </main>
      );
    }
    if (result.status === 404) notFound();
    return (
      <main className="section">
        <h1>Preview Error</h1>
        <p style={{ color: "#c62828" }}>{result.error}</p>
      </main>
    );
  }

  const post = result.post as Record<string, unknown>;
  const title = (post.title as string) || "Untitled";
  const content = (post.content as string) || "";
  const metaTitle = (post.meta_title as string) || title;
  const metaDescription = (post.meta_description as string) || "";
  const slug = (post.slug_url as string) || (post.slug as string) || postId;
  const coverUrl =
    (post.cover_image_url as string) ||
    (post.image_url as string) ||
    "/assets/blog/default.webp";
  const date =
    (post.published_at as string)?.split("T")[0] ||
    (post.updated_at as string)?.split("T")[0] ||
    (post.created_at as string)?.split("T")[0] ||
    new Date().toISOString().split("T")[0];
  const faq = (post.faq as Array<{ question: string; answer: string }>) || [];
  const internalLinks = (post.internal_links as Array<{ title: string; url: string; reason?: string }>) || [];
  const externalLinks = (post.external_links as Array<{ title: string; url: string; reason?: string }>) || [];
  const relatedSlugs = (post.related_products as string[]) || [];
  const intent = (post.intent as string) || "General information";

  const related = relatedSlugs
    .map((slug) => findProduct(slug))
    .filter((p): p is NonNullable<ReturnType<typeof findProduct>> => Boolean(p));

  const sections = parseMarkdownToSections(content);
  const excerpt = content.split("\n").find((l) => l.trim() && !l.startsWith("#"))?.slice(0, 180) || metaDescription;

  const formattedDate = new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));

  return (
    <main>
      {/* 预览模式提示条 */}
      <div
        style={{
          background: "#fff3cd",
          color: "#664d03",
          padding: "10px 20px",
          fontSize: 13,
          textAlign: "center",
          borderBottom: "1px solid #ffe69c",
        }}
      >
        🔍 预览模式 · 这是审核草稿，未发布到搜索引擎 · 状态：{(post.status as string) || "draft"}
      </div>

      <article className="section blog-article">
        <header className="blog-article-head">
          <nav className="blog-article-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog">Blog</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{title}</span>
          </nav>
          <time dateTime={date}>{formattedDate}</time>
          <h1>{title}</h1>
          <p className="blog-article-lede">{excerpt}</p>
        </header>

        {coverUrl && coverUrl.startsWith("http") ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="blog-article-hero"
            src={coverUrl}
            alt={(post.cover_image_alt as string) || title}
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
          />
        ) : (
          <Image
            className="blog-article-hero"
            src={coverUrl}
            alt={title}
            width={1200}
            height={540}
            priority
          />
        )}

        <div className="blog-article-body">
          {sections.map((section, idx) => (
            <section key={idx}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((para, i) => renderParagraph(para, i))}
              {section.bullets.length > 0 ? (
                <ul>
                  {section.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          {faq.length > 0 ? (
            <section>
              <h2>Frequently Asked Questions</h2>
              <dl className="blog-article-faq">
                {faq.map((item, i) => (
                  <Fragment key={i}>
                    <dt>{item.question}</dt>
                    <dd>{item.answer}</dd>
                  </Fragment>
                ))}
              </dl>
            </section>
          ) : null}

          {internalLinks.length > 0 ? (
            <section>
              <h2>Related Articles</h2>
              <ul className="blog-article-links">
                {internalLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.url} className="text-link">
                      {link.title}
                    </Link>
                    {link.reason ? <p className="text-muted">{link.reason}</p> : null}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {externalLinks.length > 0 ? (
            <section>
              <h2>References & Resources</h2>
              <ul className="blog-article-links">
                {externalLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-link">
                      {link.title}
                    </a>
                    {link.reason ? <p className="text-muted">{link.reason}</p> : null}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        {related.length > 0 ? (
          <aside className="blog-article-related">
            <h2>Related Products</h2>
            <div className="blog-article-related-grid">
              {related.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="blog-article-related-card"
                >
                  <Image src={product.image} alt={product.name} width={200} height={200} />
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.application}</span>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        ) : null}

        <div className="blog-article-cta">
          <p className="eyebrow">Need help on this product family?</p>
          <h2>Send your project list — we will reply within one business day.</h2>
          <InquiryModal triggerLabel="Request Quotation" triggerClassName="btn primary" intent={intent} />
        </div>
      </article>
    </main>
  );
}
