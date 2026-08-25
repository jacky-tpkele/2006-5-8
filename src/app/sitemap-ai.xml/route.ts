import { site } from "@/data/site";

export async function GET() {
  // AI 爬虫专用的精简 sitemap — 只列核心页面，节省抓取配额
  const entries = [
    // Manufacturer 着陆页（priority 1.0 — 最核心的流量入口）
    { loc: `${site.url}/mcb-manufacturer`, priority: 1.0, changefreq: "weekly" },
    { loc: `${site.url}/spd-manufacturer`, priority: 1.0, changefreq: "weekly" },
    { loc: `${site.url}/combiner-box-manufacturer`, priority: 1.0, changefreq: "weekly" },
    { loc: `${site.url}/ats-manufacturer`, priority: 0.95, changefreq: "weekly" },
    { loc: `${site.url}/voltage-protector-manufacturer`, priority: 0.95, changefreq: "weekly" },
    { loc: `${site.url}/energy-meter-manufacturer`, priority: 0.95, changefreq: "weekly" },

    // 产品分类页（priority 0.9）
    { loc: `${site.url}/products/category/mcb/dc-mcb`, priority: 0.9, changefreq: "weekly" },
    { loc: `${site.url}/products/category/mcb/ac-mcb`, priority: 0.9, changefreq: "weekly" },
    { loc: `${site.url}/products/category/spd/dc-spd`, priority: 0.9, changefreq: "weekly" },
    { loc: `${site.url}/products/category/spd/ac-spd`, priority: 0.9, changefreq: "weekly" },
    { loc: `${site.url}/products/combiner-box`, priority: 0.9, changefreq: "weekly" },
    { loc: `${site.url}/products/ats`, priority: 0.85, changefreq: "weekly" },
    { loc: `${site.url}/products/voltage-protector`, priority: 0.85, changefreq: "weekly" },
    { loc: `${site.url}/products/energy-meter`, priority: 0.85, changefreq: "weekly" },

    // 公司与总览页
    { loc: `${site.url}/`, priority: 1.0, changefreq: "weekly" },
    { loc: `${site.url}/about`, priority: 0.8, changefreq: "monthly" },
    { loc: `${site.url}/solar-dc-protection`, priority: 0.85, changefreq: "monthly" },
    { loc: `${site.url}/contact`, priority: 0.7, changefreq: "monthly" },

    // 博客分类（AI 搜索常用）
    { loc: `${site.url}/blog/selection-guides`, priority: 0.8, changefreq: "weekly" },
    { loc: `${site.url}/blog/product-knowledge`, priority: 0.8, changefreq: "weekly" },
    { loc: `${site.url}/blog/application-scenarios`, priority: 0.75, changefreq: "weekly" },
    { loc: `${site.url}/blog/comparisons`, priority: 0.75, changefreq: "weekly" },
    { loc: `${site.url}/blog/faqs`, priority: 0.7, changefreq: "weekly" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate",
    },
  });
}
