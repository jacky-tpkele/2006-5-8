import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { InquiryModal } from "@/components/InquiryModal";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import { site } from "@/data/site";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "RCBO Australia & New Zealand | AS/NZS 61009.1 Type A 1P+N 18mm",
    description:
      "TPKELE RCBO for Australia and New Zealand: 1P+N 18mm single-module RCBO, 1-40A, 6kA, Type A & AC, 10/30mA, AS/NZS 61009.1. RCM compliant, OEM ready for switchboard builders and distributors.",
    keywords: [
      "RCBO Australia",
      "RCBO New Zealand",
      "AS/NZS 61009.1 RCBO",
      "RCM RCBO",
      "1P+N RCBO",
      "18mm RCBO",
      "Type A RCBO",
      "30mA RCBO",
      "RCBO manufacturer Australia",
      "switchboard RCBO",
    ],
    alternates: {
      canonical: localizedPath("/products/rcbo-australia-new-zealand", locale),
      languages: alternateLanguages("/products/rcbo-australia-new-zealand"),
    },
    openGraph: {
      title: "RCBO for Australia & New Zealand | AS/NZS 61009.1 Type A",
      description: "1P+N 18mm RCBO, 6kA, Type A & AC, 10/30mA. RCM compliant for AU/NZ switchboards.",
      url: `${site.url}/products/rcbo-australia-new-zealand`,
      type: "website",
    },
  };
}

export default async function RcboAuNzPage({ params }: PageProps) {
  const { locale } = await params;

  const products = [
    {
      slug: "rcbo-1pn-18mm-6ka",
      name: "1P+N 18mm RCBO 6kA",
      image: "/assets/products/rcbo-1pn-18mm/rcbo-1pn-18mm-front.webp",
      specs: ["1A–40A", "B/C curve", "Type A / AC", "10/30/50/100mA", "6kA", "18mm single module"],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "RCBO for Australia & New Zealand",
    description: "AS/NZS 61009.1 compliant RCBO with RCM marking for Australian and New Zealand switchboards.",
    url: `${site.url}/products/rcbo-australia-new-zealand`,
    brand: { "@type": "Brand", name: "TPKELE" },
    category: "Electrical Protection Devices",
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="slim-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/products">Products</Link>
        <span aria-hidden="true">/</span>
        <Link href="/products/category/rcbo">RCBO</Link>
        <span aria-hidden="true">/</span>
        <span className="current">Australia & New Zealand</span>
      </nav>

      <section className="section category-hero">
        <div>
          <p className="eyebrow">RCBO for Australia & New Zealand</p>
          <h1>AS/NZS 61009.1 RCBO with RCM Marking</h1>
          <p className="detail-copy">
            TPKELE supplies 1P+N 18mm RCBOs built to AS/NZS 61009.1 for Australian and New Zealand switchboards. Single-module design combines earth leakage protection (10 / 30 mA) with thermal-magnetic overcurrent protection (1–40A, B/C curve, 6kA breaking capacity) — the standard layout for one-RCBO-per-circuit installations now specified across residential and commercial projects in AU and NZ.
          </p>
          <ul className="spec-list">
            <li>AS/NZS 61009.1 compliant, RCM marking for AU/NZ market</li>
            <li>1P+N double break, 18mm single module</li>
            <li>Type A (detects AC + pulsating DC residual current) and Type AC</li>
            <li>10 / 30 / 50 / 100 mA residual sensitivity options</li>
            <li>6kA short-circuit breaking capacity, Ics = 100% Icn</li>
            <li>OEM branding and packaging for distributors</li>
          </ul>
          <div className="app-pill-row" aria-label="Typical applications">
            <span className="app-pill">Residential switchboards</span>
            <span className="app-pill">Commercial sub-boards</span>
            <span className="app-pill">Solar & battery AC circuits</span>
            <span className="app-pill">Wet areas & outdoor circuits</span>
            <span className="app-pill">EV charger circuits</span>
          </div>
          <div className="button-row">
            <InquiryModal triggerLabel="Request Quotation" triggerClassName="btn primary" product="RCBO Australia NZ" intent="quote" />
            <InquiryModal triggerLabel="Ask Technical Question" triggerClassName="btn ghost dark" product="RCBO Australia NZ" intent="technical" title="Ask Technical Question" />
          </div>
        </div>
        <div className="category-hero-image">
          <Image
            src="/assets/products/rcbo-1pn-18mm/rcbo-1pn-18mm-front.webp"
            alt="RCBO for Australia and New Zealand"
            width={520}
            height={520}
            priority
          />
        </div>
      </section>

      <section className="section">
        <span className="section-mark" aria-hidden="true" />
        <h2 className="sub-section-title">Why AU/NZ Switchboards Use 1P+N RCBOs</h2>
        <div style={{ maxWidth: 920, marginInline: "auto" }}>
          <p style={{ color: "var(--muted)", marginBottom: 24 }}>
            AS/NZS 3000 requires residual current protection on final circuits serving socket outlets and other specified loads. The one-RCBO-per-circuit layout has become the standard in Australian and New Zealand residential and commercial switchboards because:
          </p>
          <ul className="spec-list">
            <li>Each circuit has independent leakage protection — a fault on one circuit does not trip others.</li>
            <li>18mm single-module RCBOs save switchboard space compared to separate RCD + MCB combinations.</li>
            <li>Type A RCBOs detect both AC and pulsating DC residual currents from modern appliances (induction cooktops, inverters, LED drivers, EV chargers).</li>
            <li>30 mA sensitivity provides personal protection; 10 mA is used for special locations.</li>
          </ul>
        </div>
      </section>

      <section className="section muted">
        <div className="section-heading centered">
          <p className="eyebrow">Product Range</p>
          <h2>RCBO Models for AU/NZ Market</h2>
        </div>
        <div className="products-grid" style={{ marginTop: 40 }}>
          {products.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`} className="product-card">
              <div className="product-card-image">
                <Image src={product.image} alt={product.name} width={300} height={300} />
              </div>
              <div className="product-card-body">
                <h3>{product.name}</h3>
                <ul className="product-features">
                  {product.specs.map((spec, idx) => (
                    <li key={idx}>{spec}</li>
                  ))}
                </ul>
                <span className="product-card-cta">View Details →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading centered">
          <p className="eyebrow">Compliance & Documentation</p>
          <h2>Built for AU/NZ Switchboard Builders & Distributors</h2>
        </div>
        <div style={{ maxWidth: 920, marginInline: "auto", marginTop: 40 }}>
          <div className="trust-band-head">
            <div>
              <h3 className="sub-section-title" style={{ fontSize: "1.25rem" }}>AS/NZS 61009.1 Compliance</h3>
              <p style={{ color: "var(--muted)", marginTop: 8 }}>
                TPKELE RCBOs are designed and tested to AS/NZS 61009.1 (Residual current operated circuit-breakers with integral overcurrent protection). Test reports and RCM documentation are available for switchboard approval and compliance verification.
              </p>
            </div>
          </div>
          <div className="trust-band-head" style={{ marginTop: 32 }}>
            <div>
              <h3 className="sub-section-title" style={{ fontSize: "1.25rem" }}>RCM Marking & EESS Registration</h3>
              <p style={{ color: "var(--muted)", marginTop: 8 }}>
                RCM (Regulatory Compliance Mark) confirms that the product meets Australian and New Zealand electrical safety requirements. Our RCBOs carry RCM marking and can be registered on the Electrical Equipment Safety System (EESS) for supply to the AU/NZ market.
              </p>
            </div>
          </div>
          <div className="trust-band-head" style={{ marginTop: 32 }}>
            <div>
              <h3 className="sub-section-title" style={{ fontSize: "1.25rem" }}>Type A vs Type AC</h3>
              <p style={{ color: "var(--muted)", marginTop: 8 }}>
                Type AC RCBOs detect sinusoidal AC residual current only. Type A RCBOs also detect pulsating DC residual current produced by inverters, induction cooktops, LED drivers, washing machines and EV chargers. Type A is the safer choice for modern installations and is increasingly specified in Australia and New Zealand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section product-faq-section">
        <span className="section-mark" aria-hidden="true" />
        <h2 className="sub-section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          <details className="faq-item">
            <summary>Do these RCBOs have RCM certification for Australia and New Zealand?</summary>
            <p>
              Yes — TPKELE RCBOs carry RCM marking and comply with AS/NZS 61009.1. Test reports and RCM documentation are available for switchboard approval and EESS registration.
            </p>
          </details>
          <details className="faq-item">
            <summary>Which residual current rating should I use for residential circuits?</summary>
            <p>
              30 mA is the standard for personal protection on final circuits serving socket outlets, as required by AS/NZS 3000. 10 mA is used for special locations such as bathrooms and medical areas where additional sensitivity is specified.
            </p>
          </details>
          <details className="faq-item">
            <summary>Can I use these RCBOs for solar inverter and battery AC circuits?</summary>
            <p>
              Yes — Type A RCBOs are suitable for solar inverter AC outputs and battery storage AC circuits because they detect both AC and pulsating DC residual currents. Type AC RCBOs are not recommended for inverter circuits.
            </p>
          </details>
          <details className="faq-item">
            <summary>Do you support OEM branding for AU/NZ distributors?</summary>
            <p>
              Yes — logo printing, housing print, rating labels and packaging can be customised for distributor and brand-owner programs. Samples are available within 5–10 working days, and we provide RCM documentation under your brand where applicable.
            </p>
          </details>
          <details className="faq-item">
            <summary>What is the lead time for container orders to Australia?</summary>
            <p>
              Standard lead time is 25–35 days after order confirmation. We handle export documentation, container consolidation and shipping to Australian and New Zealand ports. Contact us for MOQ and freight quotes.
            </p>
          </details>
        </div>
      </section>

      <section className="section muted">
        <div className="oem-band">
          <div>
            <p className="eyebrow">OEM / Private Label</p>
            <h2 className="sub-section-title">Private Label RCBOs for AU/NZ Distributors</h2>
            <p style={{ color: "var(--muted)", marginTop: 10 }}>
              TPKELE supplies RCBOs under your brand with custom logo, housing print, rating labels and packaging. We provide RCM documentation and test reports for switchboard approval and EESS registration under your private label.
            </p>
            <div className="button-row" style={{ marginTop: 16 }}>
              <InquiryModal
                triggerLabel="Get OEM Proposal"
                triggerClassName="btn primary"
                product="RCBO Australia NZ OEM"
                intent="factory"
              />
            </div>
          </div>
          <ul>
            <li>Custom logo printing on housing and packaging</li>
            <li>Private-label rating labels and technical documentation</li>
            <li>RCM documentation and test reports under your brand</li>
            <li>Container-load supply with export documentation</li>
            <li>Sample preparation within 5–10 working days</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
