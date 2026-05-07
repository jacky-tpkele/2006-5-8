import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InquiryModal } from "@/components/InquiryModal";
import { findProduct, categorySlugMap, products, site, subCategoryBySlug } from "@/data/site";

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
  const backHref = subCat ? `/products/category/${categorySlug}/${subCat.slug}` : `/products/category/${categorySlug}`;
  const backLabel = subCat ? subCat.label : product.parentCategory;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `${site.url}${product.image}`,
    description: product.description,
    brand: { "@type": "Brand", name: site.name },
    manufacturer: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
      <section className="section detail-hero">
        <div className="detail-visual">
          <Image src={product.image} alt={product.name} width={360} height={390} priority />
        </div>
        <div>
          <p className="eyebrow">{product.category}{subCat ? ` / ${subCat.label}` : ""}</p>
          <h1>{product.name} for {product.application}</h1>
          <p className="detail-copy">{product.description}</p>
          <ul className="spec-list">
            {product.specs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
          <div className="button-row">
            <InquiryModal
              triggerLabel="Request Quote"
              triggerClassName="btn primary"
              product={product.name}
              intent="quote"
            />
            <Link className="btn ghost dark" href={backHref}>
              Back to {backLabel}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
