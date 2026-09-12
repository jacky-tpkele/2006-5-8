"use client";

import { useState } from "react";
import Link from "next/link";

const products = [
  {
    category: "Solar DC Protection",
    href: "/products/solar-dc-protection",
    items: [
      { name: "DC MCB", href: "/products/dc-mcb" },
      { name: "DC SPD", href: "/products/dc-spd" },
      { name: "PV Combiner Box", href: "/products/pv-combiner-box" },
    ],
  },
  {
    category: "AC Circuit Protection",
    href: "/products/ac-circuit-protection",
    items: [
      { name: "AC MCB", href: "/products/ac-mcb" },
      { name: "AC SPD", href: "/products/ac-spd" },
    ],
  },
  {
    category: "Power Transfer & Control",
    href: "/products/power-transfer",
    items: [
      { name: "Automatic Transfer Switch", href: "/products/ats" },
    ],
  },
  {
    category: "Monitoring & Protection",
    href: "/products/monitoring",
    items: [
      { name: "Voltage Protector", href: "/products/voltage-protector" },
      { name: "Energy Meter", href: "/products/energy-meter" },
    ],
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-brand-800 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-lg font-bold text-brand-800 hidden sm:block">
              TPKELE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-800 rounded-md hover:bg-brand-50 transition-colors">
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-800 rounded-md hover:bg-brand-50 transition-colors flex items-center gap-1">
                Products
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open && (
                <div className="absolute top-full left-0 mt-1 w-[560px] bg-white rounded-xl shadow-xl border border-gray-100 p-4 grid grid-cols-2 gap-4">
                  {products.map((cat) => (
                    <div key={cat.category}>
                      <Link
                        href={cat.href}
                        className="block text-sm font-semibold text-brand-800 hover:text-accent mb-2 pb-1 border-b border-gray-100"
                      >
                        {cat.category}
                      </Link>
                      {cat.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block text-sm text-gray-600 hover:text-brand-700 py-1 pl-2 hover:bg-brand-50 rounded transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/projects" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-800 rounded-md hover:bg-brand-50 transition-colors">
              Projects
            </Link>
            <Link href="/solutions" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-800 rounded-md hover:bg-brand-50 transition-colors">
              Solutions
            </Link>
            <Link href="/oem" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-800 rounded-md hover:bg-brand-50 transition-colors">
              OEM/ODM
            </Link>
            <Link href="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-800 rounded-md hover:bg-brand-50 transition-colors">
              About
            </Link>
            <Link href="/downloads" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-800 rounded-md hover:bg-brand-50 transition-colors">
              Downloads
            </Link>
            <Link href="/blog" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-800 rounded-md hover:bg-brand-50 transition-colors">
              Blog
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors shadow-sm"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 py-3 pb-6 space-y-2">
            <Link href="/" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-brand-50 rounded-md" onClick={() => setMobileOpen(false)}>Home</Link>
            <p className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase">Products</p>
            {products.map((cat) => (
              <div key={cat.category} className="pl-3">
                <Link href={cat.href} className="block py-1.5 text-sm font-medium text-brand-800" onClick={() => setMobileOpen(false)}>
                  {cat.category}
                </Link>
                {cat.items.map((item) => (
                  <Link key={item.name} href={item.href} className="block py-1 pl-4 text-sm text-gray-600" onClick={() => setMobileOpen(false)}>
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}
            <Link href="/projects" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-brand-50 rounded-md" onClick={() => setMobileOpen(false)}>Projects</Link>
            <Link href="/solutions" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-brand-50 rounded-md" onClick={() => setMobileOpen(false)}>Solutions</Link>
            <Link href="/oem" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-brand-50 rounded-md" onClick={() => setMobileOpen(false)}>OEM/ODM</Link>
            <Link href="/about" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-brand-50 rounded-md" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/downloads" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-brand-50 rounded-md" onClick={() => setMobileOpen(false)}>Downloads</Link>
            <Link href="/blog" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-brand-50 rounded-md" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/contact" className="block mx-3 mt-3 px-4 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-lg text-center" onClick={() => setMobileOpen(false)}>
              Request Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
