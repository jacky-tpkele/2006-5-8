export function FeaturesGrid() {
  const features = [
    {
      icon: "📱",
      title: "Remote WiFi Control",
      description: "Control circuit breakers from anywhere via smartphone app. Turn circuits on/off remotely, perfect for smart homes and commercial buildings.",
    },
    {
      icon: "📊",
      title: "Real-Time Monitoring",
      description: "Monitor voltage, current, power, frequency, and energy consumption in real-time. Track electrical parameters via app dashboard.",
    },
    {
      icon: "⚡",
      title: "Energy Metering",
      description: "Built-in energy meter displays 0–9999 kWh. Track electricity usage, analyze consumption patterns, and optimize energy management.",
    },
    {
      icon: "⏰",
      title: "Programmable Timers",
      description: "Set up to 15 timer groups for automated switching. Schedule circuits for lighting, HVAC, or non-critical loads.",
    },
    {
      icon: "🛡️",
      title: "Configurable Protection",
      description: "App-adjustable overvoltage (130-300V), undervoltage (75-210V), overcurrent (1-63A), and overload protection settings.",
    },
    {
      icon: "🔊",
      title: "Voice Control Ready",
      description: "Compatible with smart home voice assistants. Integrate with existing smart home ecosystems via Tuya Smart platform.",
    },
  ];

  return (
    <section className="section features-grid-section">
      <div className="section-heading centered">
        <p className="eyebrow">Smart Features</p>
        <h2>IoT-Enabled Protection & Control</h2>
      </div>
      <div className="features-grid">
        {features.map((feature, idx) => (
          <div key={idx} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
