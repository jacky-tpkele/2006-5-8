import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { PageTitle } from "@/components/PageTitle";
import { getTranslations } from "next-intl/server";
import {
  BLOG_CATEGORY_ORDER,
  countBlogPostsByCategory,
  filterBlogPostsByCategory,
  getPublishedBlogPostsWithFallback,
  getBlogCategoryLabel,
  getBlogCategoryDescription,
  type BlogCategorySlug,
  type BlogPost,
} from "@/lib/blog";

type BlogCategoryPageProps = {
  category: BlogCategorySlug;
  crumb: string;
  title: string;
  locale: string;
};

export async function BlogCategoryPage({ category, crumb, title, locale }: BlogCategoryPageProps) {
  const allPosts = await getPublishedBlogPostsWithFallback();
  const filtered = filterBlogPostsByCategory(allPosts, category);
  const counts = countBlogPostsByCategory(allPosts);
  const t = await getTranslations({ locale, namespace: "blog" });

  return (
    <main>
      <PageTitle title={title} crumb={crumb} />
      <section className="section">
        <p style={{ color: "var(--muted)", marginBottom: 18, maxWidth: 760 }}>
          {getBlogCategoryDescription(category, (k) => t(k))}
        </p>

        <nav aria-label="Blog categories" className="category-strip" style={{ marginBottom: 24 }}>
          <Link href="/blog" className="category-chip">
            {t("allFilter")} <span style={{ opacity: 0.6, marginLeft: 4 }}>({counts.all || 0})</span>
          </Link>
          {BLOG_CATEGORY_ORDER.map((slug) => (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className={slug === category ? "category-chip active" : "category-chip"}
            >
              {getBlogCategoryLabel(slug, (k) => t(k))}
              {counts[slug] ? <span style={{ opacity: 0.6, marginLeft: 4 }}>({counts[slug]})</span> : null}
            </Link>
          ))}
        </nav>

        {filtered.length === 0 ? (
          <div
            style={{
              padding: "60px 20px",
              textAlign: "center",
              color: "var(--muted)",
              border: "1px dashed var(--line)",
              borderRadius: 8,
            }}
          >
            <p style={{ fontSize: 16, marginBottom: 8 }}>No articles in this category yet.</p>
            <p style={{ fontSize: 13 }}>
              <Link href="/blog" className="text-link">
                ← Browse all articles
              </Link>
            </p>
          </div>
        ) : (
          <div className="blog-grid">
            {filtered.map((post: BlogPost) => (
              <article className="blog-card" key={post.slug}>
                <Link href={`/blog/${post.slug}`} aria-label={post.title}>
                  <Image src={post.image} alt={post.title} width={470} height={210} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 470px" />
                </Link>
                <div>
                  <time dateTime={post.date}>
                    {new Intl.DateTimeFormat(locale, {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }).format(new Date(post.date))}
                  </time>
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
                    {getBlogCategoryLabel(post.articleType, (k) => t(k))}
                  </span>
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
        )}
      </section>
    </main>
  );
}
