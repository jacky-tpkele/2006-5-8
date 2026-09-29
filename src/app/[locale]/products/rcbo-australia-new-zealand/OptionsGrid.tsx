import Image from "next/image";
import { InquiryModal } from "@/components/InquiryModal";

export function OptionsGrid() {
  const options = [
    {
      name: "Type A RCBO",
      description: "Detects AC and pulsating DC residual current — required for inverters, induction cooktops, LED drivers, EV chargers, and modern appliances.",
      image: "/assets/products/rcbo-1pn-18mm/rcbo-1pn-18mm-front.webp",
      specs: ["1–40A", "10/30mA", "Type A", "IEC/EN & AS/NZS"],
    },
    {
      name: "Type AC RCBO",
      description: "Detects sinusoidal AC residual current only — suitable for resistive loads without electronic power conversion.",
      image: "/assets/products/rcbo-1pn-18mm/rcbo-1pn-18mm-side.webp",
      specs: ["1–40A", "10/30mA", "Type AC", "IEC/EN & AS/NZS"],
    },
  ];

  return (
    <section className="section">
      <div className="section-heading centered">
        <p className="eyebrow">Available Options</p>
        <h2>Type A vs Type AC RCBO</h2>
        <p style={{ color: "var(--muted)", marginTop: 12, maxWidth: 720, marginInline: "auto" }}>
          Type A detects both AC and pulsating DC residual current — the safer choice for modern installations with electronic appliances, inverters, and EV chargers.
        </p>
      </div>
      <div style={{ maxWidth: 1000, margin: "48px auto 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
        {options.map((o) => (
          <div key={o.name} style={{ border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden", background: "white" }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "1", background: "#f8f8f8" }}>
              <Image src={o.image} alt={`TPKELE ${o.name}`} fill sizes="(max-width: 640px) 100vw, 500px" style={{ objectFit: "contain", padding: 24 }} />
            </div>
            <div style={{ padding: 24 }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>{o.name}</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.6, marginBottom: 16 }}>{o.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                {o.specs.map((spec, idx) => (
                  <span key={idx} style={{ padding: "4px 12px", background: "var(--muted-bg)", borderRadius: 4, fontSize: 14, color: "var(--muted)" }}>{spec}</span>
                ))}
              </div>
              <InquiryModal
                triggerLabel="Request Quote"
                triggerClassName="btn primary"
                product={o.name}
                intent="quote"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
