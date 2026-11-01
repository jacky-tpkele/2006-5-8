import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { InquiryModal } from "@/components/InquiryModal";
import { site } from "@/data/site";
import { boxLocale } from "@/data/distribution-boxes";
import { enclosureHub, enclosureSeries, type EnclosureSeries } from "@/data/enclosures";
import { ui } from "./BoxTypePage";
import styles from "./boxes.module.css";
import { ConfiguratorLink } from "@/components/box-configurator/ConfiguratorLink";

const extra = {
  en: { customizable: "Customizable", specs: "Specifications", parameter: "Parameter", value: "Value", otherSeries: "Other Enclosure Series", view: "View series →" },
  ru: { customizable: "Под заказ", specs: "Характеристики", parameter: "Параметр", value: "Значение", otherSeries: "Другие серии корпусов", view: "Смотреть серию →" },
};

function Breadcrumb({ lang, current }: { lang: "en" | "ru"; current?: string }) {
  const t = ui[lang];
  const hub = enclosureHub[lang].label;
  return (
    <nav className="slim-breadcrumb" aria-label="Breadcrumb">
      <Link href="/">{t.home}</Link>
      <span aria-hidden="true">/</span>
      <Link href="/products">{t.products}</Link>
      <span aria-hidden="true">/</span>
      <Link href="/products/distribution-boxes">{t.hub}</Link>
      <span aria-hidden="true">/</span>
      {current ? <Link href="/products/enclosures">{hub}</Link> : <span className="current">{hub}</span>}
      {current && (<><span aria-hidden="true">/</span><span className="current">{current}</span></>)}
    </nav>
  );
}

function SeriesCards({ lang, group, exclude }: { lang: "en" | "ru"; group?: "plastic" | "metal"; exclude?: string }) {
  const list = enclosureSeries.filter((s) => (!group || s.group === group) && s.slug !== exclude);
  return (
    <div className={styles.cardGrid}>
      {list.map((s) => (
        <Link className={styles.card} href={`/products/${s.slug}`} key={s.slug}>
          <h3>{s.name[lang]}</h3>
          <p>{s.summary[lang]}</p>
          <span className={styles.cardLink}>{extra[lang].view}</span>
        </Link>
      ))}
    </div>
  );
}

function Upsell({ lang }: { lang: "en" | "ru" }) {
  const h = enclosureHub[lang];
  return (
    <section className="section">
      <div className={styles.ctaBox}>
        <h2>{h.upsellTitle}</h2>
        <p>{h.upsellText}</p>
        <Link className="btn primary" href="/products/distribution-boxes">{h.upsellLink}</Link>
      </div>
    </section>
  );
}

export function EnclosureHubPage({ locale }: { locale: string }) {
  const lang = boxLocale(locale);
  const h = enclosureHub[lang];
  const t = ui[lang];
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: h.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Breadcrumb lang={lang} />

      <section className={`section ${styles.hero}`}>
        <div>
          <p className="eyebrow">{t.hub} / {h.label}</p>
          <h1>{h.hero}</h1>
          <p className="detail-copy">{h.intro}</p>
          <div className="button-row">
            <InquiryModal triggerLabel={t.quote} triggerClassName="btn primary" product={h.label} intent="quote" />
            <ConfiguratorLink locale={locale} type="empty" />
          </div>
        </div>
        <div>
          <div className={styles.heroImage}>
            <Image src="/assets/enclosures/enclosure-ht.webp" alt={h.label} width={1400} height={788} priority />
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sub-section-title">{h.plastic}</h2>
        <SeriesCards lang={lang} group="plastic" />
      </section>

      <section className="section">
        <h2 className="sub-section-title">{h.metal}</h2>
        <SeriesCards lang={lang} group="metal" />
      </section>

      <section className="section">
        <h2 className="sub-section-title">{h.checklistTitle}</h2>
        <ul className={styles.checklist}>{h.checklist.map((i) => <li key={i}>{i}</li>)}</ul>
      </section>

      <section className="section product-faq-section">
        <h2 className="sub-section-title">{t.faq}</h2>
        <div className="faq-list">
          {h.faq.map((f) => (
            <details key={f.q} className="faq-item"><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
      </section>

      <Upsell lang={lang} />
    </main>
  );
}

export function EnclosureSeriesPage({ series, locale }: { series: EnclosureSeries; locale: string }) {
  const lang = boxLocale(locale);
  const t = ui[lang];
  const x = extra[lang];
  const h = enclosureHub[lang];
  const name = series.name[lang];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description: series.seoDescription[lang],
    brand: { "@type": "Brand", name: site.name },
    category: h.label,
    additionalProperty: series.specs.map((s) => ({ "@type": "PropertyValue", name: s.label.en, value: s.value.en })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb lang={lang} current={name} />

      <section className={`section ${styles.hero}`}>
        <div>
          <p className="eyebrow">{h.label} / {series.code}</p>
          <h1>{name}</h1>
          <p className="detail-copy">{series.intro[lang]}</p>
          <div className="button-row">
            <InquiryModal triggerLabel={t.quote} triggerClassName="btn primary" product={name} intent="quote" />
            <InquiryModal triggerLabel={t.technical} triggerClassName="btn ghost dark" product={name} intent="technical" title={t.technical} />
            <ConfiguratorLink locale={locale} type="empty" series={series.group === "plastic" ? series.code.split(" ")[0] : undefined} />
          </div>
        </div>
        <div>
          <div className={styles.heroImage}>
            <Image src={series.image} alt={name} width={1400} height={800} priority unoptimized={series.image.endsWith(".svg")} />
          </div>
        </div>
      </section>

      <section className="section product-spec-section">
        <h2 className="product-spec-title">{x.specs}</h2>
        <div className="product-spec-table-wrap">
          <table className="product-spec-table spec-table-pair">
            <thead><tr><th scope="col" className="spec-col-param">{x.parameter}</th><th scope="col" className="spec-col-req">{x.value}</th></tr></thead>
            <tbody>
              {series.specs.map((s) => (
                <tr key={s.label.en}><td className="spec-col-param">{s.label[lang]}</td><td className="spec-col-req">{s.value[lang]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {series.tables.map((table) => (
        <section className="section product-spec-section" key={table.title.en}>
          <h2 className="product-spec-title">{table.title[lang]}</h2>
          <div className="product-spec-table-wrap">
            <table className="product-spec-table spec-table-matrix">
              <thead><tr>{table.headers[lang].map((hd) => <th scope="col" key={hd}>{hd}</th>)}</tr></thead>
              <tbody>
                {table.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, ci) => (
                      <td key={ci} className={ci === 0 ? "spec-matrix-rowhead" : "spec-matrix-cell"}>
                        {cell ?? (table.empty ? table.empty[lang] : x.customizable)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {table.note && <p className="spec-matrix-note">{table.note[lang]}</p>}
        </section>
      ))}

      <section className="section">
        <h2 className="sub-section-title">{h.checklistTitle}</h2>
        <ul className={styles.checklist}>{h.checklist.map((i) => <li key={i}>{i}</li>)}</ul>
      </section>

      <section className="section">
        <h2 className="sub-section-title">{x.otherSeries}</h2>
        <SeriesCards lang={lang} exclude={series.slug} />
      </section>

      <Upsell lang={lang} />
    </main>
  );
}
