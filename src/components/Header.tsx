"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { manufacturerMenu, resourcesMenu, navItems, productMenu, products, site, type ProductCategory } from "@/data/site";
import { getProducts } from "@/lib/i18n";

// 导航项 href → messages 里的 key，用于把菜单文案国际化
const NAV_LABEL_KEYS: Record<string, string> = {
  "/": "home",
  "/products": "products",
  "/projects": "projects",
  "/solar-dc-protection": "solutions",
  "/resources": "resources",
  "/mcb-manufacturer": "manufacturing",
  "/about": "about",
  "/blog": "blog",
  "/contact": "contact",
};

const PRODUCT_CATEGORY_KEYS: Record<ProductCategory, string> = {
  MCB: "mcb",
  RCBO: "rcbo",
  SPD: "spd",
  ATS: "ats",
  "Combiner Box": "combinerBox",
  "Voltage Protector": "voltageProtector",
  "Energy Meter": "energyMeter",
};

const PRODUCT_NAV_IMAGES: Record<ProductCategory, string> = {
  MCB: "/assets/navigation/mcb.webp",
  RCBO: "/assets/navigation/rcbo.webp",
  SPD: "/assets/navigation/spd.webp",
  ATS: "/assets/navigation/ats.webp",
  "Combiner Box": "/assets/navigation/combiner-box.webp",
  "Voltage Protector": "/assets/navigation/voltage-protector.webp",
  "Energy Meter": "/assets/navigation/energy-meter.webp",
};

const PRODUCT_LINK_KEYS: Record<string, string> = {
  "/products/category/mcb/ac-mcb": "acMcb",
  "/products/category/mcb/dc-mcb": "dcMcb",
  "/products/smart-circuit-breaker": "smartMcb",
  "/products/rcbo-australia-new-zealand": "rcboAuNz",
  "/products/1pn-rcbo": "rcbo1pn",
  "/products/category/spd/ac-spd": "acSpd",
  "/products/category/spd/dc-spd": "dcSpd",
  "/products/category/ats?series=ATS-ST%20Series": "atsSt",
  "/products/category/ats?series=ATS-W2R%20Series": "atsW2r",
  "/products/category/ats?series=STQ1%20Series": "stq1",
  "/products/category/ats?series=STQ2%20Series": "stq2",
  "/products/category/combiner-box?series=Plastic%20Box%20Series": "plasticBox",
  "/products/category/combiner-box?series=Metal%20Box%20Series": "metalBox",
};

const PRODUCT_NAV_DESTINATIONS: Record<string, string> = {
  "/products/category/mcb/ac-mcb": "/products/ac-mcb",
  "/products/category/mcb/dc-mcb": "/products/dc-mcb",
};

const FEATURED_PRODUCT_SLUGS: Partial<Record<ProductCategory, string[]>> = {
  MCB: ["ac-mcb-2p", "dc-mcb-2p", "wifi-smart-mcb-1p"],
  RCBO: ["1pn-rcbo"],
  SPD: ["ac-spd", "dc-spd"],
  ATS: ["ats-st-2p", "ats-w2r-2p", "stq1-2p"],
  "Combiner Box": ["plastic-box-series", "metal-box-series"],
  "Voltage Protector": ["pn2-va2", "pn2-va3", "pn2-vak"],
  "Energy Meter": ["din-rail-energy-meter", "d52-2068-energy-meter", "dds-series-energy-meter"],
};

// manufacturer 菜单 href → messages.manufacturerMenu 的 key
const MFR_MENU_KEYS: Record<string, string> = {
  "/mcb-manufacturer": "mcb",
  "/rcbo-manufacturer": "rcbo",
  "/spd-manufacturer": "spd",
  "/ats-manufacturer": "ats",
  "/voltage-protector-manufacturer": "voltage-protector",
  "/energy-meter-manufacturer": "energy-meter",
  "/combiner-box-manufacturer": "combiner-box",
};

// resources 菜单 href → messages.resourcesMenu 的 key
const RESOURCES_MENU_KEYS: Record<string, string> = {
  "/resources/technical-guides": "technical-guides",
  "/resources/market-access-advisor": "market-access-advisor",
  "/resources/buyer-support": "buyer-support",
  "/resources/standards-database": "standards-database",
  "/resources/application-solutions": "application-solutions",
  "/resources/faq": "faq",
};

export function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("nav");
  const tHeader = useTranslations("header");
  const tProductNav = useTranslations("productNav");
  const tResources = useTranslations("resourcesMenu");
  const tMfr = useTranslations("manufacturerMenu");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(productMenu[0].label);

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

  const productLabel = (href: string, fallback: string) =>
    labelFrom((k) => tProductNav(`links.${k}` as never), PRODUCT_LINK_KEYS, href, fallback);

  const mfrLabel = (href: string, fallback: string) =>
    labelFrom((k) => tMfr(k as never), MFR_MENU_KEYS, href, fallback);

  const resourcesLabel = (href: string, fallback: string) =>
    labelFrom((k) => tResources(k as never), RESOURCES_MENU_KEYS, href, fallback);

  const selectedGroup = productMenu.find((group) => group.label === selectedCategory) ?? productMenu[0];
  const localizedProducts = getProducts(locale);
  const categoryPanels = productMenu.map((group) => {
    const categoryProducts = localizedProducts.filter((product) => product.parentCategory === group.label);
    const featuredProducts = (FEATURED_PRODUCT_SLUGS[group.label] ?? [])
      .map((slug) => categoryProducts.find((product) => product.slug === slug))
      .filter((product): product is (typeof categoryProducts)[number] => Boolean(product));
    return { group, key: PRODUCT_CATEGORY_KEYS[group.label], featuredProducts, image: PRODUCT_NAV_IMAGES[group.label] };
  });

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
                <div className="nav-dropdown product-dropdown" key={item.href}>
                  <Link className={active ? "active" : undefined} href={item.href} onClick={() => setMenuOpen(false)}>
                    {navLabel(item.href, item.label)}
                  </Link>
                  <div className="products-mega-menu" aria-label={tProductNav("families")}>
                    <div className="product-nav-rail">
                      <p className="product-nav-kicker">{tProductNav("families")}</p>
                      {productMenu.map((group) => (
                        <button
                          className={`product-nav-category ${group.label === selectedGroup.label ? "active" : ""}`}
                          key={group.href}
                          type="button"
                          aria-pressed={group.label === selectedGroup.label}
                          aria-controls={`product-nav-${PRODUCT_CATEGORY_KEYS[group.label]}`}
                          onMouseEnter={() => setSelectedCategory(group.label)}
                          onFocus={() => setSelectedCategory(group.label)}
                          onClick={() => setSelectedCategory(group.label)}
                        >
                          <span>{tProductNav(`categories.${PRODUCT_CATEGORY_KEYS[group.label]}` as never)}</span>
                          <span aria-hidden="true">›</span>
                        </button>
                      ))}
                    </div>
                    {categoryPanels.map(({ group, key: selectedKey, featuredProducts, image: categoryImage }) => (
                    <div className="product-nav-panel" id={`product-nav-${selectedKey}`} key={group.href} hidden={group.label !== selectedGroup.label}>
                    <div className="product-nav-content">
                      <p className="product-nav-kicker">{tProductNav("range")}</p>
                      <h2>{tProductNav(`categories.${selectedKey}` as never)}</h2>
                      <p className="product-nav-description">{tProductNav(`descriptions.${selectedKey}` as never)}</p>
                      {group.children.some((child) => child.href !== group.href) && (
                        <>
                          <h3>{tProductNav("series")}</h3>
                          <div className="product-nav-links">
                            {group.children.filter((child) => child.href !== group.href).map((child) => (
                              <Link key={child.href} href={PRODUCT_NAV_DESTINATIONS[child.href] ?? child.href} onClick={() => setMenuOpen(false)}>
                                <span>{productLabel(child.href, child.label)}</span>
                                <span aria-hidden="true">→</span>
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                      {featuredProducts.length > 0 && (
                        <>
                          <h3>{tProductNav("models")}</h3>
                          <div className="product-nav-models">
                            {featuredProducts.map((product) => (
                              <Link key={product.slug} href={`/products/${product.slug}`} onClick={() => setMenuOpen(false)}>
                                {product.shortName || product.name}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                      <Link className="product-nav-all" href={group.href} onClick={() => setMenuOpen(false)}>
                        {tProductNav("allCategory", { category: tProductNav(`categories.${selectedKey}` as never) })}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                    <div className="product-nav-feature">
                      <Image src={categoryImage} alt="" width={600} height={600} sizes="190px" />
                      <strong>{tProductNav(`categories.${selectedKey}` as never)}</strong>
                      <p>{tProductNav(`descriptions.${selectedKey}` as never)}</p>
                      <Link href={group.href} onClick={() => setMenuOpen(false)}>
                        {tProductNav("explore")} <span aria-hidden="true">→</span>
                      </Link>
                    </div>
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

            if (item.href === "/resources") {
              return (
                <div className="nav-dropdown" key={item.href}>
                  <Link className={active ? "active" : undefined} href={item.href} onClick={() => setMenuOpen(false)}>
                    {navLabel(item.href, item.label)}
                  </Link>
                  <div className="resources-mega-menu">
                    {resourcesMenu.map((group) => (
                      <div className={`mega-col mega-col-${group.label.toLowerCase()}`} key={group.label}>
                        <div className="mega-col-head">
                          <span className="mega-col-title" style={{ color: '#0b9b3f' }}>{group.label}</span>
                        </div>
                        <span className="mega-col-sub">
                          {group.label === "Engineering" ? "Select & Design" :
                           group.label === "Compliance" ? "Standards & Markets" :
                           "Procurement & Help"}
                        </span>
                        <ul className="mega-col-list">
                          {group.children.map((child) => (
                            <li key={child.href}>
                              <Link href={child.href} onClick={() => setMenuOpen(false)}>
                                <div>
                                  <span className="mega-item-label">{resourcesLabel(child.href, child.label)}</span>
                                  <span className="mega-item-desc">{child.desc}</span>
                                </div>
                                <span className="mega-arrow">→</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
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

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-bottom-nav" aria-label="Mobile quick navigation">
        <Link href="/" className={pathname === "/" ? "active" : ""} onClick={() => setMenuOpen(false)}>
          <span className="nav-icon">🏠</span>
          <span>Home</span>
        </Link>
        <Link href="/products" className={pathname.startsWith("/products") ? "active" : ""} onClick={() => setMenuOpen(false)}>
          <span className="nav-icon">📦</span>
          <span>Products</span>
        </Link>
        <Link href="/resources" className={pathname.startsWith("/resources") ? "active" : ""} onClick={() => setMenuOpen(false)}>
          <span className="nav-icon">📘</span>
          <span>Resources</span>
        </Link>
        <Link href="/contact" className={pathname === "/contact" ? "active" : ""} onClick={() => setMenuOpen(false)}>
          <span className="nav-icon">💬</span>
          <span>Chat Us</span>
        </Link>
      </nav>
    </>
  );
}
