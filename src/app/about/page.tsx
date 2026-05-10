import type { Metadata } from "next";
import Image from "next/image";
import { InquiryModal } from "@/components/InquiryModal";
import { PageTitle } from "@/components/PageTitle";
import { certifications, exportMarkets, oemCapabilities } from "@/data/site";

export const metadata: Metadata = {
  title: "About TPKELE | Solar & Low Voltage Protection Manufacturer",
  description: "TPKELE — ISO 9001 manufacturer of DC MCB, AC MCB, DC SPD, AC SPD, PV combiner box, ATS and energy meters. CE / IEC / RoHS certified, exporting to 100+ countries.",
  alternates: { canonical: "/about" },
};

const factoryImages = [
  { src: "/assets/about/factory-1.webp", alt: "Factory assembly line" },
  { src: "/assets/about/factory-2.webp", alt: "Electrical product production workshop" },
  { src: "/assets/about/factory-3.webp", alt: "Quality inspection area" },
];

const exhibitionImages = [
  { src: "/assets/about/exhibition-1.webp", alt: "TPKELE exhibition booth" },
  { src: "/assets/about/exhibition-2.webp", alt: "Product discussion at exhibition" },
  { src: "/assets/about/exhibition-3.webp", alt: "TPKELE team at industry exhibition" },
];

const values = [
  { icon: "✓", title: "Experienced Team", text: "Fast technical matching for product lists, drawings and tenders." },
  { icon: "⚙", title: "Advanced Equipment", text: "Standardized production and inspection for repeatable output." },
  { icon: "◎", title: "Quality Control", text: "Routine checks for appearance, function, marking and packaging." },
  { icon: "↗", title: "Global Export", text: "Export packaging and documentation support for overseas buyers." },
  { icon: "◇", title: "OEM/ODM Service", text: "Logo, label, packaging and specification customization." },
];

export default function AboutPage() {
  return (
    <main>
      <PageTitle title="About Us" crumb="About Us" />

      <section className="section split">
        <div>
          <p className="eyebrow">Who We Are</p>
          <h2>Solar & low voltage protection manufacturing for project buyers worldwide.</h2>
          <p>
            TPKELE is an ISO 9001 manufacturer dedicated to solar DC protection and low voltage electrical components. Our product program covers DC MCB, AC MCB, DC SPD, AC SPD, PV combiner boxes, ATS, voltage protectors and DIN-rail energy meters — engineered to IEC standards and CE / RoHS compliant. We support solar EPCs, electrical distributors, OEM buyers, panel builders, industrial contractors and importers with technical product matching, certificate documentation, custom OEM programs and reliable container-load delivery.
          </p>
          <InquiryModal triggerLabel="Request Factory Profile" triggerClassName="btn primary" intent="factory" />
        </div>
        <Image className="feature-image" src="/assets/about/building.webp" alt="TPKELE headquarters and factory building" width={620} height={378} />
      </section>

      <section className="trust-band">
        <div className="trust-band-head">
          <p className="eyebrow">Certifications & Standards</p>
          <h2>Independently verified for international tenders</h2>
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

      <section className="section compact">
        <div className="section-heading centered">
          <p className="eyebrow">Our Factory</p>
          <h2>Controlled production from assembly to inspection</h2>
        </div>
        <div className="media-grid">
          {factoryImages.map((image) => (
            <Image src={image.src} alt={image.alt} width={390} height={200} key={image.src} />
          ))}
        </div>
      </section>

      <section className="section compact">
        <div className="section-heading centered">
          <p className="eyebrow">Our Exhibition</p>
          <h2>Meeting partners through global industry events</h2>
        </div>
        <div className="media-grid">
          {exhibitionImages.map((image) => (
            <Image src={image.src} alt={image.alt} width={390} height={200} key={image.src} />
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

      <section className="section">
        <div className="oem-band">
          <div>
            <p className="eyebrow">OEM / ODM Manufacturing</p>
            <h2>Your brand, our factory.</h2>
            <p>
              We partner with distributors, importers and brand owners to deliver complete private-label protection programs — from logo and packaging through to custom catalogs and project documentation.
            </p>
            <div className="button-row">
              <InquiryModal triggerLabel="Get OEM Proposal" triggerClassName="btn primary" intent="factory" />
            </div>
          </div>
          <ul>
            {oemCapabilities.map((cap) => (
              <li key={cap}>{cap}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section muted">
        <div className="section-heading centered">
          <p className="eyebrow">Why Choose Us</p>
          <h2>Support that makes procurement easier</h2>
        </div>
        <div className="value-grid">
          {values.map((value) => (
            <article key={value.title}>
              <span className="line-icon">{value.icon}</span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
