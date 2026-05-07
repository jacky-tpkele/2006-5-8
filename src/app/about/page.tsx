import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about TPKELE manufacturing, factory capability, exhibitions and quality control.",
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
          <h2>Reliable low voltage manufacturing for project buyers.</h2>
          <p>
            TPKELE focuses on low voltage electrical protection products and supports customers with product selection, sample preparation,
            packaging design and project delivery coordination.
          </p>
          <p>
            We serve distributors, panel builders, solar installers and infrastructure contractors who need stable quality, responsive
            communication and flexible OEM/ODM cooperation.
          </p>
          <Link className="btn primary" href="/contact?intent=factory">
            Learn More About Us
          </Link>
        </div>
        <Image className="feature-image" src="/assets/about/building.webp" alt="TPKELE headquarters and factory building" width={620} height={378} />
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
