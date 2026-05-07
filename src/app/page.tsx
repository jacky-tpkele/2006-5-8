import Image from "next/image";
import Link from "next/link";
import { InquiryModal } from "@/components/InquiryModal";
import { applications, categorySlugMap, productFamilies, site } from "@/data/site";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: site.address,
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="hero">
        <div className="hero-inner">
          <p className="eyebrow">OEM / ODM Low Voltage Manufacturer</p>
          <h1>One-stop low voltage power solutions</h1>
          <p>
            Build safer distribution systems with factory-direct MCB, SPD, ATS, combiner box and metering products. Our team helps buyers
            confirm specifications, samples and delivery plans quickly.
          </p>
          <div className="button-row">
            <Link className="btn primary" href="/products">
              View Products
            </Link>
            <InquiryModal triggerLabel="Get Quote" triggerClassName="btn ghost" intent="quote" />
          </div>
        </div>
        <div className="hero-visual" aria-label="TPKELE low voltage product family">
          <Image src="/assets/hero-products.webp" alt="TPKELE electrical protection products" width={620} height={390} priority />
        </div>
      </section>

      <section className="section compact product-overview">
        <div className="product-overview-heading">
          <span className="section-mark" aria-hidden="true" />
          <h2 className="logo-color-title">Choose by protection need</h2>
          <p>Find the right protection, transfer and metering products for your electrical project.</p>
          <Link className="text-link" href="/products">
            All products
          </Link>
        </div>
        <div className="product-strip">
          {productFamilies.map((product) => (
            <Link className="mini-product" href={`/products/category/${categorySlugMap[product.category]}`} key={product.slug}>
              <Image src={product.image} alt={product.name} width={132} height={132} />
              <strong>{product.shortName}</strong>
              <span>{product.summary}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section muted">
        <div className="section-heading centered">
          <p className="eyebrow">Applications</p>
          <h2>Built for electrical distribution projects</h2>
        </div>
        <div className="application-grid">
          {applications.map((item) => (
            <article className="application-item" key={item.title}>
              <span className="line-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stats-band">
        <div>
          <strong>10+</strong>
          <span>Years Experience</span>
        </div>
        <div>
          <strong>100+</strong>
          <span>Countries Served</span>
        </div>
        <div>
          <strong>2000+</strong>
          <span>Projects Completed</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Quality Inspection</span>
        </div>
        <div>
          <strong>OEM/ODM</strong>
          <span>Flexible Service</span>
        </div>
      </section>

      <section className="section cta-section">
        <div>
          <p className="eyebrow">Fast Quotation</p>
          <h2>Send your project list and receive product matching support.</h2>
        </div>
        <InquiryModal triggerLabel="Submit Inquiry" triggerClassName="btn primary" intent="quote" />
      </section>
    </main>
  );
}
