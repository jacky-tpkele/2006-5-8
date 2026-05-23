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
    image: "/assets/landing/circuit-breakers/curve-b.png",
  },
  {
    curve: "C Curve",
    trip: "5–10× rated current",
    application: "General power distribution, sockets, small motors",
    image: "/assets/landing/circuit-breakers/curve-c.png",
  },
  {
    curve: "D Curve",
    trip: "10–20× rated current",
    application: "High inrush current equipment, transformers, welding machines",
    image: "/assets/landing/circuit-breakers/curve-d.png",
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
                    <Image src={o.image} alt={`TPKELE ${o.name}`} fill unoptimized style={{ objectFit: "contain" }} />
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

      {/* ─── Company Introduction ─── */}
      <section className="section">
        <div className="cb-company">
          <div className="cb-company-main">
            <div className="cb-company-photo">
              <Image src="/assets/landing/circuit-breakers/factory-building.png" alt="TPKELE manufacturing facility in Wenzhou, China" width={640} height={420} unoptimized />
            </div>
            <div className="cb-company-text">
              <p className="eyebrow">About TPKELE</p>
              <h2>Your Dedicated MCB Supply Partner</h2>
              <p>
                Based in Wenzhou — China's electrical manufacturing capital — TPKELE specializes in low-voltage circuit protection components for global distribution projects.
              </p>
              <p>
                Our facility covers the full production cycle from mold tooling and injection to assembly, testing, and packaging. Every MCB batch undergoes 100% electrical verification before shipment.
              </p>
              <ul className="cb-company-highlights">
                <li>In-house production with full QC traceability</li>
                <li>OEM/ODM capability — custom logo, label, and packaging</li>
                <li>IEC 60898-1 and CE certified product lines</li>
                <li>Export experience to 50+ countries</li>
              </ul>
              <InquiryModal triggerLabel="Learn More About Our Factory" triggerClassName="btn ghost dark" intent="factory" product="AC MCB" />
            </div>
          </div>
          <div className="cb-company-gallery">
            <Image src="/assets/landing/circuit-breakers/factory-2.webp" alt="TPKELE MCB production line" width={380} height={260} unoptimized />
            <Image src="/assets/landing/circuit-breakers/factory-3.webp" alt="TPKELE quality testing equipment" width={380} height={260} unoptimized />
            <Image src="/assets/landing/circuit-breakers/exhibition-1.webp" alt="TPKELE at international electrical trade show" width={380} height={260} unoptimized />
            <Image src="/assets/landing/circuit-breakers/exhibition-2.webp" alt="TPKELE exhibition booth" width={380} height={260} unoptimized />
            <Image src="/assets/landing/circuit-breakers/exhibition-3.webp" alt="TPKELE team at industry expo" width={380} height={260} unoptimized />
          </div>
        </div>
      </section>

      {/* ─── Technical Specifications ─── */}
      <section className="section muted">
        <div className="section-heading centered">
          <p className="eyebrow">Technical Specifications</p>
          <h2>AC MCB Specification Summary</h2>
        </div>
        <div className="cb-spec-layout">
          <div className="cb-spec-highlights">
            <div className="cb-highlight-card">
              <div className="cb-highlight-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h4v4H7zM13 7h4v4h-4zM7 13h4v4H7zM13 13h4v4h-4z"/></svg>
              </div>
              <span className="cb-highlight-label">POLES</span>
              <span className="cb-highlight-value">1P–4P</span>
            </div>
            <div className="cb-highlight-card">
              <div className="cb-highlight-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
              </div>
              <span className="cb-highlight-label">RATED CURRENT</span>
              <span className="cb-highlight-value">6A–63A</span>
            </div>
            <div className="cb-highlight-card">
              <div className="cb-highlight-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <span className="cb-highlight-label">RATED VOLTAGE</span>
              <span className="cb-highlight-value">AC 230V / 400V</span>
            </div>
            <div className="cb-highlight-card">
              <div className="cb-highlight-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 17l4-4 4 4 5-6 5 6"/><path d="M3 7h18"/></svg>
              </div>
              <span className="cb-highlight-label">TRIP CURVE</span>
              <span className="cb-highlight-value">B/C/D Curve</span>
            </div>
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
              <div className="cb-curve-img">
                <Image src={c.image} alt={`${c.curve} trip characteristic chart`} fill unoptimized style={{ objectFit: "contain" }} />
              </div>
              <div className="cb-curve-header">
                <h3>{c.curve}</h3>
                <span className="cb-curve-trip">{c.trip}</span>
              </div>
              <p>{c.application}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ─── Beyond Manufacturing ─── */}
      <section className="section">
        <div className="section-heading centered">
          <p className="eyebrow">Beyond Manufacturing</p>
          <h2>More Than Just a Circuit Breaker Manufacturer</h2>
          <div className="cb-heading-bar"></div>
          <p className="cb-beyond-subtitle">
            At TPKELE, we go beyond manufacturing by offering a suite of value-added services tailored to meet your project needs. Every customer receives personalized attention, expert guidance, and seamless support throughout their journey with us.
          </p>
        </div>
        <div className="cb-beyond-grid">
          <article className="cb-beyond-card">
            <div className="cb-beyond-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h3>Service Consultation</h3>
            <p>Whether your requirements are straightforward or complex, our team provides expert advice and technical consultation. For more intricate projects, we offer in-depth engineering support to ensure optimal product selection, guaranteeing safety and efficiency in your electrical systems.</p>
          </article>
          <article className="cb-beyond-card">
            <div className="cb-beyond-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h3>Product Recommendations</h3>
            <p>Unsure which circuit breaker suits your system? Our specialists provide free, customized recommendations based on your specific operational and environmental requirements, ensuring you get the perfect fit for your electrical protection needs.</p>
          </article>
          <article className="cb-beyond-card">
            <div className="cb-beyond-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </div>
            <h3>Logistics Support</h3>
            <p>If you lack a reliable freight forwarder, we can arrange transportation from our factory to your project site at no extra cost. Our logistics team ensures timely and secure delivery to keep your project on schedule, minimizing downtime and delays.</p>
          </article>
          <article className="cb-beyond-card">
            <div className="cb-beyond-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <h3>Installation Support</h3>
            <p>Need help with installation? Our technical team is available to answer your questions or provide hands-on support. For larger projects, we can even dispatch an engineer to your site for on-the-ground assistance, ensuring seamless integration within your electrical network.</p>
          </article>
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
