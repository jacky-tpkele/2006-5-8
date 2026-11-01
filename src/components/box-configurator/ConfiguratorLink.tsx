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
