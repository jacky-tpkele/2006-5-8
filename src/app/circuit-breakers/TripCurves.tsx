import Image from "next/image";

export function TripCurves() {
  return (
    <section className="section muted cb-curves-section">
      <div className="cb-curves-stack">
        <Image src="/assets/landing/circuit-breakers/curve-chart-b.png" alt="B Curve trip characteristic chart" width={1180} height={600} unoptimized />
        <Image src="/assets/landing/circuit-breakers/curve-chart-c.png" alt="C Curve trip characteristic chart" width={1180} height={600} unoptimized />
        <Image src="/assets/landing/circuit-breakers/curve-chart-d.png" alt="D Curve trip characteristic chart" width={1180} height={600} unoptimized />
      </div>
    </section>
  );
}
