import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageTitle } from "@/components/PageTitle";
import { blogPosts as staticBlogPosts } from "@/data/site";
import { BLOG_CATEGORY_LABELS, BLOG_CATEGORY_DESCRIPTIONS, BLOG_CATEGORY_ORDER } from "@/lib/blog";

export const metadata: Metadata = {
  title: `${BLOG_CATEGORY_LABELS["selection-guides"]} — TPKELE Blog`,
  description: BLOG_CATEGORY_DESCRIPTIONS["selection-guides"],
  alternates: { canonical: "/blog/selection-guides" },
};

async function getBlogPosts() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tpkele.com";
    const response = await fetch(`${baseUrl}/api/blog`, {
      next: { revalidate: 30 },
    });
    if (!response.ok) return staticBlogPosts;
    const posts = await response.json();
    return Array.isArray(posts) ? posts : staticBlogPosts;
  } catch {
    return staticBlogPosts;
  }
}

export default async function SelectionGuidesPage() {
  const allPosts = await getBlogPosts();
  const filtered = (allPosts as any[]).filter((p) => p.articleType === "buying");

  const counts: Record<string, number> = { all: allPosts.length };
  for (const p of allPosts as any[]) {
    if (p.articleType) counts[p.articleType] = (counts[p.articleType] || 0) + 1;
  }

  return (
    <main>
      <PageTitle title="Selection Guides" crumb="Blog · Selection Guides" />
      <section className="section">
        <p style={{ color: "var(--muted)", marginBottom: 18, maxWidth: 760 }}>
          {BLOG_CATEGORY_DESCRIPTIONS["selection-guides"]}
        </p>

        <nav aria-label="Blog categories" className="category-strip" style={{ marginBottom: 24 }}>
          <Link href="/blog" className="category-chip">
            All <span style={{ opacity: 0.6, marginLeft: 4 }}>({counts.all || 0})</span>
          </Link>
          {BLOG_CATEGORY_ORDER.map((slug) => (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className={slug === "selection-guides" ? "category-chip active" : "category-chip"}
            >
              {BLOG_CATEGORY_LABELS[slug]}
              {counts[slug === "product-knowledge" ? "product" : slug === "selection-guides" ? "buying" : slug === "application-scenarios" ? "application" : slug === "comparisons" ? "comparison" : "faq"] ? (
                <span style={{ opacity: 0.6, marginLeft: 4 }}>
                  ({counts[slug === "product-knowledge" ? "product" : slug === "selection-guides" ? "buying" : slug === "application-scenarios" ? "application" : slug === "comparisons" ? "comparison" : "faq"]})
                </span>
              ) : null}
            </Link>
          ))}
        </nav>

        {filtered.length === 0 ? (
          <div style={{ padding: "60px 20px", textAlign: "center", color: "var(--muted)", border: "1px dashed var(--line)", borderRadius: 8 }}>
            <p style={{ fontSize: 16, marginBottom: 8 }}>No articles in this category yet.</p>
            <p style={{ fontSize: 13 }}>
              <Link href="/blog" className="text-link">← Browse all articles</Link>
            </p>
          </div>
        ) : (
          <div className="blog-grid">
            {filtered.map((post: any) => (
              <article className="blog-card" key={post.slug}>
                <Link href={`/blog/${post.slug}`} aria-label={post.title}>
                  <Image src={post.image} alt={post.title} width={470} height={210} />
                </Link>
                <div>
                  <time dateTime={post.date}>
                    {new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(post.date))}
                  </time>
                  <span style={{ display: "inline-block", marginLeft: 8, padding: "2px 8px", fontSize: 11, fontWeight: 600, color: "var(--green)", background: "var(--green-soft, #f1faf3)", borderRadius: 10, verticalAlign: "middle" }}>
                    Selection Guides
                  </span>
                  <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                  <p>{post.excerpt}</p>
                  <Link className="text-link" href={`/blog/${post.slug}`}>Read article →</Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
