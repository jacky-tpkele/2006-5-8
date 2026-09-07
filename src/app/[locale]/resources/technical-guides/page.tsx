import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { getAllGuides } from "@/data/guides";
import "./technical-guides.css";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: "Technical Guides | TPKELE Resources",
  description: "Comprehensive technical selection guides for electrical protection devices. Expert guidance on DC MCBs, SPDs, energy meters, and more.",
  keywords: ["technical guides", "selection guide", "DC MCB guide", "SPD guide", "electrical engineering"],
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

        {/* Placeholder for future guides */}
        <div className="guide-card coming-soon">
          <div className="guide-card-header">
            <h2>AC MCB Selection Guide</h2>
            <div className="guide-card-meta">
              <span className="guide-badge">AC MCB</span>
              <span className="guide-badge">Coming Soon</span>
            </div>
          </div>
          <p className="guide-card-description">Complete guide for AC miniature circuit breaker selection in distribution and building applications.</p>
        </div>

        <div className="guide-card coming-soon">
          <div className="guide-card-header">
            <h2>SPD Selection Guide</h2>
            <div className="guide-card-meta">
              <span className="guide-badge">SPD</span>
              <span className="guide-badge">Coming Soon</span>
            </div>
          </div>
          <p className="guide-card-description">Surge protection device selection for AC/DC systems and lightning protection.</p>
        </div>

        <div className="guide-card coming-soon">
          <div className="guide-card-header">
            <h2>Energy Meter Guide</h2>
            <div className="guide-card-meta">
              <span className="guide-badge">Energy Meter</span>
              <span className="guide-badge">Coming Soon</span>
            </div>
          </div>
          <p className="guide-card-description">Smart metering and sub-metering installation guide for commercial and industrial applications.</p>
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
