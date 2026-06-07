import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InquiryModal } from "@/components/InquiryModal";
import {
  products,
  site,
  subCategories,
  subCategoryBySlug,
} from "@/data/site";

const subCat = subCategoryBySlug["ac-spd"];

export const metadata: Metadata = {
  title: subCat.seoTitle,
  description: subCat.seoDescription,
  keywords: subCat.seoKeywords,
  alternates: { canonical: "/products/ac-spd" },
  openGraph: {
    title: subCat.seoTitle,
    description: subCat.seoDescription,
    url: "/products/ac-spd",
    type: "website",
  },
};

export default function AcSpdPage() {
  const items = products.filter((p) => p.subCategorySlug === "ac-spd");
  const cover = items[0]?.image;
  const category = "SPD";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: subCat.seoTitle,
    description: subCat.seoDescription,
    url: `${site.url}/products/ac-spd`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Products", item: `${site.url}/products` },
        { "@type": "ListItem", position: 3, name: category, item: `${site.url}/products/spd` },
        { "@type": "ListItem", position: 4, name: subCat.label, item: `${site.url}/products/ac-spd` },
      ],
    },
  };

  const otherSubs = subCategories.filter((s) => s.parent === category && s.slug !== "ac-spd");

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="slim-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/products">Products</Link>
        <span aria-hidden="true">/</span>
        <Link href="/products/spd">{category}</Link>
        <span aria-hidden="true">/</span>
        <span className="current">{subCat.label}</span>
      </nav>

      <section className="section category-hero">
        <div>
          <p className="eyebrow">{category} / {subCat.label}</p>
          <h1>{subCat.hero}</h1>
          <p className="detail-copy">{subCat.intro}</p>
          <div className="button-row">
            <InquiryModal
              triggerLabel="Request Quote"
              triggerClassName="btn primary"
              product={subCat.label}
              intent="quote"
            />
            <Link className="btn ghost dark" href="/products/spd">
              Back to {category}
            </Link>
          </div>
        </div>
        {cover && (
          <div className="detail-visual">
            <Image src={cover} alt={`${subCat.label} product family`} width={360} height={390} priority />
          </div>
        )}
      </section>

      <section className="section category-grid-section">
        <div className="category-grid-head">
          <div>
            <span className="section-mark" aria-hidden="true" />
            <h2 className="category-grid-title">{subCat.label} Products</h2>
          </div>
          <p className="muted">
            {items.length} {items.length > 1 ? "products" : "product"}
          </p>
        </div>

        <div className="product-grid">
          {items.map((product) => (
            <article className="product-card" key={product.slug}>
              <div className="product-card-image">
                <Image src={product.image} alt={product.name} width={220} height={220} />
              </div>
              <div className="product-card-body">
                <h3>{product.name}</h3>
                <div className="product-card-actions">
                  <Link className="small-btn outline" href={`/products/${product.slug}`}>
                    View Details
                  </Link>
                  <InquiryModal
                    triggerLabel="Inquire Now"
                    triggerClassName="small-btn primary"
                    product={product.name}
                    intent="quote"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {otherSubs.length > 0 && (
        <section className="section related-categories">
          <h2 className="sub-section-title">More in {category}</h2>
          <div className="sub-category-grid">
            {otherSubs.map((sub) => (
              <Link key={sub.slug} href={`/products/${sub.slug}`} className="sub-category-card">
                <h3>{sub.label}</h3>
                <p>{sub.intro}</p>
                <span className="text-link">View {sub.label} →</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
