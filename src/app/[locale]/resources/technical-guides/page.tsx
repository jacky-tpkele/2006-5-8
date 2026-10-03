import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { getAllGuides } from "@/data/guides";
import "./technical-guides.css";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: "Technical Guides | TPKELE Resources - Expert Selection Guides",
  description:
    "Comprehensive technical selection guides for electrical protection devices. Expert guidance on DC MCBs, SPDs, energy meters, ATS, and more. Step-by-step workflows for engineers and installers.",
  keywords: [
    "technical guides",
    "selection guide",
    "DC MCB guide",
    "SPD guide",
    "electrical engineering",
    "product selection",
    "ATS guide",
    "energy meter guide",
    "installation guide",
  ],
  openGraph: {
    title: "Technical Guides - Expert Selection Guides for Electrical Protection | TPKELE",
    description:
      "Step-by-step technical selection guides for DC MCB, SPD, ATS, Energy Meters, and more. Expert guidance for engineers and installers.",
    url: "https://www.tpkele.com/resources/technical-guides",
    siteName: "TPKELE",
    type: "website",
    images: [
      {
        url: "https://www.tpkele.com/images/resources/technical-guides-og.png",
        width: 1200,
        height: 630,
        alt: "TPKELE Technical Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Guides - Expert Selection Guides for Electrical Protection",
    description: "Comprehensive technical selection guides for DC MCB, SPD, ATS, Energy Meters, and more.",
    images: ["https://www.tpkele.com/images/resources/technical-guides-og.png"],
  },
  alternates: {
    canonical: "https://www.tpkele.com/resources/technical-guides",
  },
};

export default async function TechnicalGuidesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const guides = getAllGuides();

  return (
    <div className="technical-guides-page">
      <section className="guides-hero">
        <h1>Technical Guides</h1>
        <p>
          Expert selection guides for electrical protection devices. Step-by-step technical documentation for engineers, installers, and distributors.
        </p>
      </section>

      <section className="guides-grid">
        {guides.map((guide) => (
          <Link key={guide.slug} href={`/guides/${guide.slug}`} className="guide-card">
            <div className="guide-card-header">
              <h2>{guide.title}</h2>
              <div className="guide-card-meta">
                <span className="guide-badge">{guide.product}</span>
                <span className="guide-badge">{guide.application}</span>
              </div>
            </div>
            <p className="guide-card-description">{guide.description}</p>
            <div className="guide-card-sections">
              <span className="guide-sections-count">{guide.sections.length} sections</span>
              <span className="guide-arrow">→</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="guides-regional">
        <h2>Regional &amp; Market-Specific Guides</h2>
        <p>
          Some selection decisions depend on the destination market rather than the product family alone. These guides cover
          region-specific standards, ratings and compliance checks.
        </p>
        <div className="guides-regional-grid">
          <Link href="/blog/rcbo-australia-new-zealand-selection-guide" className="guides-regional-card">
            <span className="guides-regional-kicker">AUSTRALIA &amp; NEW ZEALAND</span>
            <strong>RCBO Australia &amp; New Zealand Selection Guide</strong>
            <span className="guides-regional-text">
              How to select an RCBO for AU/NZ installations: 30mA sensitivity, Type A vs Type AC, 6kA breaking capacity,
              1P+N 18mm design, wiring checks and AS/NZS 61009.1 compliance.
            </span>
            <span className="guides-regional-cta">Read the guide →</span>
          </Link>
        </div>
      </section>

      <section className="guides-cta">
        <h2>Need Export Compliance Guidance?</h2>
        <p>Check market-specific technical standards and certification requirements with our Market Access Advisor.</p>
        <Link href="/resources/market-access-advisor" className="guides-cta-button">
          Launch Market Access Advisor →
        </Link>
      </section>
    </div>
  );
}
