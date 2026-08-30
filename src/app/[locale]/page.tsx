import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { InquiryModal } from "@/components/InquiryModal";
import { CompanySection } from "@/app/[locale]/products/ac-mcb/CompanySection";
import { BeyondSection } from "@/app/[locale]/products/ac-mcb/BeyondSection";
import {
  exportMarkets,
  oemCapabilities,
  products,
  site,
} from "@/data/site";
import { localizedPath, alternateLanguages } from "@/lib/locale-path";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Solar DC & Low Voltage Protection Manufacturer | TPKELE",
    description:
      "TPKELE manufactures IEC-certified DC MCB, DC SPD, PV combiner boxes, AC MCB, SPD, ATS and energy meters for solar installations in 100+ countries.",
    alternates: {
      canonical: localizedPath("/", locale),
      languages: alternateLanguages("/"),
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("home");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: "Wenzhou TPKELE Electric Co., Ltd",
    url: site.url,
    logo: `${site.url}/logo.png`,
    description: site.description,
    foundingDate: "2013",
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wenzhou",
      addressRegion: "Zhejiang",
      addressCountry: "CN",
      streetAddress: site.address,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "sales",
        email: site.email,
        availableLanguage: ["en", "zh"],
      },
      {
        "@type": "ContactPoint",
        telephone: site.whatsapp,
        contactType: "customer support",
        contactOption: "TollFree",
        availableLanguage: ["en", "zh"],
      },
    ],
    areaServed: "Worldwide",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
      maxValue: 200,
    },
    knowsAbout: [
      "DC Circuit Breaker",
      "Solar Protection Devices",
      "Surge Protective Device",
      "PV Combiner Box",
      "Automatic Transfer Switch",
      "Energy Meter",
    ],
    sameAs: [
      site.social.linkedin,
      site.social.youtube,
      site.social.facebook,
    ],
  };

  const countByParent = (cat: string) => products.filter((p) => p.parentCategory === cat).length;
  const countBySub = (slug: string) => products.filter((p) => p.subCategorySlug === slug).length;

  const solarDcTrack = [
    {
      slug: "dc-mcb",
      name: t("products.dcMcbName"),
      image: "/assets/home-products-normalized/mcb.webp",
      description: t("products.dcMcbDesc"),
      href: "/products/category/mcb/dc-mcb",
      count: countBySub("dc-mcb"),
    },
    {
      slug: "dc-spd",
      name: t("products.dcSpdName"),
      image: "/assets/home-products-normalized/spd.webp",
      description: t("products.dcSpdDesc"),
      href: "/products/category/spd/dc-spd",
      count: countBySub("dc-spd"),
    },
    {
      slug: "combiner-box",
      name: t("products.combinerBoxName"),
      image: "/assets/home-products-normalized/combiner-box.webp",
      description: t("products.combinerBoxDesc"),
      href: "/products/category/combiner-box",
      count: countByParent("Combiner Box"),
    },
  ];

  const lvTrack = [
    {
      slug: "ac-mcb",
      name: t("products.acMcbName"),
      image: "/assets/home-products-normalized/mcb.webp",
      description: t("products.acMcbDesc"),
      href: "/products/category/mcb/ac-mcb",
      count: countBySub("ac-mcb"),
    },
    {
      slug: "ac-spd",
      name: t("products.acSpdName"),
      image: "/assets/home-products-normalized/spd.webp",
      description: t("products.acSpdDesc"),
      href: "/products/category/spd/ac-spd",
      count: countBySub("ac-spd"),
    },
    {
      slug: "ats",
      name: t("products.atsName"),
      image: "/assets/home-products-normalized/ats.webp",
      description: t("products.atsDesc"),
      href: "/products/category/ats",
      count: countByParent("ATS"),
    },
    {
      slug: "voltage-protector",
      name: t("products.voltageProtectorName"),
      image: "/assets/home-products-normalized/over-voltage-protector.webp",
      description: t("products.voltageProtectorDesc"),
      href: "/products/category/voltage-protector",
      count: countByParent("Voltage Protector"),
    },
    {
      slug: "energy-meter",
      name: t("products.energyMeterName"),
      image: "/assets/home-products-normalized/din-rail-energy-meter.webp",
      description: t("products.energyMeterDesc"),
      href: "/products/category/energy-meter",
      count: countByParent("Energy Meter"),
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero-banner" aria-label="TPKELE Solar DC and Low Voltage Protection Solutions">
        <Image
          src="/assets/factory-home.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-banner-bg"
          aria-hidden
        />
        <div className="hero-banner-inner">
          <div className="hero-banner-top">
            <div className="hero-banner-content">
              <h1 className="hero-banner-title">{t("hero.title")}</h1>
              <span className="hero-banner-rule" aria-hidden="true" />

              <div className="hero-banner-tracks">
                <Link className="hero-banner-track" href="/solar-dc-protection">
                  <span className="hero-banner-track-icon" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
                    </svg>
                  </span>
                  <strong>{t("hero.solarButton")}</strong>
                </Link>
                <Link className="hero-banner-track" href="/products">
                  <span className="hero-banner-track-icon" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3l8 3v6c0 4.5-3.4 8.5-8 9-4.6-.5-8-4.5-8-9V6l8-3z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </span>
                  <strong>{t("hero.lvButton")}</strong>
                </Link>
              </div>

              <div className="hero-banner-cta">
                <Link className="btn primary" href="/solar-dc-protection">
                  {t("hero.exploreButton")}
                </Link>
                <InquiryModal triggerLabel={t("hero.catalogButton")} triggerClassName="btn ghost dark" intent="catalog" />
              </div>

              <div className="hero-banner-stats">
                <div><strong>{t("hero.stat1Value")}</strong><span>{t("hero.stat1Label")}</span></div>
                <div><strong>{t("hero.stat2Value")}</strong><span>{t("hero.stat2Label")}</span></div>
                <div><strong>{t("hero.stat3Value")}</strong><span>{t("hero.stat3Label")}</span></div>
                <div><strong>{t("hero.stat4Value")}</strong><span>{t("hero.stat4Label")}</span></div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="procurement-flow" aria-label="B2B Procurement Flow">
        <div className="procurement-flow-inner">
          <div className="procurement-flow-head">
            <p className="eyebrow procurement-eyebrow">{t("procurement.eyebrow")}</p>
            <h2 className="procurement-title">
              <span className="green">{t("procurement.titleGreen")}</span>
              <span className="white"> {t("procurement.titleWhite")}</span>
            </h2>
            <p className="procurement-lede">{t("procurement.lede")}</p>
          </div>

          <ol className="procurement-steps">
            <li className="procurement-step">
              <span className="procurement-step-num" aria-hidden="true">1</span>
              <h3>{t("procurement.step1Title")}</h3>
              <p>{t("procurement.step1Text")}</p>
            </li>
            <li className="procurement-step">
              <span className="procurement-step-num" aria-hidden="true">2</span>
              <h3>{t("procurement.step2Title")}</h3>
              <p>{t("procurement.step2Text")}</p>
            </li>
            <li className="procurement-step">
              <span className="procurement-step-num" aria-hidden="true">3</span>
              <h3>{t("procurement.step3Title")}</h3>
              <p>{t("procurement.step3Text")}</p>
            </li>
            <li className="procurement-step">
              <span className="procurement-step-num" aria-hidden="true">4</span>
              <h3>{t("procurement.step4Title")}</h3>
              <p>{t("procurement.step4Text")}</p>
            </li>
          </ol>

          <div className="procurement-cta">
            <InquiryModal triggerLabel={t("procurement.ctaButton")} triggerClassName="btn primary procurement-cta-btn" intent="quote" />
          </div>
        </div>
      </section>

      <section className="product-tracks" aria-label="Product Lines">
        <div className="product-tracks-inner">
          <div className="product-tracks-head">
            <p className="eyebrow product-tracks-eyebrow">{t("products.eyebrow")}</p>
            <h2 className="product-tracks-title">
              <span className="green">{t("products.titleGreen")}</span>
              <span className="ink"> {t("products.titleInk")}</span>
            </h2>
            <p className="product-tracks-lede">{t("products.lede")}</p>
          </div>

          <div className="track-grid track-grid-unified">
            {solarDcTrack.map((item) => (
              <Link href={item.href} className="track-card" key={`solar-${item.slug}`} aria-label={item.name}>
                <span className="track-card-flag solar">{t("products.solarFlag")}</span>
                <div className="track-card-media">
                  <Image src={item.image} alt={item.name} width={320} height={220} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px" />
                </div>
                <div className="track-card-body">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <span className="track-card-link">
                    {item.count === 1 ? t("products.viewProduct", { count: item.count }) : t("products.viewProducts", { count: item.count })}
                  </span>
                </div>
              </Link>
            ))}
            {lvTrack.map((item) => (
              <Link href={item.href} className="track-card" key={`lv-${item.slug}`} aria-label={item.name}>
                <span className="track-card-flag lv">{t("products.lvFlag")}</span>
                <div className="track-card-media">
                  <Image src={item.image} alt={item.name} width={320} height={220} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px" />
                </div>
                <div className="track-card-body">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <span className="track-card-link">
                    {item.count === 1 ? t("products.viewProduct", { count: item.count }) : t("products.viewProducts", { count: item.count })}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="product-tracks-footer">
            <Link className="btn ghost dark" href="/products">{t("products.viewAll")}</Link>
          </div>
        </div>
      </section>

      <CompanySection
        title={t("company.title")}
        intros={[
          t("company.intro1"),
          t("company.intro2"),
        ]}
        highlights={[
          t("company.highlight1"),
          t("company.highlight2"),
          t("company.highlight3"),
          t("company.highlight4"),
        ]}
        ctaProduct="Solar DC & LV Protection"
      />
      <BeyondSection
        title={t("beyond.title")}
        subtitle={t("beyond.subtitle")}
      />

      <section className="section market-band muted">
        <div className="section-heading centered">
          <p className="eyebrow">{t("market.eyebrow")}</p>
          <h2>{t("market.title")}</h2>
        </div>
        <div className="market-grid">
          {exportMarkets.map((m) => (
            <div className="market-card" key={m.region}>
              <strong>{m.region}</strong>
              <span>{m.countries}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="oem-band">
          <div>
            <p className="eyebrow">{t("oem.eyebrow")}</p>
            <h2>{t("oem.title")}</h2>
            <p style={{ color: "var(--muted)", marginTop: 12 }}>
              {t("oem.description")}
            </p>
            <div className="button-row" style={{ marginTop: 18 }}>
              <InquiryModal triggerLabel={t("oem.getProposal")} triggerClassName="btn primary" intent="factory" />
              <Link className="btn ghost dark" href="/about">{t("oem.aboutFactory")}</Link>
            </div>
          </div>
          <ul>
            {oemCapabilities.map((cap) => (
              <li key={cap}>{cap}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="stats-band">
        <div><strong>{t("stats.s1Value")}</strong><span>{t("stats.s1Label")}</span></div>
        <div><strong>{t("stats.s2Value")}</strong><span>{t("stats.s2Label")}</span></div>
        <div><strong>{t("stats.s3Value")}</strong><span>{t("stats.s3Label")}</span></div>
        <div><strong>{t("stats.s4Value")}</strong><span>{t("stats.s4Label")}</span></div>
        <div><strong>{t("stats.s5Value")}</strong><span>{t("stats.s5Label")}</span></div>
      </section>

      <section className="section cta-section">
        <div>
          <p className="eyebrow">{t("finalCta.eyebrow")}</p>
          <h2>{t("finalCta.title")}</h2>
        </div>
        <InquiryModal triggerLabel={t("finalCta.button")} triggerClassName="btn primary" intent="quote" />
      </section>
    </main>
  );
}
