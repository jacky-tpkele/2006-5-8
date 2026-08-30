import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { findProduct, site } from "@/data/site";
import {
  getAbsoluteUrl,
  getAllBlogSlugsWithFallback,
  getBlogCategoryHref,
  getBlogCategoryLabel,
  getPublishedBlogPostWithFallback,
} from "@/lib/blog";
import { renderMarkdownBlockHtml } from "@/lib/markdown";

type RouteParams = { slug: string };

export const dynamicParams = true;

export async function generateStaticParams() {
  return getAllBlogSlugsWithFallback();
}

export async function generateMetadata({ params }: { params: Promise<RouteParams> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedBlogPostWithFallback(slug);
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
      images: [{ url: getAbsoluteUrl(post.image, site.url) }],
      publishedTime: post.date,
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<RouteParams> }) {
  const { slug } = await params;
  const post = await getPublishedBlogPostWithFallback(slug);
  if (!post) notFound();

  const related = post.relatedProducts
    .map((productSlug: string) => findProduct(productSlug))
    .filter((product): product is NonNullable<ReturnType<typeof findProduct>> => Boolean(product));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription,
    image: getAbsoluteUrl(post.image, site.url),
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

  const faqSchema = post.faq.length
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
            {post.articleType ? (
              <>
                <span aria-hidden="true">/</span>
                <Link href={getBlogCategoryHref(post.articleType)}>
                  {getBlogCategoryLabel(post.articleType) || post.articleType}
                </Link>
              </>
            ) : null}
            <span aria-hidden="true">/</span>
            <span aria-current="page">{post.title}</span>
          </nav>
          <time dateTime={post.date}>{formattedDate}</time>
          <h1>{post.title}</h1>
          <p className="blog-article-lede">{post.excerpt}</p>
        </header>

        <Image className="blog-article-hero" src={post.image} alt={post.title} width={1200} height={540} priority />

        <div className="blog-article-body">
          {post.body.map((section, index) => (
            <section key={index}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <div
                  key={paragraphIndex}
                  dangerouslySetInnerHTML={{ __html: renderMarkdownBlockHtml(paragraph) }}
                />
              ))}
              {section.bullets.length ? (
                <ul>
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          {post.faq.length ? (
            <section>
              <h2>Frequently Asked Questions</h2>
              <dl className="blog-article-faq">
                {post.faq.map((item, index) => (
                  <Fragment key={index}>
                    <dt>{item.question}</dt>
                    <dd>{item.answer}</dd>
                  </Fragment>
                ))}
              </dl>
            </section>
          ) : null}

          {post.internalLinks.length > 0 ? (
            <section>
              <h2>Related Articles</h2>
              <ul className="blog-article-links">
                {post.internalLinks.map((link, index) => (
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

          {post.externalLinks.length > 0 ? (
            <section>
              <h2>References & Resources</h2>
              <ul className="blog-article-links">
                {post.externalLinks.map((link, index) => (
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
          <InquiryModal triggerLabel="Request Quotation" triggerClassName="btn primary" intent={post.intent} />
        </div>
      </article>
    </main>
  );
}
