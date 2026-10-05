import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { getTranslations } from "next-intl/server";
import { InquiryModal } from "@/components/InquiryModal";
import { findProduct, site } from "@/data/site";
import { localizedPath, alternateLanguages } from "@/lib/locale-path";
import {
  getAbsoluteUrl,
  getAllBlogSlugsWithFallback,
  getBlogCategoryHref,
  getBlogCategoryLabel,
  getPublishedBlogPostWithFallback,
} from "@/lib/blog";
import { renderMarkdownBlockHtml } from "@/lib/markdown";
import RichBlogArticle from "../components/RichBlogArticle";
import { getRichBlogArticle, getRichBlogSlugs } from "@/data/blog/rcbo-au-nz-guide";

type RouteParams = { slug: string; locale: string };

export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getAllBlogSlugsWithFallback();
  // 采购导航式文章不在 Supabase / 静态列表中，单独并入，保证能被静态预渲染
  const richSlugs = getRichBlogSlugs().map((slug) => ({ slug }));
  const seen = new Set(posts.map((post) => post.slug));
  return [...posts, ...richSlugs.filter((item) => !seen.has(item.slug))];
}

export async function generateMetadata({ params }: { params: Promise<RouteParams> }): Promise<Metadata> {
  const { slug, locale } = await params;

  // 采购导航式文章：使用集成包指定的 title / description / canonical
  const rich = getRichBlogArticle(slug);
  if (rich) {
    const route = `/blog/${rich.slug}`;
    return {
      // absolute 绕开布局的 "%s | TPKELE" 模板：集成包已指定完整标题，
      // 否则会渲染成 "... | TPKELE | TPKELE"
      title: { absolute: rich.seoTitle },
      description: rich.seoDescription,
      alternates: {
        canonical: localizedPath(route, locale),
        languages: alternateLanguages(route),
      },
      openGraph: {
        type: "article",
        title: rich.seoTitle,
        description: rich.seoDescription,
        url: `${site.url}${localizedPath(route, locale)}`,
        images: [{ url: getAbsoluteUrl(rich.heroImage, site.url) }],
        publishedTime: rich.date,
      },
    };
  }

  const post = await getPublishedBlogPostWithFallback(slug);
  if (!post) return { title: "Article not found" };

  const route = `/blog/${post.slug}`;

  return {
    title: post.seoTitle ?? post.title,
    description: post.seoDescription,
    alternates: {
      canonical: localizedPath(route, locale),
      languages: alternateLanguages(route),
    },
    openGraph: {
      type: "article",
      title: post.seoTitle ?? post.title,
      description: post.seoDescription,
      url: `${site.url}${localizedPath(route, locale)}`,
      images: [{ url: getAbsoluteUrl(post.image, site.url) }],
      publishedTime: post.date,
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<RouteParams> }) {
  const { slug, locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  // 采购导航式文章：使用专属模版（sticky 采购导航 / On This Page / 资源联动）
  const rich = getRichBlogArticle(slug);
  if (rich) {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: rich.title,
      description: rich.seoDescription,
      image: rich.schemaImages,
      datePublished: rich.date,
      dateModified: rich.date,
      inLanguage: locale,
      about: rich.about,
      author: { "@type": "Organization", name: site.name, url: site.url },
      publisher: { "@type": "Organization", name: site.name, url: site.url },
      mainEntityOfPage: { "@type": "WebPage", "@id": rich.canonical },
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
        { "@type": "ListItem", position: 3, name: rich.title, item: rich.canonical },
      ],
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: rich.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <RichBlogArticle
          article={rich}
          locale={locale}
          labels={{
            home: t("breadcrumbHome"),
            blog: t("breadcrumbBlog"),
            onThisPage: t("onThisPage"),
            nextBuyerStep: t("nextBuyerStep"),
            faqHeading: t("faqHeading"),
            relatedHeading: t("relatedHeading"),
            ctaEyebrow: t("ctaEyebrow"),
            ctaTitle: t("ctaTitle"),
            readMore: t("readArticle"),
          }}
          categoryLabel="Selection Guides"
          categoryHref="/blog/selection-guides"
        />
      </>
    );
  }

  const post = await getPublishedBlogPostWithFallback(slug);
  if (!post) notFound();

  // 如果是工作台发布的富版式文章，用富版式渲染
  if (post.richContent) {
    return (
      <RichBlogArticle
        article={post.richContent}
        labels={{
          backToList: t("backToList"),
          relatedProducts: t("relatedProducts"),
          requestQuote: t("requestQuote"),
        }}
        locale={locale}
      />
    );
  }

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
            <Link href="/">{t("breadcrumbHome")}</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog">{t("breadcrumbBlog")}</Link>
            {post.articleType ? (
              <>
                <span aria-hidden="true">/</span>
                <Link href={getBlogCategoryHref(post.articleType)}>
                  {getBlogCategoryLabel(post.articleType, t) || post.articleType}
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
