import { Link } from "@/i18n/navigation";

const articles = [
  {
    href: "/guides/dc-spd-selection-guide",
    title: "DC SPD Selection Guide for PV Surge Protection",
    description:
      "How to choose the right DC SPD voltage rating, protection type, and discharge current for rooftop and utility-scale solar projects.",
  },
  {
    href: "/guides/solar-pv-protection-system-guide",
    title: "Solar PV Protection System Guide",
    description:
      "How DC SPDs, DC MCBs, fuses, and combiner boxes work together to protect a complete PV installation from string to grid.",
  },
  {
    href: "/blog/solar-combiner-box-safety",
    title: "Solar Combiner Box: The Key to PV System Safety",
    description:
      "What goes inside a PV combiner box — including DC SPD placement, fuse coordination, and enclosure rating selection.",
  },
];

export function RelatedArticles() {
  return (
    <section className="section muted">
      <div className="section-heading centered">
        <p className="eyebrow">Related Reading</p>
        <h2>DC SPD Guides & Articles</h2>
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
