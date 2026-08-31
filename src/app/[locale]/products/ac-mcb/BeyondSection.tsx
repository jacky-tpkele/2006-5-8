import { getTranslations } from "next-intl/server";

interface BeyondSectionProps {
  locale: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export async function BeyondSection({ locale, eyebrow, title, subtitle }: BeyondSectionProps) {
  const t = await getTranslations({ locale, namespace: "beyond" });

  return (
    <section className="section">
      <div className="section-heading centered">
        <p className="eyebrow">{eyebrow || t("eyebrow")}</p>
        <h2>{title || t("title")}</h2>
        <div className="cb-heading-bar"></div>
        <p className="cb-beyond-subtitle">{subtitle || t("subtitle")}</p>
      </div>
      <div className="cb-beyond-grid">
        <article className="cb-beyond-card">
          <div className="cb-beyond-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <h3>{t("consultTitle")}</h3>
          <p>{t("consultText")}</p>
        </article>
        <article className="cb-beyond-card">
          <div className="cb-beyond-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          </div>
          <h3>{t("recommendTitle")}</h3>
          <p>{t("recommendText")}</p>
        </article>
        <article className="cb-beyond-card">
          <div className="cb-beyond-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          </div>
          <h3>{t("logisticsTitle")}</h3>
          <p>{t("logisticsText")}</p>
        </article>
        <article className="cb-beyond-card">
          <div className="cb-beyond-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
          </div>
          <h3>{t("installTitle")}</h3>
          <p>{t("installText")}</p>
        </article>
      </div>
    </section>
  );
}
