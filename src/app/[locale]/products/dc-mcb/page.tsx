import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { InquiryModal } from "@/components/InquiryModal";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import { CompanySection } from "@/app/[locale]/products/ac-mcb/CompanySection";
import { BeyondSection } from "@/app/[locale]/products/ac-mcb/BeyondSection";
import { HeroSection } from "./HeroSection";
import { OptionsGrid } from "./OptionsGrid";
import { FeaturesGrid } from "./FeaturesGrid";
import { SpecsSection } from "./SpecsSection";
import { TripCurves } from "./TripCurves";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "categoryPage" });

  return {
    title: t("dcMcb.seoTitle"),
    description: t("dcMcb.seoDescription"),
    alternates: {
      canonical: localizedPath("/products/dc-mcb", locale),
      languages: alternateLanguages("/products/dc-mcb"),
    },
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
}

export default async function DcCircuitBreakersPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "categoryPage" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "DC Miniature Circuit Breaker",
    description: t("dcMcb.seoDescription"),
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
      <BeyondSection locale={locale} />
      <section className="section cta-section">
        <div>
          <p className="eyebrow">{t("dcMcb.ctaEyebrow")}</p>
          <h2>{t("dcMcb.ctaTitle")}</h2>
        </div>
        <InquiryModal triggerLabel={t("dcMcb.requestQuote")} triggerClassName="btn primary" intent="quote" product="DC MCB" />
      </section>
    </main>
  );
}
