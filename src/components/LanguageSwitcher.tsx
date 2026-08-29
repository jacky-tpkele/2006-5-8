"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LOCALE_LABELS: Record<string, string> = {
  en: "EN",
  ru: "RU",
};

/**
 * 语言切换器：显示所有可用语言，当前语言高亮。
 * 切换时保持在同一个页面（/products → /ru/products）。
 *
 * usePathname 来自 next-intl，返回不含语言前缀的路径；Link 也来自
 * next-intl，会自动按目标语言加 /ru 前缀 —— 这正是之前链接出错的根因。
 */
export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="lang-switcher" role="group" aria-label="Language">
      {routing.locales.map((loc) => (
        <Link
          key={loc}
          href={pathname === "/" ? "/" : pathname}
          locale={loc}
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
