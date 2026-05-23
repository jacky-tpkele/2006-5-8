import Image from "next/image";
import { InquiryModal } from "@/components/InquiryModal";

export function CompanySection() {
  return (
    <section className="section">
      <div className="cb-company">
        <div className="cb-company-main">
          <div className="cb-company-photo">
            <Image src="/assets/landing/circuit-breakers/factory-building.png" alt="TPKELE manufacturing facility in Wenzhou, China" width={640} height={420} unoptimized />
          </div>
          <div className="cb-company-text">
            <p className="eyebrow">About TPKELE</p>
            <h2>Your Dedicated MCB Supply Partner</h2>
            <p>
              Based in Wenzhou — China&apos;s electrical manufacturing capital — TPKELE specializes in low-voltage circuit protection components for global distribution projects.
            </p>
            <p>
              Our facility covers the full production cycle from mold tooling and injection to assembly, testing, and packaging. Every MCB batch undergoes 100% electrical verification before shipment.
            </p>
            <ul className="cb-company-highlights">
              <li>In-house production with full QC traceability</li>
              <li>OEM/ODM capability — custom logo, label, and packaging</li>
              <li>IEC 60898-1 and CE certified product lines</li>
              <li>Export experience to 50+ countries</li>
            </ul>
            <InquiryModal triggerLabel="Learn More About Our Factory" triggerClassName="btn ghost dark" intent="factory" product="AC MCB" />
          </div>
        </div>
        <div className="cb-company-gallery">
          <Image src="/assets/landing/circuit-breakers/factory-2.webp" alt="TPKELE MCB production line" width={380} height={260} unoptimized />
          <Image src="/assets/landing/circuit-breakers/factory-3.webp" alt="TPKELE quality testing equipment" width={380} height={260} unoptimized />
          <Image src="/assets/landing/circuit-breakers/exhibition-1.webp" alt="TPKELE at international electrical trade show" width={380} height={260} unoptimized />
          <Image src="/assets/landing/circuit-breakers/exhibition-2.webp" alt="TPKELE exhibition booth" width={380} height={260} unoptimized />
          <Image src="/assets/landing/circuit-breakers/exhibition-3.webp" alt="TPKELE team at industry expo" width={380} height={260} unoptimized />
        </div>
      </div>
    </section>
  );
}
