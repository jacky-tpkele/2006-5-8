"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { manufacturerMenu, navItems, productMegaMenu, products, site } from "@/data/site";

// 导航项 href → messages 里的 key，用于把菜单文案国际化
const NAV_LABEL_KEYS: Record<string, string> = {
  "/": "home",
  "/products": "products",
  "/solar-dc-protection": "solutions",
  "/mcb-manufacturer": "manufacturing",
  "/about": "about",
  "/blog": "blog",
  "/contact": "contact",
};

// mega menu 条目 href → messages.megaMenu.items 的 key。
// 注意：只映射显示文案，href 一律用 site.ts 的原值，保证 URL 与内链结构不变。
const MEGA_ITEM_KEYS: Record<string, string> = {
  "/products/category/mcb/dc-mcb": "dc-mcb",
  "/products/category/spd/dc-spd": "dc-spd",
  "/products/category/combiner-box": "pv-combiner-box",
  "/products/category/mcb/ac-mcb": "ac-mcb",
  "/products/category/spd/ac-spd": "ac-spd",
  "/products/category/ats": "ats",
  "/products/category/energy-meter": "energy-meter",
  "/products/category/voltage-protector": "voltage-protector",
};

// manufacturer 菜单 href → messages.manufacturerMenu 的 key
const MFR_MENU_KEYS: Record<string, string> = {
  "/mcb-manufacturer": "mcb",
  "/spd-manufacturer": "spd",
  "/ats-manufacturer": "ats",
  "/voltage-protector-manufacturer": "voltage-protector",
  "/energy-meter-manufacturer": "energy-meter",
  "/combiner-box-manufacturer": "combiner-box",
};

export function Header() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const tHeader = useTranslations("header");
  const tMega = useTranslations("megaMenu");
  const tMfr = useTranslations("manufacturerMenu");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  // 统一的取文案逻辑：有翻译用翻译，没有则回落到 site.ts 的英文原值，
  // 避免漏 key 时界面出现空白。
  const labelFrom = (
    translate: (key: string) => string,
    keyMap: Record<string, string>,
    href: string,
    fallback: string
  ) => {
    const key = keyMap[href];
    if (!key) return fallback;
    try {
      return translate(key) || fallback;
    } catch {
      return fallback;
    }
  };

  const navLabel = (href: string, fallback: string) =>
    labelFrom((k) => t(k as never), NAV_LABEL_KEYS, href, fallback);

  const megaItemLabel = (href: string, fallback: string) =>
    labelFrom((k) => tMega(`items.${k}` as never), MEGA_ITEM_KEYS, href, fallback);

  const mfrLabel = (href: string, fallback: string) =>
    labelFrom((k) => tMfr(k as never), MFR_MENU_KEYS, href, fallback);

  // mega menu 分栏标题/副标题/CTA：col.key 就是 messages 里的分组名
  const megaCol = (key: string, field: string, fallback: string) => {
    try {
      return tMega(`${key}.${field}` as never) || fallback;
    } catch {
      return fallback;
    }
  };

  const matches = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return products.filter((product) => {
      if (!normalized) return true;
      return `${product.name} ${product.category} ${product.series} ${product.application} ${product.summary}`.toLowerCase().includes(normalized);
    });
  }, [query]);

  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="TPKELE home">
          {site.name}
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>
        <nav className={`site-nav ${menuOpen ? "open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : item.href === "/mcb-manufacturer"
                  ? pathname.endsWith("-manufacturer")
                  : pathname.startsWith(item.href);

            if (item.href === "/products") {
              return (
                <div className="nav-dropdown" key={item.href}>
                  <Link className={active ? "active" : undefined} href={item.href} onClick={() => setMenuOpen(false)}>
                    {navLabel(item.href, item.label)}
                  </Link>
                  <div className="products-mega-menu">
                    {productMegaMenu.map((col) => (
                      <div className={`mega-col mega-col-${col.key}`} key={col.key}>
                        <div className="mega-col-head">
                          <span className="mega-col-title">{megaCol(col.key, "title", col.title)}</span>
                          {col.recommended ? (
                            <span className="mega-col-flag">{tMega("recommended")}</span>
                          ) : null}
                        </div>
                        <span className="mega-col-sub">{megaCol(col.key, "subtitle", col.subtitle)}</span>
                        <ul className="mega-col-list">
                          {col.items.map((item) => (
                            <li key={item.href}>
                              <Link href={item.href} onClick={() => setMenuOpen(false)}>
                                <span>{megaItemLabel(item.href, item.label)}</span>
                                <span className="mega-arrow">→</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link className="mega-col-cta" href={col.cta.href} onClick={() => setMenuOpen(false)}>
                          {megaCol(col.key, "cta", col.cta.label)}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            if (item.href === "/mcb-manufacturer") {
              return (
                <div className="nav-dropdown" key={item.href}>
                  <Link className={active ? "active" : undefined} href={item.href} onClick={() => setMenuOpen(false)}>
                    {navLabel(item.href, item.label)}
                  </Link>
                  <div className="mfr-dropdown-menu">
                    <ul>
                      {manufacturerMenu.map((m) => (
                        <li key={m.href}>
                          <Link href={m.href} onClick={() => setMenuOpen(false)}>
                            {mfrLabel(m.href, m.label)}
                            <span className="mega-arrow">→</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }

            return (
              <Link key={item.href} className={active ? "active" : undefined} href={item.href} onClick={() => setMenuOpen(false)}>
                {navLabel(item.href, item.label)}
              </Link>
            );
          })}
        </nav>
        <div className="header-actions">
          <LanguageSwitcher />
          <button className="icon-button" type="button" aria-label="Search products" onClick={() => setSearchOpen(true)}>
            <span aria-hidden="true">⌕</span>
          </button>
          <a className="whatsapp-btn" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </header>

      {searchOpen ? (
        <div className="search-panel" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setSearchOpen(false)}>
          <div className="search-box">
            <button className="icon-button search-close" type="button" aria-label={tHeader("close")} onClick={() => setSearchOpen(false)}>
              ×
            </button>
            <label htmlFor="site-search">{tHeader("search")}</label>
            <input
              id="site-search"
              type="search"
              placeholder={tHeader("searchPlaceholder")}
              autoComplete="off"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              autoFocus
            />
            <div className="search-results" role="listbox">
              {matches.map((product) => (
                <Link className="search-result" href={`/products/${product.slug}`} key={product.slug} onClick={() => setSearchOpen(false)}>
                  <span>
                    <strong>{product.name}</strong>
                    <br />
                    {product.application}
                  </span>
                  <span className="text-link">{tHeader("view")}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
