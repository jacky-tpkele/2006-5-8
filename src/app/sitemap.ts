import type { MetadataRoute } from "next";
import { blogPosts, categorySlugMap, products, site, subCategories } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/products", "/solar-dc-protection", "/blog", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const categoryRoutes = Object.values(categorySlugMap).map((slug) => ({
    url: `${site.url}/products/category/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const subCategoryRoutes = subCategories.map((s) => ({
    url: `${site.url}/products/category/${categorySlugMap[s.parent]}/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.88,
  }));

  const productRoutes = products.map((product) => ({
    url: `${site.url}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...categoryRoutes, ...subCategoryRoutes, ...productRoutes, ...blogRoutes];
}
