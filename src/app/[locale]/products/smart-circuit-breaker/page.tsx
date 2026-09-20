import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { InquiryModal } from "@/components/InquiryModal";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import { CompanySection } from "@/app/[locale]/products/ac-mcb/CompanySection";
import { BeyondSection } from "@/app/[locale]/products/ac-mcb/BeyondSection";
import { HeroSection } from "./HeroSection";
import { ProductsGrid } from "./ProductsGrid";
import { FeaturesGrid } from "./FeaturesGrid";
import { ApplicationsSection } from "./ApplicationsSection";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "categoryPage" });

  return {
    title: "Smart Wi-Fi Circuit Breaker Manufacturer | IoT MCB Remote Control",
    description: "TPKELE Smart Wi-Fi Circuit Breakers: Remote app control, real-time monitoring, energy metering, overvoltage/undervoltage protection. 18mm & 2P models, Tuya Smart compatible, for smart homes and commercial buildings.",
    alternates: {
      canonical: localizedPath("/products/smart-circuit-breaker", locale),
      languages: alternateLanguages("/products/smart-circuit-breaker"),
    },
    keywords: [
      "Smart circuit breaker manufacturer",
      "WiFi circuit breaker",
      "IoT MCB",
      "Remote control circuit breaker",
      "Smart MCB app control",
      "Tuya smart circuit breaker",
      "WiFi MCB manufacturer",
      "Smart home circuit breaker",
      "Energy monitoring breaker",
      "App controlled MCB"
    ],
  };
}

export default async function SmartMcbPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "categoryPage" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Smart Wi-Fi Circuit Breaker",
    description: "IoT-enabled circuit breakers with remote control, real-time monitoring, and programmable protection via smartphone app.",
    url: "https://www.tpkele.com/products/smart-circuit-breaker",
    brand: { "@type": "Brand", name: "TPKELE" },
    category: "Smart Electrical Protection Devices",
  };

  const companyIntros = [
    "TPKELE combines traditional circuit breaker manufacturing expertise with IoT innovation. Our Smart Wi-Fi MCB series brings remote control and real-time monitoring to low-voltage distribution.",
    "Built on the Tuya Smart ecosystem, our smart breakers integrate seamlessly with existing smart home platforms while maintaining the reliability expected from industrial-grade protection devices.",
  ];

  const companyHighlights = [
    "Tuya Smart certified IoT platform integration",
    "Real-time electrical parameter monitoring via app",
    "Programmable protection settings and timer functions",
    "CE & RoHS compliant smart protection devices",
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroSection />
      <ProductsGrid />
      <FeaturesGrid />
      <ApplicationsSection />
      <CompanySection
        title="Your Smart Protection Partner"
        intros={companyIntros}
        highlights={companyHighlights}
        ctaProduct="Smart Wi-Fi MCB"
      />
      <BeyondSection locale={locale} />
      <section className="section cta-section">
        <div>
          <p className="eyebrow">Ready to upgrade to smart protection?</p>
          <h2>Request a Quote for Smart Wi-Fi MCB</h2>
        </div>
        <InquiryModal triggerLabel="Get Quote" triggerClassName="btn primary" intent="quote" product="Smart Wi-Fi MCB" />
      </section>
    </main>
  );
}
