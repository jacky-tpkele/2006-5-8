export function SpecsSection() {
  const specs = [
    { label: "Product Model", value: "TPK L6-40" },
    { label: "Product Type", value: "RCBO — Residual Current Circuit Breaker with Overcurrent Protection" },
    { label: "Poles", value: "1P+N (double break)" },
    { label: "Frame Rated Current", value: "40A" },
    { label: "Rated Current (In)", value: "1A, 2A, 3A, 4A, 6A, 10A, 16A, 20A, 25A, 32A, 40A" },
    { label: "Rated Operational Voltage (Ue)", value: "230V AC" },
    { label: "Rated Residual Operating Current (IΔn)", value: "10mA, 30mA, 50mA, 100mA" },
    { label: "Residual Current Type", value: "Type A / Type AC" },
    { label: "Tripping Curve", value: "B, C (thermal-magnetic)" },
    { label: "Rated Short-Circuit Breaking Capacity (Icn)", value: "6kA" },
    { label: "Service Breaking Capacity (Ics)", value: "6kA (100% of Icn)" },
    { label: "Rated Insulation Voltage (Ui)", value: "500V" },
    { label: "Rated Impulse Withstand Voltage (Uimp)", value: "4kV" },
    { label: "Terminal Capacity", value: "1–10 mm²" },
    { label: "Operating Temperature", value: "-30°C to +70°C" },
    { label: "Dimensions (W × H × D)", value: "18 × 82 × 71.6 mm" },
    { label: "Weight", value: "118 g" },
    { label: "Mounting", value: "35mm DIN Rail" },
    { label: "Degree of Protection", value: "IP40 (enclosure), IP20 (terminals)" },
    { label: "Standards", value: "IEC/EN 61009-1, AS/NZS 61009.1, CE marking, RoHS compliant" },
  ];

  return (
    <section className="section">
      <div className="section-heading centered">
        <p className="eyebrow">Technical Specifications</p>
        <h2>TPK L6-40 Series RCBO</h2>
      </div>
      <div style={{ maxWidth: 900, margin: "48px auto 0", border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {specs.map((row, idx) => (
              <tr key={row.label} style={{ borderBottom: idx < specs.length - 1 ? "1px solid var(--border)" : "none" }}>
                <th style={{ padding: "16px 24px", textAlign: "left", fontWeight: 600, width: "40%", background: "#f8f8f8" }}>{row.label}</th>
                <td style={{ padding: "16px 24px", color: "var(--muted)" }}>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
