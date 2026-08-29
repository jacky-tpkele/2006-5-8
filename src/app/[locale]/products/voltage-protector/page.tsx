import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CategoryProductGrid } from "@/components/CategoryProductGrid";
import { CertIcon } from "@/components/CertIcon";
import { InquiryModal } from "@/components/InquiryModal";
import {
  categoryContent,
  certifications,
  getProductTechnicalSpecs,
  oemCapabilities,
  products,
  site,
} from "@/data/site";

export const metadata: Metadata = {
  title: categoryContent["Voltage Protector"].seoTitle,
  description: categoryContent["Voltage Protector"].seoDescription,
  keywords: categoryContent["Voltage Protector"].seoKeywords,
  alternates: { canonical: "/products/voltage-protector" },
  openGraph: {
    title: categoryContent["Voltage Protector"].seoTitle,
    description: categoryContent["Voltage Protector"].seoDescription,
    url: "/products/voltage-protector",
    type: "website",
  },
};

export default function VoltageProtectorCategoryPage() {
  const category = "Voltage Protector";
  const content = categoryContent[category];
  const items = products.filter((p) => p.parentCategory === category);
  const leadProduct = items[0];
  const heroImage = leadProduct?.image;
  const technicalSpecs = leadProduct ? getProductTechnicalSpecs(leadProduct) : [];

  const faqJsonLd = content.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: content.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: content.seoTitle,
    description: content.seoDescription,
    url: `${site.url}/products/voltage-protector`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Products", item: `${site.url}/products` },
        { "@type": "ListItem", position: 3, name: category, item: `${site.url}/products/voltage-protector` },
      ],
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

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
            {content.bullets.map((b) => (
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

      <CategoryProductGrid
        category={category}
        products={items}
        seriesOptions={[]}
        categorySlug="voltage-protector"
      />

      {content.applications && content.applications.length > 0 && (
        <section className="section product-application-section">
          <span className="section-mark" aria-hidden="true" />
          <h2 className="sub-section-title">Typical Applications</h2>
          <div className="app-pill-row">
            {content.applications.map((a) => (
              <span className="app-pill" key={a}>{a}</span>
            ))}
          </div>
        </section>
      )}

      {technicalSpecs.length > 0 && (
        <section className="section product-spec-section">
          <h2 className="product-spec-title">Technical Specifications</h2>
          <div className="product-spec-table-wrap">
            <table className="product-spec-table">
              <tbody>
                {technicalSpecs.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <section className="section">
        <div className="trust-band-head">
          <div>
            <p className="eyebrow" style={{ marginBottom: 6 }}>Certifications &amp; Standards</p>
            <h2 className="sub-section-title">Verified to international standards for global tenders</h2>
          </div>
        </div>
        <div className="cert-row">
          {certifications.map((cert) => (
            <div className="cert-chip" key={cert.code}>
              <CertIcon code={cert.code} className="cert-chip-icon" />
              <strong>{cert.label}</strong>
              <span>{cert.description}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section muted">
        <div className="oem-band">
          <div>
            <p className="eyebrow">OEM / ODM Available</p>
            <h2 className="sub-section-title">Private label this {category} for your brand</h2>
            <p style={{ color: "var(--muted)", marginTop: 10 }}>
              Logo, color housing, packaging and certificate documentation tailored to distributor and brand-owner programs.
            </p>
            <div className="button-row" style={{ marginTop: 16 }}>
              <InquiryModal
                triggerLabel="Get OEM Proposal"
                triggerClassName="btn primary"
                product={category}
                intent="factory"
              />
            </div>
          </div>
          <ul>
            {oemCapabilities.map((cap) => (
              <li key={cap}>{cap}</li>
            ))}
          </ul>
        </div>
      </section>

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
