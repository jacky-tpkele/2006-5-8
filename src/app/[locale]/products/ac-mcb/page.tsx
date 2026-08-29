import type { Metadata } from "next";
import { InquiryModal } from "@/components/InquiryModal";
import { HeroSection } from "./HeroSection";
import { OptionsGrid } from "./OptionsGrid";
import { FeaturesGrid } from "./FeaturesGrid";
import { SpecsSection } from "./SpecsSection";
import { CompanySection } from "./CompanySection";
import { TripCurves } from "./TripCurves";
import { BeyondSection } from "./BeyondSection";

export const metadata: Metadata = {
  title: "AC Miniature Circuit Breaker Supplier — MCB 1P–4P | TPKELE",
  description:
    "TPKELE supplies AC miniature circuit breakers (MCB) for residential, commercial, and industrial distribution. 1P to 4P, 6A–63A, B/C/D trip curves, 6kA/10kA breaking capacity. IEC 60898-1 certified, OEM-ready.",
  alternates: { canonical: "/products/ac-mcb" },
  keywords: [
    "AC miniature circuit breaker supplier",
    "MCB manufacturer",
    "DIN rail MCB",
    "circuit breaker 1P 2P 3P 4P",
    "IEC 60898 MCB",
    "low voltage circuit breaker",
  ],
};

export default function CircuitBreakersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AC Miniature Circuit Breaker",
    description: metadata.description,
    url: "https://www.tpkele.com/products/ac-mcb",
    brand: { "@type": "Brand", name: "TPKELE" },
    category: "Electrical Protection Devices",
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroSection />
      <OptionsGrid />
      <FeaturesGrid />
      <SpecsSection />
      <TripCurves />
      <CompanySection />
      <BeyondSection />
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
