import type { Metadata } from "next";
import { InquiryModal } from "@/components/InquiryModal";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import { CompanySection } from "@/app/[locale]/products/ac-mcb/CompanySection";
import { BeyondSection } from "@/app/[locale]/products/ac-mcb/BeyondSection";
import { HeroSection } from "./HeroSection";
import { OptionsGrid } from "./OptionsGrid";
import { FeaturesGrid } from "./FeaturesGrid";
import { SpecsSection } from "./SpecsSection";
import { SensitivitySection } from "./SensitivitySection";
import { site } from "@/data/site";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "RCBO Australia & New Zealand | AS/NZS 61009.1 Type A 1P+N 18mm",
    description:
      "TPKELE RCBO for Australia and New Zealand: 1P+N 18mm single-module RCBO, 1-40A, 6kA, Type A & AC, 10/30mA. Built to AS/NZS 61009.1 & IEC/EN 61009-1 with CE marking. Request exact-model certificates and registration documents. OEM ready for switchboard builders and distributors.",
    keywords: [
      "RCBO Australia",
      "RCBO New Zealand",
      "AS/NZS 61009.1 RCBO",
      "IEC 61009-1 RCBO",
      "RCM RCBO",
      "1P+N RCBO",
      "18mm RCBO",
      "Type A RCBO",
      "30mA RCBO",
      "RCBO manufacturer Australia",
      "switchboard RCBO",
      "RCBO supplier",
    ],
    alternates: {
      canonical: localizedPath("/products/rcbo-australia-new-zealand", locale),
      languages: alternateLanguages("/products/rcbo-australia-new-zealand"),
    },
    openGraph: {
      title: "RCBO for Australia & New Zealand | AS/NZS 61009.1 Type A",
      description: "1P+N 18mm RCBO, 6kA, Type A & AC, 10/30mA. Built to AS/NZS 61009.1 & IEC/EN 61009-1 with CE marking for AU/NZ switchboards.",
      url: `${site.url}/products/rcbo-australia-new-zealand`,
      type: "website",
    },
  };
}

export default async function RcboAuNzPage({ params }: PageProps) {
  const { locale } = await params;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "RCBO for Australia & New Zealand",
    description: "1P+N 18mm RCBO built to AS/NZS 61009.1 and IEC/EN 61009-1, with CE marking, for Australian and New Zealand switchboards. Exact-model certificates and registration documents available on request.",
    url: `${site.url}/products/rcbo-australia-new-zealand`,
    brand: { "@type": "Brand", name: "TPKELE" },
    category: "Electrical Protection Devices",
  };

  const companyIntros = [
    "Based in Wenzhou — China's electrical manufacturing capital — TPKELE specializes in low-voltage protection components for global distribution markets. Our RCBO production line serves electrical wholesalers, switchboard builders, and private-label brands in Australia, New Zealand, Europe, and beyond.",
    "Every RCBO batch undergoes 100% functional testing including residual current trip verification, overload trip testing, and short-circuit breaking capacity verification before shipment.",
  ];

  const companyHighlights = [
    "In-house production with full QC traceability",
    "OEM/ODM capability — custom logo, housing print, and packaging",
    "Product lines built to IEC/EN 61009-1 and AS/NZS 61009.1 — test reports available per model",
    "Export experience to 50+ countries — strong distributor client base",
    "Sample preparation within 5–10 working days",
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroSection />
      <OptionsGrid />
      <FeaturesGrid />
      <SpecsSection />
      <SensitivitySection />
      <CompanySection
        title="Your Dedicated RCBO Supply Partner for AU/NZ"
        intros={companyIntros}
        highlights={companyHighlights}
        ctaProduct="RCBO Australia NZ"
      />
      <BeyondSection locale={locale} />
      <section className="section cta-section">
        <div>
          <h2>Ready to Source RCBO for Your Next Project?</h2>
          <p>
            Contact our technical sales team for datasheets, test reports, exact-model AS/NZS 61009.1 & IEC/EN 61009-1 documentation, pricing, and lead times.
          </p>
          <div className="button-row">
            <InquiryModal triggerLabel="Request Quotation" triggerClassName="btn primary" product="RCBO Australia NZ" intent="quote" />
            <InquiryModal triggerLabel="Ask Technical Question" triggerClassName="btn ghost dark" product="RCBO Australia NZ" intent="technical" title="Ask Technical Question" />
          </div>
        </div>
      </section>
    </main>
  );
}
