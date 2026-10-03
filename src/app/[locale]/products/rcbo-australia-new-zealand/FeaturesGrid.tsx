import Image from "next/image";
import { Link } from "@/i18n/navigation";

export function FeaturesGrid() {
  return (
    <section className="section muted">
      <div className="section-heading centered">
        <p className="eyebrow">WHY CHOOSE TPKELE RCBO</p>
        <h2>Built for AU/NZ Switchboard Standards</h2>
      </div>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, marginTop: 48 }}>
        <div style={{ padding: "24px", background: "white", borderRadius: 8, border: "1px solid var(--border)" }}>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: "var(--primary)" }}>IEC/EN 61009-1 & AS/NZS 61009.1</h3>
          <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
            Designed to IEC/EN 61009-1 and AS/NZS 61009.1 with CE marking — request exact-model test reports and AU/NZ registration documents before ordering
          </p>
        </div>
        <div style={{ padding: "24px", background: "white", borderRadius: 8, border: "1px solid var(--border)" }}>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: "var(--primary)" }}>1P+N in 18mm Module</h3>
          <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
            Single-module RCBO combines earth leakage and overcurrent protection — saves switchboard space vs separate RCD + MCB
          </p>
        </div>
        <div style={{ padding: "24px", background: "white", borderRadius: 8, border: "1px solid var(--border)" }}>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: "var(--primary)" }}>Type A for Modern Loads</h3>
          <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
            Detects both AC and pulsating DC residual current — safe for inverters, induction cooktops, LED drivers, and EV chargers
          </p>
        </div>
        <div style={{ padding: "24px", background: "white", borderRadius: 8, border: "1px solid var(--border)" }}>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: "var(--primary)" }}>One RCBO Per Circuit</h3>
          <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
            Independent leakage protection for each final circuit — fault on one circuit does not trip others, standard AU/NZ layout
          </p>
        </div>
      </div>
    </section>
  );
}
