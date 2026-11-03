import { Link } from "@/i18n/navigation";

// Small "already know what you need?" pointer for contact form and inquiry modal.
const copy = {
  en: { text: "Know what you need?", link: "Configure your distribution box online", tail: "it's faster and every configuration is engineer-checked." },
  ru: { text: "Знаете, что нужно?", link: "Соберите щит онлайн", tail: "это быстрее, и каждую конфигурацию проверяет инженер." },
};

export function ConfiguratorNudge({ locale, onNavigate, className }: { locale: string; onNavigate?: () => void; className?: string }) {
  const c = copy[locale === "ru" ? "ru" : "en"];
  return (
    <p className={className ?? "configurator-nudge"}>
      <span aria-hidden="true">▦</span> {c.text}{" "}
      <Link href="/products/distribution-boxes/configurator" onClick={onNavigate}>{c.link} →</Link>{" "}
      <span className="configurator-nudge-tail">{c.tail}</span>
    </p>
  );
}
