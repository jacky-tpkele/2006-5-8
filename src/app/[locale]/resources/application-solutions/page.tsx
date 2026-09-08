import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { NextStep } from "@/components/resources/NextStep";
import "./application-solutions.css";

export const metadata: Metadata = {
  title: "Application Solutions | TPKELE Resources",
  description:
    "Real-world application examples, system design guidance and project case studies for electrical protection systems. Solar PV, data centers, EV charging, and more.",
  keywords: [
    "solar pv protection",
    "distribution board design",
    "industrial electrical systems",
    "energy storage",
    "application case studies",
    "electrical system design",
    "data center power",
    "EV charging infrastructure",
  ],
  openGraph: {
    title: "Application Solutions - Real-World Electrical Protection Designs | TPKELE",
    description:
      "Explore proven electrical protection system designs across solar PV, commercial buildings, data centers, and EV charging infrastructure.",
    url: "https://www.tpkele.com/resources/application-solutions",
    siteName: "TPKELE",
    type: "website",
    images: [
      {
        url: "https://www.tpkele.com/images/resources/application-solutions-og.png",
        width: 1200,
        height: 630,
        alt: "TPKELE Application Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Application Solutions - Real-World Electrical Protection Designs",
    description: "Explore proven electrical protection system designs across multiple industries and applications.",
    images: ["https://www.tpkele.com/images/resources/application-solutions-og.png"],
  },
  alternates: {
    canonical: "https://www.tpkele.com/resources/application-solutions",
  },
};

type PageProps = {
  params: Promise<{ locale: string }>;
};

const applicationSolutions = [
  {
    id: "solar-pv",
    title: "Solar PV System Protection",
    category: "Renewable Energy",
    description:
      "Complete DC protection solutions for photovoltaic installations. DC MCB, SPD, and combiner box integration strategies.",
    image: "🔆",
    features: [
      "String-level protection design",
      "DC SPD coordination strategies",
      "Combiner box configurations",
      "Residential to utility-scale systems",
    ],
    link: "/solar-dc-protection",
  },
  {
    id: "residential",
    title: "Residential Distribution Boards",
    category: "Residential",
    description:
      "Consumer unit design patterns for residential properties. AC MCB selection, RCCB/RCBO integration, and surge protection.",
    image: "🏠",
    features: [
      "Single-phase & 3-phase designs",
      "RCD/RCBO selection criteria",
      "Surge protection integration",
      "Load distribution strategies",
    ],
    link: "/blog",
  },
  {
    id: "commercial",
    title: "Commercial & Industrial Projects",
    category: "Commercial",
    description:
      "Industrial distribution system designs. Motor protection, ATS integration, and multi-level coordination.",
    image: "🏭",
    features: [
      "Three-phase distribution boards",
      "Motor control & protection",
      "Automatic transfer switch systems",
      "Selectivity & discrimination",
    ],
    link: "/blog",
  },
  {
    id: "energy-storage",
    title: "Energy Storage Integration",
    category: "Energy Storage",
    description:
      "Battery energy storage system (BESS) protection. DC/AC hybrid systems and microgrid applications.",
    image: "🔋",
    features: [
      "BESS DC protection strategies",
      "Hybrid inverter integration",
      "Microgrid protection coordination",
      "UL 9540 / IEC 62933 compliance",
    ],
    link: "/blog",
  },
  {
    id: "data-center",
    title: "Data Center Power Distribution",
    category: "Critical Infrastructure",
    description:
      "Mission-critical electrical infrastructure. Redundant systems, UPS integration, and high-availability designs.",
    image: "🖥️",
    features: [
      "N+1 redundancy configurations",
      "UPS bypass & maintenance mode",
      "Remote monitoring integration",
      "Tier III/IV design patterns",
    ],
    link: "/blog",
  },
  {
    id: "ev-charging",
    title: "EV Charging Infrastructure",
    category: "Electric Vehicles",
    description:
      "Electric vehicle charging station protection. AC/DC charging systems and load management strategies.",
    image: "⚡",
    features: [
      "Level 2 & DC fast charging",
      "Load balancing & peak shaving",
      "RCD Type B requirements",
      "IEC 61851 compliance",
    ],
    link: "/blog",
  },
];

export default async function ApplicationSolutionsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  // JSON-LD structured data for ItemList
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Electrical Protection Application Solutions",
    description: "Real-world application examples and system design guidance for electrical protection systems",
    numberOfItems: applicationSolutions.length,
    itemListElement: applicationSolutions.map((solution, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "HowTo",
        name: solution.title,
        description: solution.description,
        step: solution.features.map((feature) => ({
          "@type": "HowToStep",
          text: feature,
        })),
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="application-solutions-page">
      <section className="solutions-hero">
        <h1>Application Solutions</h1>
        <p>
          Real-world electrical protection system designs. Learn from proven application examples and system-level
          integration strategies.
        </p>
      </section>

      <section className="solutions-grid">
        {applicationSolutions.map((solution) => (
          <div key={solution.id} className="solution-card">
            <div className="solution-icon">{solution.image}</div>
            <div className="solution-header">
              <span className="solution-category">{solution.category}</span>
              <h2>{solution.title}</h2>
            </div>
            <p className="solution-description">{solution.description}</p>
            <ul className="solution-features">
              {solution.features.map((feature, idx) => (
                <li key={idx}>✓ {feature}</li>
              ))}
            </ul>
            <Link href={solution.link} className="solution-link">
              View Details <span className="arrow">→</span>
            </Link>
          </div>
        ))}
      </section>

      <section className="solutions-cta">
        <div className="cta-content">
          <h2>Need Project-Specific Guidance?</h2>
          <p>Our technical team provides customized application consulting and system design review services.</p>
          <div className="cta-actions">
            <Link href="/contact" className="cta-button primary">
              Contact Engineering Team
            </Link>
            <Link href="/resources/technical-guides" className="cta-button secondary">
              Browse Technical Guides
            </Link>
          </div>
        </div>
      </section>

      <NextStep
        title="Explore More Resources"
        description="Complete your workflow with technical guides and compliance tools"
        actions={[
          {
            title: "Technical Guides",
            href: "/resources/technical-guides",
            description: "Step-by-step product selection guides for DC MCB, SPD, ATS, and more",
            icon: "📘",
            badge: "10+ GUIDES",
          },
          {
            title: "Market Access Advisor",
            href: "/resources/market-access-advisor",
            description: "Check certification requirements and standards for your target market",
            icon: "✓",
          },
          {
            title: "FAQ Knowledge Base",
            href: "/resources/faq",
            description: "Answers to common questions about products, OEM, and ordering",
            icon: "❓",
          },
        ]}
      />
    </div>
    </>
  );
}
