"use client";

import Image from "next/image";
import Link from "next/link";
import type { Guide } from "@/data/guides";
import OnThisPage from "@/components/technical-guide/OnThisPage";
import QuickSupportCard from "@/components/technical-guide/QuickSupportCard";
import RelatedSidebar from "@/components/technical-guide/RelatedSidebar";
import ResourceList from "@/components/technical-guide/ResourceList";
import { NextStep } from "@/components/resources/NextStep";
import "./guide.css";
import "./tpkele-guide.css";

type GuideTemplateProps = {
  guide: Guide;
};

export default function GuideTemplate({ guide }: GuideTemplateProps) {
  const marketAccessUrl = guide.marketAccessAdvisor?.enabled
    ? `/resources/market-access-advisor?product=${guide.marketAccessAdvisor.product}&application=${guide.marketAccessAdvisor.application}${
        guide.marketAccessAdvisor.market ? `&market=${guide.marketAccessAdvisor.market}` : ""
      }${guide.marketAccessAdvisor.buyer ? `&buyer=${guide.marketAccessAdvisor.buyer}` : ""}`
    : null;

  // Mock data for hero image and related products - will be enhanced with real data
  const heroImage = `/images/guides/${guide.slug}/hero.png`;
  const quickFlowImage = `/images/guides/${guide.slug}/quick-flow.png`;

  // Related products based on guide context — each guide shows its own relevant products
  const relatedProductsMap: Record<string, { name: string; href: string; desc: string; image: string }[]> = {
    "dc-mcb-selection-guide": [
      { name: "DC MCB", href: "/products/dc-mcb", desc: "PV string and combiner box overcurrent protection", image: "/assets/products/gallery/dc-mcb-1p-1.webp" },
      { name: "DC SPD", href: "/products/dc-spd", desc: "Surge protection for PV DC circuits", image: "/assets/home-products-normalized/spd.webp" },
      { name: "Combiner Box", href: "/products/combiner-box", desc: "PV string aggregation and protection enclosure", image: "/assets/home-products-normalized/combiner-box.webp" },
      { name: "DC Isolator", href: "/products/dc-isolator", desc: "PV DC disconnect switch for maintenance safety", image: "/assets/products/gallery/dc-mcb-2p-1.webp" },
    ],
    "dc-spd-selection-guide": [
      { name: "DC SPD", href: "/products/dc-spd", desc: "Surge protection for PV DC circuits", image: "/assets/home-products-normalized/spd.webp" },
      { name: "DC MCB", href: "/products/dc-mcb", desc: "PV string and combiner box overcurrent protection", image: "/assets/products/gallery/dc-mcb-1p-1.webp" },
      { name: "AC SPD", href: "/products/ac-spd", desc: "Surge protection for AC distribution systems", image: "/assets/home-products-normalized/spd.webp" },
      { name: "Combiner Box", href: "/products/combiner-box", desc: "PV string aggregation and protection enclosure", image: "/assets/home-products-normalized/combiner-box.webp" },
    ],
    "ac-mcb-selection-guide": [
      { name: "AC MCB", href: "/products/ac-mcb", desc: "Building and industrial circuit protection", image: "/assets/products/gallery/ac-mcb-1p-1.webp" },
      { name: "RCCB / RCBO", href: "/products/rccb-rcbo", desc: "Residual current protection for personal safety", image: "/assets/products/gallery/ac-mcb-2p-1.webp" },
      { name: "AC SPD", href: "/products/ac-spd", desc: "Surge protection for AC distribution systems", image: "/assets/home-products-normalized/spd.webp" },
      { name: "Energy Meter", href: "/products/energy-meter", desc: "DIN rail energy metering and monitoring", image: "/assets/home-products-normalized/din-rail-energy-meter.webp" },
    ],
    "ats-selection-guide": [
      { name: "ATS", href: "/products/ats", desc: "Automatic source transfer for backup power", image: "/assets/products/gallery/ats-st-2p-1.webp" },
      { name: "AC MCB", href: "/products/ac-mcb", desc: "Building and industrial circuit protection", image: "/assets/products/gallery/ac-mcb-1p-1.webp" },
      { name: "AC SPD", href: "/products/ac-spd", desc: "Surge protection for AC distribution systems", image: "/assets/home-products-normalized/spd.webp" },
      { name: "Energy Meter", href: "/products/energy-meter", desc: "DIN rail energy metering and monitoring", image: "/assets/home-products-normalized/din-rail-energy-meter.webp" },
    ],
    "voltage-protector-selection-guide": [
      { name: "Voltage Protector", href: "/products/voltage-protector", desc: "Over/under voltage protection for sensitive loads", image: "/assets/products/gallery/pn2-va2-1.webp" },
      { name: "AC SPD", href: "/products/ac-spd", desc: "Surge protection for AC distribution systems", image: "/assets/home-products-normalized/spd.webp" },
      { name: "AC MCB", href: "/products/ac-mcb", desc: "Building and industrial circuit protection", image: "/assets/products/gallery/ac-mcb-1p-1.webp" },
      { name: "Energy Meter", href: "/products/energy-meter", desc: "DIN rail energy metering and monitoring", image: "/assets/home-products-normalized/din-rail-energy-meter.webp" },
    ],
    "din-rail-energy-meter-guide": [
      { name: "Energy Meter", href: "/products/energy-meter", desc: "DIN rail energy metering and monitoring", image: "/assets/home-products-normalized/din-rail-energy-meter.webp" },
      { name: "AC MCB", href: "/products/ac-mcb", desc: "Building and industrial circuit protection", image: "/assets/products/gallery/ac-mcb-1p-1.webp" },
      { name: "Voltage Protector", href: "/products/voltage-protector", desc: "Over/under voltage protection for sensitive loads", image: "/assets/products/gallery/pn2-va2-1.webp" },
      { name: "ATS", href: "/products/ats", desc: "Automatic source transfer for backup power", image: "/assets/products/gallery/ats-st-2p-1.webp" },
    ],
    "pv-combiner-box-guide": [
      { name: "Combiner Box", href: "/products/combiner-box", desc: "PV string aggregation and protection enclosure", image: "/assets/home-products-normalized/combiner-box.webp" },
      { name: "DC MCB", href: "/products/dc-mcb", desc: "PV string and combiner box overcurrent protection", image: "/assets/products/gallery/dc-mcb-1p-1.webp" },
      { name: "DC SPD", href: "/products/dc-spd", desc: "Surge protection for PV DC circuits", image: "/assets/home-products-normalized/spd.webp" },
      { name: "DC Isolator", href: "/products/dc-isolator", desc: "PV DC disconnect switch for maintenance safety", image: "/assets/products/gallery/dc-mcb-2p-1.webp" },
    ],
    "dc-isolator-selection-guide": [
      { name: "DC Isolator", href: "/products/dc-isolator", desc: "PV DC disconnect switch for maintenance safety", image: "/assets/products/gallery/dc-mcb-2p-1.webp" },
      { name: "DC MCB", href: "/products/dc-mcb", desc: "PV string and combiner box overcurrent protection", image: "/assets/products/gallery/dc-mcb-1p-1.webp" },
      { name: "DC SPD", href: "/products/dc-spd", desc: "Surge protection for PV DC circuits", image: "/assets/home-products-normalized/spd.webp" },
      { name: "Combiner Box", href: "/products/combiner-box", desc: "PV string aggregation and protection enclosure", image: "/assets/home-products-normalized/combiner-box.webp" },
    ],
    "rccb-rcbo-selection-guide": [
      { name: "RCCB / RCBO", href: "/products/rccb-rcbo", desc: "Residual current protection for personal safety", image: "/assets/products/gallery/ac-mcb-2p-1.webp" },
      { name: "AC MCB", href: "/products/ac-mcb", desc: "Building and industrial circuit protection", image: "/assets/products/gallery/ac-mcb-1p-1.webp" },
      { name: "Voltage Protector", href: "/products/voltage-protector", desc: "Over/under voltage protection for sensitive loads", image: "/assets/products/gallery/pn2-va2-1.webp" },
      { name: "AC SPD", href: "/products/ac-spd", desc: "Surge protection for AC distribution systems", image: "/assets/home-products-normalized/spd.webp" },
    ],
    "solar-pv-protection-system-guide": [
      { name: "DC MCB", href: "/products/dc-mcb", desc: "PV string and combiner box overcurrent protection", image: "/assets/products/gallery/dc-mcb-1p-1.webp" },
      { name: "DC SPD", href: "/products/dc-spd", desc: "Surge protection for PV DC circuits", image: "/assets/home-products-normalized/spd.webp" },
      { name: "Combiner Box", href: "/products/combiner-box", desc: "PV string aggregation and protection enclosure", image: "/assets/home-products-normalized/combiner-box.webp" },
      { name: "AC MCB", href: "/products/ac-mcb", desc: "Building and industrial circuit protection", image: "/assets/products/gallery/ac-mcb-1p-1.webp" },
    ],
  };

  const relatedProducts = relatedProductsMap[guide.slug] || [
    { name: "DC MCB", href: "/products/dc-mcb", desc: "PV string and combiner box overcurrent protection", image: "/assets/products/gallery/dc-mcb-1p-1.webp" },
    { name: "DC SPD", href: "/products/dc-spd", desc: "Surge protection for PV DC circuits", image: "/assets/home-products-normalized/spd.webp" },
    { name: "AC MCB", href: "/products/ac-mcb", desc: "Building and industrial circuit protection", image: "/assets/products/gallery/ac-mcb-1p-1.webp" },
    { name: "ATS", href: "/products/ats", desc: "Automatic source transfer for backup power", image: "/assets/products/gallery/ats-st-2p-1.webp" },
  ];

  const resources = [
    { title: "Technical Datasheet", href: "#", type: "PDF" },
    { title: "Selection Guide", href: "#", type: "PDF" },
  ];

  return (
    <main className="tpk-guide">
      <div className="tpk-guide__container">
        <aside className="tpk-guide__left">
          <OnThisPage items={guide.sections.map((s) => ({ id: s.id, title: s.title }))} />
          <QuickSupportCard />
        </aside>

        <article className="tpk-guide__article">
          <div className="tpk-guide__breadcrumbs">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/resources/technical-guides">Technical Guides</Link>
            <span>›</span>
            <span>{guide.title}</span>
          </div>

          <section className="tpk-guide__hero">
            <div className="tpk-guide__heroContent">
              <div className="tpk-guide__eyebrow">
                {guide.product} | {guide.application}
              </div>
              <h1>{guide.title}</h1>
              <p className="tpk-guide__intro">{guide.description}</p>
              <div className="tpk-guide__meta">
                <div className="tpk-guide__avatar" />
                <div>
                  <strong>Reviewed by TPKELE Technical Team</strong>
                  <div>Updated: 2026-09-07 | 12 min read</div>
                </div>
              </div>
            </div>
            <div className="tpk-guide__heroImageWrap">
              <Image
                src={heroImage}
                alt={guide.title}
                width={800}
                height={600}
                className="tpk-guide__heroImage"
                priority
              />
            </div>
          </section>

          {guide.sections.map((section, index) => (
            <section id={section.id} key={section.id} className="tpk-guide__section">
              <h2>{index + 1}. {section.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </section>
          ))}

          {marketAccessUrl && (
            <section className="tpk-guide__advisorBlock">
              <div>
                <h2>Need market-specific export guidance?</h2>
                <p>Use the TPKELE Market Access Advisor to review likely standards, document expectations and buyer-facing market information for the selected product and application.</p>
              </div>
              <Link href={marketAccessUrl} className="tpk-guide__button">
                Open Market Access Advisor
              </Link>
            </section>
          )}

          <NextStep
            title="Continue Your Journey"
            description="Explore related resources to complete your product selection and compliance workflow"
            actions={[
              {
                title: "Market Access Advisor",
                href: marketAccessUrl || "/resources/market-access-advisor",
                description: "Check country-specific standards and certification requirements for your target market",
                icon: "✓",
                badge: "COMPLIANCE",
              },
              {
                title: "Standards Database",
                href: "/resources/standards-database",
                description: "Browse IEC and UL technical standards relevant to this product category",
                icon: "📚",
              },
              {
                title: "Application Solutions",
                href: "/resources/application-solutions",
                description: "See real-world system designs and application examples",
                icon: "🔧",
              },
            ]}
          />
        </article>

        <aside className="tpk-guide__right">
          <RelatedSidebar items={relatedProducts} />
          <div className="tpk-guide__sidebarCard">
            <h3>Export Requirements?</h3>
            <p>Check standards, certification and required documents for your target market.</p>
            {marketAccessUrl && (
              <Link href={marketAccessUrl} className="tpk-guide__button tpk-guide__button--full">
                Open Market Access Advisor
              </Link>
            )}
          </div>
          <ResourceList items={resources} />
          <div className="tpk-guide__sidebarCard">
            <Image
              src={quickFlowImage}
              alt="Quick selection flow"
              width={400}
              height={500}
              className="tpk-guide__sidebarImage"
            />
          </div>
        </aside>
      </div>
    </main>
  );
}
