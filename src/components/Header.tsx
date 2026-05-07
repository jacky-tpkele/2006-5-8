"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { navItems, productMenu, products, site } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

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
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            if (item.href === "/products") {
              return (
                <div className="nav-dropdown" key={item.href}>
                  <Link className={active ? "active" : undefined} href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                  <div className="products-mega-menu">
                    {productMenu.map((group) => (
                      <Link className="mega-cell" href={group.href} key={group.label} onClick={() => setMenuOpen(false)}>
                        <span className="mega-cell-label">{group.label}</span>
                        <span className="mega-cell-arrow">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link key={item.href} className={active ? "active" : undefined} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="header-actions">
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
            <button className="icon-button search-close" type="button" aria-label="Close search" onClick={() => setSearchOpen(false)}>
              ×
            </button>
            <label htmlFor="site-search">Search products</label>
            <input
              id="site-search"
              type="search"
              placeholder="Try AC MCB, DC SPD, Plastic Box..."
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
                  <span className="text-link">View</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
