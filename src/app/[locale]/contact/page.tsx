import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import { LeadForm } from "@/components/LeadForm";
import { PageTitle } from "@/components/PageTitle";
import { site } from "@/data/site";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: t("seoTitle"),
    description: t("seoDescription"),
    alternates: {
      canonical: localizedPath("/contact", locale),
      languages: alternateLanguages("/contact"),
    },
  };
}

type ContactPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ product?: string; intent?: string }>;
};

export default async function ContactPage({ params, searchParams }: ContactPageProps) {
  const { locale } = await params;
  const { product, intent } = await searchParams;
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <main>
      <PageTitle title={t("pageTitle")} crumb={t("crumb")} />
      <section className="section contact-layout">
        <div className="contact-info">
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2>{t("heading")}</h2>
          <p>{t("lede")}</p>
          <div className="contact-list">
            <div>
              <span className="line-icon">⌖</span>
              <p>
                <strong>{t("address")}</strong>
                {site.address}
              </p>
            </div>
            <div>
              <span className="line-icon">☎</span>
              <p>
                <strong>{t("phone")}</strong>
                {site.phone}
              </p>
            </div>
            <div>
              <span className="line-icon">@</span>
              <p>
                <strong>{t("email")}</strong>
                {site.email}
              </p>
            </div>
            <div>
              <span className="line-icon">☏</span>
              <p>
                <strong>{t("whatsapp")}</strong>
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
                  {site.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
        <LeadForm initialProduct={product} initialIntent={intent} />
      </section>

      <section className="map-band" aria-label={t("mapAria")}>
        <div className="map-card">
          <span className="line-icon">⌖</span>
          <strong>{t("mapTitle")}</strong>
          <p>{t("mapLocation")}</p>
        </div>
      </section>
    </main>
  );
}
