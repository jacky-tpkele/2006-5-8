/**
 * 俄语翻译脚本 —— 提取 site.ts 的英文文案，调用 DeepSeek 翻译，生成 site.ru.ts
 *
 * 用法：
 *   npx tsx scripts/translate-to-russian.ts            # 全量翻译
 *   npx tsx scripts/translate-to-russian.ts --dry-run  # 只统计不调 API
 *   npx tsx scripts/translate-to-russian.ts --limit 5  # 只翻前 5 个产品（试跑）
 *
 * 需要 .env.local 中的 DEEPSEEK_API_KEY。
 * 脚本可重复运行：已翻译的条目从缓存读取，不会重复计费。
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CACHE_PATH = path.join(ROOT, "scripts/.translation-cache.json");
const OUT_PATH = path.join(ROOT, "src/data/site.ru.ts");

// ── 读取 .env.local ────────────────────────────────────────
function loadEnv() {
  const envPath = path.join(ROOT, ".env.local");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/i);
    if (m && !process.env[m[1]]) {
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
}
loadEnv();

const API_KEY = process.env.DEEPSEEK_API_KEY;
const ENDPOINT = "https://api.deepseek.com/chat/completions";
const MODEL = "deepseek-chat";

const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const LIMIT = (() => {
  const i = args.indexOf("--limit");
  return i >= 0 ? Number(args[i + 1]) : Infinity;
})();

if (!API_KEY && !DRY_RUN) {
  console.error("缺少 DEEPSEEK_API_KEY（.env.local）。或加 --dry-run 只做统计。");
  process.exit(1);
}

// ── 翻译缓存：key 为英文原文，value 为俄语译文 ──────────────
const cache: Record<string, string> = fs.existsSync(CACHE_PATH)
  ? JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"))
  : {};

let apiCalls = 0;
let cacheHits = 0;

function saveCache() {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2), "utf8");
}

// ── 术语表：这些词/型号在俄语技术语境里保持原样 ──────────────
const GLOSSARY = `
Keep these unchanged (industry-standard in Russian technical writing):
- Standards: IEC 60898-1, IEC 61643-11, IEC 61643-31, IEC 60947-2, IEC 62053-21, MID, CE, RoHS, REACH
- Abbreviations: MCB, SPD, ATS, PV, DC, AC, OEM, ODM, EPC, BESS, DIN, IP65, RS485, Modbus RTU
- Model/series codes: DZ47, DZ47Z, PN2, VA2, STQ1, STQ2, W2R, ST, D52-2068, DDS, QY2P, ADD, DDR
- Units and ratings: 6kA, 10kA, 1500V, 1000V, 63A, 6A–63A, 1P, 2P, 3P, 4P, 3P+N, B/C/D curves, Uoc, Ucpv, Imax, In, Up, Ui, Uimp, 8/20μs, 10/350μs, imp/kWh
- Brand name: TPKELE
`.trim();

async function translate(text: string, context: string): Promise<string> {
  const key = text.trim();
  if (!key) return text;

  // 纯数字/符号/单位，或已经是西里尔字母，直接返回
  if (!/[A-Za-z]{2,}/.test(key)) return text;
  if (/[А-Яа-яЁё]/.test(key)) return text;

  if (cache[key]) {
    cacheHits++;
    return cache[key];
  }

  if (DRY_RUN) return text;

  const prompt = [
    "You are a professional technical translator for a Chinese manufacturer of low-voltage and solar electrical protection devices, translating their B2B website into Russian for procurement engineers and distributors.",
    "",
    GLOSSARY,
    "",
    "Rules:",
    "- Output ONLY the Russian translation. No quotes, no explanation, no preamble.",
    "- Preserve the original punctuation style and any leading/trailing markers.",
    "- Use industry-standard Russian electrical engineering terminology.",
    "- Keep the tone factual and professional. Do not add marketing superlatives.",
    "",
    `Field type: ${context}`,
    `Text: ${key}`,
  ].join("\n");

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [{ role: "user", content: prompt }],
          temperature: 0.2,
        }),
      });

      if (res.status === 429) {
        await sleep(3000 * attempt);
        continue;
      }
      if (!res.ok) {
        console.warn(`  API ${res.status}，保留英文原文`);
        return text;
      }

      const data = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      let out = data.choices?.[0]?.message?.content?.trim();
      if (!out) return text;

      // 去掉模型可能加上的包裹引号
      out = out.replace(/^["'«]|["'»]$/g, "").trim();

      apiCalls++;
      cache[key] = out;
      if (apiCalls % 20 === 0) saveCache();
      return out;
    } catch (err) {
      if (attempt === 3) {
        console.warn(`  请求失败：${(err as Error).message}`);
        return text;
      }
      await sleep(1500 * attempt);
    }
  }
  return text;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// ── 主流程 ────────────────────────────────────────────────
async function main() {
  console.log("读取 site.ts …");
  const site = await import("../src/data/site.ts");

  const products = site.products as Array<Record<string, unknown>>;
  const categoryContent = site.categoryContent as Record<string, Record<string, unknown>>;
  const subCategories = site.subCategories as Array<Record<string, unknown>>;

  console.log(`  产品 ${products.length} 个`);
  console.log(`  分类 ${Object.keys(categoryContent).length} 个`);
  console.log(`  子分类 ${subCategories.length} 个`);

  // 统计待翻译字符数
  let charCount = 0;
  const count = (v: unknown) => {
    if (typeof v === "string") charCount += v.length;
    else if (Array.isArray(v)) v.forEach(count);
    else if (v && typeof v === "object") Object.values(v).forEach(count);
  };

  const PRODUCT_FIELDS = ["name", "shortName", "summary", "description", "application", "series"];
  const targetProducts = products.slice(0, LIMIT);

  targetProducts.forEach((p) => PRODUCT_FIELDS.forEach((f) => count(p[f])));
  count(categoryContent);
  subCategories.forEach((s) => {
    count(s.hero);
    count(s.intro);
    count(s.seoTitle);
    count(s.seoDescription);
    count(s.specTable);
    count(s.mechTable);
    count(s.materialTable);
  });

  console.log(`\n待翻译约 ${charCount.toLocaleString()} 字符`);
  console.log(`缓存中已有 ${Object.keys(cache).length} 条译文`);

  if (DRY_RUN) {
    console.log("\n--dry-run：仅统计，未调用 API。");
    return;
  }

  // ── 翻译产品 ──
  console.log(`\n翻译产品（${targetProducts.length} 个）…`);
  const productsRu: Record<string, Record<string, unknown>> = {};

  for (let i = 0; i < targetProducts.length; i++) {
    const p = targetProducts[i];
    const slug = p.slug as string;
    const entry: Record<string, unknown> = {};

    for (const f of PRODUCT_FIELDS) {
      const val = p[f];
      if (typeof val === "string" && val.trim()) {
        entry[f] = await translate(val, `product ${f}`);
      }
    }

    // specs 数组：技术规格，逐条翻译（用户要求规格也翻译）
    if (Array.isArray(p.specs)) {
      entry.specs = [];
      for (const s of p.specs as string[]) {
        (entry.specs as string[]).push(await translate(s, "technical specification line"));
      }
    }

    // technicalSpecs：{label, value} 对，只翻 label，value 是参数值
    if (Array.isArray(p.technicalSpecs)) {
      entry.technicalSpecs = [];
      for (const ts of p.technicalSpecs as Array<{ label: string; value: string }>) {
        (entry.technicalSpecs as Array<{ label: string; value: string }>).push({
          label: await translate(ts.label, "spec table row label"),
          value: await translate(ts.value, "spec table value"),
        });
      }
    }

    productsRu[slug] = entry;
    console.log(`  [${i + 1}/${targetProducts.length}] ${slug}`);
    saveCache();
  }

  // ── 翻译分类页 ──
  console.log(`\n翻译分类页…`);
  const categoryContentRu: Record<string, Record<string, unknown>> = {};

  for (const [cat, content] of Object.entries(categoryContent)) {
    const entry: Record<string, unknown> = {};

    for (const key of ["hero", "intro", "buyerPersona", "seoTitle", "seoDescription"]) {
      const v = content[key];
      if (typeof v === "string" && v.trim()) {
        entry[key] = await translate(v, `category ${key}`);
      }
    }

    if (Array.isArray(content.bullets)) {
      entry.bullets = [];
      for (const b of content.bullets as string[]) {
        (entry.bullets as string[]).push(await translate(b, "category bullet point"));
      }
    }

    if (Array.isArray(content.applications)) {
      entry.applications = [];
      for (const a of content.applications as string[]) {
        (entry.applications as string[]).push(await translate(a, "application scenario"));
      }
    }

    if (Array.isArray(content.faq)) {
      entry.faq = [];
      for (const item of content.faq as Array<{ q: string; a: string }>) {
        (entry.faq as Array<{ q: string; a: string }>).push({
          q: await translate(item.q, "FAQ question"),
          a: await translate(item.a, "FAQ answer"),
        });
      }
    }

    categoryContentRu[cat] = entry;
    console.log(`  ${cat}`);
    saveCache();
  }

  // ── 翻译子分类页 ──
  console.log(`\n翻译子分类页…`);
  const subCategoriesRu: Record<string, Record<string, unknown>> = {};

  for (const s of subCategories) {
    const slug = s.slug as string;
    const entry: Record<string, unknown> = {};

    for (const key of ["label", "hero", "intro", "seoTitle", "seoDescription"]) {
      const v = s[key];
      if (typeof v === "string" && v.trim()) {
        entry[key] = await translate(v, `subcategory ${key}`);
      }
    }

    // specTable: { title, rows: [{no, category, specs[]}] }
    if (s.specTable) {
      const st = s.specTable as { title: string; rows: Array<{ no: string; category: string; specs: string[] }> };
      const rows = [];
      for (const r of st.rows) {
        const specs = [];
        for (const line of r.specs) {
          specs.push(await translate(line, "technical specification line"));
        }
        rows.push({
          no: r.no,
          category: await translate(r.category, "spec group name"),
          specs,
        });
      }
      entry.specTable = { title: await translate(st.title, "spec table title"), rows };
    }

    // mechTable / materialTable: { title, columns, rows: [{parameter, requirement}] }
    for (const tableKey of ["mechTable", "materialTable"] as const) {
      if (!s[tableKey]) continue;
      const t = s[tableKey] as {
        title: string;
        columns: [string, string];
        rows: Array<{ parameter: string; requirement: string }>;
      };
      const rows = [];
      for (const r of t.rows) {
        rows.push({
          parameter: await translate(r.parameter, "parameter name"),
          requirement: await translate(r.requirement, "parameter requirement"),
        });
      }
      entry[tableKey] = {
        title: await translate(t.title, "spec table title"),
        columns: [
          await translate(t.columns[0], "table column header"),
          await translate(t.columns[1], "table column header"),
        ],
        rows,
      };
    }

    subCategoriesRu[slug] = entry;
    console.log(`  ${slug}`);
    saveCache();
  }

  saveCache();

  // ── 生成 site.ru.ts ──
  console.log("\n生成 src/data/site.ru.ts …");

  const header = `/**
 * 俄语翻译覆盖数据 —— 由 scripts/translate-to-russian.ts 自动生成。
 *
 * 生成时间：${new Date().toISOString()}
 * 翻译引擎：DeepSeek (deepseek-chat)
 *
 * 结构说明：
 * 这里只存"需要翻译的字段"，与 site.ts 的英文主数据做浅合并。
 * 语言无关的内容（slug、image、gallery、认证编号等）不出现在这里，
 * 永远只有 site.ts 一份，避免多语言之间产生数据漂移。
 *
 * 合并逻辑见 src/lib/i18n.ts。
 *
 * ⚠ 机器翻译结果，需人工校对。校对后可直接修改本文件；
 *   重新运行脚本会读取 scripts/.translation-cache.json 缓存，
 *   如需重译某条，先从缓存里删掉对应 key。
 */

`;

  const body = [
    `export const productsRu: Record<string, Record<string, unknown>> = ${JSON.stringify(productsRu, null, 2)};`,
    "",
    `export const categoryContentRu: Record<string, Record<string, unknown>> = ${JSON.stringify(categoryContentRu, null, 2)};`,
    "",
    `export const subCategoriesRu: Record<string, Record<string, unknown>> = ${JSON.stringify(subCategoriesRu, null, 2)};`,
    "",
  ].join("\n");

  fs.writeFileSync(OUT_PATH, header + body, "utf8");

  console.log(`\n完成。`);
  console.log(`  API 调用 ${apiCalls} 次，缓存命中 ${cacheHits} 次`);
  console.log(`  输出：src/data/site.ru.ts`);
  console.log(`  缓存：scripts/.translation-cache.json`);
}

main().catch((err) => {
  saveCache();
  console.error("脚本异常：", err);
  process.exit(1);
});
