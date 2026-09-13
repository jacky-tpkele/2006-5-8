import type { MetadataRoute } from "next";
import { blogPosts, categorySlugMap, products, site, subCategories } from "@/data/site";
import { routing } from "@/i18n/routing";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";

type RouteSpec = {
  /** 语言无关的路径，例如 /products/ac-mcb-1p */
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  lastModified: Date;
};

/**
 * 把一条语言无关的路由展开成每个语言各一条 sitemap 条目，
 * 并给每条都带上全语言的 hreflang 交叉引用（含 x-default）。
 * 新增语言时只改 routing.locales，这里自动跟着扩展。
 */
function expandLocales(specs: RouteSpec[]): MetadataRoute.Sitemap {
  return specs.flatMap((spec) => {
    const languages = Object.fromEntries(
      Object.entries(alternateLanguages(spec.path)).map(([locale, path]) => [
        locale,
        `${site.url}${path}`,
      ])
    );

    return routing.locales.map((locale) => ({
      url: `${site.url}${localizedPath(spec.path, locale)}`,
      lastModified: spec.lastModified,
      changeFrequency: spec.changeFrequency,
      priority: spec.priority,
      alternates: { languages },
    }));
  });
}

// Import guides data for dynamic routes
// Note: Create this file if it doesn't exist
function getAllGuideSlugs(): string[] {
  // Temporary static list - replace with actual import when guides.ts is created
  return [
    "dc-mcb-selection-guide",
    "dc-spd-selection-guide",
    "ats-selection-guide",
    "ac-mcb-selection-guide",
    "voltage-protector-selection-guide",
    "din-rail-energy-meter-guide",
    "pv-combiner-box-guide",
    "dc-isolator-selection-guide",
    "rccb-rcbo-selection-guide",
    "solar-pv-protection-system-guide",
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

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
  ];

  const specs: RouteSpec[] = [
    ...staticPaths.map((path) => ({
      path,
      lastModified: now,
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
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9, // High priority - core SEO content
    })),

    ...Object.values(categorySlugMap).map((slug) => ({
      path: `/products/category/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),

    ...subCategories.map((s) => ({
      path: `/products/category/${categorySlugMap[s.parent]}/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.88,
    })),

    ...products.map((product) => ({
      path: `/products/${product.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),

    ...blogPosts.map((post) => ({
      path: `/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return expandLocales(specs);
}
