import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { InquiryModal } from "@/components/InquiryModal";
import { site } from "@/data/site";
import { boxLocale, boxTypes, hubContent, type BoxType } from "@/data/distribution-boxes";
import styles from "./boxes.module.css";
import { ConfiguratorLink } from "@/components/box-configurator/ConfiguratorLink";

export const ui = {
  en: {
    home: "Home",
    products: "Products",
    hub: "Distribution Boxes",
    applications: "Typical Applications",
    components: "TPKELE Components Used",
    send: "Information Needed for a Quotation",
    faq: "Frequently Asked Questions",
    caseTitle: "Project Reference",
    caseLink: "View project →",
    more: "Other Box Types",
    quote: "Request a Box Quotation",
    technical: "Ask Technical Question",
    ctaTitle: "Send Your Single-Line Diagram",
    ctaText: "Attach your drawing or equipment list in the inquiry, or email it to",
    item: "Item",
    options: "Options",
  },
  ru: {
    home: "Главная",
    products: "Продукция",
    hub: "Распределительные щиты",
    applications: "Типичные применения",
    components: "Компоненты TPKELE в щите",
    send: "Что нужно для расчёта",
    faq: "Частые вопросы",
    caseTitle: "Референс-проект",
    caseLink: "Смотреть проект →",
    more: "Другие типы щитов",
    quote: "Запросить расчёт щита",
    technical: "Задать технический вопрос",
    ctaTitle: "Пришлите однолинейную схему",
    ctaText: "Приложите схему или перечень оборудования к запросу или отправьте на",
    item: "Параметр",
    options: "Варианты",
  },
};

export function BoxTypePage({ box, locale }: { box: BoxType; locale: string }) {
  const lang = boxLocale(locale);
  const c = box.content[lang];
  const t = ui[lang];
  const others = boxTypes.filter((b) => b.slug !== box.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.home, item: site.url },
      { "@type": "ListItem", position: 2, name: t.products, item: `${site.url}/products` },
      { "@type": "ListItem", position: 3, name: t.hub, item: `${site.url}/products/distribution-boxes` },
      { "@type": "ListItem", position: 4, name: c.label, item: `${site.url}/products/${box.slug}` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <nav className="slim-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">{t.home}</Link>
        <span aria-hidden="true">/</span>
        <Link href="/products">{t.products}</Link>
        <span aria-hidden="true">/</span>
        <Link href="/products/distribution-boxes">{t.hub}</Link>
        <span aria-hidden="true">/</span>
        <span className="current">{c.label}</span>
      </nav>

      <section className={`section ${styles.hero}`}>
        <div>
          <p className="eyebrow">{t.hub} / {c.label}</p>
          <h1>{c.hero}</h1>
          <p className="detail-copy">{c.intro}</p>
          <div className="button-row">
            <InquiryModal triggerLabel={t.quote} triggerClassName="btn primary" product={c.label} intent="quote" />
            <InquiryModal triggerLabel={t.technical} triggerClassName="btn ghost dark" product={c.label} intent="technical" title={t.technical} />
            {box.slug !== "ats-panel" ? <ConfiguratorLink locale={locale} type={box.slug === "ac-distribution-box" ? "ac" : "dc"} /> : null}
          </div>
        </div>
        <div>
          <div className={styles.heroImage}>
            <Image src={box.image} alt={c.label} width={560} height={420} priority />
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sub-section-title">{t.applications}</h2>
        <div className={styles.pillRow}>
          {c.useCases.map((u) => <span className={styles.pill} key={u}>{u}</span>)}
        </div>
      </section>

      <section className="section product-spec-section">
        <h2 className="product-spec-title">{c.configTitle}</h2>
        <div className="product-spec-table-wrap">
          <table className="product-spec-table spec-table-pair">
            <thead>
              <tr>
                <th scope="col" className="spec-col-param">{t.item}</th>
                <th scope="col" className="spec-col-req">{t.options}</th>
              </tr>
            </thead>
            <tbody>
              {c.configRows.map((row) => (
                <tr key={row.item}>
                  <td className="spec-col-param">{row.item}</td>
                  <td className="spec-col-req">{row.options}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2 className="sub-section-title">{t.components}</h2>
        <div className={styles.pillRow}>
          {box.components.map((p) => <Link className={styles.pill} href={p.href} key={p.href}>{p.label[lang]} →</Link>)}
        </div>
      </section>

      <section className="section">
        <h2 className="sub-section-title">{t.send}</h2>
        <ul className={styles.checklist}>
          {c.checklist.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      {box.caseHref && (
        <section className="section">
          <h2 className="sub-section-title">{t.caseTitle}</h2>
          <div className={styles.caseList}>
            <Link className={styles.caseItem} href={box.caseHref}>
              {box.slug === "ats-panel" ? hubContent[lang].zimbabweCase : hubContent[lang].mongoliaCase}
              <span>{t.caseLink}</span>
            </Link>
          </div>
        </section>
      )}

      <section className="section product-faq-section">
        <h2 className="sub-section-title">{t.faq}</h2>
        <div className="faq-list">
          {c.faq.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="sub-section-title">{t.more}</h2>
        <div className={styles.cardGrid}>
          <Link className={styles.card} href="/products/combiner-box">
            <h3>{hubContent[lang].pvCombinerLabel}</h3>
            <p>{hubContent[lang].pvCombinerSummary}</p>
            <span className={styles.cardLink}>→</span>
          </Link>
          {others.map((b) => (
            <Link className={styles.card} href={`/products/${b.slug}`} key={b.slug}>
              <h3>{b.content[lang].label}</h3>
              <p>{b.content[lang].summary}</p>
              <span className={styles.cardLink}>→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={styles.ctaBox}>
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaText} <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
          <InquiryModal triggerLabel={t.quote} triggerClassName="btn primary" product={c.label} intent="quote" />
        </div>
      </section>
    </main>
  );
}
