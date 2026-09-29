import Image from "next/image";
import { features } from "./data";

export function FeaturesGrid() {
  return (
    <section className="section muted">
      <div className="section-heading centered">
        <p className="eyebrow">Why Choose TPKELE RCBO</p>
        <h2>Built for AU/NZ Switchboard Standards</h2>
      </div>
      <div className="cb-features-grid">
        {features.map((f) => (
          <div className="cb-feature-card" key={f.title}>
            <div className="cb-feature-media">
              <Image src={f.image} alt="" width={120} height={120} />
            </div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
