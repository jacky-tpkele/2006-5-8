import { Link } from "@/i18n/navigation";

// Entry button used on product / box pages. Query presets the configurator's first step.
const label = { en: "Configure online", ru: "Собрать онлайн" };

export function ConfiguratorLink({ locale, type, series, item, className = "btn ghost dark", text }: {
  locale: string;
  type?: "empty" | "ac" | "dc";
  series?: string;
  item?: string;
  className?: string;
  text?: string;
}) {
  const q = new URLSearchParams();
  if (type) q.set("type", type);
  if (series) q.set("series", series);
  if (item) q.set("item", item);
  const qs = q.toString();
  return (
    <Link className={className} href={`/products/distribution-boxes/configurator${qs ? `?${qs}` : ""}`}>
      {text ?? label[locale === "ru" ? "ru" : "en"]} →
    </Link>
  );
}

export type CtaItem = "rcbo" | "ac-meter" | "vp" | "smart-mcb" | "ats" | "ac-mcb" | "ac-spd" | "dc-mcb" | "dc-spd" | "dc-isolator" | "combiner";

const ctaText: Record<CtaItem, { en: string; ru: string }> = {
  rcbo: { en: "Need RCBOs pre-assembled in a box? Build your AC distribution box online.", ru: "Нужны АВДТ в готовом щите? Соберите щит AC онлайн." },
  "ac-meter": { en: "Need meters pre-assembled in a box? Build a metering board online.", ru: "Нужны счётчики в готовом щите? Соберите щит учёта онлайн." },
  vp: { en: "Need the voltage protector pre-assembled in a box? Build your AC box online.", ru: "Нужно реле напряжения в готовом щите? Соберите щит AC онлайн." },
  "smart-mcb": { en: "Need smart breakers pre-assembled in a box? Build your AC box online.", ru: "Нужны умные автоматы в готовом щите? Соберите щит AC онлайн." },
  "ac-mcb": { en: "Need it pre-assembled? Build an AC box with this component online.", ru: "Нужен готовый щит? Соберите щит AC с этим компонентом онлайн." },
  "ac-spd": { en: "Need it pre-assembled? Build an AC box with this component online.", ru: "Нужен готовый щит? Соберите щит AC с этим компонентом онлайн." },
  "dc-mcb": { en: "Need it pre-assembled? Build a DC box with this component online.", ru: "Нужен готовый щит? Соберите щит DC с этим компонентом онлайн." },
  "dc-spd": { en: "Need it pre-assembled? Build a DC box with this component online.", ru: "Нужен готовый щит? Соберите щит DC с этим компонентом онлайн." },
  ats: { en: "Need an ATS pre-assembled with breakers and SPD? Build your AC box online.", ru: "Нужен АВР в готовом щите с автоматами и УЗИП? Соберите щит AC онлайн." },
  "dc-isolator": { en: "Need isolators pre-assembled in a DC box? Configure it online.", ru: "Нужны разъединители в готовом щите DC? Соберите его онлайн." },
  combiner: { en: "Need a DC box with breakers, fuses and SPDs? Configure it online in a few steps.", ru: "Нужен щит DC с автоматами, предохранителями и УЗИП? Соберите его онлайн." },
};

/** Green inline card with a preset configurator link. Shared by product pages. */
export function ConfiguratorCta({ locale, item, wrap = true }: { locale: string; item: CtaItem; wrap?: boolean }) {
  const lang = locale === "ru" ? "ru" : "en";
  const type = ctaType(item);
  const card = (
    <div className="inline-cta-card">
      <p>{ctaText[item][lang]}</p>
      <ConfiguratorLink locale={locale} type={type} item={item === "combiner" ? undefined : item} className="btn primary" />
    </div>
  );
  return wrap ? <section className="section">{card}</section> : card;
}

/** Product detail pages: which preset (if any) fits this product. MCB / SPD are handled by ApplicationLinks. */
export function ctaItemForProduct(p: { parentCategory: string; subCategorySlug?: string }): CtaItem | null {
  if (p.subCategorySlug === "smart-circuit-breaker") return "smart-mcb";
  if (p.parentCategory === "RCBO") return "rcbo";
  if (p.parentCategory === "Energy Meter") return "ac-meter";
  if (p.parentCategory === "Voltage Protector") return "vp";
  if (p.parentCategory === "Combiner Box") return "combiner";
  return null;
}

export function ctaType(item: CtaItem): "ac" | "dc" {
  return item.startsWith("dc") || item === "combiner" ? "dc" : "ac";
}

export function ctaHref(item: CtaItem) {
  const q = new URLSearchParams({ type: ctaType(item) });
  if (item !== "combiner") q.set("item", item);
  return `/products/distribution-boxes/configurator?${q}`;
}

/** Technical guides → configurator preset. */
export const guideCtaItem: Record<string, CtaItem> = {
  "ac-mcb-selection-guide": "ac-mcb",
  "dc-mcb-selection-guide": "dc-mcb",
  "dc-spd-selection-guide": "dc-spd",
  "dc-isolator-selection-guide": "dc-isolator",
  "din-rail-energy-meter-guide": "ac-meter",
  "pv-combiner-box-guide": "combiner",
  "rccb-rcbo-selection-guide": "rcbo",
  "solar-pv-protection-system-guide": "combiner",
  "voltage-protector-selection-guide": "vp",
  "ats-selection-guide": "ats",
};

/** Blog posts → configurator preset. Unlisted posts fall back to their related products. */
export const blogCtaItem: Record<string, CtaItem> = {
  "choose-right-mcb": "ac-mcb",
  "understanding-spd-surge": "ac-spd",
  "energy-meter-selection": "ac-meter",
  "solar-combiner-box-safety": "combiner",
  "ats-modern-distribution": "ats",
  "smart-circuit-breaker-vs-traditional-breaker": "smart-mcb",
};

/** MCB / SPD / ATS products too, for blog fallback. */
export function anyCtaItemForProduct(p: { slug: string; parentCategory: string; subCategorySlug?: string }): CtaItem | null {
  const own = ctaItemForProduct(p);
  if (own) return own;
  if (p.parentCategory === "ATS") return "ats";
  const key = p.subCategorySlug ?? p.slug;
  if (p.parentCategory === "MCB" || p.parentCategory === "SPD") {
    const kind = p.parentCategory === "MCB" ? "mcb" : "spd";
    if (key.startsWith("dc-")) return `dc-${kind}` as CtaItem;
    if (key.startsWith("ac-")) return `ac-${kind}` as CtaItem;
  }
  return null;
}
