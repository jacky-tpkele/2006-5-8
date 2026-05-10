import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CertIcon } from "@/components/CertIcon";
import { InquiryModal } from "@/components/InquiryModal";
import { PageTitle } from "@/components/PageTitle";
import { certifications, products } from "@/data/site";

export const metadata: Metadata = {
  title: "Solar DC Protection — DC MCB, DC SPD & PV Combiner Box | TPKELE",
  description:
    "TPKELE solar DC protection: DC MCB, DC SPD and PV combiner boxes for photovoltaic strings, combiner stations and battery energy storage. Up to 1500V DC, IEC-certified, OEM-ready for solar EPCs and panel builders.",
  alternates: { canonical: "/solar-dc-protection" },
  keywords: [
    "solar DC protection",
    "DC MCB",
    "DC SPD",
    "PV combiner box",
    "1500V DC breaker",
    "PV surge protector",
    "solar circuit breaker manufacturer",
    "photovoltaic protection",
  ],
};

const countBySub = (slug: string) => products.filter((p) => p.subCategorySlug === slug).length;
const countByParent = (cat: string) => products.filter((p) => p.parentCategory === cat).length;

const coreProducts = [
  {
    name: "DC MCB",
    image: "/assets/home-products-normalized/mcb.webp",
    description:
      "Solar DC miniature circuit breakers with arc-quenching contacts for PV strings, DC bus and battery storage. 1P–4P, 6–63A, up to 1500V DC, IEC 60947-2 design.",
    href: "/products/category/mcb/dc-mcb",
    count: countBySub("dc-mcb"),
    bullets: ["1000V / 1500V DC system options", "1P–4P pole configurations", "DC arc breaking design", "IEC 60947-2 / CE / RoHS"],
  },
  {
    name: "DC SPD",
    image: "/assets/home-products-normalized/spd.webp",
    description:
      "PV DC surge protective devices for combiner boxes and inverter DC inputs. 600V / 1000V / 1500V Uoc, Type 1+2 / Type 2, pluggable cartridges with visual status windows.",
    href: "/products/category/spd/dc-spd",
    count: countBySub("dc-spd"),
    bullets: ["Uoc 600V / 1000V / 1500V DC", "Type 1+2 / Type 2 protection", "Pluggable cartridge design", "IEC 61643-31 / CE / RoHS"],
  },
  {
    name: "PV Combiner Box",
    image: "/assets/home-products-normalized/combiner-box.webp",
    description:
      "IP65 PV combiner boxes pre-assembled with DC fuses, DC SPDs and DC MCBs. Plastic and metal series, 2 / 4 / 6 / 8 / 12 / 16 string inputs, 1000V / 1500V DC ratings.",
    href: "/products/category/combiner-box",
    count: countByParent("Combiner Box"),
    bullets: ["IP65 outdoor enclosure", "2–16 string inputs", "Pre-assembled DC fuse / SPD / MCB", "Custom single-line diagrams"],
  },
];

const useCases = [
  {
    title: "Utility-Scale Solar Farms",
    text: "1500V DC architecture with combiner boxes feeding inverter shelters — DC MCBs and DC SPDs sized for high-current strings.",
  },
  {
    title: "Commercial & Industrial Rooftop",
    text: "1000V / 1500V combiner boxes, DC string protection and Type 2 DC SPDs for rooftop PV across factories, warehouses and retail.",
  },
  {
    title: "Residential PV Systems",
    text: "Compact plastic combiner boxes with integrated DC fuse, DC SPD and DC MCB — clean BOS for installer-friendly residential PV.",
  },
  {
    title: "Battery Energy Storage (BESS)",
    text: "DC MCBs for battery DC bus protection and DC SPDs at BMS / PCS DC inputs for hybrid solar-storage and standalone BESS sites.",
  },
];

const reasons = [
  { title: "Solar-First Engineering", text: "Every DC product designed and tested specifically for photovoltaic system voltages, arc behavior and outdoor service life." },
  { title: "Up to 1500V DC", text: "Full 1500V DC range across MCB, SPD and combiner boxes — the modern utility-scale standard for lower BOS cost." },
  { title: "IEC-Certified for Tenders", text: "IEC 60947-2 / IEC 61643-31 / IEC 61439, plus CE and RoHS — ready for EU, MENA, SEA and LATAM project tenders." },
  { title: "EPC & OEM Ready", text: "Custom single-line diagrams, project labelling, OEM logos and private-label catalogs — built for EPCs, distributors and brand owners." },
];

const faq = [
  {
    q: "Why do solar PV systems need DC-rated protection instead of AC MCBs?",
    a: "DC has no zero-crossing, so arcs persist longer at break. AC MCBs cannot safely interrupt PV string DC currents. Use DC MCBs and DC SPDs sized to the system Uoc (1000V or 1500V) for safe protection of strings, combiner boxes and battery DC bus.",
  },
  {
    q: "1000V vs 1500V DC — which should I specify?",
    a: "1500V DC is now the standard for utility-scale and most commercial PV due to lower BOS cost. 1000V DC remains common in residential and small commercial systems. We supply both ratings across DC MCB, DC SPD and combiner box ranges.",
  },
  {
    q: "Do your combiner boxes ship pre-assembled?",
    a: "Yes — standard IP65 combiner boxes ship pre-assembled with DC fuses, DC SPDs and DC MCBs per your single-line diagram. We provide CAD drawings and BOM packs for tender submission.",
  },
  {
    q: "Can I order a complete solar DC protection bundle for a project?",
    a: "Yes. Send us your project current, voltage and string layout — we will quote a matched bundle of DC MCBs, DC SPDs and combiner boxes with technical datasheets and certificates as one package.",
  },
];

export default function SolarDcProtectionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Solar DC Protection — DC MCB, DC SPD & PV Combiner Box",
    description: metadata.description,
    url: "https://www.tpkele.com/solar-dc-protection",
    hasPart: coreProducts.map((p) => ({
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

      <PageTitle title="Solar DC Protection — Built for Photovoltaic Systems" crumb="Solar DC Protection" />

      <section className="section compact">
        <div className="track-heading">
          <span className="track-tag">Core Track · Solar DC Protection</span>
          <h2 className="logo-color-title">DC MCB · DC SPD · PV Combiner Box</h2>
          <p>
            Purpose-built for photovoltaic strings, combiner stations, inverter DC inputs and battery energy storage. Up to
            1500V DC, IEC-certified, and engineered to be specified by solar EPCs, distributors and OEM buyers worldwide.
          </p>
          <p className="hero-slogan" style={{ marginTop: 12 }}>Protect Every Watt — From Solar to Socket.</p>
        </div>

        <div className="family-grid family-grid-3">
          {coreProducts.map((p) => (
            <article className="family-card family-card-solar" key={p.name}>
              <Link href={p.href} className="family-card-media" aria-label={p.name}>
                <Image src={p.image} alt={`TPKELE ${p.name}`} width={320} height={220} />
              </Link>
              <div className="family-card-body">
                <span className="family-card-flag solar">For Solar EPC</span>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <ul style={{ margin: "4px 0 6px", paddingLeft: 18, color: "var(--muted)", fontSize: 13, lineHeight: 1.6 }}>
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <Link className="text-link" href={p.href}>
                  View {p.count} {p.count === 1 ? "product" : "products"} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section muted">
        <div className="section-heading centered">
          <p className="eyebrow">Solar Applications</p>
          <h2>Where TPKELE Solar DC Protection is specified</h2>
        </div>
        <div className="application-grid">
          {useCases.map((u) => (
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
          <h2>Solar DC protection engineered for tenders and long-term service</h2>
        </div>
        <div className="segment-grid">
          {reasons.map((r) => (
            <article className="segment-card" key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="trust-band" aria-label="Certifications and standards">
        <div className="trust-band-head">
          <div>
            <p className="eyebrow" style={{ marginBottom: 6 }}>Certified for Global Solar Tenders</p>
            <h2>CE / IEC / RoHS — Standards Solar EPCs Trust</h2>
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
          <h2>Solar DC protection — common questions</h2>
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
          <p className="eyebrow">Solar DC Bundle · 72-hour Quotation</p>
          <h2>Send your PV project — get a matched DC MCB / DC SPD / Combiner Box bundle.</h2>
        </div>
        <InquiryModal triggerLabel="Request Solar DC Quote" triggerClassName="btn primary" intent="quote" />
      </section>
    </main>
  );
}
