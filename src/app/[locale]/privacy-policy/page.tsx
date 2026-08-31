import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import styles from "./privacy.module.css";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });

  return {
    title: t("seoTitle"),
    description: t("seoDescription"),
    alternates: {
      canonical: localizedPath("/privacy-policy", locale),
      languages: alternateLanguages("/privacy-policy"),
    },
  };
}

export default async function PrivacyPolicy({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1>{t("pageTitle")}</h1>
        <p className={styles.updated}>{t("lastUpdated", { date: "June 4, 2026" })}</p>

        <section>
          <h2>{t("intro.title")}</h2>
          <p>{t("intro.content")}</p>
        </section>

        <section>
          <h2>{t("infoCollect.title")}</h2>
          <h3>{t("infoCollect.autoTitle")}</h3>
          <p>{t("infoCollect.autoIntro")}</p>
          <ul>
            <li>{t("infoCollect.autoItem1")}</li>
            <li>{t("infoCollect.autoItem2")}</li>
            <li>{t("infoCollect.autoItem3")}</li>
          </ul>

          <h3>{t("infoCollect.provideTitle")}</h3>
          <p>{t("infoCollect.provideIntro")}</p>
          <ul>
            <li>{t("infoCollect.provideItem1")}</li>
            <li>{t("infoCollect.provideItem2")}</li>
            <li>{t("infoCollect.provideItem3")}</li>
            <li>{t("infoCollect.provideItem4")}</li>
          </ul>
        </section>

        <section>
          <h2>{t("cookies.title")}</h2>
          <p>{t("cookies.intro")}</p>
          <ul>
            <li><strong>{t("cookies.essential")}</strong> {t("cookies.essentialDesc")}</li>
            <li><strong>{t("cookies.analytics")}</strong> {t("cookies.analyticsDesc")}</li>
            <li><strong>{t("cookies.preference")}</strong> {t("cookies.preferenceDesc")}</li>
          </ul>
          <p>{t("cookies.control")}</p>
        </section>

        <section>
          <h2>{t("howWeUse.title")}</h2>
          <p>{t("howWeUse.intro")}</p>
          <ul>
            <li>{t("howWeUse.item1")}</li>
            <li>{t("howWeUse.item2")}</li>
            <li>{t("howWeUse.item3")}</li>
            <li>{t("howWeUse.item4")}</li>
          </ul>
        </section>

        <section>
          <h2>{t("dataSharing.title")}</h2>
          <p>{t("dataSharing.intro")}</p>
          <ul>
            <li><strong>{t("dataSharing.serviceProviders")}</strong> {t("dataSharing.serviceProvidersDesc")}</li>
            <li><strong>{t("dataSharing.legal")}</strong> {t("dataSharing.legalDesc")}</li>
          </ul>
        </section>

        <section>
          <h2>{t("yourRights.title")}</h2>
          <p>{t("yourRights.intro")}</p>
          <ul>
            <li>{t("yourRights.item1")}</li>
            <li>{t("yourRights.item2")}</li>
            <li>{t("yourRights.item3")}</li>
            <li>{t("yourRights.item4")}</li>
            <li>{t("yourRights.item5")}</li>
          </ul>
        </section>

        <section>
          <h2>{t("dataSecurity.title")}</h2>
          <p>{t("dataSecurity.content")}</p>
        </section>

        <section>
          <h2>{t("international.title")}</h2>
          <p>{t("international.content")}</p>
        </section>

        <section>
          <h2>{t("children.title")}</h2>
          <p>{t("children.content")}</p>
        </section>

        <section>
          <h2>{t("changes.title")}</h2>
          <p>{t("changes.content")}</p>
        </section>

        <section>
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.intro")}</p>
          <ul>
            <li><strong>{t("contact.email")}</strong> info@tpkele.com</li>
            <li><strong>{t("contact.website")}</strong> www.tpkele.com</li>
          </ul>
        </section>

        <div className={styles.compliance}>
          <p>
            <strong>{t("compliance.label")}</strong> {t("compliance.content")}
          </p>
        </div>
      </div>
    </main>
  );
}
