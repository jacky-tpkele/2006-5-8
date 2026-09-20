export function ApplicationsSection() {
  const applications = [
    {
      title: "Residential Smart Homes",
      description: "Remote control of lighting, appliances, and non-critical circuits. Monitor home energy consumption and set automated schedules for daily routines.",
      useCases: ["Smart home lighting control", "Appliance remote switching", "Energy usage tracking", "Vacation mode automation"],
    },
    {
      title: "Commercial Buildings",
      description: "Office building lighting management, after-hours control, and distribution monitoring. Reduce energy waste with scheduled switching.",
      useCases: ["Office lighting schedules", "After-hours automatic shutdown", "Floor-by-floor control", "Energy cost monitoring"],
    },
    {
      title: "Distribution Monitoring",
      description: "Real-time monitoring of low-voltage distribution circuits with remote trip capability. Ideal for unmanned sites and remote facilities.",
      useCases: ["Remote site monitoring", "Substation circuit control", "Electrical parameter logging", "Fault notification alerts"],
    },
    {
      title: "Wet Locations (Leakage Model)",
      description: "Bathrooms, kitchens, and outdoor covered areas requiring leakage monitoring. Real-time leakage current display with instant alerts.",
      useCases: ["Residential bathroom circuits", "Commercial kitchen equipment", "Wet area protection", "Pool equipment monitoring"],
    },
  ];

  return (
    <section className="section applications-section">
      <div className="section-heading centered">
        <p className="eyebrow">Applications</p>
        <h2>Where Smart Wi-Fi MCBs Are Used</h2>
      </div>
      <div className="applications-grid">
        {applications.map((app, idx) => (
          <div key={idx} className="application-card">
            <h3>{app.title}</h3>
            <p className="application-description">{app.description}</p>
            <ul className="use-cases-list">
              {app.useCases.map((useCase, i) => (
                <li key={i}>{useCase}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
