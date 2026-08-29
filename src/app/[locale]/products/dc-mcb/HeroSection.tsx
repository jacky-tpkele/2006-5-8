import Image from "next/image";
import { InquiryModal } from "@/components/InquiryModal";

export function HeroSection() {
  return (
    <section className="cb-hero">
      <Image
        src="/assets/landing/circuit-breakers/factory-1.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="cb-hero-bg"
        aria-hidden
      />
      <div className="cb-hero-inner">
        <div className="cb-hero-content">
          <h2>DC Miniature Circuit Breaker Supplier</h2>
          <p className="cb-hero-subtitle">
            Purpose-built DIN rail DC MCBs for solar PV strings, battery storage, EV charging, and DC distribution — up to 1500VDC.
          </p>
          <div className="cb-hero-params">
            <span className="cb-param-tag">1P / 2P / 3P / 4P</span>
            <span className="cb-param-tag">6A – 125A</span>
            <span className="cb-param-tag">250V – 1500V DC</span>
            <span className="cb-param-tag">B / C / D / K Curve</span>
          </div>
          <div className="cb-hero-cta">
            <InquiryModal triggerLabel="Request a Quote" triggerClassName="btn primary" intent="quote" product="DC MCB" />
            <InquiryModal triggerLabel="Send Your Specifications" triggerClassName="btn ghost dark" intent="specs" product="DC MCB" />
          </div>
        </div>
      </div>
    </section>
  );
}
