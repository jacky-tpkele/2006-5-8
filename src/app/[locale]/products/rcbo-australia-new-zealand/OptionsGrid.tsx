import Image from "next/image";
import { InquiryModal } from "@/components/InquiryModal";
import { options } from "./data";

export function OptionsGrid() {
  return (
    <section className="section">
      <div className="section-heading centered">
        <p className="eyebrow">Available Options</p>
        <h2>Type A vs Type AC RCBO</h2>
        <p style={{ color: "var(--muted)", marginTop: 12, maxWidth: 720, marginInline: "auto" }}>
          Type A detects both AC and pulsating DC residual current — the safer choice for modern installations with electronic appliances, inverters, and EV chargers.
        </p>
      </div>
      <div className="cb-options-grid">
        {options.map((o) => (
          <InquiryModal
            key={o.name}
            triggerLabel={o.name}
            triggerClassName="cb-option-card"
            triggerContent={
              <>
                <div className="cb-option-media">
                  <Image src={o.image} alt={`TPKELE ${o.name}`} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px" style={{ objectFit: "contain" }} />
                </div>
                <div className="cb-option-body">
                  <h3>{o.name}</h3>
                  <p>{o.description}</p>
                  <ul className="product-features" style={{ marginTop: 12 }}>
                    {o.specs.map((spec, idx) => (
                      <li key={idx}>{spec}</li>
                    ))}
                  </ul>
                </div>
              </>
            }
            product={o.name}
            intent="quote"
          />
        ))}
      </div>
    </section>
  );
}
