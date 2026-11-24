import { Link } from "@/i18n/navigation";

const articles = [
  {
    href: "/guides/dc-mcb-selection-guide",
    title: "DC MCB Selection Guide for Solar PV Systems",
    description:
      "Step-by-step guide covering rated current, breaking capacity, trip curve, and pole configuration for solar and battery applications.",
  },
  {
    href: "/guides/solar-pv-protection-system-guide",
    title: "Solar PV Protection System Guide",
    description:
      "How DC MCBs, SPDs, fuses, isolators, and combiner boxes work together to protect a complete PV installation.",
  },
  {
    href: "/blog/understanding-spd-surge",
    title: "Understanding SPD: Protection Against Surge",
    description:
      "Type 1 vs Type 2 SPD explained — and how DC SPDs coordinate with DC MCBs in solar combiner boxes.",
  },
];

export function RelatedArticles() {
  return (
    <section className="section muted">
      <div className="section-heading centered">
        <p className="eyebrow">Related Reading</p>
        <h2>DC MCB Guides & Articles</h2>
      </div>
      <div className="features-grid">
        {articles.map((a) => (
          <Link href={a.href} className="feature-card" key={a.href} style={{ textDecoration: "none" }}>
            <h3>{a.title}</h3>
            <p>{a.description}</p>
            <span className="text-link">Read article →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
