import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageTitle } from "@/components/PageTitle";
import { blogPosts as staticBlogPosts } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog — Solar DC & Low Voltage Protection Knowledge Base | TPKELE",
  description:
    "Practical guides on choosing MCBs, SPDs, ATS, PV combiner boxes and energy meters for solar and low voltage projects. Selection rules, application tips and project recaps.",
  alternates: { canonical: "/blog" },
};

const CATEGORY_LABELS: Record<string, string> = {
  product: "Product Knowledge",
  buying: "Selection Guides",
  comparison: "Comparisons",
  application: "Applications",
  faq: "FAQs",
};

const CATEGORY_ORDER = ["product", "buying", "comparison", "application", "faq"];

async function getBlogPosts() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tpkele.com";
    const response = await fetch(`${baseUrl}/api/blog`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.warn("Failed to fetch dynamic blog posts, falling back to static");
      return staticBlogPosts;
    }

    const posts = await response.json();
    return Array.isArray(posts) ? posts : staticBlogPosts;
  } catch (error) {
    console.warn("Error fetching blog posts:", error);
    return staticBlogPosts;
  }
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  // 统计每个分类的文章数（动态生成 chip 上的数字）
  const counts: Record<string, number> = { all: blogPosts.length };
  for (const p of blogPosts) {
    const t = (p as any).articleType;
    if (t) counts[t] = (counts[t] || 0) + 1;
  }

  return (
    <main>
      <PageTitle title="Blog" crumb="Blog" />
      <section className="section">
        <nav
          aria-label="Blog categories"
          className="category-strip"
          style={{ marginBottom: 24 }}
        >
          <Link href="/blog" className="category-chip active">
            All <span style={{ opacity: 0.6, marginLeft: 4 }}>({counts.all || 0})</span>
          </Link>
          {CATEGORY_ORDER.map((cat) => (
            <Link
              key={cat}
              href={`/blog/category/${cat}`}
              className="category-chip"
            >
              {CATEGORY_LABELS[cat]}
              {counts[cat] ? (
                <span style={{ opacity: 0.6, marginLeft: 4 }}>({counts[cat]})</span>
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="blog-grid">
          {blogPosts.map((post: any) => (
            <article className="blog-card" key={post.slug}>
              <Link href={`/blog/${post.slug}`} aria-label={post.title}>
                <Image src={post.image} alt={post.title} width={470} height={210} />
              </Link>
              <div>
                <time dateTime={post.date}>
                  {new Intl.DateTimeFormat("en", {
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
                    {CATEGORY_LABELS[post.articleType] || post.articleType}
                  </span>
                ) : null}
                <h2>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.excerpt}</p>
                <Link className="text-link" href={`/blog/${post.slug}`}>
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
