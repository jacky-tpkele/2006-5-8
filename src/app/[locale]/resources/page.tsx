import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import "./resources.css";

export const metadata: Metadata = {
  title: "Resources | TPKELE",
  description:
    "Technical guides, market access advisor, standards database, application solutions and FAQ knowledge base for electrical products.",
};

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ResourcesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="resources-page">
      <section className="resources-hero">
        <div className="hero-container">
          <h1>Resources & Tools</h1>
          <p>
            Technical guidance, compliance intelligence and engineering support for global electrical product decisions.
          </p>
        </div>
      </section>

      <section className="resources-categories">
        <div className="categories-container">
          {/* Technical Guides */}
          <div className="resource-card featured">
            <div className="card-header">
              <h2>Technical Guides</h2>
              <span className="card-badge">SELECTION GUIDES</span>
            </div>
            <p className="card-description">
              Expert selection guides for electrical protection devices. Step-by-step technical documentation for engineers, installers, and distributors.
            </p>
            <div className="featured-cta">
              <Link href="/resources/technical-guides" className="launch-button">
                Browse Technical Guides
                <span className="arrow">→</span>
              </Link>
            </div>
            <ul className="feature-list">
              <li>✓ 10+ comprehensive selection guides</li>
              <li>✓ DC MCB, SPD, ATS, Energy Meters</li>
              <li>✓ Step-by-step workflows</li>
              <li>✓ Connected to Market Access Advisor</li>
            </ul>
          </div>

          {/* Market Access Advisor */}
          <div className="resource-card">
            <div className="card-header">
              <h2>Market Access Advisor</h2>
              <span className="card-badge">COMPLIANCE TOOL</span>
            </div>
            <p className="card-description">
              Interactive compliance tool for technical standards, market-access requirements and certification needs.
            </p>
            <div className="featured-cta">
              <Link href="/electrical-international-standards-inquiry-center" className="launch-button">
                Launch Market Access Advisor
                <span className="arrow">→</span>
              </Link>
            </div>
            <ul className="feature-list">
              <li>✓ Product-specific compliance rules</li>
              <li>✓ 195+ countries & markets</li>
              <li>✓ Technical standard mapping</li>
              <li>✓ Evidence-based guidance</li>
            </ul>
          </div>

          {/* Standards Database */}
          <div className="resource-card">
            <div className="card-header">
              <h2>Standards Database</h2>
              <span className="card-badge">REFERENCE</span>
            </div>
            <p className="card-description">
              Search 32 international electrical standards by product, application and reference type. IEC & UL official sources.
            </p>
            <div className="featured-cta">
              <Link href="/electric-standards-database" className="launch-button">
                Browse Standards Database
                <span className="arrow">→</span>
              </Link>
            </div>
            <ul className="feature-list">
              <li>✓ 32 official-source standards</li>
              <li>✓ IEC & UL references</li>
              <li>✓ Product relevance mapping</li>
              <li>✓ Connected to Market Access Advisor</li>
            </ul>
          </div>

          {/* Buyer Trade Support - Keep existing */}
          <div className="resource-card">
            <div className="card-header">
              <h2>Buyer Trade Support</h2>
              <span className="card-badge">DOCUMENTATION</span>
            </div>
            <p className="card-description">
              Certificates, technical files, OEM support and trade documentation assistance.
            </p>
            <ul className="card-links">
              <li>
                <Link href="/resources/buyer-trade-support">
                  Access Trade Support
                  <span className="arrow">→</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  EN/CE Marking Requirements
                  <span className="arrow">→</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  Regional Compliance Overview
                  <span className="arrow">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Application Solutions */}
          <div className="resource-card">
            <div className="card-header">
              <h2>Application Solutions</h2>
              <span className="card-badge">CASE STUDIES</span>
            </div>
            <p className="card-description">
              Real-world application examples, system design guidance and project case studies.
            </p>
            <ul className="card-links">
              <li>
                <Link href="/solar-dc-protection">
                  Solar PV System Protection
                  <span className="arrow">→</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  Residential Distribution Boards
                  <span className="arrow">→</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  Commercial & Industrial Projects
                  <span className="arrow">→</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  Energy Storage Integration
                  <span className="arrow">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* FAQ Knowledge Base */}
          <div className="resource-card">
            <div className="card-header">
              <h2>FAQ Knowledge Base</h2>
              <span className="card-badge">SUPPORT</span>
            </div>
            <p className="card-description">
              Frequently asked questions about products, customization, certification and supply.
            </p>
            <ul className="card-links">
              <li>
                <Link href="/blog">
                  Product Selection FAQ
                  <span className="arrow">→</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  Customization & OEM FAQ
                  <span className="arrow">→</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  Certification & Testing FAQ
                  <span className="arrow">→</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  Ordering & Delivery FAQ
                  <span className="arrow">→</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Need Expert Guidance?</h2>
            <p>
              Our technical team provides personalized recommendations for your project requirements.
            </p>
          </div>
          <Link href="/contact" className="cta-btn">
            Contact Technical Team
          </Link>
        </div>
      </section>
    </main>
  );
}
