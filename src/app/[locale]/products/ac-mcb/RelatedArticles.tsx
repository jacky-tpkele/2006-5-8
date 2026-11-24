import { Link } from "@/i18n/navigation";

const articles = [
  {
    href: "/guides/ac-mcb-selection-guide",
    title: "AC MCB Selection Guide",
    description:
      "Step-by-step guide covering rated current, breaking capacity, trip curve, and pole configuration for residential and commercial installations.",
  },
  {
    href: "/blog/smart-circuit-breaker-vs-traditional-breaker",
    title: "Smart Circuit Breaker vs Traditional MCB",
    description:
      "Compare smart Wi-Fi switches and traditional AC MCBs on protection, remote control, energy monitoring, and safety standards.",
  },
  {
    href: "/blog/understanding-spd-surge",
    title: "Understanding SPD: Protection Against Surge",
    description:
      "How surge protective devices work alongside AC MCBs to give complete overcurrent and overvoltage protection in distribution boards.",
  },
];

export function RelatedArticles() {
  return (
    <section className="section muted">
      <div className="section-heading centered">
        <p className="eyebrow">Related Reading</p>
        <h2>AC MCB Guides & Articles</h2>
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
