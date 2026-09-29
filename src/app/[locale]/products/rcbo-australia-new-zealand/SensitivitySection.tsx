import { sensitivityOptions } from "./data";

export function SensitivitySection() {
  return (
    <section className="section muted">
      <div className="section-heading centered">
        <p className="eyebrow">Residual Current Sensitivity</p>
        <h2>Choosing the Right IΔn Rating</h2>
        <p style={{ color: "var(--muted)", marginTop: 12, maxWidth: 720, marginInline: "auto" }}>
          30 mA is the standard for personal protection on final circuits. 10 mA provides enhanced protection for special locations. 50/100 mA is used for equipment or fire protection.
        </p>
      </div>
      <div className="cb-curves-grid">
        {sensitivityOptions.map((item) => (
          <div className="cb-curve-card" key={item.sensitivity}>
            <h3>{item.sensitivity}</h3>
            <p className="cb-curve-trip">{item.standard}</p>
            <p className="cb-curve-app">{item.application}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
