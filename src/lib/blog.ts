import { blogPosts as staticBlogPosts, type BlogPost as StaticBlogPost } from "@/data/site";

export const BLOG_REVALIDATE_SECONDS = 30;
export const DEFAULT_BLOG_IMAGE = "/assets/blog/default.webp";

// 新的 slug 到标签的映射（英文回退，UI 请用 getBlogCategoryLabels）
export const BLOG_CATEGORY_LABELS: Record<string, string> = {
  "product-knowledge": "Product Knowledge",
  "selection-guides": "Selection Guides",
  "comparisons": "Comparisons",
  "application-scenarios": "Applications",
  "faqs": "FAQs",
};

// 旧 slug 到新 slug 的映射（用于数据库兼容）
export const OLD_TO_NEW_CATEGORY_MAP: Record<string, string> = {
  product: "product-knowledge",
  buying: "selection-guides",
  comparison: "comparisons",
  application: "application-scenarios",
  faq: "faqs",
};

export const BLOG_CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "product-knowledge":
    "In-depth product knowledge and technical fundamentals for MCBs, SPDs, ATS, combiner boxes and more.",
  "selection-guides":
    "Practical buying and selection guides - choose the right protection device for your project parameters.",
  "comparisons":
    "Side-by-side comparisons (MCB vs MCCB, AC vs DC SPD, etc.) to make informed sourcing decisions.",
  "application-scenarios":
    "Real-world application notes for solar, low-voltage distribution, and industrial installations.",
  "faqs":
    "Quick answers to frequently asked questions about specifications, certifications, and installation.",
}; // 英文回退，UI 请用 getBlogCategoryDescription

export const BLOG_CATEGORY_ORDER = ["product-knowledge", "selection-guides", "comparisons", "application-scenarios", "faqs"];
export const VALID_BLOG_CATEGORIES = Object.keys(BLOG_CATEGORY_LABELS);
export type BlogCategorySlug = keyof typeof BLOG_CATEGORY_LABELS;

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

export type BlogCategoryTranslator = (key: string) => string;

function translateCategoryField(
  slug: string,
  field: "label" | "description",
  t?: BlogCategoryTranslator,
) {
  if (!t) return "";
  const key = `categories.${slug}.${field}`;
  try {
    const value = t(key);
    return value && value !== key ? value : "";
  } catch {
    return "";
  }
}

export function normalizeBlogCategory(value: unknown): BlogCategorySlug | null {
  const raw = getString(value).toLowerCase();
  if (!raw) return null;

  const normalized = (OLD_TO_NEW_CATEGORY_MAP[raw] ?? raw) as string;
  return normalized in BLOG_CATEGORY_LABELS ? (normalized as BlogCategorySlug) : null;
}

export function getBlogCategoryLabel(value: unknown, t?: BlogCategoryTranslator): string {
  const category = normalizeBlogCategory(value);
  if (!category) return "";
  return translateCategoryField(category, "label", t) || BLOG_CATEGORY_LABELS[category] || category;
}

export function getBlogCategoryHref(value: unknown) {
  const category = normalizeBlogCategory(value);
  return category ? `/blog/${category}` : "/blog";
}

export function countBlogPostsByCategory(posts: Array<Pick<BlogPost, "articleType">>) {
  const counts: Record<string, number> = { all: posts.length };

  for (const post of posts) {
    const category = normalizeBlogCategory(post.articleType);
    if (!category) continue;
    counts[category] = (counts[category] || 0) + 1;
  }

  return counts;
}

export function filterBlogPostsByCategory<T extends Pick<BlogPost, "articleType">>(
  posts: T[],
  category: BlogCategorySlug
) {
  return posts.filter((post) => normalizeBlogCategory(post.articleType) === category);
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
  let paragraphBuffer: string[] = [];

  function ensureSection() {
    if (!current) {
      current = { heading: "Overview", paragraphs: [], bullets: [] };
    }
    return current;
  }

  function flushParagraph() {
    const block = paragraphBuffer.join("\n").trim();
    if (block) {
      ensureSection().paragraphs.push(block);
    }
    paragraphBuffer = [];
  }

  for (const rawLine of markdown.split("\n")) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      if (current) sections.push(current);
      current = { heading: line.replace(/^##\s+/, "").trim(), paragraphs: [], bullets: [] };
      continue;
    }

    if (line.startsWith("#")) continue;

    if (/^[-*]\s+/.test(line)) {
      flushParagraph();
      ensureSection().bullets.push(line.replace(/^[-*]\s+/, "").trim());
      continue;
    }

    ensureSection();
    paragraphBuffer.push(line);
  }

  flushParagraph();
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
    articleType: normalizeBlogCategory(row.article_type),
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

export function getBlogCategoryDescription(slug: string, t?: BlogCategoryTranslator) {
  return translateCategoryField(slug, "description", t) || BLOG_CATEGORY_DESCRIPTIONS[slug] || "";
}
