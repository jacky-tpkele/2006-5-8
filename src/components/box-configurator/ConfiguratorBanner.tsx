import { Link } from "@/i18n/navigation";
import s from "./banner.module.css";

const copy = {
  en: {
    eyebrow: "New · Online Configurator",
    title: "Build your distribution box in 3 steps",
    text: "Empty ABS / metal enclosures or custom AC / DC boxes with TPKELE breakers, SPDs and meters. An engineer checks every configuration before quoting.",
    cta: "Start configuring",
    links: [
      { label: "Empty enclosures", q: "?type=empty" },
      { label: "AC box", q: "?type=ac" },
      { label: "DC box", q: "?type=dc" },
    ],
  },
  ru: {
    eyebrow: "Новое · Онлайн-конфигуратор",
    title: "Соберите распределительный щит за 3 шага",
    text: "Пустые корпуса ABS / металл или щиты AC / DC на заказ с автоматами, УЗИП и счётчиками TPKELE. Инженер проверяет каждую конфигурацию перед расчётом.",
    cta: "Начать",
    links: [
      { label: "Пустые корпуса", q: "?type=empty" },
      { label: "Щит AC", q: "?type=ac" },
      { label: "Щит DC", q: "?type=dc" },
    ],
  },
};

const PATH = "/products/distribution-boxes/configurator";
const rail = ["mcb", "mcb", "rcbo", "spd", "mcb", "meter", "mcb"];

export function ConfiguratorBanner({ locale }: { locale: string }) {
  const c = copy[locale === "ru" ? "ru" : "en"];
  return (
    <div className={s.banner}>
      <div className={s.text}>
        <p className={s.eyebrow}>{c.eyebrow}</p>
        <h3>{c.title}</h3>
        <p>{c.text}</p>
        <div className={s.actions}>
          <Link className="btn primary" href={PATH}>{c.cta} →</Link>
          {c.links.map((l) => <Link key={l.q} className={s.chip} href={`${PATH}${l.q}`}>{l.label}</Link>)}
        </div>
      </div>
      <Link href={PATH} className={s.visual} aria-hidden="true" tabIndex={-1}>
        <span className={s.rail}>
          {rail.map((k, i) => <span key={i} className={s.dev} data-kind={k}><i /></span>)}
        </span>
      </Link>
    </div>
  );
}
