import type { MetadataRoute } from "next";
import { categorySlugMap, products, site, subCategories } from "@/data/site";
import { getRichBlogArticlesForSitemap } from "@/data/blog/rcbo-au-nz-guide";
import { getPublishedBlogPostsWithFallback } from "@/lib/blog";
import { getAllGuideSlugs } from "@/data/guides";
import { standards } from "@/data/standards";
import { routing } from "@/i18n/routing";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";

/**
 * 重新生成周期（秒）。
 *
 * sitemap 默认只在构建时生成一次，因此 Supabase 里新发布的文章要等到
 * 下一次部署才会出现——这正是此前 6 篇新文章长期不在 sitemap 的原因。
 * 加上 revalidate 后，新文章发布 5 分钟内自动进入 sitemap。
 */
export const revalidate = 300;

/** 采购导航式文章的 slug，仅用于沿用其较高的 priority。 */
const RICH_BLOG_SLUGS = new Set(getRichBlogArticlesForSitemap().map((post) => post.slug));

// These blog URLs already redirect in next.config.ts; their guide targets are listed separately.
const REDIRECTED_BLOG_SLUGS = new Set([
  "solar-dc-circuit-breaker-selection",
  "mcb-selection-guide",
  "dc-circuit-breaker-selection-guide",
  "pv-combiner-box-guide",
]);

type RouteSpec = {
  /** 语言无关的路径，例如 /products/ac-mcb-1p */
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  lastModified?: Date;
  locales?: readonly string[];
};

/**
 * 把一条语言无关的路由展开成每个语言各一条 sitemap 条目，
 * 并给每条都带上全语言的 hreflang 交叉引用（含 x-default）。
 * 新增语言时只改 routing.locales，这里自动跟着扩展。
 */
function expandLocales(specs: RouteSpec[]): MetadataRoute.Sitemap {
  return specs.flatMap((spec) => {
    const locales = spec.locales ?? routing.locales;
    const languages = Object.fromEntries(
      Object.entries(alternateLanguages(spec.path)).map(([locale, path]) => [
        locale,
        `${site.url}${path}`,
      ])
    );

    return locales.map((locale) => ({
      url: `${site.url}${localizedPath(spec.path, locale)}`,
      ...(spec.lastModified ? { lastModified: spec.lastModified } : {}),
      changeFrequency: spec.changeFrequency,
      priority: spec.priority,
      ...(spec.locales ? {} : { alternates: { languages } }),
    }));
  });
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 博客文章统一走 blog 数据层：Supabase 动态文章 + 采购导航式文章 + 代码内静态文章，
  // 三者在 lib/blog.ts 中合并去重。构建期或运行期读不到 Supabase 时，
  // 该函数内部会降级为「采购导航 + 静态」，不会抛错导致 sitemap 整体失败。
  let blogEntries: RouteSpec[] = [];
  try {
    const posts = await getPublishedBlogPostsWithFallback();
    blogEntries = posts.filter((post) => !REDIRECTED_BLOG_SLUGS.has(post.slug)).map((post) => ({
      path: `/blog/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: RICH_BLOG_SLUGS.has(post.slug) ? 0.7 : 0.6,
    }));
  } catch (error) {
    console.warn("Sitemap: failed to load blog posts, omitting blog entries:", error);
  }

  const staticPaths = [
    "/",
    "/about",
    "/products",
    "/projects",
    "/projects/zimbabwe-sirdc-solar-project",
    "/solar-dc-protection",
    "/blog",
    "/contact",

    // Resources paths (updated URLs)
    "/resources",
    "/resources/technical-guides",
    "/resources/application-solutions",
    "/resources/market-access-advisor",
    "/resources/standards-database",
    "/resources/buyer-support",
    "/resources/faq",

    // Manufacturer pages
    "/mcb-manufacturer",
    "/spd-manufacturer",
    "/ats-manufacturer",
    "/combiner-box-manufacturer",
    "/energy-meter-manufacturer",
    "/voltage-protector-manufacturer",
    "/privacy-policy",

    // RCBO landing pages
    "/products/rcbo-australia-new-zealand",

    // Existing landing pages that are not all represented by the product data.
    "/products/ac-mcb",
    "/products/dc-mcb",
    "/products/voltage-protector",
    "/products/energy-meter",
    "/products/smart-circuit-breaker",
  ];

  const specs: RouteSpec[] = [
    ...staticPaths.map((path) => ({
      path,
      changeFrequency: "weekly" as const,
      priority:
        path === "/" ? 1 :
        path === "/resources" ? 0.9 :
        path.startsWith("/resources/") ? 0.85 :
        path.endsWith("-manufacturer") ? 0.85 :
        0.8,
    })),

    // Technical Guides dynamic routes (NEW)
    ...getAllGuideSlugs().map((slug) => ({
      path: `/guides/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9, // High priority - core SEO content
    })),

    ...Object.values(categorySlugMap).map((slug) => ({
      path: `/products/category/${slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),

    ...subCategories.filter((s) => !(s.parent === "MCB" && ["ac-mcb", "dc-mcb"].includes(s.slug))).map((s) => ({
      path: `/products/category/${categorySlugMap[s.parent]}/${s.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.88,
    })),

    ...products.map((product) => ({
      path: `/products/${product.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),

    // These English records have English canonicals; do not invent translated alternatives.
    ...standards.map((standard) => ({
      path: `/resources/standards-database/${standard.slug}`,
      locales: [routing.defaultLocale],
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      path: "/products/ats",
      locales: [routing.defaultLocale],
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...blogEntries,
  ];

  // lastmod is optional: omit it until a reliable content revision date is available.
  return Array.from(new Map(expandLocales(specs).map((entry) => [entry.url, entry])).values());
}
