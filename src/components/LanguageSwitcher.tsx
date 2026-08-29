"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { routing } from "@/i18n/routing";

const LOCALE_LABELS: Record<string, string> = {
  en: "EN",
  ru: "RU",
};

/**
 * 语言切换器：显示所有可用语言，当前语言高亮。
 * 切换时保持在同一个页面（/products → /ru/products）。
 */
export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  // 去掉当前路径上的语言前缀，得到语言无关的基础路径
  const basePath = (() => {
    for (const loc of routing.locales) {
      if (pathname === `/${loc}`) return "/";
      if (pathname.startsWith(`/${loc}/`)) return pathname.slice(loc.length + 1);
    }
    return pathname;
  })();

  const hrefFor = (target: string) =>
    target === routing.defaultLocale
      ? basePath
      : `/${target}${basePath === "/" ? "" : basePath}`;

  return (
    <div className="lang-switcher" role="group" aria-label="Language">
      {routing.locales.map((loc) => (
        <Link
          key={loc}
          href={hrefFor(loc)}
          className={loc === locale ? "lang-option active" : "lang-option"}
          hrefLang={loc}
          aria-current={loc === locale ? "true" : undefined}
        >
          {LOCALE_LABELS[loc] ?? loc.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
