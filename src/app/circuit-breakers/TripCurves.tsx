import Image from "next/image";

export function TripCurves() {
  return (
    <section className="section muted" style={{ paddingTop: 0 }}>
      <div style={{ display: "flex", flexDirection: "column" as const, gap: 24, maxWidth: 960, margin: "0 auto" }}>
        <Image src="/assets/landing/circuit-breakers/curve-chart-b.png" alt="B Curve trip characteristic chart" width={1180} height={600} sizes="(max-width: 1024px) 100vw, 960px" style={{ width: "100%", height: "auto" }} />
        <Image src="/assets/landing/circuit-breakers/curve-chart-c.png" alt="C Curve trip characteristic chart" width={1180} height={600} sizes="(max-width: 1024px) 100vw, 960px" style={{ width: "100%", height: "auto" }} />
        <Image src="/assets/landing/circuit-breakers/curve-chart-d.png" alt="D Curve trip characteristic chart" width={1180} height={600} sizes="(max-width: 1024px) 100vw, 960px" style={{ width: "100%", height: "auto" }} />
      </div>
    </section>
  );
}
