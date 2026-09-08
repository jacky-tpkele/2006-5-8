import Link from "next/link";
import "./NextStep.css";

type NextStepAction = {
  title: string;
  href: string;
  description: string;
  icon: string;
  badge?: string;
};

type NextStepProps = {
  title?: string;
  description?: string;
  actions: NextStepAction[];
};

export function NextStep({
  title = "What's Next?",
  description = "Continue your journey with these recommended resources",
  actions,
}: NextStepProps) {
  return (
    <section className="next-step-section">
      <div className="next-step-container">
        <div className="next-step-header">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="next-step-grid">
          {actions.map((action, index) => (
            <Link key={index} href={action.href} className="next-step-card">
              <div className="next-step-icon">{action.icon}</div>
              <div className="next-step-content">
                <div className="next-step-title-row">
                  <h3>{action.title}</h3>
                  {action.badge && <span className="next-step-badge">{action.badge}</span>}
                </div>
                <p>{action.description}</p>
              </div>
              <span className="next-step-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
