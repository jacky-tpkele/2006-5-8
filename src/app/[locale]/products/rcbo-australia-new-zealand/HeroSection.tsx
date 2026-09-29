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
          <h2>RCBO Manufacturer for Australia & New Zealand</h2>
          <p className="cb-hero-subtitle">
            1P+N 18mm RCBO with IEC/EN 61009-1 and AS/NZS 61009.1 certification — combining earth leakage and overcurrent protection in one DIN rail module for AU/NZ switchboards.
          </p>
          <div className="cb-hero-params">
            <span className="cb-param-tag">1P+N (18mm)</span>
            <span className="cb-param-tag">1A – 40A</span>
            <span className="cb-param-tag">Type A / AC</span>
            <span className="cb-param-tag">10/30/50/100mA</span>
            <span className="cb-param-tag">6kA Breaking</span>
          </div>
          <div className="cb-hero-cta">
            <InquiryModal triggerLabel="Request a Quote" triggerClassName="btn primary" intent="quote" product="RCBO Australia NZ" />
            <InquiryModal triggerLabel="Send Your Specifications" triggerClassName="btn ghost dark" intent="specs" product="RCBO Australia NZ" />
          </div>
        </div>
      </div>
    </section>
  );
}
