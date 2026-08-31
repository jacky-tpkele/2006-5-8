import type { Metadata } from "next";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { CertIcon } from "@/components/CertIcon";
import { InquiryModal } from "@/components/InquiryModal";
import { PageTitle } from "@/components/PageTitle";
import { certifications, products } from "@/data/site";
import { getTranslations } from "next-intl/server";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "solarDc" });

  return {
    title: t("seoTitle"),
    description: t("seoDescription"),
    keywords: t("seoKeywords").split(", "),
    alternates: {
      canonical: localizedPath("/solar-dc-protection", locale),
      languages: alternateLanguages("/solar-dc-protection"),
    },
  };
}

export default async function SolarDcProtectionPage() {
  const t = await getTranslations("solarDc");

  const countBySub = (slug: string) => products.filter((p) => p.subCategorySlug === slug).length;
  const countByParent = (cat: string) => products.filter((p) => p.parentCategory === cat).length;

  const coreProducts = [
    {
      name: t("dcMcbName"),
      image: "/assets/home-products-normalized/mcb.webp",
      description: t("dcMcbDesc"),
      href: "/products/category/mcb/dc-mcb",
      count: countBySub("dc-mcb"),
      bullets: [t("dcMcbB1"), t("dcMcbB2"), t("dcMcbB3"), t("dcMcbB4")],
    },
    {
      name: t("dcSpdName"),
      image: "/assets/home-products-normalized/spd.webp",
      description: t("dcSpdDesc"),
      href: "/products/category/spd/dc-spd",
      count: countBySub("dc-spd"),
      bullets: [t("dcSpdB1"), t("dcSpdB2"), t("dcSpdB3"), t("dcSpdB4")],
    },
    {
      name: t("combinerName"),
      image: "/assets/home-products-normalized/combiner-box.webp",
      description: t("combinerDesc"),
      href: "/products/category/combiner-box",
      count: countByParent("Combiner Box"),
      bullets: [t("combinerB1"), t("combinerB2"), t("combinerB3"), t("combinerB4")],
    },
  ];

  const useCases = [
    { title: t("useCase1Title"), text: t("useCase1Text") },
    { title: t("useCase2Title"), text: t("useCase2Text") },
    { title: t("useCase3Title"), text: t("useCase3Text") },
    { title: t("useCase4Title"), text: t("useCase4Text") },
  ];

  const reasons = [
    { title: t("reason1Title"), text: t("reason1Text") },
    { title: t("reason2Title"), text: t("reason2Text") },
    { title: t("reason3Title"), text: t("reason3Text") },
    { title: t("reason4Title"), text: t("reason4Text") },
  ];

  const faq = [
    { q: t("faq1Q"), a: t("faq1A") },
    { q: t("faq2Q"), a: t("faq2A") },
    { q: t("faq3Q"), a: t("faq3A") },
    { q: t("faq4Q"), a: t("faq4A") },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t("seoTitle"),
    description: t("seoDescription"),
    url: "https://www.tpkele.com/solar-dc-protection",
    hasPart: coreProducts.map((p) => ({
      "@type": "Product",
      name: `TPKELE ${p.name}`,
      description: p.description,
      image: `https://www.tpkele.com${p.image}`,
      url: `https://www.tpkele.com${p.href}`,
      brand: { "@type": "Brand", name: "TPKELE" },
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageTitle title={t("pageTitle")} crumb={t("crumb")} />

      <section className="section compact">
        <div className="track-heading">
          <span className="track-tag">{t("trackTag")}</span>
          <h2 className="logo-color-title">{t("heading")}</h2>
          <p>{t("intro")}</p>
          <p className="hero-slogan" style={{ marginTop: 12 }}>{t("slogan")}</p>
        </div>

        <div className="family-grid family-grid-3">
          {coreProducts.map((p) => (
            <article className="family-card family-card-solar" key={p.name}>
              <Link href={p.href} className="family-card-media" aria-label={p.name}>
                <Image src={p.image} alt={`TPKELE ${p.name}`} width={320} height={220} />
              </Link>
              <div className="family-card-body">
                <span className="family-card-flag solar">{t("cardFlag")}</span>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <ul style={{ margin: "4px 0 6px", paddingLeft: 18, color: "var(--muted)", fontSize: 13, lineHeight: 1.6 }}>
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <Link className="text-link" href={p.href}>
                  {p.count === 1 ? t("viewSingular", { count: p.count }) : t("viewPlural", { count: p.count })}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section muted">
        <div className="section-heading centered">
          <p className="eyebrow">{t("useCasesEyebrow")}</p>
          <h2>{t("useCasesHeading")}</h2>
        </div>
        <div className="application-grid">
          {useCases.map((u) => (
            <article className="application-item" key={u.title}>
              <h3>{u.title}</h3>
              <p>{u.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading centered">
          <p className="eyebrow">{t("reasonsEyebrow")}</p>
          <h2>{t("reasonsHeading")}</h2>
        </div>
        <div className="segment-grid">
          {reasons.map((r) => (
            <article className="segment-card" key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="trust-band" aria-label="Certifications and standards">
        <div className="trust-band-head">
          <div>
            <p className="eyebrow" style={{ marginBottom: 6 }}>{t("certsEyebrow")}</p>
            <h2>{t("certsHeading")}</h2>
          </div>
          <Link className="text-link" href="/about">{t("certsLink")}</Link>
        </div>
        <div className="cert-row">
          {certifications.map((cert) => (
            <div className="cert-chip" key={cert.code}>
              <CertIcon code={cert.code} className="cert-chip-icon" />
              <strong>{cert.label}</strong>
              <span>{cert.description}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading centered">
          <p className="eyebrow">{t("faqEyebrow")}</p>
          <h2>{t("faqHeading")}</h2>
        </div>
        <div className="faq-list">
          {faq.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section cta-section">
        <div>
          <p className="eyebrow">{t("ctaEyebrow")}</p>
          <h2>{t("ctaHeading")}</h2>
        </div>
        <InquiryModal triggerLabel={t("ctaButton")} triggerClassName="btn primary" intent="quote" />
      </section>
    </main>
  );
}
