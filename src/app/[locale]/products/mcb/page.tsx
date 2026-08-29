import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CategoryProductGrid } from "@/components/CategoryProductGrid";
import { InquiryModal } from "@/components/InquiryModal";
import {
  categoryContent,
  productMenu,
  products,
  site,
  subCategories,
} from "@/data/site";

export const metadata: Metadata = {
  title: categoryContent.MCB.seoTitle,
  description: categoryContent.MCB.seoDescription,
  keywords: categoryContent.MCB.seoKeywords,
  alternates: { canonical: "/products/mcb" },
  openGraph: {
    title: categoryContent.MCB.seoTitle,
    description: categoryContent.MCB.seoDescription,
    url: "/products/mcb",
    type: "website",
  },
};

export default function McbCategoryPage() {
  const category = "MCB";
  const content = categoryContent[category];
  const menuGroup = productMenu.find((g) => g.label === category);
  const items = products.filter((p) => p.parentCategory === category);
  const subs = subCategories.filter((s) => s.parent === category);
  const heroImage = items[0]?.image;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: content.seoTitle,
    description: content.seoDescription,
    url: `${site.url}/products/mcb`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Products", item: `${site.url}/products` },
        { "@type": "ListItem", position: 3, name: category, item: `${site.url}/products/mcb` },
      ],
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="slim-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/products">Products</Link>
        <span aria-hidden="true">/</span>
        <span className="current">{category}</span>
      </nav>

      <section className="section category-hero">
        <div>
          <p className="eyebrow">{category}</p>
          <h1>{content.hero}</h1>
          <p className="detail-copy">{content.intro}</p>
          <ul className="spec-list">
            {content.bullets.slice(0, 3).map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          {content.applications && content.applications.length > 0 && (
            <div className="app-pill-row" aria-label="Typical applications">
              {content.applications.slice(0, 5).map((a) => (
                <span className="app-pill" key={a}>{a}</span>
              ))}
            </div>
          )}
          <div className="button-row">
            <InquiryModal triggerLabel="Request Quotation" triggerClassName="btn primary" product={category} intent="quote" />
            <InquiryModal triggerLabel="Ask Technical Question" triggerClassName="btn ghost dark" product={category} intent="technical" title="Ask Technical Question" />
          </div>
        </div>
        {heroImage && (
          <div className="category-hero-image">
            <Image src={heroImage} alt={`${category} products`} width={520} height={520} priority />
          </div>
        )}
      </section>

      {subs.length > 0 && (
        <section className="section">
          <h2 className="sub-section-title">{category} Product Lines</h2>
          <div className="sub-category-grid">
            {subs.map((sub) => (
              <Link key={sub.slug} href={`/products/${sub.slug}`} className="sub-category-card">
                <h3>{sub.label}</h3>
                <p>{sub.intro}</p>
                <span className="text-link">View {sub.label} →</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CategoryProductGrid
        category={category}
        products={items}
        seriesOptions={menuGroup?.children ?? []}
        categorySlug="mcb"
      />

      {content.faq && content.faq.length > 0 && (
        <section className="section product-faq-section">
          <span className="section-mark" aria-hidden="true" />
          <h2 className="sub-section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {content.faq.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
