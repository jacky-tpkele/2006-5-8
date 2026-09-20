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
          <h2>Smart Wi-Fi Circuit Breaker Manufacturer</h2>
          <p className="cb-hero-subtitle">
            IoT-enabled DIN rail circuit breakers with remote control, real-time monitoring, and programmable protection via smartphone app.
          </p>
          <div className="cb-hero-params">
            <span className="cb-param-tag">WiFi Remote Control</span>
            <span className="cb-param-tag">Real-time Monitoring</span>
            <span className="cb-param-tag">Energy Metering</span>
            <span className="cb-param-tag">Tuya Smart Ecosystem</span>
          </div>
          <div className="cb-hero-cta">
            <InquiryModal triggerLabel="Request a Quote" triggerClassName="btn primary" intent="quote" product="Smart Wi-Fi MCB" />
            <InquiryModal triggerLabel="Send Your Specifications" triggerClassName="btn ghost dark" intent="specs" product="Smart Wi-Fi MCB" />
          </div>
        </div>
      </div>
    </section>
  );
}
