import Image from "next/image";
import { features } from "./data";

export function FeaturesGrid() {
  return (
    <section className="section muted">
      <div className="section-heading centered">
        <h2>Engineered for DC Systems</h2>
      </div>
      <div className="cb-feat-grid">
        {features.map((f) => (
          <article className="cb-feat-card" key={f.title}>
            <div className="cb-feat-media">
              <Image src={f.image} alt={f.title} width={360} height={240} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px" />
            </div>
            <div className="cb-feat-body">
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
