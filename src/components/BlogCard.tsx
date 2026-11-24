import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getBlogCategoryLabel, type BlogPost } from "@/lib/blog";
import "./blog-hub.css";

type Translate = (key: string) => string;

export function formatBlogDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale, { month: "long", day: "numeric", year: "numeric" }).format(new Date(date));
}

/** 列表卡片：统一给列表页、分类页使用。沿用 .blog-card 样式，分类标签改用品牌色。 */
export function BlogCard({
  post,
  locale,
  t,
}: {
  post: BlogPost;
  locale: string;
  t: Translate;
}) {
  const label = getBlogCategoryLabel(post.articleType, t);
  return (
    <article className="blog-card bh-card">
      <Link href={`/blog/${post.slug}`} aria-label={post.title}>
        <Image
          src={post.image}
          alt={post.coverImageAlt || post.title}
          width={470}
          height={210}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 470px"
        />
      </Link>
      <div>
        <div className="bh-meta" style={{ padding: 0 }}>
          <time dateTime={post.date}>{formatBlogDate(post.date, locale)}</time>
          {label ? <span className="bh-tag">{label}</span> : null}
        </div>
        <h2>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p>{post.excerpt}</p>
        <Link className="text-link" href={`/blog/${post.slug}`}>
          {t("readArticle")}
        </Link>
      </div>
    </article>
  );
}

/** 主推区：1 大 + 2 小。 */
export function BlogFeatured({ posts, locale, t }: { posts: BlogPost[]; locale: string; t: Translate }) {
  const [main, ...side] = posts;
  if (!main) return null;
  const cover = (post: BlogPost) => (
    <div className="bh-cover">
      <Image src={post.image} alt={post.coverImageAlt || post.title} fill sizes="(max-width: 900px) 100vw, 720px" />
    </div>
  );
  const meta = (post: BlogPost) => {
    const label = getBlogCategoryLabel(post.articleType, t);
    return (
      <div className="bh-meta">
        <time dateTime={post.date}>{formatBlogDate(post.date, locale)}</time>
        {label ? <span className="bh-tag">{label}</span> : null}
      </div>
    );
  };

  return (
    <div className="bh-featured">
      <Link className="bh-featured-main" href={`/blog/${main.slug}`}>
        {cover(main)}
        <div className="bh-body">
          {meta(main)}
          <h3>{main.title}</h3>
          <p>{main.excerpt}</p>
        </div>
      </Link>
      <div className="bh-featured-side">
        {side.slice(0, 2).map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            {cover(post)}
            <div className="bh-body">
              {meta(post)}
              <h3>{post.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
