import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { PageTitle } from "@/components/PageTitle";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact TPKELE for low voltage product catalog, pricing, OEM/ODM support and project quotation.",
};

type ContactPageProps = {
  searchParams: Promise<{ product?: string; intent?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { product, intent } = await searchParams;

  return (
    <main>
      <PageTitle title="Contact" crumb="Contact" />
      <section className="section contact-layout">
        <div className="contact-info">
          <p className="eyebrow">Get In Touch</p>
          <h2>Send your product list or project requirement.</h2>
          <p>Our sales team can help with product selection, catalog files, sample requests, OEM branding and quotation.</p>
          <div className="contact-list">
            <div>
              <span className="line-icon">⌖</span>
              <p>
                <strong>Address</strong>
                {site.address}
              </p>
            </div>
            <div>
              <span className="line-icon">☎</span>
              <p>
                <strong>Phone</strong>
                {site.phone}
              </p>
            </div>
            <div>
              <span className="line-icon">@</span>
              <p>
                <strong>Email</strong>
                {site.email}
              </p>
            </div>
            <div>
              <span className="line-icon">☏</span>
              <p>
                <strong>WhatsApp</strong>
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
                  {site.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
        <LeadForm initialProduct={product} initialIntent={intent} />
      </section>

      <section className="map-band" aria-label="TPKELE location map">
        <div className="map-card">
          <span className="line-icon">⌖</span>
          <strong>TPKELE Manufacturing Center</strong>
          <p>Wenzhou, Zhejiang, China</p>
        </div>
      </section>
    </main>
  );
}
