import { Link } from "@/i18n/navigation";
import type { Product } from "@/data/site";
import { ConfiguratorLink } from "@/components/box-configurator/ConfiguratorLink";
import styles from "./boxes.module.css";

export type AppContext = "ac" | "dc" | "ats";

type Card = { href: string; title: string; text: string };

const copy: Record<"en" | "ru", { eyebrow: string; title: string; cards: Record<AppContext, Card[]> }> = {
  en: {
    eyebrow: "Applications",
    title: "Where This Product Is Used",
    cards: {
      ac: [
        { href: "/products/ac-distribution-box", title: "AC Distribution Box", text: "Inverter AC output and feeder boxes built with TPKELE AC MCBs and 4P SPDs." },
        { href: "/projects/mongolia-ulaanbaatar-battery-storage", title: "Project: Mongolia Solar + Storage", text: "11 AC distribution boxes with a 4P breaker and 4P SPD on every inverter output." },
        { href: "/products/distribution-boxes", title: "Custom Distribution Boxes", text: "Send your single-line diagram; we propose the layout and bill of materials." },
      ],
      dc: [
        { href: "/products/dc-distribution-box", title: "DC Distribution Box", text: "Battery-side and DC bus boxes with DC breakers and DC surge protection." },
        { href: "/products/combiner-box", title: "PV Combiner Box", text: "PV string combining with DC fuses, DC breakers and DC SPDs." },
        { href: "/projects/mongolia-ulaanbaatar-battery-storage", title: "Project: Mongolia Solar + Storage", text: "Battery-side DC boxes for 30kW and 20kW hybrid systems." },
      ],
      ats: [
        { href: "/products/ats-panel", title: "ATS Panel", text: "Mains, generator and inverter changeover panels built around TPKELE ATS." },
        { href: "/projects/zimbabwe-sirdc-solar-project", title: "Project: Zimbabwe Solar PV + BESS", text: "Procurement reference with single- and three-phase automatic changeover." },
        { href: "/products/distribution-boxes", title: "Custom Distribution Boxes", text: "Send your single-line diagram; we propose the layout and bill of materials." },
      ],
    },
  },
  ru: {
    eyebrow: "Применение",
    title: "Где используется этот продукт",
    cards: {
      ac: [
        { href: "/products/ac-distribution-box", title: "Щит переменного тока", text: "Щиты выхода AC инверторов и отходящих линий на автоматах AC и УЗИП 4P TPKELE." },
        { href: "/projects/mongolia-ulaanbaatar-battery-storage", title: "Проект: Монголия, солнце + накопитель", text: "11 щитов AC с автоматом 4P и УЗИП 4P на выходе каждого инвертора." },
        { href: "/products/distribution-boxes", title: "Распределительные щиты на заказ", text: "Пришлите однолинейную схему — мы предложим компоновку и спецификацию." },
      ],
      dc: [
        { href: "/products/dc-distribution-box", title: "Щит постоянного тока", text: "Щиты на стороне батарей и шины DC с автоматами и УЗИП постоянного тока." },
        { href: "/products/combiner-box", title: "Солнечный комбайнерный бокс", text: "Объединение стрингов с предохранителями, автоматами и УЗИП DC." },
        { href: "/projects/mongolia-ulaanbaatar-battery-storage", title: "Проект: Монголия, солнце + накопитель", text: "Щиты DC на стороне батарей для гибридных систем 30 кВт и 20 кВт." },
      ],
      ats: [
        { href: "/products/ats-panel", title: "Щит АВР", text: "Щиты переключения сеть — генератор — инвертор на переключателях TPKELE." },
        { href: "/projects/zimbabwe-sirdc-solar-project", title: "Проект: Зимбабве, PV + накопитель", text: "Закупочная спецификация с однофазным и трёхфазным автоматическим переключением." },
        { href: "/products/distribution-boxes", title: "Распределительные щиты на заказ", text: "Пришлите однолинейную схему — мы предложим компоновку и спецификацию." },
      ],
    },
  },
};

export function appContextForProduct(product: Pick<Product, "slug" | "parentCategory" | "subCategorySlug">): AppContext | null {
  if (product.parentCategory === "ATS") return "ats";
  if (product.parentCategory !== "SPD" && product.parentCategory !== "MCB") return null;
  const key = product.subCategorySlug ?? product.slug;
  if (key.startsWith("dc-")) return "dc";
  if (key.startsWith("ac-")) return "ac";
  return null;
}

const builder = {
  en: "Need it pre-assembled? Build an AC or DC box with this component online.",
  ru: "Нужен готовый щит? Соберите щит AC или DC с этим компонентом онлайн.",
};

/** `item` presets the configurator component; defaults to the MCB of the context. */
export function ApplicationLinks({ context, locale, item }: { context: AppContext; locale: string; item?: string }) {
  const lang = locale === "ru" ? "ru" : "en";
  const c = copy[lang];
  return (
    <section className="section">
      <p className="eyebrow">{c.eyebrow}</p>
      <h2 className="sub-section-title">{c.title}</h2>
      <div className={`${styles.cardGrid} ${styles.cardGrid3}`}>
        {c.cards[context].map((card) => (
          <Link className={styles.card} href={card.href} key={card.href}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <span className={styles.cardLink}>→</span>
          </Link>
        ))}
      </div>
      {context !== "ats" ? (
        <div className="inline-cta-card" style={{ marginTop: 16 }}>
          <p>{builder[lang]}</p>
          <ConfiguratorLink locale={locale} type={context} item={item ?? `${context}-mcb`} className="btn primary" />
        </div>
      ) : null}
    </section>
  );
}
