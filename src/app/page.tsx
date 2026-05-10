import Image from "next/image";
import Link from "next/link";
import { InquiryModal } from "@/components/InquiryModal";
import {
  applications,
  buyerSegments,
  certifications,
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
        <div className="hero-banner-inner">
          <div className="hero-banner-top">
            <div className="hero-banner-content">
              <h1 className="hero-banner-title">
                <span className="green">SOLAR DC &amp; LOW VOLTAGE</span>
                <span className="dark">PROTECTION SOLUTIONS</span>
              </h1>
              <span className="hero-banner-rule" aria-hidden="true" />
              <p className="hero-banner-slogan">Reliable Protection. Premium Quality. Global Trust.</p>

              <div className="hero-banner-tracks">
                <div className="hero-banner-track">
                  <span className="hero-banner-track-icon" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
                    </svg>
                  </span>
                  <div>
                    <strong>SOLAR DC PROTECTION</strong>
                    <span>Safe &amp; Efficient for PV Systems</span>
                  </div>
                </div>
                <div className="hero-banner-track">
                  <span className="hero-banner-track-icon" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3l8 3v6c0 4.5-3.4 8.5-8 9-4.6-.5-8-4.5-8-9V6l8-3z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </span>
                  <div>
                    <strong>LOW VOLTAGE PROTECTION</strong>
                    <span>Reliable Power, Everywhere</span>
                  </div>
                </div>
              </div>

              <div className="hero-banner-cta">
                <Link className="btn primary" href="/solar-dc-protection">
                  Explore Solar DC Range
                </Link>
                <InquiryModal triggerLabel="Request Catalog & Quote" triggerClassName="btn ghost" intent="catalog" />
              </div>

              <div className="hero-banner-stats">
                <div><strong>10+</strong><span>Years Manufacturing</span></div>
                <div><strong>100+</strong><span>Countries Served</span></div>
                <div><strong>1500V</strong><span>Solar DC Range</span></div>
                <div><strong>72h</strong><span>Quotation SLA</span></div>
              </div>
            </div>

            <div className="hero-banner-visual">
              <Image
                src="/assets/hero.png"
                alt="TPKELE Solar DC and Low Voltage Protection — solar PV panels with city skyline"
                width={1537}
                height={1023}
                priority
                sizes="(max-width: 1024px) 100vw, 720px"
                className="hero-panel-img"
              />
            </div>
          </div>

          <div className="hero-banner-products">
            <div className="hbp-group hbp-solar">
              <h2 className="hbp-title">SOLAR DC PROTECTION</h2>
              <div className="hbp-row">
                <Link className="hbp-card" href="/products/category/spd/dc-spd">
                  <Image src="/assets/home-products-normalized/spd.webp" alt="DC SPD" width={160} height={140} />
                  <strong>SPD</strong>
                  <span>Surge Protective Device</span>
                </Link>
                <Link className="hbp-card" href="/products/category/mcb/dc-mcb">
                  <Image src="/assets/home-products-normalized/mcb.webp" alt="DC MCB" width={160} height={140} />
                  <strong>MCB</strong>
                  <span>Miniature Circuit Breaker</span>
                </Link>
                <Link className="hbp-card" href="/products/category/combiner-box">
                  <Image src="/assets/home-products-normalized/combiner-box.webp" alt="PV Combiner Box" width={160} height={140} />
                  <strong>COMBINER BOX</strong>
                  <span>PV Combiner Box</span>
                </Link>
              </div>
            </div>

            <div className="hbp-group hbp-lv">
              <h2 className="hbp-title">LOW VOLTAGE PROTECTION</h2>
              <div className="hbp-row">
                <Link className="hbp-card" href="/products/category/energy-meter">
                  <Image src="/assets/home-products-normalized/din-rail-energy-meter.webp" alt="DIN Rail Energy Meter" width={160} height={140} />
                  <strong>ENERGY METER</strong>
                  <span>DIN Rail Energy Meter</span>
                </Link>
                <Link className="hbp-card" href="/products/category/voltage-protector">
                  <Image src="/assets/home-products-normalized/over-voltage-protector.webp" alt="Voltage Protector" width={160} height={140} />
                  <strong>VOLTAGE PROTECTOR</strong>
                  <span>Adjustable Voltage Protector</span>
                </Link>
                <Link className="hbp-card" href="/products/category/ats">
                  <Image src="/assets/home-products-normalized/ats.webp" alt="Automatic Transfer Switch" width={160} height={140} />
                  <strong>ATS</strong>
                  <span>Automatic Transfer Switch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-banner-features">
          <div className="hero-banner-feature">
            <span className="hbf-icon" aria-hidden="true">✓</span>
            <div><strong>Reliable Protection</strong></div>
          </div>
          <div className="hero-banner-feature">
            <span className="hbf-icon" aria-hidden="true">◆</span>
            <div><strong>Premium Quality</strong></div>
          </div>
          <div className="hero-banner-feature">
            <span className="hbf-icon" aria-hidden="true">⚙</span>
            <div><strong>OEM / ODM Support</strong></div>
          </div>
          <div className="hero-banner-feature">
            <span className="hbf-icon" aria-hidden="true">⌾</span>
            <div><strong>Global Solutions</strong></div>
          </div>
          <div className="hero-banner-feature">
            <span className="hbf-icon" aria-hidden="true">☎</span>
            <div><strong>Technical Support</strong></div>
          </div>
          <div className="hero-banner-feature">
            <span className="hbf-icon" aria-hidden="true">★</span>
            <div><strong>Certified Products</strong></div>
          </div>
        </div>
      </section>

      <section className="trust-band" aria-label="Certifications and standards">
        <div className="trust-band-head">
          <div>
            <p className="eyebrow" style={{ marginBottom: 6 }}>Certified for Global Tenders</p>
            <h2>CE / IEC / RoHS — Standards Buyers Trust</h2>
          </div>
          <Link className="text-link" href="/about">View certifications →</Link>
        </div>
        <div className="cert-row">
          {certifications.map((cert) => (
            <div className="cert-chip" key={cert.code}>
              <strong>{cert.code}</strong>
              <span>{cert.label}</span>
              <small>{cert.note}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="section compact track-section track-solar">
        <div className="track-heading">
          <span className="track-tag">Core Track · For Solar EPCs &amp; Installers</span>
          <h2 className="logo-color-title">Solar DC Protection</h2>
          <p>
            Purpose-built for photovoltaic strings, combiner boxes and battery storage. DC arc-quenching design rated up to 1500V — the
            range specified by solar EPCs and PV combiner-box assemblers worldwide.
          </p>
        </div>
        <div className="family-grid family-grid-3">
          {solarDcTrack.map((item) => (
            <article className="family-card family-card-solar" key={item.slug}>
              <Link href={item.href} className="family-card-media" aria-label={item.name}>
                <Image src={item.image} alt={item.name} width={320} height={220} />
              </Link>
              <div className="family-card-body">
                <span className="family-card-flag solar">For Solar EPC</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <Link className="text-link" href={item.href}>
                  View {item.count} {item.count === 1 ? "product" : "products"} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section compact track-section track-lv">
        <div className="track-heading">
          <span className="track-tag muted-tag">Foundation Track · For Distributors &amp; Panel Builders</span>
          <h2>Low Voltage Electrical Protection</h2>
          <p>
            A complete AC line for distribution panels, backup power and energy management — IEC-compliant components with stable lead
            times, OEM flexibility and container-load supply.
          </p>
        </div>
        <div className="family-grid family-grid-5">
          {lvTrack.map((item) => (
            <article className="family-card" key={item.slug}>
              <Link href={item.href} className="family-card-media" aria-label={item.name}>
                <Image src={item.image} alt={item.name} width={320} height={220} />
              </Link>
              <div className="family-card-body">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <Link className="text-link" href={item.href}>
                  View {item.count} {item.count === 1 ? "product" : "products"} →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="track-footer">
          <Link className="text-link" href="/products">
            View all products →
          </Link>
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
