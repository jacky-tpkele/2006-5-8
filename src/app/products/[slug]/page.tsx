import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InquiryModal } from "@/components/InquiryModal";
import { ProductGallery } from "@/components/ProductGallery";
import {
  findProduct,
  categoryContent,
  categorySlugMap,
  certifications,
  getProductGallery,
  getProductKeyFeatures,
  getProductTechnicalSpecs,
  getRelatedProducts,
  oemCapabilities,
  products,
  site,
  subCategoryBySlug,
} from "@/data/site";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) return {};

  return {
    title: `${product.name} Manufacturer`,
    description: product.description,
    keywords: product.seoKeywords,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} Manufacturer | TPKELE`,
      description: product.description,
      url: `/products/${product.slug}`,
      images: [{ url: product.image, width: 600, height: 600, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();

  const categorySlug = categorySlugMap[product.parentCategory];
  const subCat = product.subCategorySlug ? subCategoryBySlug[product.subCategorySlug] : undefined;

  const gallery = getProductGallery(product);
  const keyFeatures = getProductKeyFeatures(product, 5);
  const technicalSpecs = getProductTechnicalSpecs(product);
  const related = getRelatedProducts(product, 8);
  const relatedScopeLabel = subCat ? subCat.label : product.parentCategory;
  const catContent = categoryContent[product.parentCategory];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: gallery.map((src) => `${site.url}${src}`),
    description: product.description,
    brand: { "@type": "Brand", name: site.name },
    manufacturer: { "@type": "Organization", name: site.name, url: site.url },
    category: product.parentCategory,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: site.name },
    },
  };

  const faqJsonLd = catContent?.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: catContent.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <nav className="slim-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/products">Products</Link>
        <span aria-hidden="true">/</span>
        <Link href={`/products/category/${categorySlug}`}>{product.parentCategory}</Link>
        {subCat && (
          <>
            <span aria-hidden="true">/</span>
            <Link href={`/products/category/${categorySlug}/${subCat.slug}`}>{subCat.label}</Link>
          </>
        )}
        <span aria-hidden="true">/</span>
        <span className="current">{product.name}</span>
      </nav>

      <section className="section product-detail-hero">
        <ProductGallery images={gallery} alt={product.name} />
        <div className="product-detail-info">
          <p className="eyebrow">{product.category}{subCat ? ` / ${subCat.label}` : ""}</p>
          <h1>{product.name}</h1>
          <p className="product-detail-description">{product.description}</p>
          <div className="product-detail-features">
            <h2 className="features-heading">Key Features</h2>
            <ul>
              {keyFeatures.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
          </div>
          <div className="button-row">
            <InquiryModal
              triggerLabel="Request Quotation"
              triggerClassName="btn primary"
              product={product.name}
              intent="quote"
            />
            <InquiryModal
              triggerLabel="Ask Technical Question"
              triggerClassName="btn ghost dark"
              product={product.name}
              intent="technical"
              title="Ask Technical Question"
            />
          </div>
          <div className="inline-cta-card">
            <p>Need full datasheet, drawing or certificates for tender?</p>
            <InquiryModal
              triggerLabel="Get Datasheet"
              triggerClassName="btn primary"
              product={product.name}
              intent="datasheet"
              title="Request Datasheet"
            />
          </div>
        </div>
      </section>

      {catContent?.applications && catContent.applications.length > 0 && (
        <section className="section product-application-section">
          <span className="section-mark" aria-hidden="true" />
          <h2 className="sub-section-title">Typical Applications</h2>
          <div className="app-pill-row">
            {catContent.applications.map((a) => (
              <span className="app-pill" key={a}>{a}</span>
            ))}
          </div>
        </section>
      )}

      {technicalSpecs.length > 0 && (
        <section className="section product-spec-section">
          <h2 className="product-spec-title">Technical Specifications</h2>
          <div className="product-spec-table-wrap">
            <table className="product-spec-table">
              <tbody>
                {technicalSpecs.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <section className="section">
        <div className="trust-band-head">
          <div>
            <p className="eyebrow" style={{ marginBottom: 6 }}>Certifications & Standards</p>
            <h2 className="sub-section-title">Verified to international standards for global tenders</h2>
          </div>
        </div>
        <div className="cert-row">
          {certifications.map((cert) => (
            <div className="cert-chip" key={cert.code}>
              <strong>{cert.code}</strong>
              <span>{cert.label}</span>
              <small>{cert.note}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="section muted">
        <div className="oem-band">
          <div>
            <p className="eyebrow">OEM / ODM Available</p>
            <h2 className="sub-section-title">Private label this {product.parentCategory} for your brand</h2>
            <p style={{ color: "var(--muted)", marginTop: 10 }}>
              Logo, color housing, packaging and certificate documentation tailored to distributor and brand-owner programs.
            </p>
            <div className="button-row" style={{ marginTop: 16 }}>
              <InquiryModal
                triggerLabel="Get OEM Proposal"
                triggerClassName="btn primary"
                product={product.name}
                intent="factory"
              />
            </div>
          </div>
          <ul>
            {oemCapabilities.map((cap) => (
              <li key={cap}>{cap}</li>
            ))}
          </ul>
        </div>
      </section>

      {catContent?.faq?.length > 0 && (
        <section className="section product-faq-section">
          <span className="section-mark" aria-hidden="true" />
          <h2 className="sub-section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {catContent.faq.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section product-related-section">
          <div className="product-related-head">
            <h2 className="product-related-title">More in {relatedScopeLabel}</h2>
            <Link
              className="text-link"
              href={
                subCat
                  ? `/products/category/${categorySlug}/${subCat.slug}`
                  : `/products/category/${categorySlug}`
              }
            >
              View all
            </Link>
          </div>
          <div className="product-related-grid">
            {related.map((item) => (
              <Link
                key={item.slug}
                className="product-related-card"
                href={`/products/${item.slug}`}
              >
                <div className="product-related-image">
                  <Image src={item.image} alt={item.name} width={220} height={220} />
                </div>
                <div className="product-related-body">
                  <h3>{item.name}</h3>
                  <p>{item.application}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
