import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { findProduct } from "@/data/site";
import { parseMarkdownToSections } from "@/lib/blog";
import { renderMarkdownBlockHtml } from "@/lib/markdown";

type RouteParams = { postId: string };
type SearchParams = { token?: string };

export const dynamic = "force-dynamic";
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
      const payload = await res.json();
      errMsg = payload.error || errMsg;
    } catch {}
    return { error: errMsg, status: res.status };
  }

  const data = await res.json();
  return { post: data.post };
}

export const metadata: Metadata = {
  title: "Preview · TPKele Blog",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

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
          <p style={{ color: "#888" }}>请回到 CRM 审核工作台，重新点“在网站预览”生成新链接。</p>
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
  const metaDescription = (post.meta_description as string) || "";
  const coverUrl = (post.cover_image_url as string) || (post.image_url as string) || "/assets/blog/default.webp";
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
    .filter((product): product is NonNullable<ReturnType<typeof findProduct>> => Boolean(product));

  const sections = parseMarkdownToSections(content);
  const excerpt =
    content
      .split("\n")
      .find((line) => line.trim() && !line.startsWith("#"))
      ?.slice(0, 180) || metaDescription;

  const formattedDate = new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));

  return (
    <main>
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
        预览模式 | 这是审核草稿，未发布到搜索引擎 | 状态：{(post.status as string) || "draft"}
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

        {coverUrl.startsWith("http") ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="blog-article-hero"
            src={coverUrl}
            alt={(post.cover_image_alt as string) || title}
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
          />
        ) : (
          <Image className="blog-article-hero" src={coverUrl} alt={title} width={1200} height={540} priority />
        )}

        <div className="blog-article-body">
          {sections.map((section, idx) => (
            <section key={idx}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <div
                  key={paragraphIndex}
                  dangerouslySetInnerHTML={{ __html: renderMarkdownBlockHtml(paragraph) }}
                />
              ))}
              {section.bullets.length > 0 ? (
                <ul>
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          {faq.length > 0 ? (
            <section>
              <h2>Frequently Asked Questions</h2>
              <dl className="blog-article-faq">
                {faq.map((item, index) => (
                  <Fragment key={index}>
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
                {internalLinks.map((link, index) => (
                  <li key={index}>
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
                {externalLinks.map((link, index) => (
                  <li key={index}>
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
                <Link key={product.slug} href={`/products/${product.slug}`} className="blog-article-related-card">
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
          <h2>Send your project list - we will reply within one business day.</h2>
          <InquiryModal triggerLabel="Request Quotation" triggerClassName="btn primary" intent={intent} />
        </div>
      </article>
    </main>
  );
}
