import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import Image from "next/image";
import { CertIcon } from "@/components/CertIcon";
import { InquiryModal } from "@/components/InquiryModal";
import { PageTitle } from "@/components/PageTitle";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: localizedPath("/about", locale),
      languages: alternateLanguages("/about"),
    },
  };
}

const certificationCodes = ["CE", "RoHS", "IEC", "ISO", "TUV", "CB"] as const;
const marketKeys = ["europe", "middleEast", "southeastAsia", "southAmerica", "africa", "oceania"] as const;

const factoryImages = [
  { src: "/assets/about/factory-1.webp", altKey: "factoryImageAlt1" },
  { src: "/assets/about/factory-2.webp", altKey: "factoryImageAlt2" },
  { src: "/assets/about/factory-3.webp", altKey: "factoryImageAlt3" },
] as const;

const exhibitionImages = [
  { src: "/assets/about/exhibition-1.webp", altKey: "exhibitionImageAlt1" },
  { src: "/assets/about/exhibition-2.webp", altKey: "exhibitionImageAlt2" },
  { src: "/assets/about/exhibition-3.webp", altKey: "exhibitionImageAlt3" },
] as const;

const valueIcons = ["✓", "⚙", "◎", "↗", "◇"];

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <main>
      <PageTitle title={t("pageTitle")} crumb={t("pageTitle")} homeLabel={t("breadcrumbHome")} locale={locale} />

      <section className="section split">
        <div>
          <p className="eyebrow">{t("whoWeAre")}</p>
          <h2>{t("heroHeading")}</h2>
          <p>{t("intro")}</p>
          <InquiryModal triggerLabel={t("requestFactoryProfile")} triggerClassName="btn primary" intent="factory" />
        </div>
        <Image className="feature-image" src="/assets/about/building.webp" alt={t("buildingAlt")} width={620} height={378} />
      </section>

      <section className="trust-band" id="certifications">
        <div className="trust-band-head">
          <p className="eyebrow">{t("certificationsEyebrow")}</p>
          <h2>{t("certificationsHeading")}</h2>
        </div>
        <div className="cert-row">
          {certificationCodes.map((code) => (
            <div className="cert-chip" key={code}>
              <CertIcon code={code} className="cert-chip-icon" />
              <strong>{t(`certifications.${code}.label`)}</strong>
              <span>{t(`certifications.${code}.description`)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section compact">
        <div className="section-heading centered">
          <p className="eyebrow">{t("factoryEyebrow")}</p>
          <h2>{t("factoryHeading")}</h2>
        </div>
        <div className="media-grid">
          {factoryImages.map((image) => (
            <Image src={image.src} alt={t(image.altKey)} width={390} height={200} key={image.src} />
          ))}
        </div>
      </section>

      <section className="section compact">
        <div className="section-heading centered">
          <p className="eyebrow">{t("exhibitionEyebrow")}</p>
          <h2>{t("exhibitionHeading")}</h2>
        </div>
        <div className="media-grid">
          {exhibitionImages.map((image) => (
            <Image src={image.src} alt={t(image.altKey)} width={390} height={200} key={image.src} />
          ))}
        </div>
      </section>

      <section className="section market-band muted">
        <div className="section-heading centered">
          <p className="eyebrow">{t("globalEyebrow")}</p>
          <h2>{t("globalHeading")}</h2>
        </div>
        <div className="market-grid">
          {marketKeys.map((key) => (
            <div className="market-card" key={key}>
              <strong>{t(`markets.${key}.region`)}</strong>
              <span>{t(`markets.${key}.countries`)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="oem-band">
          <div>
            <p className="eyebrow">{t("oemEyebrow")}</p>
            <h2>{t("oemHeading")}</h2>
            <p>{t("oemDescription")}</p>
            <div className="button-row">
              <InquiryModal triggerLabel={t("getOemProposal")} triggerClassName="btn primary" intent="factory" />
            </div>
          </div>
          <ul>
            {Array.from({ length: 6 }, (_, index) => (
              <li key={index}>{t(`oemCapability${index + 1}`)}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section muted">
        <div className="section-heading centered">
          <p className="eyebrow">{t("whyEyebrow")}</p>
          <h2>{t("whyHeading")}</h2>
        </div>
        <div className="value-grid">
          {valueIcons.map((icon, index) => (
            <article key={index}>
              <span className="line-icon">{icon}</span>
              <h3>{t(`value${index + 1}Title`)}</h3>
              <p>{t(`value${index + 1}Text`)}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
