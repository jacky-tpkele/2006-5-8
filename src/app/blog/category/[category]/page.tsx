import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageTitle } from "@/components/PageTitle";
import { blogPosts as staticBlogPosts } from "@/data/site";

type RouteParams = { category: string };

const CATEGORY_LABELS: Record<string, string> = {
  product: "Product Knowledge",
  buying: "Selection Guides",
  comparison: "Comparisons",
  application: "Applications",
  faq: "FAQs",
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  product:
    "In-depth product knowledge and technical fundamentals for MCBs, SPDs, ATS, combiner boxes and more.",
  buying:
    "Practical buying and selection guides — choose the right protection device for your project parameters.",
  comparison:
    "Side-by-side comparisons (MCB vs MCCB, AC vs DC SPD, etc.) to make informed sourcing decisions.",
  application:
    "Real-world application notes for solar, low-voltage distribution, and industrial installations.",
  faq:
    "Quick answers to frequently asked questions about specifications, certifications, and installation.",
};

const VALID_CATEGORIES = Object.keys(CATEGORY_LABELS);
const CATEGORY_ORDER = ["product", "buying", "comparison", "application", "faq"];

export async function generateStaticParams() {
  return VALID_CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { category } = await params;
  if (!VALID_CATEGORIES.includes(category)) return { title: "Not found" };
  const label = CATEGORY_LABELS[category];
  return {
    title: `${label} — TPKELE Blog`,
    description: CATEGORY_DESCRIPTIONS[category],
    alternates: { canonical: `/blog/category/${category}` },
  };
}

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

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { category } = await params;
  if (!VALID_CATEGORIES.includes(category)) notFound();

  const allPosts = await getBlogPosts();
  const filtered = (allPosts as any[]).filter((p) => p.articleType === category);

  // 统计 chip
  const counts: Record<string, number> = { all: allPosts.length };
  for (const p of allPosts as any[]) {
    if (p.articleType) counts[p.articleType] = (counts[p.articleType] || 0) + 1;
  }

  const label = CATEGORY_LABELS[category];

  return (
    <main>
      <PageTitle title={label} crumb={`Blog · ${label}`} />
      <section className="section">
        <p style={{ color: "var(--muted)", marginBottom: 18, maxWidth: 760 }}>
          {CATEGORY_DESCRIPTIONS[category]}
        </p>

        <nav
          aria-label="Blog categories"
          className="category-strip"
          style={{ marginBottom: 24 }}
        >
          <Link href="/blog" className="category-chip">
            All <span style={{ opacity: 0.6, marginLeft: 4 }}>({counts.all || 0})</span>
          </Link>
          {CATEGORY_ORDER.map((cat) => (
            <Link
              key={cat}
              href={`/blog/category/${cat}`}
              className={cat === category ? "category-chip active" : "category-chip"}
            >
              {CATEGORY_LABELS[cat]}
              {counts[cat] ? (
                <span style={{ opacity: 0.6, marginLeft: 4 }}>({counts[cat]})</span>
              ) : null}
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
            {filtered.map((post: any) => (
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
                    {label}
                  </span>
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
        )}
      </section>
    </main>
  );
}
