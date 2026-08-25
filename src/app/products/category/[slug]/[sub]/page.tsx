import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InquiryModal } from "@/components/InquiryModal";
import {
  categoryBySlug,
  categoryContent,
  categorySlugMap,
  products,
  site,
  subCategories,
  subCategoryBySlug,
} from "@/data/site";

type SubPageProps = {
  params: Promise<{ slug: string; sub: string }>;
};

export function generateStaticParams() {
  return subCategories.map((s) => ({
    slug: categorySlugMap[s.parent],
    sub: s.slug,
  }));
}

export async function generateMetadata({ params }: SubPageProps): Promise<Metadata> {
  const { slug, sub } = await params;
  const subCat = subCategoryBySlug[sub];
  const category = categoryBySlug[slug];
  if (!subCat || !category || subCat.parent !== category) return {};

  return {
    title: subCat.seoTitle,
    description: subCat.seoDescription,
    keywords: subCat.seoKeywords,
    alternates: { canonical: `/products/category/${slug}/${sub}` },
    openGraph: {
      title: subCat.seoTitle,
      description: subCat.seoDescription,
      url: `/products/category/${slug}/${sub}`,
      type: "website",
    },
  };
}

export default async function SubCategoryPage({ params }: SubPageProps) {
  const { slug, sub } = await params;
  const subCat = subCategoryBySlug[sub];
  const category = categoryBySlug[slug];
  if (!subCat || !category || subCat.parent !== category) notFound();

  const items = products.filter((p) => p.subCategorySlug === sub);
  const cover = items[0]?.image;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: subCat.seoTitle,
    description: subCat.seoDescription,
    url: `${site.url}/products/category/${slug}/${sub}`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Products", item: `${site.url}/products` },
        { "@type": "ListItem", position: 3, name: category, item: `${site.url}/products/category/${slug}` },
        { "@type": "ListItem", position: 4, name: subCat.label, item: `${site.url}/products/category/${slug}/${sub}` },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.slice(0, 20).map((p, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${site.url}/products/${p.slug}`,
        name: p.name,
      })),
    },
  };

  const otherSubs = subCategories.filter((s) => s.parent === category && s.slug !== sub);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="slim-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/products">Products</Link>
        <span aria-hidden="true">/</span>
        <Link href={`/products/category/${slug}`}>{category}</Link>
        <span aria-hidden="true">/</span>
        <span className="current">{subCat.label}</span>
      </nav>

      <section className="section category-hero">
        <div>
          <p className="eyebrow">{category} / {subCat.label}</p>
          <h1>{subCat.hero}</h1>
          <p className="detail-copy">{subCat.intro}</p>
          <div className="button-row">
            <InquiryModal
              triggerLabel="Request Quote"
              triggerClassName="btn primary"
              product={subCat.label}
              intent="quote"
            />
            <Link className="btn ghost dark" href={`/products/category/${slug}`}>
              Back to {category}
            </Link>
          </div>
        </div>
        {cover && (
          <div className="detail-visual">
            <Image src={cover} alt={`${subCat.label} product family`} width={360} height={390} priority />
          </div>
        )}
      </section>

      <section className="section category-grid-section">
        <div className="category-grid-head">
          <div>
            <span className="section-mark" aria-hidden="true" />
            <h2 className="category-grid-title">{subCat.label} Products</h2>
          </div>
          <p className="muted">
            {items.length} {items.length > 1 ? "products" : "product"}
          </p>
        </div>

        <div className="product-grid product-grid-4">
          {items.map((product) => (
            <article className="product-card" key={product.slug}>
              <div className="product-card-image">
                <Image src={product.image} alt={product.name} width={220} height={220} />
              </div>
              <div className="product-card-body">
                <h3>{product.name}</h3>
                <div className="product-card-actions">
                  <Link className="small-btn outline" href={`/products/${product.slug}`}>
                    View Details
                  </Link>
                  <InquiryModal
                    triggerLabel="Inquire Now"
                    triggerClassName="small-btn primary"
                    product={product.name}
                    intent="quote"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {subCat.specTable && (
        <section className="section product-spec-section">
          <h2 className="product-spec-title">{subCat.specTable.title}</h2>
          <div className="product-spec-table-wrap">
            <table className="product-spec-table spec-table-grouped">
              <thead>
                <tr>
                  <th scope="col" className="spec-col-no">No.</th>
                  <th scope="col" className="spec-col-cat">Parameter Category</th>
                  <th scope="col" className="spec-col-key">Key Specifications</th>
                </tr>
              </thead>
              <tbody>
                {subCat.specTable.rows.map((row) => (
                  <tr key={row.no}>
                    <td className="spec-col-no">{row.no}</td>
                    <td className="spec-col-cat">{row.category}</td>
                    <td className="spec-col-key">
                      {row.specs.map((line, i) => (
                        <span className="spec-line" key={i}>
                          {line}
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {subCat.mechTable && (
        <section className="section product-spec-section">
          <h2 className="product-spec-title">{subCat.mechTable.title}</h2>
          <div className="product-spec-table-wrap">
            <table className="product-spec-table spec-table-pair">
              <thead>
                <tr>
                  <th scope="col" className="spec-col-param">{subCat.mechTable.columns[0]}</th>
                  <th scope="col" className="spec-col-req">{subCat.mechTable.columns[1]}</th>
                </tr>
              </thead>
              <tbody>
                {subCat.mechTable.rows.map((row) => (
                  <tr key={row.parameter}>
                    <td className="spec-col-param">{row.parameter}</td>
                    <td className="spec-col-req">{row.requirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {subCat.materialTable && (
        <section className="section product-spec-section">
          <h2 className="product-spec-title">{subCat.materialTable.title}</h2>
          <div className="product-spec-table-wrap">
            <table className="product-spec-table spec-table-pair">
              <thead>
                <tr>
                  <th scope="col" className="spec-col-param">{subCat.materialTable.columns[0]}</th>
                  <th scope="col" className="spec-col-req">{subCat.materialTable.columns[1]}</th>
                </tr>
              </thead>
              <tbody>
                {subCat.materialTable.rows.map((row) => (
                  <tr key={row.parameter}>
                    <td className="spec-col-param">{row.parameter}</td>
                    <td className="spec-col-req">{row.requirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {otherSubs.length > 0 && (
        <section className="section related-categories">
          <span className="section-mark" aria-hidden="true" />
          <h2 className="related-title">Other {category} Series</h2>
          <div className="related-grid">
            {otherSubs.map((s) => (
              <Link key={s.slug} className="related-card" href={`/products/category/${slug}/${s.slug}`}>
                <span className="related-label">{s.label}</span>
                <span className="related-arrow">→</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
