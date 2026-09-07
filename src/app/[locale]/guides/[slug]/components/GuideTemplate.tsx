"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Guide } from "@/data/guides";
import "./guide.css";

type GuideTemplateProps = {
  guide: Guide;
};

export default function GuideTemplate({ guide }: GuideTemplateProps) {
  const [activeSection, setActiveSection] = useState<string>(guide.sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      let current = guide.sections[0]?.id || "";

      // Find the section currently in viewport
      for (const section of guide.sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Section is in viewport if its top is above 200px from top
          if (rect.top < 200 && rect.top > -rect.height) {
            current = section.id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [guide.sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const top = element.offsetTop - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const marketAccessUrl = guide.marketAccessAdvisor?.enabled
    ? `/resources/market-access-advisor?product=${guide.marketAccessAdvisor.product}&application=${guide.marketAccessAdvisor.application}${
        guide.marketAccessAdvisor.market ? `&market=${guide.marketAccessAdvisor.market}` : ""
      }${guide.marketAccessAdvisor.buyer ? `&buyer=${guide.marketAccessAdvisor.buyer}` : ""}`
    : null;

  return (
    <div className="guide-layout">
      {/* Floating Navigation */}
      <aside className="guide-nav">
        <div className="guide-nav-sticky">
          <h3 className="guide-nav-title">ON THIS PAGE</h3>
          <nav className="guide-nav-list">
            {guide.sections.map((section) => (
              <button
                key={section.id}
                className={`guide-nav-item ${activeSection === section.id ? "active" : ""}`}
                onClick={() => scrollToSection(section.id)}
                type="button"
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <article className="guide-content">
        <header className="guide-header">
          <h1>{guide.title}</h1>
          {guide.description && <p className="guide-description">{guide.description}</p>}
          <div className="guide-meta">
            <span className="guide-badge">{guide.product}</span>
            <span className="guide-badge">{guide.application}</span>
          </div>
        </header>

        {guide.sections.map((section) => (
          <section key={section.id} id={section.id} className="guide-section">
            <h2>{section.title}</h2>
            <div className="guide-section-content" dangerouslySetInnerHTML={{ __html: section.content }} />
          </section>
        ))}

        {/* Market Access Advisor CTA */}
        {marketAccessUrl && (
          <div className="guide-cta">
            <div className="guide-cta-content">
              <h3>Check Export Requirements</h3>
              <p>
                Review technical standards, market-access regulations, and certification requirements for your target country.
              </p>
            </div>
            <Link href={marketAccessUrl} className="guide-cta-button">
              Launch Market Access Advisor →
            </Link>
          </div>
        )}

        {/* Footer Navigation */}
        <footer className="guide-footer">
          <Link href="/resources" className="guide-footer-link">
            ← Back to Resources
          </Link>
          <Link href="/contact" className="guide-footer-link">
            Contact Technical Team →
          </Link>
        </footer>
      </article>
    </div>
  );
}
