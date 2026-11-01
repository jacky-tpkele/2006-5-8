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

type CtaItem = "rcbo" | "ac-meter" | "vp" | "smart-mcb" | "ac-mcb" | "ac-spd" | "dc-mcb" | "dc-spd" | "combiner";

const ctaText: Record<CtaItem, { en: string; ru: string }> = {
  rcbo: { en: "Need RCBOs pre-assembled in a box? Build your AC distribution box online.", ru: "Нужны АВДТ в готовом щите? Соберите щит AC онлайн." },
  "ac-meter": { en: "Need meters pre-assembled in a box? Build a metering board online.", ru: "Нужны счётчики в готовом щите? Соберите щит учёта онлайн." },
  vp: { en: "Need the voltage protector pre-assembled in a box? Build your AC box online.", ru: "Нужно реле напряжения в готовом щите? Соберите щит AC онлайн." },
  "smart-mcb": { en: "Need smart breakers pre-assembled in a box? Build your AC box online.", ru: "Нужны умные автоматы в готовом щите? Соберите щит AC онлайн." },
  "ac-mcb": { en: "Need it pre-assembled? Build an AC box with this component online.", ru: "Нужен готовый щит? Соберите щит AC с этим компонентом онлайн." },
  "ac-spd": { en: "Need it pre-assembled? Build an AC box with this component online.", ru: "Нужен готовый щит? Соберите щит AC с этим компонентом онлайн." },
  "dc-mcb": { en: "Need it pre-assembled? Build a DC box with this component online.", ru: "Нужен готовый щит? Соберите щит DC с этим компонентом онлайн." },
  "dc-spd": { en: "Need it pre-assembled? Build a DC box with this component online.", ru: "Нужен готовый щит? Соберите щит DC с этим компонентом онлайн." },
  combiner: { en: "Need a DC box with breakers, fuses and SPDs? Configure it online in a few steps.", ru: "Нужен щит DC с автоматами, предохранителями и УЗИП? Соберите его онлайн." },
};

/** Green inline card with a preset configurator link. Shared by product pages. */
export function ConfiguratorCta({ locale, item, wrap = true }: { locale: string; item: CtaItem; wrap?: boolean }) {
  const lang = locale === "ru" ? "ru" : "en";
  const type = item.startsWith("dc") || item === "combiner" ? "dc" : "ac";
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
