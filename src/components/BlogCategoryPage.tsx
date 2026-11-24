import { Link } from "@/i18n/navigation";
import { PageTitle } from "@/components/PageTitle";
import { BlogPagination } from "@/components/BlogPagination";
import { BlogCard, BlogFeatured } from "@/components/BlogCard";
import { getTranslations } from "next-intl/server";
import {
  BLOG_CATEGORY_ORDER,
  countBlogPostsByCategory,
  filterBlogPostsByCategory,
  getPublishedBlogPostsWithFallback,
  getBlogCategoryLabel,
  getBlogCategoryDescription,
  paginatePosts,
  type BlogCategorySlug,
  type BlogPost,
} from "@/lib/blog";

type BlogCategoryPageProps = {
  category: BlogCategorySlug;
  crumb: string;
  title: string;
  locale: string;
  currentPage: number;
};

export async function BlogCategoryPage({ category, crumb, title, locale, currentPage }: BlogCategoryPageProps) {
  const allPosts = await getPublishedBlogPostsWithFallback();
  const filtered = filterBlogPostsByCategory(allPosts, category);
  const counts = countBlogPostsByCategory(allPosts);
  const t = await getTranslations({ locale, namespace: "blog" });
  const tr = (key: string) => t(key);

  // 第 1 页：前 3 篇做精选，其余分页；后续页只显示分页列表
  const showFeatured = currentPage === 1 && filtered.length > 3;
  const featured = showFeatured ? filtered.slice(0, 3) : [];
  const rest = showFeatured ? filtered.slice(3) : filtered;
  const { posts: paginatedPosts, totalPages } = paginatePosts(rest, currentPage);

  return (
    <main>
      <PageTitle
        title={title}
        crumb={title}
        locale={locale}
        parents={[{ label: t("breadcrumbBlog"), href: "/blog" }]}
      />
      <section className="section">
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
              {getBlogCategoryLabel(slug, tr)}
              {counts[slug] ? <span style={{ opacity: 0.6, marginLeft: 4 }}>({counts[slug]})</span> : null}
            </Link>
          ))}
        </nav>

        <div className="bh-intro">
          <div>
            <h2>{title}</h2>
            <p>{getBlogCategoryDescription(category, tr)}</p>
          </div>
          <div className="bh-intro-count">
            {filtered.length}
            <small>{t("articlesCount", { count: filtered.length })}</small>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="bh-empty">
            <p style={{ fontSize: 16, marginBottom: 8 }}>{t("emptyCategory")}</p>
            <p style={{ fontSize: 13 }}>
              <Link href="/blog" className="text-link">
                {t("browseAll")}
              </Link>
            </p>
          </div>
        ) : (
          <>
            {showFeatured ? (
              <>
                <BlogFeatured posts={featured} locale={locale} t={tr} />
                <div className="bh-section-head">
                  <h2>{t("latestHeading")}</h2>
                </div>
              </>
            ) : null}
            <div className="blog-grid">
              {paginatedPosts.map((post: BlogPost) => (
                <BlogCard key={post.slug} post={post} locale={locale} t={tr} />
              ))}
            </div>
          </>
        )}
      </section>

      {filtered.length > 0 && (
        <BlogPagination currentPage={currentPage} totalPages={totalPages} basePath={`/blog/${category}`} />
      )}
    </main>
  );
}
