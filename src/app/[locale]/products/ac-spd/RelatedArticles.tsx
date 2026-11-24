import { Link } from "@/i18n/navigation";

const articles = [
  {
    href: "/blog/understanding-spd-surge",
    title: "Understanding SPD: Protection Against Surge",
    description:
      "How surge protective devices work, where to install Type 1/Type 2/Type 1+2 SPDs, and how to compare AC SPD vs DC SPD specs.",
  },
  {
    href: "/guides/solar-pv-protection-system-guide",
    title: "Solar PV Protection System Guide",
    description:
      "How AC SPDs, DC SPDs, DC MCBs, and combiner boxes coordinate to protect a complete solar installation from string to grid.",
  },
  {
    href: "/blog/solar-combiner-box-safety",
    title: "Solar Combiner Box: The Key to PV System Safety",
    description:
      "What goes inside a PV combiner box — including DC SPD coordination with AC SPDs on the inverter output side.",
  },
];

export function RelatedArticles() {
  return (
    <section className="section muted">
      <div className="section-heading centered">
        <p className="eyebrow">Related Reading</p>
        <h2>AC SPD Guides & Articles</h2>
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
