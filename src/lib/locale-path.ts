/**
 * 语言前缀工具 —— 供 generateMetadata 生成 canonical / hreflang 用。
 *
 * 规则与 src/i18n/routing.ts 的 localePrefix: "as-needed" 保持一致：
 * 默认语言（en）不带前缀，其他语言带 /<locale> 前缀。
 */

import { routing } from "@/i18n/routing";

/** 给语言无关的路径加上当前语言前缀。`/products` + ru → `/ru/products` */
export function localizedPath(path: string, locale: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === routing.defaultLocale) return clean;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

/**
 * 生成 metadata.alternates.languages 所需的全语言映射（含 x-default）。
 * 新增语言时只改 routing.locales，这里自动跟着扩展。
 */
export function alternateLanguages(path: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const locale of routing.locales) {
    out[locale] = localizedPath(path, locale);
  }
  out["x-default"] = localizedPath(path, routing.defaultLocale);
  return out;
}
