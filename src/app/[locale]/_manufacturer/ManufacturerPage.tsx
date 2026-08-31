import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { InquiryModal } from "@/components/InquiryModal";
import type { ManufacturerData } from "./types";
import "./manufacturer.css";

export async function ManufacturerPage({ data, locale }: { data: ManufacturerData; locale: string }) {
  const t = await getTranslations({ locale, namespace: "manufacturer" });

  return (
    <main className="mfr-page">

      {/* ── 1. HERO ──────────────────────────────────────────────── */}
      <section className="mfr-hero">
        <Image
          src={data.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="mfr-hero-bg"
          aria-hidden
        />
        <div className="mfr-hero-inner">
          <div className="mfr-hero-left">
            <p className="eyebrow">TPKELE · {data.category} {t("manufacturing")}</p>
            <h1>{data.heroTitle}</h1>
            <p className="mfr-hero-sub">{data.heroSubtitle}</p>
            <div className="mfr-hero-tags">
              {data.heroTags.map((tag) => (
                <span className="mfr-tag" key={tag}>{tag}</span>
              ))}
            </div>
            <div className="mfr-hero-cta">
              <InquiryModal
                triggerLabel={t("requestQuote")}
                triggerClassName="btn primary"
                intent="quote"
                product={data.productLabel}
              />
              <InquiryModal
                triggerLabel={t("sendSpecs")}
                triggerClassName="btn ghost dark"
                intent="specs"
                product={data.productLabel}
              />
            </div>
          </div>
          <div className="mfr-hero-right">
            <div className="mfr-checklist-card">
              <p className="mfr-checklist-title">{data.checklistTitle}</p>
              <ul className="mfr-checklist">
                {data.checklist.map((item) => (
                  <li key={item.title}>
                    <span className="mfr-check-icon" aria-hidden>✔</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHY DEDICATED MANUFACTURER ───────────────────────── */}
      <section className="section mfr-section">
        <div className="section-heading">
          <p className="eyebrow">{t("whyItMatters")}</p>
          <h2>{data.whyTitle}</h2>
          <p className="mfr-intro">{data.whyIntro}</p>
        </div>
        <div className="mfr-cards-3">
          {data.whyCards.map((c) => (
            <div className="mfr-card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. MANUFACTURER VS TRADER TABLE ─────────────────────── */}
      <section className="mfr-section-wash">
        <div className="section mfr-section">
          <div className="section-heading">
            <p className="eyebrow">{t("vsTrader")}</p>
            <h2>{data.compare.title}</h2>
          </div>
          <div className="mfr-table-wrap">
            <table className="mfr-table">
              <thead>
                <tr>
                  <th>{data.compare.headers[0]}</th>
                  <th>{data.compare.headers[1]}</th>
                </tr>
              </thead>
              <tbody>
                {data.compare.rows.map((row, i) => (
                  <tr key={i}>
                    <td><span className="mfr-td-good">✔</span>{row.left}</td>
                    <td><span className="mfr-td-bad">✗</span>{row.right}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 4. PRODUCT SCOPE BY SERIES ───────────────────────────── */}
      <section className="section mfr-section">
        <div className="section-heading">
          <p className="eyebrow">{t("productScope")}</p>
          <h2>{data.scopeTitle}</h2>
          <p className="mfr-intro">{data.scopeIntro}</p>
        </div>
        <div className="mfr-series-grid">
          {data.series.map((s, i) => (
            <Link href={s.href} className="mfr-series-card" key={`${s.href}-${i}`}>
              <strong>{s.label}</strong>
              <span>{s.meta}</span>
              <span className="mfr-arrow" aria-hidden>→</span>
            </Link>
          ))}
        </div>
        {data.scopeNote && (
          <p className="mfr-scope-note">
            <span className="mfr-note-label">{t("note")}</span>
            {data.scopeNote}
          </p>
        )}
      </section>

      {/* ── 5. WHAT EXPORT BUYERS NEED ───────────────────────────── */}
      <section className="mfr-section-wash">
        <div className="section mfr-section">
          <div className="section-heading">
            <p className="eyebrow">{t("buyerRequirements")}</p>
            <h2>{data.buyerTitle}</h2>
            <p className="mfr-intro">{data.buyerIntro}</p>
          </div>
          <div className="mfr-list-grid">
            {data.buyerBlocks.map((b) => (
              <div className="mfr-list-block" key={b.title}>
                <h3>{b.title}</h3>
                <ul>
                  {b.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. OEM WORKFLOW ──────────────────────────────────────── */}
      <section className="section mfr-section">
        <div className="section-heading">
          <p className="eyebrow">{t("oemWorkflow")}</p>
          <h2>{data.oemTitle}</h2>
          <p className="mfr-intro">{data.oemIntro}</p>
        </div>
        <div className="mfr-cards-3">
          {data.oemCards.map((c) => (
            <div className="mfr-card mfr-card-step" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. FACTORY CAPABILITY + QC ───────────────────────────── */}
      <section className="mfr-section-wash">
        <div className="section mfr-section">
          <div className="section-heading">
            <p className="eyebrow">{t("factoryQuality")}</p>
            <h2>{data.factoryTitle}</h2>
            <p className="mfr-intro">{data.factoryIntro}</p>
          </div>
          <div className="mfr-list-grid mfr-list-grid-2">
            {data.factoryBlocks.map((b) => (
              <div className="mfr-list-block" key={b.title}>
                <h3>{b.title}</h3>
                <ul>
                  {b.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. DOCUMENTATION TABLE ───────────────────────────────── */}
      <section className="section mfr-section">
        <div className="section-heading">
          <p className="eyebrow">{t("documentation")}</p>
          <h2>{data.docsTitle}</h2>
          <p className="mfr-intro">{data.docsIntro}</p>
        </div>
        <div className="mfr-table-wrap">
          <table className="mfr-table">
            <thead>
              <tr>
                <th>{data.docsTable.headers[0]}</th>
                <th>{data.docsTable.headers[1]}</th>
              </tr>
            </thead>
            <tbody>
              {data.docsTable.rows.map((row, i) => (
                <tr key={i}>
                  <td>{row.left}</td>
                  <td>{row.right}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 9. STANDARDS TABLE ───────────────────────────────────── */}
      <section className="mfr-section-wash">
        <div className="section mfr-section">
          <div className="section-heading">
            <p className="eyebrow">{t("standards")}</p>
            <h2>{data.standardsTitle}</h2>
            <p className="mfr-intro">{data.standardsIntro}</p>
          </div>
          <div className="mfr-table-wrap">
            <table className="mfr-table">
              <thead>
                <tr>
                  <th>{data.standardsTable.headers[0]}</th>
                  <th>{data.standardsTable.headers[1]}</th>
                </tr>
              </thead>
              <tbody>
                {data.standardsTable.rows.map((row, i) => (
                  <tr key={i}>
                    <td><strong>{row.left}</strong></td>
                    <td>{row.right}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 10. COMMERCIAL POINTS TABLE ──────────────────────────── */}
      <section className="section mfr-section">
        <div className="section-heading">
          <p className="eyebrow">{t("commercial")}</p>
          <h2>{data.commercialTitle}</h2>
          <p className="mfr-intro">{data.commercialIntro}</p>
        </div>
        <div className="mfr-table-wrap">
          <table className="mfr-table">
            <thead>
              <tr>
                <th>{data.commercialTable.headers[0]}</th>
                <th>{data.commercialTable.headers[1]}</th>
              </tr>
            </thead>
            <tbody>
              {data.commercialTable.rows.map((row, i) => (
                <tr key={i}>
                  <td><strong>{row.left}</strong></td>
                  <td>{row.right}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 11. FAQ ──────────────────────────────────────────────── */}
      <section className="mfr-section-wash">
        <div className="section mfr-section">
          <div className="section-heading">
            <p className="eyebrow">{t("faq")}</p>
            <h2>{data.faqTitle}</h2>
          </div>
          <div className="mfr-faq">
            {data.faq.map((item) => (
              <div className="mfr-faq-item" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. CTA ──────────────────────────────────────────────── */}
      <section className="section cta-section">
        <div>
          <p className="eyebrow">{t("ctaEyebrow", { category: data.category })}</p>
          <h2>{t("ctaTitle", { product: data.productLabel })}</h2>
        </div>
        <InquiryModal
          triggerLabel={t("requestQuote")}
          triggerClassName="btn primary"
          intent="quote"
          product={data.productLabel}
        />
      </section>

    </main>
  );
}
