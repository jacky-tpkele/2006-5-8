import { Link } from "@/i18n/navigation";
import { site } from "@/data/site";
import { boxLocale, hubContent } from "@/data/distribution-boxes";
import { ui } from "@/components/distribution-boxes/BoxTypePage";
import { Configurator } from "./Configurator";
import { copy } from "./copy";
import s from "./page.module.css";

export const PATH = "/products/distribution-boxes/configurator";

export const seo = {
  en: {
    title: "Distribution Box Configurator | Custom AC, DC & Empty Enclosures",
    description:
      "Configure a custom AC or DC distribution box or choose empty ABS / metal enclosures online. Pick MCBs, RCBOs, SPDs, meters and box size, then request an engineer-checked quotation.",
    keywords: ["distribution box configurator", "custom distribution box", "DC distribution box configurator", "AC distribution board builder", "empty distribution box wholesale", "MCB enclosure"],
  },
  ru: {
    title: "Конфигуратор распределительного щита | Щиты AC, DC и пустые корпуса",
    description:
      "Соберите щит AC или DC на заказ или выберите пустые корпуса ABS / металл онлайн. Автоматы, АВДТ, УЗИП, счётчики и размер корпуса — расчёт с проверкой инженера.",
    keywords: ["конфигуратор щита", "распределительный щит на заказ", "щит DC на заказ", "сборка щита AC", "пустые корпуса щитов оптом"],
  },
};

const below = {
  en: {
    howTitle: "From Configuration to Delivered Boxes",
    faqTitle: "Configurator FAQ",
    faq: [
      { q: "Is the configuration final?", a: "No. It is a starting point. A TPKELE engineer checks ratings, box size and layout against your system, then sends a quotation and layout proposal for your approval." },
      { q: "What is the MOQ for empty enclosures?", a: "500 sets per order. For smaller quantities, send the request anyway and we will advise on available options." },
      { q: "How does breaking capacity affect price?", a: "Breaking capacity (4.5kA, 6kA, 10kA and above) is the largest short-circuit current a breaker can safely interrupt. Higher ratings need stronger contacts and arc chambers, which raises quality and cost. Choose it to match the fault level at the installation point." },
      { q: "Can I send a single-line diagram?", a: "Yes. After you submit, reply to our email with your drawing attached. Direct file upload is coming soon." },
      { q: "Can boxes carry our brand?", a: "Yes. Choose “Logo / label printing” in the options step. We can print your logo and circuit labels on the front panel." },
    ],
    related: "Related pages",
  },
  ru: {
    howTitle: "От конфигурации до готовых щитов",
    faqTitle: "Вопросы о конфигураторе",
    faq: [
      { q: "Конфигурация окончательная?", a: "Нет, это отправная точка. Инженер TPKELE проверит номиналы, размер корпуса и компоновку под вашу систему и пришлёт расчёт и предложение по компоновке на согласование." },
      { q: "Какой минимальный заказ пустых корпусов?", a: "500 шт. на заказ. Для меньших количеств всё равно отправьте запрос — подскажем доступные варианты." },
      { q: "Как отключающая способность влияет на цену?", a: "Отключающая способность (4,5 кА, 6 кА, 10 кА и выше) — максимальный ток КЗ, который автомат безопасно отключает. Более высокие значения требуют более мощных контактов и дугогасительных камер, что повышает качество и цену. Выбирайте по току КЗ в точке установки." },
      { q: "Можно ли отправить однолинейную схему?", a: "Да. После отправки ответьте на наше письмо, приложив схему. Прямая загрузка файлов скоро появится." },
      { q: "Можно ли нанести наш бренд?", a: "Да. Выберите «Печать логотипа / маркировки» в опциях — нанесём логотип и названия линий на лицевую панель." },
    ],
    related: "Связанные страницы",
  },
};

export function ConfiguratorPage({ locale }: { locale: string }) {
  const lang = boxLocale(locale);
  const t = copy[lang];
  const b = below[lang];
  const nav = ui[lang];
  const process = hubContent[lang].process;
  const url = `${site.url}${lang === "ru" ? "/ru" : ""}${PATH}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: seo[lang].title,
      description: seo[lang].description,
      url,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      provider: { "@type": "Organization", name: site.name, url: site.url },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: nav.home, item: site.url },
        { "@type": "ListItem", position: 2, name: nav.products, item: `${site.url}/products` },
        { "@type": "ListItem", position: 3, name: nav.hub, item: `${site.url}/products/distribution-boxes` },
        { "@type": "ListItem", position: 4, name: t.eyebrow, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: b.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  const related = [
    { href: "/products/distribution-boxes", label: nav.hub },
    { href: "/products/ac-distribution-box", label: lang === "ru" ? "Щит переменного тока" : "AC Distribution Box" },
    { href: "/products/dc-distribution-box", label: lang === "ru" ? "Щит постоянного тока" : "DC Distribution Box" },
    { href: "/products/enclosures", label: lang === "ru" ? "Корпуса щитов" : "Enclosures" },
    { href: "/products/ac-mcb", label: "AC MCB" },
    { href: "/products/dc-mcb", label: "DC MCB" },
    { href: "/products/spd", label: "SPD" },
    { href: "/projects/mongolia-ulaanbaatar-battery-storage", label: lang === "ru" ? "Проект: Монголия" : "Project: Mongolia" },
  ];

  return (
    <main className={s.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="slim-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">{nav.home}</Link>
        <span aria-hidden="true">/</span>
        <Link href="/products">{nav.products}</Link>
        <span aria-hidden="true">/</span>
        <Link href="/products/distribution-boxes">{nav.hub}</Link>
        <span aria-hidden="true">/</span>
        <span className="current">{t.eyebrow}</span>
      </nav>

      <header className={s.hero}>
        <div className={s.heroText}>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.h1}</h1>
          <p className={s.lead}>{t.lead}</p>
        </div>
        <ul className={s.trust}>
          {t.trust.map((x) => <li key={x}>{x}</li>)}
        </ul>
      </header>

      <section className={s.tool}>
        <Configurator locale={locale} />
      </section>

      <section className="section">
        <h2 className="sub-section-title">{b.howTitle}</h2>
        <ol className={s.steps}>
          {process.map((p, i) => (
            <li key={p.title}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section product-faq-section">
        <h2 className="sub-section-title">{b.faqTitle}</h2>
        <div className="faq-list">
          {b.faq.map((f) => (
            <details key={f.q} className="faq-item"><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="sub-section-title">{b.related}</h2>
        <div className={s.related}>
          {related.map((r) => <Link key={r.href} href={r.href}>{r.label} →</Link>)}
        </div>
      </section>
    </main>
  );
}
