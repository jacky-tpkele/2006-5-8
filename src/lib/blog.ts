import { blogPosts as staticBlogPosts, type BlogPost as StaticBlogPost } from "@/data/site";

export const BLOG_REVALIDATE_SECONDS = 30;
export const DEFAULT_BLOG_IMAGE = "/assets/blog/default.webp";

export const BLOG_CATEGORY_LABELS: Record<string, string> = {
  product: "Product Knowledge",
  buying: "Selection Guides",
  comparison: "Comparisons",
  application: "Applications",
  faq: "FAQs",
};

export const BLOG_CATEGORY_DESCRIPTIONS: Record<string, string> = {
  product:
    "In-depth product knowledge and technical fundamentals for MCBs, SPDs, ATS, combiner boxes and more.",
  buying:
    "Practical buying and selection guides - choose the right protection device for your project parameters.",
  comparison:
    "Side-by-side comparisons (MCB vs MCCB, AC vs DC SPD, etc.) to make informed sourcing decisions.",
  application:
    "Real-world application notes for solar, low-voltage distribution, and industrial installations.",
  faq:
    "Quick answers to frequently asked questions about specifications, certifications, and installation.",
};

export const BLOG_CATEGORY_ORDER = ["product", "buying", "comparison", "application", "faq"];
export const VALID_BLOG_CATEGORIES = Object.keys(BLOG_CATEGORY_LABELS);

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets: string[];
};

export type BlogLink = {
  title: string;
  url: string;
  reason?: string;
};

export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  mainKeyword?: string;
  subKeywords: string[];
  articleType: string | null;
  date: string;
  image: string;
  coverImageAlt: string;
  excerpt: string;
  wordCount: number;
  readingTime: number;
  intent: string;
  body: BlogSection[];
  relatedProducts: string[];
  faq: BlogFaqItem[];
  internalLinks: BlogLink[];
  externalLinks: BlogLink[];
  status?: string;
};

type SupabaseFetchOptions = RequestInit & {
  next?: { revalidate?: number };
};

function getString(value: unknown, fallback = "") {
  return typeof value === "string" && value.trim() ? value : fallback;
}

function getNumber(value: unknown, fallback = 0) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function getArray<T>(value: unknown): T[] {
  if (Array.isArray(value)) return value as T[];
  if (typeof value === "string" && value.trim()) {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? (parsed as T[]) : [];
    } catch {
      return [];
    }
  }
  return [];
}

function getDatePart(...values: unknown[]) {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) {
      return value.split("T")[0];
    }
  }
  return new Date().toISOString().split("T")[0];
}

function stripMarkdown(text: string) {
  return text
    .replace(/^#+\s+/gm, "")
    .replace(/^[-*]\s+/gm, "")
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function createExcerpt(content: string, fallback: string, maxLength = 180) {
  const firstTextLine =
    content
      .split("\n")
      .map((line) => line.trim())
      .find((line) => line && !line.startsWith("#") && !line.startsWith("![")) || fallback;

  const clean = stripMarkdown(firstTextLine || fallback);
  return clean.length > maxLength ? `${clean.slice(0, maxLength - 1).trim()}...` : clean;
}

function normalizeLinks(value: unknown): BlogLink[] {
  return getArray<BlogLink>(value).filter((link) => link?.title && link?.url);
}

function normalizeFaq(value: unknown): BlogFaqItem[] {
  return getArray<BlogFaqItem>(value).filter((item) => item?.question && item?.answer);
}

export function parseMarkdownToSections(markdown: string): BlogSection[] {
  const sections: BlogSection[] = [];
  let current: BlogSection | null = null;

  function ensureSection() {
    if (!current) {
      current = { heading: "Overview", paragraphs: [], bullets: [] };
    }
    return current;
  }

  for (const rawLine of markdown.split("\n")) {
    const line = rawLine.trim();
    if (!line) continue;

    if (line.startsWith("## ")) {
      if (current) sections.push(current);
      current = { heading: line.replace(/^##\s+/, "").trim(), paragraphs: [], bullets: [] };
      continue;
    }

    if (line.startsWith("#")) continue;

    if (/^[-*]\s+/.test(line)) {
      ensureSection().bullets.push(line.replace(/^[-*]\s+/, "").trim());
      continue;
    }

    ensureSection().paragraphs.push(line);
  }

  if (current) sections.push(current);
  return sections;
}

export function normalizeBlogPost(row: Record<string, unknown>): BlogPost {
  const title = getString(row.title, "Untitled");
  const content = getString(row.content);
  const seoTitle = getString(row.meta_title, title);
  const seoDescription = getString(row.meta_description, createExcerpt(content, title, 160));
  const image = getString(row.cover_image_url, getString(row.image_url, DEFAULT_BLOG_IMAGE));

  return {
    slug: getString(row.slug, getString(row.slug_url, getString(row.id, title.toLowerCase().replace(/\s+/g, "-")))),
    title,
    seoTitle,
    seoDescription,
    mainKeyword: getString(row.main_keyword) || undefined,
    subKeywords: getArray<string>(row.sub_keywords),
    articleType: getString(row.article_type) || null,
    date: getDatePart(row.published_at, row.updated_at, row.created_at),
    image,
    coverImageAlt: getString(row.cover_image_alt, title),
    excerpt: createExcerpt(content, seoDescription),
    wordCount: getNumber(row.word_count),
    readingTime: getNumber(row.reading_time),
    intent: getString(row.intent, "General information"),
    body: parseMarkdownToSections(content),
    relatedProducts: getArray<string>(row.related_products),
    faq: normalizeFaq(row.faq),
    internalLinks: normalizeLinks(row.internal_links),
    externalLinks: normalizeLinks(row.external_links),
    status: getString(row.status) || undefined,
  };
}

function normalizeStaticBlogPost(post: StaticBlogPost): BlogPost {
  return {
    slug: post.slug,
    title: post.title,
    seoTitle: post.seoTitle || post.title,
    seoDescription: post.seoDescription,
    subKeywords: [],
    articleType: null,
    date: post.date,
    image: post.image,
    coverImageAlt: post.title,
    excerpt: post.excerpt,
    wordCount: 0,
    readingTime: 0,
    intent: post.intent,
    body: post.body.map((section) => ({
      heading: section.heading,
      paragraphs: section.paragraphs || [],
      bullets: section.bullets || [],
    })),
    relatedProducts: post.relatedProducts || [],
    faq: post.faq || [],
    internalLinks: [],
    externalLinks: [],
  };
}

export function fallbackBlogPosts(): BlogPost[] {
  return staticBlogPosts.map(normalizeStaticBlogPost);
}

export function fallbackBlogPost(slug: string): BlogPost | undefined {
  return fallbackBlogPosts().find((post) => post.slug === slug);
}

export async function fetchSupabaseBlogRows(
  path: string,
  key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  opts: SupabaseFetchOptions = {}
) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!supabaseUrl || !key) {
    throw new Error("Supabase blog configuration is missing");
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
    ...opts,
    headers: {
      "Content-Type": "application/json",
      apikey: key,
      Authorization: `Bearer ${key}`,
      ...(opts.headers || {}),
    },
  });

  const text = await response.text();
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    data = text;
  }

  if (!response.ok) {
    const message =
      data && typeof data === "object" && "message" in data
        ? String((data as { message?: unknown }).message)
        : response.statusText;
    throw new Error(`Supabase blog error: ${message}`);
  }

  return data as Array<Record<string, unknown>>;
}

export async function fetchPublishedBlogPosts() {
  const rows = await fetchSupabaseBlogRows(
    "blog_posts?status=eq.published&order=published_at.desc&select=*",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    { next: { revalidate: BLOG_REVALIDATE_SECONDS } }
  );
  return rows.map(normalizeBlogPost);
}

export async function fetchPublishedBlogPost(slug: string) {
  const rows = await fetchSupabaseBlogRows(
    `blog_posts?slug=eq.${encodeURIComponent(slug)}&status=eq.published&select=*`,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    { next: { revalidate: BLOG_REVALIDATE_SECONDS } }
  );
  return rows[0] ? normalizeBlogPost(rows[0]) : undefined;
}

export async function getPublishedBlogPostsWithFallback() {
  try {
    return await fetchPublishedBlogPosts();
  } catch (error) {
    console.warn("Falling back to static blog posts:", error);
    return fallbackBlogPosts();
  }
}

export async function getPublishedBlogPostWithFallback(slug: string) {
  try {
    return (await fetchPublishedBlogPost(slug)) || fallbackBlogPost(slug);
  } catch (error) {
    console.warn("Falling back to static blog post:", error);
    return fallbackBlogPost(slug);
  }
}

export async function getAllBlogSlugsWithFallback() {
  const posts = await getPublishedBlogPostsWithFallback();
  return posts.map((post) => ({ slug: post.slug }));
}

export function isRemoteImageUrl(url: string) {
  return /^https?:\/\//i.test(url);
}

export function getAbsoluteUrl(url: string, siteUrl: string) {
  if (isRemoteImageUrl(url)) return url;
  return `${siteUrl}${url.startsWith("/") ? url : `/${url}`}`;
}
