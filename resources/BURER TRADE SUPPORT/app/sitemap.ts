import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tpkele.com";
  return [{ url: `${site}/resources/buyer-trade-support`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 }];
}
