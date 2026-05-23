import { InquiryModal } from "@/components/InquiryModal";

export function HeroSection() {
  return (
    <section className="cb-hero">
      <div className="cb-hero-inner">
        <div className="cb-hero-content">
          <h2>AC Miniature Circuit Breaker Supplier</h2>
          <p className="cb-hero-subtitle">
            Reliable DIN rail MCBs for residential, commercial, and industrial power distribution systems.
          </p>
          <div className="cb-hero-params">
            <span className="cb-param-tag">1P / 2P / 3P / 4P</span>
            <span className="cb-param-tag">6A – 63A</span>
            <span className="cb-param-tag">B / C / D Curve</span>
            <span className="cb-param-tag">AC 230V / 400V</span>
          </div>
          <div className="cb-hero-cta">
            <InquiryModal triggerLabel="Request a Quote" triggerClassName="btn primary" intent="quote" product="AC MCB" />
            <InquiryModal triggerLabel="Send Your Specifications" triggerClassName="btn ghost dark" intent="specs" product="AC MCB" />
          </div>
        </div>
      </div>
    </section>
  );
}
