import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getPublishedBlogPostsWithFallback, getBlogCategoryLabel, getBlogCategoryColor } from "@/lib/blog";

type LatestArticlesSectionProps = {
  locale: string;
  t: (key: string) => string;
};

export async function LatestArticlesSection({ locale, t }: LatestArticlesSectionProps) {
  const allPosts = await getPublishedBlogPostsWithFallback();
  const latestPosts = allPosts.slice(0, 3);

  if (latestPosts.length === 0) {
    return null;
  }

  return (
    <section className="section" style={{ background: "var(--wash)" }}>
      <div className="section-heading centered">
        <h2>Technical Insights & Buyer Guides</h2>
        <p style={{ maxWidth: 680, margin: "0 auto" }}>
          Expert knowledge on circuit protection and solar DC solutions — selection guides, product comparisons, and application notes
        </p>
      </div>

      <div className="blog-grid" style={{ marginTop: 32 }}>
        {latestPosts.map((post) => {
          const categoryColors = getBlogCategoryColor(post.articleType);

          return (
            <article className="blog-card" key={post.slug}>
              <Link href={`/blog/${post.slug}`} aria-label={post.title}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={470}
                  height={210}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 470px"
                />
              </Link>
              <div>
                <time dateTime={post.date}>
                  {new Intl.DateTimeFormat(locale, {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(post.date))}
                </time>
                {post.articleType && (
                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: 8,
                      padding: "3px 10px",
                      fontSize: 12,
                      fontWeight: 600,
                      color: categoryColors.color,
                      background: categoryColors.background,
                      borderRadius: 12,
                      verticalAlign: "middle",
                    }}
                  >
                    {getBlogCategoryLabel(post.articleType, () => "")}
                  </span>
                )}
                <h2>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.excerpt}</p>
                <Link className="text-link" href={`/blog/${post.slug}`}>
                  Read Article →
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <div style={{ textAlign: "center", marginTop: 40 }}>
        <Link href="/blog" className="button-secondary">
          Explore All Articles
        </Link>
      </div>
    </section>
  );
}
