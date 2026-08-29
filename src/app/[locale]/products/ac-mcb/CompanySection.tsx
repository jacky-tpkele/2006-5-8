import Image from "next/image";
import { InquiryModal } from "@/components/InquiryModal";

interface CompanySectionProps {
  eyebrow?: string;
  title?: string;
  intros?: string[];
  highlights?: string[];
  ctaLabel?: string;
  ctaProduct?: string;
}

const DEFAULT_INTROS = [
  "Based in Wenzhou — China's electrical manufacturing capital — TPKELE specializes in low-voltage circuit protection components for global distribution projects.",
  "Our facility covers the full production cycle from mold tooling and injection to assembly, testing, and packaging. Every MCB batch undergoes 100% electrical verification before shipment.",
];

const DEFAULT_HIGHLIGHTS = [
  "In-house production with full QC traceability",
  "OEM/ODM capability — custom logo, label, and packaging",
  "IEC 60898-1 and CE certified product lines",
  "Export experience to 50+ countries",
];

export function CompanySection({
  eyebrow = "About TPKELE",
  title = "Your Dedicated MCB Supply Partner",
  intros = DEFAULT_INTROS,
  highlights = DEFAULT_HIGHLIGHTS,
  ctaLabel = "Learn More About Our Factory",
  ctaProduct = "AC MCB",
}: CompanySectionProps = {}) {
  return (
    <section className="section">
      <div className="cb-company">
        <div className="cb-company-main">
          <div className="cb-company-photo-block">
            <div className="cb-company-photo">
              <Image src="/assets/landing/circuit-breakers/factory-building.png" alt="TPKELE manufacturing facility in Wenzhou, China" width={640} height={420} sizes="(max-width: 1024px) 100vw, 640px" />
            </div>
            <div className="cb-company-cta">
              <InquiryModal triggerLabel={ctaLabel} triggerClassName="btn primary" intent="factory" product={ctaProduct} />
            </div>
          </div>
          <div className="cb-company-text">
            <p className="eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
            {intros.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ul className="cb-company-highlights">
              {highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cb-company-gallery">
          <Image src="/assets/landing/circuit-breakers/factory-2.webp" alt="TPKELE MCB production line" width={380} height={260} sizes="(max-width: 640px) 50vw, 380px" />
          <Image src="/assets/landing/circuit-breakers/factory-3.webp" alt="TPKELE quality testing equipment" width={380} height={260} sizes="(max-width: 640px) 50vw, 380px" />
          <Image src="/assets/landing/circuit-breakers/exhibition-1.webp" alt="TPKELE at international electrical trade show" width={380} height={260} sizes="(max-width: 640px) 50vw, 380px" />
          <Image src="/assets/landing/circuit-breakers/exhibition-2.webp" alt="TPKELE exhibition booth" width={380} height={260} sizes="(max-width: 640px) 50vw, 380px" />
          <Image src="/assets/landing/circuit-breakers/exhibition-3.webp" alt="TPKELE team at industry expo" width={380} height={260} sizes="(max-width: 640px) 50vw, 380px" />
        </div>
      </div>
    </section>
  );
}
