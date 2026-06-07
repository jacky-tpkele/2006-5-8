import type { Metadata } from "next";
import { InquiryModal } from "@/components/InquiryModal";
import { CompanySection } from "@/app/products/ac-mcb/CompanySection";
import { BeyondSection } from "@/app/products/ac-mcb/BeyondSection";
import { HeroSection } from "./HeroSection";
import { OptionsGrid } from "./OptionsGrid";
import { FeaturesGrid } from "./FeaturesGrid";
import { SpecsSection } from "./SpecsSection";
import { TripCurves } from "./TripCurves";

export const metadata: Metadata = {
  title: "DC Circuit Breaker Supplier — DC MCB 250V–1500V | TPKELE",
  description:
    "TPKELE supplies DC miniature circuit breakers (DC MCB) for solar PV, battery storage, EV charging and DC distribution. 1P to 4P, 6A–125A, up to 1500VDC, magnetic arc extinction, IEC 60947-2 certified, OEM-ready.",
  alternates: { canonical: "/products/dc-mcb" },
  keywords: [
    "DC miniature circuit breaker supplier",
    "DC MCB manufacturer",
    "1500VDC MCB",
    "PV DC breaker",
    "battery storage DC breaker",
    "EV charging DC breaker",
    "IEC 60947-2 DC MCB",
  ],
};

export default function DcCircuitBreakersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "DC Miniature Circuit Breaker",
    description: metadata.description,
    url: "https://www.tpkele.com/products/dc-mcb",
    brand: { "@type": "Brand", name: "TPKELE" },
    category: "Electrical Protection Devices",
  };

  const companyIntros = [
    "Based in Wenzhou — China's electrical manufacturing capital — TPKELE specializes in low-voltage DC and AC circuit protection components for solar, storage, and industrial projects worldwide.",
    "Our facility covers the full production cycle from mold tooling and injection to assembly, testing, and packaging. Every DC MCB batch undergoes 100% high-voltage DC verification before shipment.",
  ];

  const companyHighlights = [
    "In-house production with full QC traceability",
    "OEM/ODM capability — custom logo, label, and packaging",
    "IEC 60947-2 and CE certified DC product lines",
    "Export experience to 50+ countries — strong solar EPC client base",
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroSection />
      <OptionsGrid />
      <FeaturesGrid />
      <SpecsSection />
      <TripCurves />
      <CompanySection
        title="Your Dedicated DC MCB Supply Partner"
        intros={companyIntros}
        highlights={companyHighlights}
        ctaProduct="DC MCB"
      />
      <BeyondSection />
      <section className="section cta-section">
        <div>
          <p className="eyebrow">DC MCB Supply · 72-Hour Quotation</p>
          <h2>Send your project specifications — get pricing for DC MCB in any voltage class.</h2>
        </div>
        <InquiryModal triggerLabel="Request a Quote" triggerClassName="btn primary" intent="quote" product="DC MCB" />
      </section>
    </main>
  );
}
