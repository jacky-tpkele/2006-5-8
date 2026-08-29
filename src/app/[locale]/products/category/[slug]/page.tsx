import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryProductGrid } from "@/components/CategoryProductGrid";
import { InquiryModal } from "@/components/InquiryModal";
import {
  categoryBySlug,
  categorySlugMap,
  productMenu,
  site,
} from "@/data/site";
import { getCategoryContent, getProducts, getSubCategories } from "@/lib/i18n";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";

type CategoryPageProps = {
  params: Promise<{ slug: string; locale: string }>;
  searchParams: Promise<{ series?: string }>;
};

export function generateStaticParams() {
  return Object.values(categorySlugMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const category = categoryBySlug[slug];
  if (!category) return {};
  const content = getCategoryContent(category, locale);
  const canonical = localizedPath(`/products/category/${slug}`, locale);

  return {
    title: content.seoTitle,
    description: content.seoDescription,
    keywords: content.seoKeywords,
    alternates: {
      canonical,
      languages: alternateLanguages(`/products/category/${slug}`),
    },
    openGraph: {
      title: content.seoTitle,
      description: content.seoDescription,
      url: canonical,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug, locale } = await params;
  const { series } = await searchParams;
  const category = categoryBySlug[slug];
  if (!category) notFound();

  const content = getCategoryContent(category, locale);
  const menuGroup = productMenu.find((g) => g.label === category);
  const items = getProducts(locale).filter((p) => p.parentCategory === category);
  const subs = getSubCategories(locale).filter((s) => s.parent === category);
  const hasSubs = subs.length > 0;
  const heroImage = items[0]?.image;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: content.seoTitle,
    description: content.seoDescription,
    url: `${site.url}/products/category/${slug}`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Products", item: `${site.url}/products` },
        { "@type": "ListItem", position: 3, name: category, item: `${site.url}/products/category/${slug}` },
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

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="slim-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/products">Products</Link>
        <span aria-hidden="true">/</span>
        <span className="current">{category}</span>
      </nav>

      <section className="section category-hero">
        <div>
          <p className="eyebrow">{category}</p>
          <h1>{content.hero}</h1>
          <p className="detail-copy">{content.intro}</p>
          <ul className="spec-list">
            {content.bullets.slice(0, 3).map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          {content.applications && content.applications.length > 0 && (
            <div className="app-pill-row" aria-label="Typical applications">
              {content.applications.slice(0, 5).map((a) => (
                <span className="app-pill" key={a}>{a}</span>
              ))}
            </div>
          )}
          {content.buyerPersona && (
            <div className="persona-note">{content.buyerPersona}</div>
          )}
          <div className="button-row" style={{ marginTop: 22 }}>
            <InquiryModal
              triggerLabel="Request Quote & Datasheet"
              triggerClassName="btn primary"
              product={category}
              intent="quote"
            />
            <InquiryModal
              triggerLabel="Download Catalog"
              triggerClassName="btn ghost dark"
              product={category}
              intent="catalog"
              title="Request Catalog"
            />
          </div>
        </div>
        {heroImage && (
          <div className="detail-visual">
            <Image src={heroImage} alt={`${category} product family`} width={360} height={390} priority />
          </div>
        )}
      </section>

      <CategoryProductGrid
        category={category}
        products={items}
        seriesOptions={hasSubs ? [] : (menuGroup?.children ?? [])}
        initialSeries={series ?? ""}
        hasSubs={hasSubs}
        subs={subs.map((s) => ({
          slug: s.slug,
          label: s.label,
          count: items.filter((p) => p.subCategorySlug === s.slug).length,
          image: items.find((p) => p.subCategorySlug === s.slug)?.image ?? heroImage ?? "",
        }))}
        categorySlug={slug}
      />

      {content.faq.length > 0 && (
        <section className="section category-faq">
          <span className="section-mark" aria-hidden="true" />
          <h2 className="category-faq-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {content.faq.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <section className="section related-categories">
        <span className="section-mark" aria-hidden="true" />
        <h2 className="related-title">Other Categories</h2>
        <div className="related-grid">
          {productMenu
            .filter((g) => g.label !== category)
            .map((g) => (
              <Link key={g.label} className="related-card" href={g.href}>
                <span className="related-label">{g.label}</span>
                <span className="related-arrow">→</span>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}
