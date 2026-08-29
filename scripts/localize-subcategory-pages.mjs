/**
 * 一次性改造脚本：把 products/ac-spd、products/dc-spd 接入多语言。
 *
 * 这两个页面结构相同：模块级 `const subCat = subCategoryBySlug["<slug>"]`
 * + 静态 metadata。改造为 generateMetadata + 合并层读数据。
 *
 * 用法：node scripts/localize-subcategory-pages.mjs
 * 幂等：已改造过的文件会被跳过。
 */

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const SLUGS = ["ac-spd", "dc-spd"];

let changed = 0;

for (const slug of SLUGS) {
  const file = path.join(ROOT, "src/app/[locale]/products", slug, "page.tsx");
  if (!fs.existsSync(file)) {
    console.log(`  跳过 ${slug}（文件不存在）`);
    continue;
  }

  let src = fs.readFileSync(file, "utf8");

  if (src.includes("generateMetadata")) {
    console.log(`  跳过 ${slug}（已改造）`);
    continue;
  }

  const before = src;

  // 1. import：移走 products / subCategories / subCategoryBySlug，加合并层
  src = src.replace(/import \{([^}]+)\} from "@\/data\/site";/, (_m, inner) => {
    const kept = inner
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .filter((n) => !["products", "subCategories", "subCategoryBySlug"].includes(n));
    const siteImport = kept.length
      ? `import {\n  ${kept.join(",\n  ")},\n} from "@/data/site";`
      : "";
    return `${siteImport}
import { getProducts, getSubCategories, getSubCategory } from "@/lib/i18n";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";`;
  });

  // 2. 删掉模块级的 subCat 常量（改到函数内按 locale 取）
  src = src.replace(/\nconst subCat = subCategoryBySlug\["[^"]+"\];\n/, "\n");

  // 3. 静态 metadata → generateMetadata
  src = src.replace(
    /export const metadata: Metadata = \{[\s\S]*?\n\};/,
    `type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const subCat = getSubCategory("${slug}", locale);
  if (!subCat) return {};

  const canonical = localizedPath("/products/${slug}", locale);

  return {
    title: subCat.seoTitle,
    description: subCat.seoDescription,
    keywords: subCat.seoKeywords,
    alternates: {
      canonical,
      languages: alternateLanguages("/products/${slug}"),
    },
    openGraph: {
      title: subCat.seoTitle,
      description: subCat.seoDescription,
      url: canonical,
      type: "website",
    },
  };
}`
  );

  // 4. 组件签名加 params，函数内取 subCat / items
  src = src.replace(
    /export default function (\w+)\(\) \{\n(\s*)const items = products\.filter\(\(p\) => p\.subCategorySlug === "([^"]+)"\);/,
    (_m, fnName, indent, s) =>
      `export default async function ${fnName}({ params }: PageProps) {\n` +
      `${indent}const { locale } = await params;\n` +
      `${indent}const subCat = getSubCategory("${s}", locale);\n` +
      `${indent}if (!subCat) notFound();\n` +
      `${indent}const items = getProducts(locale).filter((p) => p.subCategorySlug === "${s}");`
  );

  // 5. 其余 subCategories 引用走合并层
  src = src.replace(/\bsubCategories\.filter\(/g, "getSubCategories(locale).filter(");

  // 6. 补 notFound import（第 4 步用到了）
  if (src.includes("notFound()") && !src.includes('from "next/navigation"')) {
    src = src.replace(
      /import type \{ Metadata \} from "next";\n/,
      'import type { Metadata } from "next";\nimport { notFound } from "next/navigation";\n'
    );
  }

  if (src === before) {
    console.log(`  ⚠ ${slug} 未匹配到预期模式，需手动处理`);
    continue;
  }

  fs.writeFileSync(file, src, "utf8");
  console.log(`  ✓ ${slug}`);
  changed++;
}

console.log(`\n完成：改造 ${changed} 个。请运行 npm run build 验证。`);
