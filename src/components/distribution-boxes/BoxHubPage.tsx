import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { InquiryModal } from "@/components/InquiryModal";
import { site } from "@/data/site";
import { boxLocale, boxTypes, hubContent } from "@/data/distribution-boxes";
import { ui } from "./BoxTypePage";
import styles from "./boxes.module.css";

export function BoxHubPage({ locale }: { locale: string }) {
  const lang = boxLocale(locale);
  const h = hubContent[lang];
  const t = ui[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: h.seoTitle,
    description: h.seoDescription,
    url: `${site.url}/products/distribution-boxes`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t.home, item: site.url },
        { "@type": "ListItem", position: 2, name: t.products, item: `${site.url}/products` },
        { "@type": "ListItem", position: 3, name: t.hub, item: `${site.url}/products/distribution-boxes` },
      ],
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="slim-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">{t.home}</Link>
        <span aria-hidden="true">/</span>
        <Link href="/products">{t.products}</Link>
        <span aria-hidden="true">/</span>
        <span className="current">{t.hub}</span>
      </nav>

      <section className={`section ${styles.hero}`}>
        <div>
          <p className="eyebrow">{h.eyebrow}</p>
          <h1>{h.hero}</h1>
          <p className="detail-copy">{h.intro}</p>
          <div className="button-row">
            <InquiryModal triggerLabel={t.quote} triggerClassName="btn primary" product={t.hub} intent="quote" />
            <InquiryModal triggerLabel={t.technical} triggerClassName="btn ghost dark" product={t.hub} intent="technical" title={t.technical} />
          </div>
        </div>
        <div>
          <div className={styles.heroImage}>
            <Image src="/assets/projects/mongolia-layout-1.webp" alt={h.mongoliaCase} width={560} height={260} priority />
          </div>
          <p className={styles.placeholderNote}>{t.photoNote}</p>
        </div>
      </section>

      <section className="section">
        <h2 className="sub-section-title">{h.typesTitle}</h2>
        <div className={styles.cardGrid}>
          <Link className={styles.card} href="/products/combiner-box">
            <h3>{h.pvCombinerLabel}</h3>
            <p>{h.pvCombinerSummary}</p>
            <span className={styles.cardLink}>→</span>
          </Link>
          {boxTypes.map((b) => (
            <Link className={styles.card} href={`/products/${b.slug}`} key={b.slug}>
              <h3>{b.content[lang].label}</h3>
              <p>{b.content[lang].summary}</p>
              <span className={styles.cardLink}>→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="inline-cta-card">
          <p>{lang === "ru" ? "Нужен только пустой корпус? Пластиковые IP65 / IP50 и металлические щиты PZ30, от 2 до 60 модулей." : "Only need the empty box? Plastic IP65 / IP50 and PZ30 metal enclosures, 2 to 60 ways."}</p>
          <Link className="btn primary" href="/products/enclosures">{lang === "ru" ? "Корпуса щитов →" : "View enclosures →"}</Link>
        </div>
      </section>

      <section className="section">
        <h2 className="sub-section-title">{h.processTitle}</h2>
        <div className={styles.steps}>
          {h.process.map((s, i) => (
            <div className={styles.step} key={s.title}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="sub-section-title">{h.checklistTitle}</h2>
        <ul className={styles.checklist}>
          {h.checklist.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="section">
        <h2 className="sub-section-title">{h.casesTitle}</h2>
        <div className={styles.caseList}>
          <Link className={styles.caseItem} href="/projects/mongolia-ulaanbaatar-battery-storage">
            {h.mongoliaCase}
            <span>{t.caseLink}</span>
          </Link>
          <Link className={styles.caseItem} href="/projects/zimbabwe-sirdc-solar-project">
            {h.zimbabweCase}
            <span>{t.caseLink}</span>
          </Link>
        </div>
      </section>

      <section className="section">
        <div className={styles.ctaBox}>
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaText} <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
          <InquiryModal triggerLabel={t.quote} triggerClassName="btn primary" product={t.hub} intent="quote" />
        </div>
      </section>
    </main>
  );
}
