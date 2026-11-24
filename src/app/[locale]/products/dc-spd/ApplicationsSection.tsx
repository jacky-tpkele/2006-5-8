import { Link } from "@/i18n/navigation";
import { applications } from "./data";

export function ApplicationsSection() {
  return (
    <section className="section">
      <div className="section-heading centered">
        <p className="eyebrow">Applications</p>
        <h2>Where DC SPDs Are Used</h2>
      </div>
      <div className="features-grid">
        {applications.map((app) => (
          <div className="feature-card" key={app.title}>
            <h3>{app.title}</h3>
            <p>{app.description}</p>
            <Link href={app.link.href} className="text-link">
              {app.link.label} →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
