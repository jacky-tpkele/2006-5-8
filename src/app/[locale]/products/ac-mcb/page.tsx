import type { Metadata } from "next";
import { InquiryModal } from "@/components/InquiryModal";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import { HeroSection } from "./HeroSection";
import { OptionsGrid } from "./OptionsGrid";
import { FeaturesGrid } from "./FeaturesGrid";
import { SpecsSection } from "./SpecsSection";
import { CompanySection } from "./CompanySection";
import { TripCurves } from "./TripCurves";
import { BeyondSection } from "./BeyondSection";

const PAGE_TITLE = "AC Miniature Circuit Breaker Supplier — MCB 1P–4P | TPKELE";
const PAGE_DESCRIPTION =
  "TPKELE supplies AC miniature circuit breakers (MCB) for residential, commercial, and industrial distribution. 1P to 4P, 6A–63A, B/C/D trip curves, 6kA/10kA breaking capacity. IEC 60898-1 certified, OEM-ready.";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    alternates: {
      canonical: localizedPath("/products/ac-mcb", locale),
      languages: alternateLanguages("/products/ac-mcb"),
    },
    keywords: [
      "AC miniature circuit breaker supplier",
      "MCB manufacturer",
      "DIN rail MCB",
      "circuit breaker 1P 2P 3P 4P",
      "IEC 60898 MCB",
      "low voltage circuit breaker",
    ],
  };
}

export default function CircuitBreakersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AC Miniature Circuit Breaker",
    description: PAGE_DESCRIPTION,
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
