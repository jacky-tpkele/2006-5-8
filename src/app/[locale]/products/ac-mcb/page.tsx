import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { InquiryModal } from "@/components/InquiryModal";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import { HeroSection } from "./HeroSection";
import { OptionsGrid } from "./OptionsGrid";
import { FeaturesGrid } from "./FeaturesGrid";
import { SpecsSection } from "./SpecsSection";
import { CompanySection } from "./CompanySection";
import { TripCurves } from "./TripCurves";
import { BeyondSection } from "./BeyondSection";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "categoryPage" });

  return {
    title: t("acMcb.seoTitle"),
    description: t("acMcb.seoDescription"),
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

export default async function CircuitBreakersPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "categoryPage" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AC Miniature Circuit Breaker",
    description: t("acMcb.seoDescription"),
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
      <BeyondSection locale={locale} title={t("acMcb.beyondTitle")} />
      <section className="section cta-section">
        <div>
          <p className="eyebrow">{t("acMcb.ctaEyebrow")}</p>
          <h2>{t("acMcb.ctaTitle")}</h2>
        </div>
        <InquiryModal triggerLabel={t("requestQuote")} triggerClassName="btn primary" intent="quote" product="AC MCB" />
      </section>
    </main>
  );
}
