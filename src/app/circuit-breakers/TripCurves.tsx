import Image from "next/image";
import { curves } from "./data";

export function TripCurves() {
  return (
    <section className="section muted">
      <div className="section-heading centered">
        <p className="eyebrow">Selection Guide</p>
        <h2>Trip Curve Comparison</h2>
      </div>
      <p className="cb-overview-text">
        Select the correct trip curve based on the load characteristics of your circuit.
        The trip curve determines the instantaneous magnetic trip threshold relative to the rated current.
      </p>
      <div className="cb-curve-grid">
        {curves.map((c) => (
          <article className="cb-curve-card" key={c.curve}>
            <div className="cb-curve-img">
              <Image src={c.image} alt={`${c.curve} trip characteristic chart`} fill unoptimized style={{ objectFit: "contain" }} />
            </div>
            <div className="cb-curve-header">
              <h3>{c.curve}</h3>
              <span className="cb-curve-trip">{c.trip}</span>
            </div>
            <p>{c.application}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
