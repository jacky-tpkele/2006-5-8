import { defineRouting } from "next-intl/routing";

/**
 * 站点支持的语言。
 * - en 为默认语言，且不带前缀（保持原有 URL，例如 /products）
 * - ru 带 /ru 前缀（例如 /ru/products）
 *
 * 以后新增语言（de / es 等）只需在 locales 里追加，
 * sitemap、hreflang、语言切换器会自动跟着扩展。
 */
export const routing = defineRouting({
  locales: ["en", "ru"],
  defaultLocale: "en",
  // as-needed：默认语言不加前缀，其他语言加前缀
  localePrefix: "as-needed",
  // 关闭自动语言检测：避免俄语浏览器访问 tpkele.com 时被重定向，
  // 破坏已被搜索引擎收录的英文 URL
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
