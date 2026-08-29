/**
 * 一次性改造脚本：把 products/<slug>/page.tsx 这批"独立分类页"接入多语言。
 *
 * 这些页面原本用静态 `export const metadata`（拿不到 locale），
 * 内容也直接从 site.ts 读英文。改造内容：
 *   1. 静态 metadata → generateMetadata({ params })，canonical 带语言前缀 + hreflang
 *   2. categoryContent[X] → getCategoryContent(X, locale)
 *   3. products / subCategories → getProducts(locale) / getSubCategories(locale)
 *
 * 用法：node scripts/localize-category-pages.mjs
 * 幂等：已改造过的文件会被跳过。
 */

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");

// slug → categoryContent 的键名
const CATEGORY_PAGES = {
  mcb: "MCB",
  spd: "SPD",
  ats: "ATS",
  "combiner-box": "Combiner Box",
  "energy-meter": "Energy Meter",
  "voltage-protector": "Voltage Protector",
};

let changed = 0;
let skipped = 0;

for (const [slug, categoryKey] of Object.entries(CATEGORY_PAGES)) {
  const file = path.join(ROOT, "src/app/[locale]/products", slug, "page.tsx");
  if (!fs.existsSync(file)) {
    console.log(`  跳过 ${slug}（文件不存在）`);
    continue;
  }

  let src = fs.readFileSync(file, "utf8");

  if (src.includes("generateMetadata")) {
    console.log(`  跳过 ${slug}（已改造）`);
    skipped++;
    continue;
  }

  const before = src;

  // ── 1. 替换 import ──
  // 从 @/data/site 的 import 里移走 categoryContent / products / subCategories
  src = src.replace(
    /import \{([^}]+)\} from "@\/data\/site";/,
    (_m, inner) => {
      const kept = inner
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
        .filter((n) => !["categoryContent", "products", "subCategories"].includes(n));
      const siteImport = kept.length
        ? `import {\n  ${kept.join(",\n  ")},\n} from "@/data/site";`
        : "";
      return `${siteImport}
import { getCategoryContent, getProducts, getSubCategories } from "@/lib/i18n";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";`;
    }
  );

  // ── 2. 静态 metadata → generateMetadata ──
  // 匹配 export const metadata: Metadata = { ... }; （到第一个顶层 };）
  src = src.replace(
    /export const metadata: Metadata = \{[\s\S]*?\n\};/,
    `type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = getCategoryContent("${categoryKey}", locale);
  const canonical = localizedPath("/products/${slug}", locale);

  return {
    title: content.seoTitle,
    description: content.seoDescription,
    keywords: content.seoKeywords,
    alternates: {
      canonical,
      languages: alternateLanguages("/products/${slug}"),
    },
    openGraph: {
      title: content.seoTitle,
      description: content.seoDescription,
      url: canonical,
      type: "website",
    },
  };
}`
  );

  // ── 3. 组件签名加 params，读数据走合并层 ──
  src = src.replace(
    /export default function (\w+)\(\) \{\n(\s*)const category = "([^"]+)";\n\s*const content = categoryContent\[category\];/,
    (_m, fnName, indent, cat) =>
      `export default async function ${fnName}({ params }: PageProps) {\n${indent}const { locale } = await params;\n${indent}const category = "${cat}";\n${indent}const content = getCategoryContent(category, locale);`
  );

  src = src.replace(
    /const items = products\.filter\(/,
    "const items = getProducts(locale).filter("
  );
  src = src.replace(
    /const subs = subCategories\.filter\(/,
    "const subs = getSubCategories(locale).filter("
  );

  if (src === before) {
    console.log(`  ⚠ ${slug} 未匹配到预期模式，需手动处理`);
    continue;
  }

  fs.writeFileSync(file, src, "utf8");
  console.log(`  ✓ ${slug}`);
  changed++;
}

console.log(`\n完成：改造 ${changed} 个，跳过 ${skipped} 个。`);
console.log("请运行 npm run build 验证。");
