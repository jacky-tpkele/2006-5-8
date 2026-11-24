import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import { Link } from "@/i18n/navigation";
import { PageTitle } from "@/components/PageTitle";
import { BlogPagination } from "@/components/BlogPagination";
import { BlogCard, BlogFeatured } from "@/components/BlogCard";
import {
  BLOG_CATEGORY_ORDER,
  BLOG_PRODUCT_LINES,
  countBlogPostsByCategory,
  countBlogPostsByProductLine,
  filterBlogPostsByProductLine,
  getBlogCategoryDescription,
  getBlogCategoryLabel,
  getPublishedBlogPostsWithFallback,
  paginatePosts,
  type BlogPost,
} from "@/lib/blog";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string; line?: string }>;
};

const FEATURED_COUNT = 3;

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

export default async function BlogPage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const { page: pageParam, line: lineParam } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam || "1", 10) || 1);

  const t = await getTranslations({ locale, namespace: "blog" });
  const tr = (key: string) => t(key);
  const allPosts = await getPublishedBlogPostsWithFallback();
  const counts = countBlogPostsByCategory(allPosts);
  const lineCounts = countBlogPostsByProductLine(allPosts);

  const activeLine = BLOG_PRODUCT_LINES.find((l) => l.key === lineParam);
  const isFiltered = Boolean(activeLine);

  // 无筛选时：前 3 篇做主推，其余进入「最新文章」分页列表
  const featured = isFiltered ? [] : allPosts.slice(0, FEATURED_COUNT);
  const listSource = isFiltered ? filterBlogPostsByProductLine(allPosts, activeLine!.key) : allPosts.slice(FEATURED_COUNT);
  const { posts: listPosts, totalPages } = paginatePosts(listSource, currentPage);

  return (
    <main>
      <PageTitle title={t("pageTitle")} crumb={t("pageTitle")} locale={locale} />
      <section className="section">
        {!isFiltered && currentPage === 1 ? (
          <>
            <div className="bh-section-head">
              <h2>{t("featuredHeading")}</h2>
              <p>{t("featuredSub")}</p>
            </div>
            <BlogFeatured posts={featured} locale={locale} t={tr} />

            <div className="bh-section-head">
              <h2>{t("topicsHeading")}</h2>
              <p>{t("topicsSub")}</p>
            </div>
            <div className="bh-cats">
              {BLOG_CATEGORY_ORDER.map((slug, index) => (
                <Link key={slug} href={`/blog/${slug}`} className="bh-cat">
                  <span className="bh-cat-index">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{getBlogCategoryLabel(slug, tr)}</h3>
                  <p>{getBlogCategoryDescription(slug, tr)}</p>
                  <span className="bh-cat-count">
                    {t("articlesCount", { count: counts[slug] || 0 })} →
                  </span>
                </Link>
              ))}
            </div>
          </>
        ) : null}

        <div className="bh-section-head">
          <h2>{t("linesHeading")}</h2>
          <p>{t("linesSub")}</p>
        </div>
        <nav aria-label={t("linesHeading")} className="bh-lines">
          <Link href="/blog" className={isFiltered ? "category-chip" : "category-chip active"}>
            {t("allFilter")} <span style={{ opacity: 0.6, marginLeft: 4 }}>({counts.all || 0})</span>
          </Link>
          {BLOG_PRODUCT_LINES.filter((l) => lineCounts[l.key]).map((l) => (
            <Link
              key={l.key}
              href={`/blog?line=${l.key}`}
              className={activeLine?.key === l.key ? "category-chip active" : "category-chip"}
            >
              {l.label} <span style={{ opacity: 0.6, marginLeft: 4 }}>({lineCounts[l.key]})</span>
            </Link>
          ))}
        </nav>

        <div className="bh-section-head">
          <h2>{isFiltered ? t("filteredBy", { line: activeLine!.label }) : t("latestHeading")}</h2>
          {isFiltered ? (
            <Link className="text-link" href="/blog">
              {t("clearFilter")}
            </Link>
          ) : null}
        </div>
        {listPosts.length === 0 ? (
          <div className="bh-empty">
            <p>{t("emptyCategory")}</p>
          </div>
        ) : (
          <div className="blog-grid">
            {listPosts.map((post: BlogPost) => (
              <BlogCard key={post.slug} post={post} locale={locale} t={tr} />
            ))}
          </div>
        )}
      </section>

      <BlogPagination currentPage={currentPage} totalPages={totalPages} basePath="/blog" />
    </main>
  );
}
