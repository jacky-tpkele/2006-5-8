import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryProductGrid } from "@/components/CategoryProductGrid";
import {
  categoryBySlug,
  categoryContent,
  categorySlugMap,
  productMenu,
  products,
  site,
  subCategories,
} from "@/data/site";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ series?: string }>;
};

export function generateStaticParams() {
  return Object.values(categorySlugMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryBySlug[slug];
  if (!category) return {};
  const content = categoryContent[category];

  return {
    title: content.seoTitle,
    description: content.seoDescription,
    keywords: content.seoKeywords,
    alternates: { canonical: `/products/category/${slug}` },
    openGraph: {
      title: content.seoTitle,
      description: content.seoDescription,
      url: `/products/category/${slug}`,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params;
  const { series } = await searchParams;
  const category = categoryBySlug[slug];
  if (!category) notFound();

  const content = categoryContent[category];
  const menuGroup = productMenu.find((g) => g.label === category);
  const items = products.filter((p) => p.parentCategory === category);
  const subs = subCategories.filter((s) => s.parent === category);
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
            {content.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="button-row">
            <Link className="btn primary" href={`/contact?intent=quote&product=${encodeURIComponent(category)}`}>
              Request Quote
            </Link>
            <Link className="btn ghost dark" href="/products">
              All Categories
            </Link>
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
          count: products.filter((p) => p.subCategorySlug === s.slug).length,
          image: products.find((p) => p.subCategorySlug === s.slug)?.image ?? heroImage ?? "",
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
