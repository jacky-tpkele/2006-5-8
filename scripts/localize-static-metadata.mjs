/**
 * 一次性改造脚本：给剩余的静态页面补 canonical 语言前缀 + hreflang。
 *
 * 覆盖两类：
 *   A) 简单静态页（about / contact / products / blog / 博客分类 / solar-dc-protection）
 *      —— 静态 metadata，canonical 是字面量字符串
 *   B) 6 个 manufacturer 页 —— canonical 是 `/${data.slug}`
 *
 * 只改 metadata 的 alternates，不动页面内容（内容翻译另行处理）。
 *
 * 用法：node scripts/localize-static-metadata.mjs
 * 幂等：已有 generateMetadata 的文件会被跳过。
 */

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const APP = path.join(ROOT, "src/app/[locale]");

// A) 简单静态页：文件相对路径 → 语言无关的路由路径
const SIMPLE_PAGES = {
  "about/page.tsx": "/about",
  "contact/page.tsx": "/contact",
  "products/page.tsx": "/products",
  "blog/page.tsx": "/blog",
  "blog/product-knowledge/page.tsx": "/blog/product-knowledge",
  "blog/selection-guides/page.tsx": "/blog/selection-guides",
  "blog/comparisons/page.tsx": "/blog/comparisons",
  "blog/application-scenarios/page.tsx": "/blog/application-scenarios",
  "blog/faqs/page.tsx": "/blog/faqs",
  "solar-dc-protection/page.tsx": "/solar-dc-protection",
  "privacy-policy/page.tsx": "/privacy-policy",
};

// B) manufacturer 页：canonical 用 data.slug
const MANUFACTURER_PAGES = [
  "mcb-manufacturer",
  "spd-manufacturer",
  "ats-manufacturer",
  "combiner-box-manufacturer",
  "energy-meter-manufacturer",
  "voltage-protector-manufacturer",
];

let changed = 0;
let skipped = 0;
let manual = [];

function ensureImport(src) {
  if (src.includes("@/lib/locale-path")) return src;
  // 插在第一个 import 之后
  return src.replace(
    /^(import[^\n]*\n)/,
    `$1import { alternateLanguages, localizedPath } from "@/lib/locale-path";\n`
  );
}

// ── A) 简单静态页 ──
console.log("A) 简单静态页：");
for (const [rel, route] of Object.entries(SIMPLE_PAGES)) {
  const file = path.join(APP, rel);
  if (!fs.existsSync(file)) {
    console.log(`  跳过 ${rel}（不存在）`);
    continue;
  }

  let src = fs.readFileSync(file, "utf8");
  if (src.includes("generateMetadata")) {
    console.log(`  跳过 ${rel}（已是动态）`);
    skipped++;
    continue;
  }

  const before = src;

  // 把 export const metadata: Metadata = { ... }; 改成 generateMetadata
  src = src.replace(
    /export const metadata: Metadata = \{([\s\S]*?)\n\};/,
    (_m, body) => {
      // 从原 body 里去掉 alternates 那一行，其余原样保留
      const cleaned = body
        .split("\n")
        .filter((line) => !/^\s*alternates:\s*\{[^}]*\},?\s*$/.test(line))
        .join("\n");

      return `type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return {${cleaned}
    alternates: {
      canonical: localizedPath("${route}", locale),
      languages: alternateLanguages("${route}"),
    },
  };
}`;
    }
  );

  if (src === before) {
    manual.push(rel);
    console.log(`  ⚠ ${rel} 未匹配，需手动`);
    continue;
  }

  src = ensureImport(src);
  fs.writeFileSync(file, src, "utf8");
  console.log(`  ✓ ${rel}`);
  changed++;
}

// ── B) manufacturer 页 ──
console.log("\nB) manufacturer 页：");
for (const slug of MANUFACTURER_PAGES) {
  const file = path.join(APP, slug, "page.tsx");
  if (!fs.existsSync(file)) {
    console.log(`  跳过 ${slug}（不存在）`);
    continue;
  }

  let src = fs.readFileSync(file, "utf8");
  if (src.includes("generateMetadata")) {
    console.log(`  跳过 ${slug}（已是动态）`);
    skipped++;
    continue;
  }

  const before = src;

  src = src.replace(
    /export const metadata: Metadata = \{[\s\S]*?\n\};/,
    `type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const route = \`/\${data.slug}\`;

  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: data.seoKeywords,
    alternates: {
      canonical: localizedPath(route, locale),
      languages: alternateLanguages(route),
    },
    openGraph: {
      title: data.seoTitle,
      description: data.seoDescription,
      url: \`https://www.tpkele.com\${localizedPath(route, locale)}\`,
      type: "website",
    },
  };
}`
  );

  if (src === before) {
    manual.push(slug);
    console.log(`  ⚠ ${slug} 未匹配，需手动`);
    continue;
  }

  src = ensureImport(src);
  fs.writeFileSync(file, src, "utf8");
  console.log(`  ✓ ${slug}`);
  changed++;
}

console.log(`\n完成：改造 ${changed} 个，跳过 ${skipped} 个。`);
if (manual.length) console.log(`需手动处理：${manual.join(", ")}`);
console.log("请运行 npm run build 验证。");
