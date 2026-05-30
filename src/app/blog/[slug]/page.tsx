import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { blogPosts as staticBlogPosts, findProduct, site } from "@/data/site";

type RouteParams = { slug: string };

async function getBlogPost(slug: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tpkele.com";
    const response = await fetch(`${baseUrl}/api/blog?slug=${slug}`, {
      next: { revalidate: 3600 }, // 缓存 1 小时
    });

    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.warn("Error fetching dynamic blog post:", error);
  }

  // 回退到静态数据
  return staticBlogPosts.find((p) => p.slug === slug);
}

async function getAllBlogSlugs() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tpkele.com";
    const response = await fetch(`${baseUrl}/api/blog`, {
      next: { revalidate: 3600 },
    });

    if (response.ok) {
      const posts = await response.json();
      return posts.map((p: any) => ({ slug: p.slug }));
    }
  } catch (error) {
    console.warn("Error fetching blog slugs:", error);
  }

  // 回退到静态数据
  return staticBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateStaticParams() {
  const params = await getAllBlogSlugs();
  return params;
}

export async function generateMetadata({ params }: { params: RouteParams }): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.seoTitle ?? post.title,
    description: post.seoDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.seoTitle ?? post.title,
      description: post.seoDescription,
      url: `${site.url}/blog/${post.slug}`,
      images: [{ url: `${site.url}${post.image}` }],
      publishedTime: post.date,
    },
  };
}

const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

function renderParagraph(text: string, key: number) {
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

export default async function BlogArticlePage({ params }: { params: RouteParams }) {
  const post = await getBlogPost(params.slug);
  if (!post) notFound();

  const related = (post.relatedProducts ?? [])
    .map((slug) => findProduct(slug))
    .filter((p): p is NonNullable<ReturnType<typeof findProduct>> => Boolean(p));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription,
    image: `${site.url}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/blog/${post.slug}` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${site.url}/blog/${post.slug}` },
    ],
  };

  const faqSchema = post.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  const formattedDate = new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(post.date));

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      ) : null}

      <article className="section blog-article">
        <header className="blog-article-head">
          <nav className="blog-article-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog">Blog</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{post.title}</span>
          </nav>
          <time dateTime={post.date}>{formattedDate}</time>
          <h1>{post.title}</h1>
          <p className="blog-article-lede">{post.excerpt}</p>
        </header>

        <Image
          className="blog-article-hero"
          src={post.image}
          alt={post.title}
          width={1200}
          height={540}
          priority
        />

        <div className="blog-article-body">
          {post.body.map((section, idx) => (
            <section key={idx}>
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((para, i) => renderParagraph(para, i))}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          {post.faq ? (
            <section>
              <h2>Frequently Asked Questions</h2>
              <dl className="blog-article-faq">
                {post.faq.map((item, i) => (
                  <Fragment key={i}>
                    <dt>{item.question}</dt>
                    <dd>{item.answer}</dd>
                  </Fragment>
                ))}
              </dl>
            </section>
          ) : null}

          {post.internalLinks && post.internalLinks.length > 0 ? (
            <section>
              <h2>Related Articles</h2>
              <ul className="blog-article-links">
                {post.internalLinks.map((link, i) => (
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

          {post.externalLinks && post.externalLinks.length > 0 ? (
            <section>
              <h2>References & Resources</h2>
              <ul className="blog-article-links">
                {post.externalLinks.map((link, i) => (
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
          <h2>Send your project list — we will reply within one business day.</h2>
          <InquiryModal
            triggerLabel="Request Quotation"
            triggerClassName="btn primary"
            intent={post.intent}
          />
        </div>
      </article>
    </main>
  );
}
