/**
 * 多语言数据合并层。
 *
 * 设计原则：site.ts 永远是唯一的主数据源（英文 + 所有语言无关字段），
 * site.ru.ts 只提供需要翻译的字段覆盖。取数据一律走这里的函数，
 * 页面组件不再直接从 site.ts 读业务内容，这样新增语言时改动集中在本文件。
 */

import {
  categoryContent,
  products,
  subCategories,
  subCategoryBySlug,
  type CategoryContent,
  type Product,
  type ProductCategory,
  type SubCategory,
} from "@/data/site";
import {
  categoryContentRu,
  productsRu,
  subCategoriesRu,
} from "@/data/site.ru";

export const DEFAULT_LOCALE = "en";

type Overrides = Record<string, Record<string, unknown>>;

const PRODUCT_OVERRIDES: Record<string, Overrides> = { ru: productsRu };
const CATEGORY_OVERRIDES: Record<string, Overrides> = { ru: categoryContentRu };
const SUBCATEGORY_OVERRIDES: Record<string, Overrides> = { ru: subCategoriesRu };

/**
 * 浅合并：只覆盖 override 里存在且非空的键，其余保留英文原值。
 * 机器翻译漏字段时会自动回落到英文，不会渲染出空白。
 */
function merge<T extends Record<string, unknown>>(
  base: T,
  override?: Record<string, unknown>
): T {
  if (!override) return base;
  const out: Record<string, unknown> = { ...base } as Record<string, unknown>;
  for (const [key, value] of Object.entries(override)) {
    if (value === null || value === undefined) continue;
    if (typeof value === "string" && !value.trim()) continue;
    if (Array.isArray(value) && value.length === 0) continue;
    out[key] = value;
  }
  return out as T;
}

// ── 产品 ──────────────────────────────────────────────────

export function getProducts(locale: string): Product[] {
  const overrides = PRODUCT_OVERRIDES[locale];
  if (!overrides) return products;
  return products.map((p) => merge(p, overrides[p.slug]));
}

export function getProduct(slug: string, locale: string): Product | undefined {
  const base = products.find((p) => p.slug === slug);
  if (!base) return undefined;
  return merge(base, PRODUCT_OVERRIDES[locale]?.[slug]);
}

// ── 分类内容 ──────────────────────────────────────────────

export function getCategoryContent(
  category: ProductCategory,
  locale: string
): CategoryContent {
  return merge(categoryContent[category], CATEGORY_OVERRIDES[locale]?.[category]);
}

// ── 子分类 ────────────────────────────────────────────────

export function getSubCategories(locale: string): SubCategory[] {
  const overrides = SUBCATEGORY_OVERRIDES[locale];
  if (!overrides) return subCategories;
  return subCategories.map((s) => merge(s, overrides[s.slug]));
}

export function getSubCategory(
  slug: string,
  locale: string
): SubCategory | undefined {
  const base = subCategoryBySlug[slug];
  if (!base) return undefined;
  return merge(base, SUBCATEGORY_OVERRIDES[locale]?.[slug]);
}
