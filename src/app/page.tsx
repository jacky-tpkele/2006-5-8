import Image from "next/image";
import Link from "next/link";
import { InquiryModal } from "@/components/InquiryModal";
import {
  applications,
  buyerSegments,
  exportMarkets,
  oemCapabilities,
  products,
  site,
} from "@/data/site";

export const metadata = {
  title: "Solar DC & Low Voltage Protection Manufacturer | TPKELE",
  description:
    "TPKELE engineers and manufactures IEC-certified DC circuit breakers, surge protective devices and PV combiner boxes for solar installations across 100+ countries — plus AC MCB, SPD, ATS, voltage protectors and energy meters.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: site.address,
    description: site.description,
    sameAs: [],
  };

  const countByParent = (cat: string) => products.filter((p) => p.parentCategory === cat).length;
  const countBySub = (slug: string) => products.filter((p) => p.subCategorySlug === slug).length;

  const solarDcTrack = [
    {
      slug: "dc-mcb",
      name: "DC MCB",
      image: "/assets/home-products-normalized/mcb.webp",
      description:
        "Solar DC miniature circuit breakers with arc-quenching design for PV strings, DC bus and battery storage — up to 1500V DC.",
      href: "/products/category/mcb/dc-mcb",
      count: countBySub("dc-mcb"),
    },
    {
      slug: "dc-spd",
      name: "DC SPD",
      image: "/assets/home-products-normalized/spd.webp",
      description:
        "PV DC surge protectors for combiner boxes and inverter DC inputs — Type 1+2 / Type 2, 600V / 1000V / 1500V Uoc options.",
      href: "/products/category/spd/dc-spd",
      count: countBySub("dc-spd"),
    },
    {
      slug: "combiner-box",
      name: "PV Combiner Box",
      image: "/assets/home-products-normalized/combiner-box.webp",
      description:
        "IP65 PV combiner boxes pre-assembled with DC fuses, DC SPDs and DC breakers — 2 to 16 string inputs, plastic or metal.",
      href: "/products/category/combiner-box",
      count: countByParent("Combiner Box"),
    },
  ];

  const lvTrack = [
    {
      slug: "ac-mcb",
      name: "AC MCB",
      image: "/assets/home-products-normalized/mcb.webp",
      description:
        "AC miniature circuit breakers, 1P–4P, 6–63A, B/C/D curves to IEC 60898-1 for residential, commercial and industrial AC distribution.",
      href: "/products/category/mcb/ac-mcb",
      count: countBySub("ac-mcb"),
    },
    {
      slug: "ac-spd",
      name: "AC SPD",
      image: "/assets/home-products-normalized/spd.webp",
      description:
        "AC surge protective devices — Type 1, Type 2 and Type 1+2 for distribution panels, telecom cabinets and inverter AC outputs.",
      href: "/products/category/spd/ac-spd",
      count: countBySub("ac-spd"),
    },
    {
      slug: "ats",
      name: "ATS",
      image: "/assets/home-products-normalized/ats.webp",
      description:
        "Automatic transfer switches that move critical loads between primary and backup power within milliseconds — 2/3/4P, 16–125A.",
      href: "/products/category/ats",
      count: countByParent("ATS"),
    },
    {
      slug: "voltage-protector",
      name: "Voltage Protector",
      image: "/assets/home-products-normalized/over-voltage-protector.webp",
      description:
        "Voltage protectors monitor incoming mains and disconnect downstream loads when the line moves outside safe limits.",
      href: "/products/category/voltage-protector",
      count: countByParent("Voltage Protector"),
    },
    {
      slug: "energy-meter",
      name: "Energy Meter",
      image: "/assets/home-products-normalized/din-rail-energy-meter.webp",
      description:
        "DIN rail energy meters measure active energy, current and voltage for distribution boards, sub-metering and tenant billing.",
      href: "/products/category/energy-meter",
      count: countByParent("Energy Meter"),
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero-banner" aria-label="TPKELE Solar DC and Low Voltage Protection Solutions">
        <Image
          src="/assets/factory-home.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-banner-bg"
          aria-hidden
        />
        <div className="hero-banner-inner">
          <div className="hero-banner-top">
            <div className="hero-banner-content">
              <h1 className="hero-banner-title">
                <span className="green">SOLAR DC &amp; LOW VOLTAGE</span>
                <span className="dark">PROTECTION SOLUTIONS</span>
              </h1>
              <span className="hero-banner-rule" aria-hidden="true" />

              <div className="hero-banner-tracks">
                <Link className="hero-banner-track" href="/solar-dc-protection">
                  <span className="hero-banner-track-icon" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
                    </svg>
                  </span>
                  <strong>SOLAR DC PROTECTION</strong>
                </Link>
                <Link className="hero-banner-track" href="/products">
                  <span className="hero-banner-track-icon" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3l8 3v6c0 4.5-3.4 8.5-8 9-4.6-.5-8-4.5-8-9V6l8-3z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </span>
                  <strong>LOW VOLTAGE PROTECTION</strong>
                </Link>
              </div>

              <div className="hero-banner-cta">
                <Link className="btn primary" href="/solar-dc-protection">
                  Explore Solar DC Range
                </Link>
                <InquiryModal triggerLabel="Request Catalog & Quote" triggerClassName="btn ghost dark" intent="catalog" />
              </div>

              <div className="hero-banner-stats">
                <div><strong>10+</strong><span>Years Manufacturing</span></div>
                <div><strong>100+</strong><span>Countries Served</span></div>
                <div><strong>1500V</strong><span>Solar DC Range</span></div>
                <div><strong>72h</strong><span>Quotation SLA</span></div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="procurement-flow" aria-label="B2B Procurement Flow">
        <div className="procurement-flow-inner">
          <div className="procurement-flow-head">
            <p className="eyebrow procurement-eyebrow">How We Work</p>
            <h2 className="procurement-title">
              <span className="green">Smooth B2B</span>
              <span className="white"> Procurement Flow</span>
            </h2>
            <p className="procurement-lede">We keep communication clear from first inquiry to final delivery, helping you shorten sourcing cycles and reduce project risk.</p>
          </div>

          <ol className="procurement-steps">
            <li className="procurement-step">
              <span className="procurement-step-num" aria-hidden="true">1</span>
              <h3>Share Requirements</h3>
              <p>Send your drawings, target market, and certification requirements.</p>
            </li>
            <li className="procurement-step">
              <span className="procurement-step-num" aria-hidden="true">2</span>
              <h3>Sample &amp; Validation</h3>
              <p>We arrange samples and technical confirmation before mass order.</p>
            </li>
            <li className="procurement-step">
              <span className="procurement-step-num" aria-hidden="true">3</span>
              <h3>Mass Production</h3>
              <p>Stable lead time with strict quality checks throughout production.</p>
            </li>
            <li className="procurement-step">
              <span className="procurement-step-num" aria-hidden="true">4</span>
              <h3>Delivery &amp; Support</h3>
              <p>Global shipping support and responsive after-sales communication.</p>
            </li>
          </ol>

          <div className="procurement-cta">
            <InquiryModal triggerLabel="Submit Your Requirements" triggerClassName="btn primary procurement-cta-btn" intent="quote" />
          </div>
        </div>
      </section>

      <section className="product-tracks" aria-label="Product Lines">
        <div className="product-tracks-inner">
          <div className="product-tracks-head">
            <p className="eyebrow product-tracks-eyebrow">Our Product Lines</p>
            <h2 className="product-tracks-title">
              <span className="green">Protection Solutions</span>
              <span className="ink"> Across Every Layer</span>
            </h2>
            <p className="product-tracks-lede">From solar DC strings to AC distribution — one supplier, certified product families, single point of communication.</p>
          </div>

          <div className="track-block">
            <div className="track-block-head">
              <span className="track-pill solar">For Solar EPCs &amp; Installers</span>
              <h3 className="track-block-title">Solar DC Protection</h3>
            </div>
            <div className="track-grid track-grid-3">
              {solarDcTrack.map((item) => (
                <Link href={item.href} className="track-card" key={item.slug} aria-label={item.name}>
                  <div className="track-card-media">
                    <Image src={item.image} alt={item.name} width={320} height={220} />
                  </div>
                  <div className="track-card-body">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <span className="track-card-link">
                      View {item.count} {item.count === 1 ? "product" : "products"} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="track-block">
            <div className="track-block-head">
              <span className="track-pill">For Distributors &amp; Panel Builders</span>
              <h3 className="track-block-title">Low Voltage Electrical Protection</h3>
            </div>
            <div className="track-grid track-grid-5">
              {lvTrack.map((item) => (
                <Link href={item.href} className="track-card" key={item.slug} aria-label={item.name}>
                  <div className="track-card-media">
                    <Image src={item.image} alt={item.name} width={320} height={220} />
                  </div>
                  <div className="track-card-body">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <span className="track-card-link">
                      View {item.count} {item.count === 1 ? "product" : "products"} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="product-tracks-footer">
              <Link className="btn ghost dark" href="/products">View all products →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading centered">
          <p className="eyebrow">Built for Your Procurement Role</p>
          <h2>The protection partner for solar EPCs, distributors and panel builders</h2>
        </div>
        <div className="segment-grid">
          {buyerSegments.map((seg) => (
            <article className="segment-card" key={seg.title}>
              <span className="line-icon">{seg.icon}</span>
              <h3>{seg.title}</h3>
              <p>{seg.text}</p>
              <Link className="text-link" href="/contact">{seg.cta} →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section market-band muted">
        <div className="section-heading centered">
          <p className="eyebrow">Global Reach</p>
          <h2>Exporting to 100+ countries across six regions</h2>
        </div>
        <div className="market-grid">
          {exportMarkets.map((m) => (
            <div className="market-card" key={m.region}>
              <strong>{m.region}</strong>
              <span>{m.countries}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section muted">
        <div className="section-heading centered">
          <p className="eyebrow">Applications</p>
          <h2>Engineered for solar, industrial and infrastructure power</h2>
        </div>
        <div className="application-grid">
          {applications.map((item) => (
            <article className="application-item" key={item.title}>
              <span className="line-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="oem-band">
          <div>
            <p className="eyebrow">OEM / ODM Manufacturing</p>
            <h2>Your brand, our factory.</h2>
            <p style={{ color: "var(--muted)", marginTop: 12 }}>
              From custom logo printing to dedicated catalogs and project-spec documentation — we partner with distributors,
              importers and brand owners to deliver a complete private-label protection program.
            </p>
            <div className="button-row" style={{ marginTop: 18 }}>
              <InquiryModal triggerLabel="Get OEM Proposal" triggerClassName="btn primary" intent="factory" />
              <Link className="btn ghost dark" href="/about">About the factory</Link>
            </div>
          </div>
          <ul>
            {oemCapabilities.map((cap) => (
              <li key={cap}>{cap}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="stats-band">
        <div><strong>10+</strong><span>Years Experience</span></div>
        <div><strong>100+</strong><span>Countries Served</span></div>
        <div><strong>2000+</strong><span>Projects Completed</span></div>
        <div><strong>100%</strong><span>Quality Inspection</span></div>
        <div><strong>OEM/ODM</strong><span>Flexible Service</span></div>
      </section>

      <section className="section cta-section">
        <div>
          <p className="eyebrow">Fast Quotation · 72-hour Response</p>
          <h2>Send your product list — receive technical matching, datasheet pack and pricing.</h2>
        </div>
        <InquiryModal triggerLabel="Submit Inquiry" triggerClassName="btn primary" intent="quote" />
      </section>

      <a
        className="float-whatsapp"
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello TPKELE, I'd like a catalog and quotation for solar / low voltage protection products.")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        ☏
      </a>
    </main>
  );
}
