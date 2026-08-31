import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { PageTitle } from "@/components/PageTitle";
import {
  BLOG_CATEGORY_LABELS,
  BLOG_CATEGORY_ORDER,
  countBlogPostsByCategory,
  getBlogCategoryLabel,
  getPublishedBlogPostsWithFallback,
  type BlogPost,
} from "@/lib/blog";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  return {
    title: t("seoTitle"),
    description: t("seoDescription"),
    alternates: {
      canonical: localizedPath("/blog", locale),
      languages: alternateLanguages("/blog"),
    },
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const blogPosts = await getPublishedBlogPostsWithFallback();
  const counts = countBlogPostsByCategory(blogPosts);

  return (
    <main>
      <PageTitle title={t("pageTitle")} crumb={t("pageTitle")} />
      <section className="section">
        <nav aria-label="Blog categories" className="category-strip" style={{ marginBottom: 24 }}>
          <Link href="/blog" className="category-chip active">
            {t("allFilter")} <span style={{ opacity: 0.6, marginLeft: 4 }}>({counts.all || 0})</span>
          </Link>
          {BLOG_CATEGORY_ORDER.map((slug) => (
            <Link key={slug} href={`/blog/${slug}`} className="category-chip">
              {BLOG_CATEGORY_LABELS[slug]}
              {counts[slug] ? (
                <span style={{ opacity: 0.6, marginLeft: 4 }}>({counts[slug]})</span>
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="blog-grid">
          {blogPosts.map((post: BlogPost) => (
            <article className="blog-card" key={post.slug}>
              <Link href={`/blog/${post.slug}`} aria-label={post.title}>
                <Image src={post.image} alt={post.title} width={470} height={210} />
              </Link>
              <div>
                <time dateTime={post.date}>
                  {new Intl.DateTimeFormat(locale, {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(post.date))}
                </time>
                {post.articleType ? (
                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: 8,
                      padding: "2px 8px",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "var(--green)",
                      background: "var(--green-soft, #f1faf3)",
                      borderRadius: 10,
                      verticalAlign: "middle",
                    }}
                  >
                    {getBlogCategoryLabel(post.articleType, (k) => t(k)) || post.articleType}
                  </span>
                ) : null}
                <h2>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.excerpt}</p>
                <Link className="text-link" href={`/blog/${post.slug}`}>
                  {t("readArticle")}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
