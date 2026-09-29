export function SensitivitySection() {
  const sensitivityOptions = [
    {
      sensitivity: "10 mA",
      application: "Special locations requiring enhanced protection — bathrooms, medical areas, or circuits specified for 10mA sensitivity.",
      standard: "AS/NZS 3000 special locations",
    },
    {
      sensitivity: "30 mA",
      application: "Personal protection on final circuits — the standard for socket outlets, lighting, and general circuits in residential and commercial switchboards.",
      standard: "AS/NZS 3000 mandatory for socket circuits",
    },
    {
      sensitivity: "50 mA / 100 mA",
      application: "Equipment or fire protection where personal protection is provided upstream — sub-boards, industrial equipment, or specific installation requirements.",
      standard: "AS/NZS 3000 fire protection",
    },
  ];

  return (
    <section className="section muted">
      <div className="section-heading centered">
        <p className="eyebrow">RESIDUAL CURRENT SENSITIVITY</p>
        <h2>Choosing the Right IΔn Rating</h2>
        <p style={{ color: "var(--muted)", marginTop: 12, maxWidth: 720, marginInline: "auto" }}>
          30 mA is the standard for personal protection on final circuits. 10 mA provides enhanced protection for special locations. 50/100 mA is used for equipment or fire protection.
        </p>
      </div>
      <div style={{ maxWidth: 1200, margin: "48px auto 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
        {sensitivityOptions.map((item) => (
          <div key={item.sensitivity} style={{ padding: 24, background: "white", borderRadius: 8, border: "1px solid var(--border)" }}>
            <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8, color: "var(--primary)" }}>{item.sensitivity}</h3>
            <p style={{ fontSize: 14, fontWeight: 600, color: "var(--green)", marginBottom: 12 }}>{item.standard}</p>
            <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>{item.application}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
