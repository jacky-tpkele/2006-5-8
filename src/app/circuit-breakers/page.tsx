import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CertIcon } from "@/components/CertIcon";
import { InquiryModal } from "@/components/InquiryModal";
import { PageTitle } from "@/components/PageTitle";
import { certifications } from "@/data/site";

export const metadata: Metadata = {
  title: "Circuit Breaker Manufacturer — AC MCB 1P 2P 3P 4P | TPKELE",
  description:
    "TPKELE circuit breaker manufacturer: AC miniature circuit breakers (MCB) 1P to 4P, 6A–63A, B/C/D trip curves, 6kA/10kA breaking capacity. IEC 60898-1 certified, CE & RoHS. OEM-ready for distributors and panel builders.",
  alternates: { canonical: "/circuit-breakers" },
  keywords: [
    "circuit breaker manufacturer",
    "AC MCB",
    "miniature circuit breaker",
    "MCB 1P",
    "MCB 2P",
    "MCB 3P",
    "MCB 4P",
    "AC circuit breaker supplier",
    "IEC 60898 MCB",
    "low voltage circuit breaker",
    "DIN rail MCB",
    "circuit breaker factory China",
  ],
};

const products = [
  {
    name: "AC MCB 1P",
    image: "/assets/landing/circuit-breakers/AC1P.jpg",
    description:
      "Single-pole miniature circuit breaker for branch circuit overload and short-circuit protection in residential and light commercial distribution boards.",
    href: "/products/category/mcb/ac-mcb",
    bullets: ["Single pole, DIN-rail 35mm", "6A–63A rated current", "B/C/D trip curves", "6kA / 10kA breaking capacity"],
  },
  {
    name: "AC MCB 2P",
    image: "/assets/landing/circuit-breakers/AC2P.png",
    description:
      "Two-pole MCB for line and neutral protection in single-phase circuits. Ideal for residential consumer units and small commercial panels.",
    href: "/products/category/mcb/ac-mcb",
    bullets: ["Line + neutral switching", "Single-phase full protection", "Compact 2-module width", "IEC 60898-1 certified"],
  },
  {
    name: "AC MCB 3P",
    image: "/assets/landing/circuit-breakers/AC3P.png",
    description:
      "Three-pole MCB for three-phase distribution branch protection in commercial and industrial systems. Motor feeders, HVAC and process loads.",
    href: "/products/category/mcb/ac-mcb",
    bullets: ["Three-phase protection", "Industrial & commercial use", "High inrush tolerance (D curve)", "20,000 mechanical operations"],
  },
  {
    name: "AC MCB 4P",
    image: "/assets/landing/circuit-breakers/AC4P.png",
    description:
      "Four-pole MCB for three-phase plus neutral switching. Required where neutral must be isolated for maintenance or where regulations mandate 4P protection.",
    href: "/products/category/mcb/ac-mcb",
    bullets: ["3-phase + neutral switching", "Full isolation capability", "Panel builder standard", "OEM logo & color available"],
  },
];

const advantages = [
  {
    title: "IEC 60898-1 Certified",
    text: "Every MCB tested and certified to IEC 60898-1 with CE and RoHS marking — accepted for project tenders in EU, Middle East, Southeast Asia and Latin America.",
  },
  {
    title: "6kA / 10kA Breaking Capacity",
    text: "High breaking capacity options for both residential (6kA) and industrial (10kA) installations, ensuring safe fault clearance close to transformers.",
  },
  {
    title: "B / C / D Trip Curves",
    text: "Full curve range: B for resistive loads, C for general distribution, D for motors and transformers — one supplier covers all your project needs.",
  },
  {
    title: "OEM & Private Label Ready",
    text: "Custom logo printing, housing color variants, dedicated packaging and private-label catalogs for distributors and brand owners.",
  },
];

const applications = [
  {
    title: "Residential Distribution Boards",
    text: "Branch circuit protection for apartments, houses and residential complexes. 1P and 2P MCBs with B/C curves for lighting, socket and appliance circuits.",
  },
  {
    title: "Commercial Buildings",
    text: "Office towers, retail and hospitality — 3P and 4P MCBs for HVAC, elevator feeders and sub-distribution panels with 10kA breaking capacity.",
  },
  {
    title: "Industrial Panel Building",
    text: "Motor control centers, process panels and factory distribution. D-curve MCBs handle high inrush from motors, compressors and welding equipment.",
  },
  {
    title: "Infrastructure & Public Works",
    text: "Street lighting, water treatment, telecom cabinets and municipal power distribution — reliable branch protection for long-life installations.",
  },
];

const faq = [
  {
    q: "What is the difference between B, C and D curve MCBs?",
    a: "B curve trips at 3–5x rated current — best for resistive loads like lighting and heating. C curve trips at 5–10x — the general-purpose choice for mixed loads. D curve trips at 10–20x — designed for high-inrush loads like motors, transformers and X-ray equipment.",
  },
  {
    q: "What breaking capacity do I need — 6kA or 10kA?",
    a: "6kA is sufficient for residential boards far from the transformer. Industrial and commercial panels close to the supply transformer typically need 10kA. Always check the prospective short-circuit current at the installation point.",
  },
  {
    q: "Do you supply MCBs with custom branding?",
    a: "Yes — we offer OEM logo printing on the housing, custom housing colors, branded packaging and private-label product catalogs. Minimum order quantities apply for custom programs.",
  },
  {
    q: "What certifications do your MCBs carry?",
    a: "All TPKELE AC MCBs are CE marked, RoHS compliant and designed to IEC 60898-1. Test reports and declaration of conformity documents are available for project tenders and customs clearance.",
  },
  {
    q: "Can I order samples before placing a bulk order?",
    a: "Yes — sample kits with 1P through 4P MCBs in your required current ratings and curves are available within 5–10 working days. Contact us with your specifications.",
  },
];

export default function CircuitBreakersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Circuit Breaker Manufacturer — AC MCB 1P 2P 3P 4P",
    description: metadata.description,
    url: "https://www.tpkele.com/circuit-breakers",
    hasPart: products.map((p) => ({
      "@type": "Product",
      name: `TPKELE ${p.name}`,
      description: p.description,
      image: `https://www.tpkele.com${p.image}`,
      url: `https://www.tpkele.com${p.href}`,
      brand: { "@type": "Brand", name: "TPKELE" },
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageTitle title="Circuit Breaker Manufacturer — AC MCB for Global Distribution" crumb="Circuit Breakers" />

      <section className="section compact">
        <div className="track-heading">
          <span className="track-tag">Core Track · Low Voltage Protection</span>
          <h2 className="logo-color-title">AC MCB · 1P · 2P · 3P · 4P</h2>
          <p>
            TPKELE manufactures AC miniature circuit breakers for residential, commercial and industrial distribution.
            1P to 4P configurations, 6A–63A, B/C/D trip curves, 6kA and 10kA breaking capacity — IEC 60898-1 certified
            and OEM-ready for distributors, panel builders and electrical contractors worldwide.
          </p>
          <p className="hero-slogan" style={{ marginTop: 12 }}>Protect Every Circuit — From Panel to Load.</p>
        </div>

        <div className="family-grid family-grid-3" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          {products.map((p) => (
            <article className="family-card" key={p.name}>
              <Link href={p.href} className="family-card-media" style={{ background: "#fff" }} aria-label={p.name}>
                <Image src={p.image} alt={`TPKELE ${p.name}`} width={320} height={220} unoptimized style={{ background: "#fff" }} />
              </Link>
              <div className="family-card-body">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <ul style={{ margin: "4px 0 6px", paddingLeft: 18, color: "var(--muted)", fontSize: 13, lineHeight: 1.6 }}>
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <Link className="text-link" href={p.href}>
                  View AC MCB range →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section muted">
        <div className="section-heading centered">
          <p className="eyebrow">Applications</p>
          <h2>Where TPKELE circuit breakers are installed</h2>
        </div>
        <div className="application-grid">
          {applications.map((u) => (
            <article className="application-item" key={u.title}>
              <h3>{u.title}</h3>
              <p>{u.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading centered">
          <p className="eyebrow">Why TPKELE</p>
          <h2>Circuit breakers engineered for global distribution</h2>
        </div>
        <div className="segment-grid">
          {advantages.map((r) => (
            <article className="segment-card" key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section muted">
        <div className="section-heading centered">
          <p className="eyebrow">Factory & Exhibition</p>
          <h2>Manufacturing capability you can verify</h2>
        </div>
        <div className="family-grid family-grid-3">
          <div className="family-card">
            <div className="family-card-media">
              <Image src="/assets/landing/circuit-breakers/factory-1.webp" alt="TPKELE circuit breaker production line" width={400} height={280} />
            </div>
            <div className="family-card-body">
              <h3>Automated Production</h3>
              <p>Modern assembly lines with automated testing ensure consistent quality across every batch.</p>
            </div>
          </div>
          <div className="family-card">
            <div className="family-card-media">
              <Image src="/assets/landing/circuit-breakers/factory-2.webp" alt="TPKELE quality control laboratory" width={400} height={280} />
            </div>
            <div className="family-card-body">
              <h3>Quality Laboratory</h3>
              <p>In-house testing lab verifies breaking capacity, trip curves and endurance per IEC standards.</p>
            </div>
          </div>
          <div className="family-card">
            <div className="family-card-media">
              <Image src="/assets/landing/circuit-breakers/exhibition-1.webp" alt="TPKELE exhibition booth" width={400} height={280} />
            </div>
            <div className="family-card-body">
              <h3>Global Exhibitions</h3>
              <p>We exhibit at SNEC, Canton Fair and Intersolar — meet us face-to-face and inspect samples.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-band" aria-label="Certifications and standards">
        <div className="trust-band-head">
          <div>
            <p className="eyebrow" style={{ marginBottom: 6 }}>Certified for International Tenders</p>
            <h2>CE / IEC / RoHS — Standards Distributors Trust</h2>
          </div>
          <Link className="text-link" href="/about">View certifications →</Link>
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

      <section className="section">
        <div className="section-heading centered">
          <p className="eyebrow">Frequently Asked</p>
          <h2>Circuit breaker selection — common questions</h2>
        </div>
        <div className="faq-list">
          {faq.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section cta-section">
        <div>
          <p className="eyebrow">MCB Project Supply · 72-hour Quotation</p>
          <h2>Send your project specs — get pricing for AC MCB 1P to 4P, any curve, any quantity.</h2>
        </div>
        <InquiryModal triggerLabel="Request MCB Quote" triggerClassName="btn primary" intent="quote" product="AC MCB" />
      </section>
    </main>
  );
}
