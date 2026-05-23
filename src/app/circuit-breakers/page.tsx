import type { Metadata } from "next";
import Image from "next/image";
import { InquiryModal } from "@/components/InquiryModal";

export const metadata: Metadata = {
  title: "AC Miniature Circuit Breaker Supplier — MCB 1P–4P | TPKELE",
  description:
    "TPKELE supplies AC miniature circuit breakers (MCB) for residential, commercial, and industrial distribution. 1P to 4P, 6A–63A, B/C/D trip curves, 6kA/10kA breaking capacity. IEC 60898-1 certified, OEM-ready.",
  alternates: { canonical: "/circuit-breakers" },
  keywords: [
    "AC miniature circuit breaker supplier",
    "MCB manufacturer",
    "DIN rail MCB",
    "circuit breaker 1P 2P 3P 4P",
    "IEC 60898 MCB",
    "low voltage circuit breaker",
  ],
};

const features = [
  { title: "Protection", text: "Overload and short-circuit protection for low-voltage AC systems", image: "/assets/landing/circuit-breakers/feat-protection.png" },
  { title: "Installation", text: "35mm DIN rail mounting, tool-free snap-on design", image: "/assets/landing/circuit-breakers/feat-installation.png" },
  { title: "Options", text: "1P, 2P, 3P, 4P configurations available", image: "/assets/landing/circuit-breakers/feat-options.png" },
  { title: "Applications", text: "Distribution boards, control panels, machinery protection", image: "/assets/landing/circuit-breakers/feat-applications.png" },
];

const specs = [
  { label: "Product Name", value: "AC Miniature Circuit Breaker" },
  { label: "Poles", value: "1P, 2P, 3P, 4P" },
  { label: "Rated Current", value: "6A, 10A, 16A, 20A, 25A, 32A, 40A, 50A, 63A" },
  { label: "Rated Voltage", value: "AC 230V / 400V" },
  { label: "Trip Curve", value: "B Curve, C Curve, D Curve" },
  { label: "Breaking Capacity", value: "4.5kA / 6kA / 10kA (model dependent)" },
  { label: "Mounting", value: "35mm DIN Rail" },
  { label: "Application", value: "Low-voltage power distribution" },
  { label: "Customization", value: "Logo, label, and packaging options available" },
];

const options = [
  {
    name: "1P AC MCB",
    description: "Single-phase circuit protection for branch circuits in residential and light commercial panels.",
    image: "/assets/landing/circuit-breakers/card-1p.png",
  },
  {
    name: "2P AC MCB",
    description: "Line and neutral protection for single-phase systems requiring full isolation.",
    image: "/assets/landing/circuit-breakers/card-2p.png",
  },
  {
    name: "3P AC MCB",
    description: "Three-phase power distribution protection for commercial and industrial feeders.",
    image: "/assets/landing/circuit-breakers/card-3p.png",
  },
  {
    name: "4P AC MCB",
    description: "Three-phase with neutral protection where full four-pole isolation is required.",
    image: "/assets/landing/circuit-breakers/card-4p.png",
  },
];

const curves = [
  {
    curve: "B Curve",
    trip: "3–5× rated current",
    application: "Lighting circuits, resistive loads, cable protection",
  },
  {
    curve: "C Curve",
    trip: "5–10× rated current",
    application: "General power distribution, sockets, small motors",
  },
  {
    curve: "D Curve",
    trip: "10–20× rated current",
    application: "High inrush current equipment, transformers, welding machines",
  },
];

export default function CircuitBreakersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AC Miniature Circuit Breaker",
    description: metadata.description,
    url: "https://www.tpkele.com/circuit-breakers",
    brand: { "@type": "Brand", name: "TPKELE" },
    category: "Electrical Protection Devices",
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />


      {/* ─── Hero Section ─── */}
      <section className="cb-hero">
        <div className="cb-hero-inner">
          <div className="cb-hero-content">
            <h2>AC Miniature Circuit Breaker Supplier</h2>
            <p className="cb-hero-subtitle">
              Reliable DIN rail MCBs for residential, commercial, and industrial power distribution systems.
            </p>
            <div className="cb-hero-params">
              <span className="cb-param-tag">1P / 2P / 3P / 4P</span>
              <span className="cb-param-tag">6A – 63A</span>
              <span className="cb-param-tag">B / C / D Curve</span>
              <span className="cb-param-tag">AC 230V / 400V</span>
            </div>
            <div className="cb-hero-cta">
              <InquiryModal triggerLabel="Request a Quote" triggerClassName="btn primary" intent="quote" product="AC MCB" />
              <InquiryModal triggerLabel="Send Your Specifications" triggerClassName="btn ghost dark" intent="specs" product="AC MCB" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Available Options ─── */}
      <section className="section">
        <div className="section-heading centered">
          <p className="eyebrow">Available Options</p>
          <h2>AC MCB Pole Configurations</h2>
        </div>
        <div className="cb-options-grid">
          {options.map((o) => (
            <InquiryModal
              key={o.name}
              triggerLabel={o.name}
              triggerClassName="cb-option-card"
              triggerContent={
                <>
                  <div className="cb-option-media">
                    <Image src={o.image} alt={`TPKELE ${o.name}`} width={280} height={220} unoptimized style={{ background: "#fff" }} />
                  </div>
                  <div className="cb-option-body">
                    <h3>{o.name}</h3>
                    <p>{o.description}</p>
                  </div>
                </>
              }
              product={o.name}
              intent="quote"
            />
          ))}
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="section muted">
        <div className="section-heading centered">
          <h2>Engineered for Reliability</h2>
        </div>
        <div className="cb-feat-grid">
          {features.map((f) => (
            <article className="cb-feat-card" key={f.title}>
              <div className="cb-feat-media">
                <Image src={f.image} alt={f.title} width={360} height={240} unoptimized />
              </div>
              <div className="cb-feat-body">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── Technical Specifications ─── */}
      <section className="section muted">
        <div className="section-heading centered">
          <p className="eyebrow">Technical Specifications</p>
          <h2>AC MCB Specification Summary</h2>
        </div>
        <div className="cb-spec-table-wrap">
          <table className="cb-spec-table">
            <tbody>
              {specs.map((s) => (
                <tr key={s.label}>
                  <th>{s.label}</th>
                  <td>{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="cb-section-cta">
          <InquiryModal triggerLabel="Request Datasheet" triggerClassName="btn primary" intent="datasheet" product="AC MCB" />
        </div>
      </section>

      {/* ─── Trip Curve Guide ─── */}
      <section className="section muted">
        <div className="section-heading centered">
          <p className="eyebrow">Selection Guide</p>
          <h2>Trip Curve Comparison</h2>
        </div>
        <p className="cb-overview-text">
          Select the correct trip curve based on the load characteristics of your circuit.
          The trip curve determines the instantaneous magnetic trip threshold relative to the rated current.
        </p>
        <div className="cb-curve-grid">
          {curves.map((c) => (
            <article className="cb-curve-card" key={c.curve}>
              <div className="cb-curve-header">
                <h3>{c.curve}</h3>
                <span className="cb-curve-trip">{c.trip}</span>
              </div>
              <p>{c.application}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="section cta-section">
        <div>
          <p className="eyebrow">MCB Supply · 72-Hour Quotation</p>
          <h2>Send your project specifications — get pricing for AC MCB in any configuration.</h2>
        </div>
        <InquiryModal triggerLabel="Request a Quote" triggerClassName="btn primary" intent="quote" product="AC MCB" />
      </section>
    </main>
  );
}
