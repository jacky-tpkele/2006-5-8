import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { CategoryProductGrid } from "@/components/CategoryProductGrid";
import { InquiryModal } from "@/components/InquiryModal";
import {
  site,
} from "@/data/site";
import { getCategoryContent, getProducts, getSubCategories } from "@/lib/i18n";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = getCategoryContent("ATS", locale);
  const canonical = localizedPath("/products/ats", locale);

  return {
    title: content.seoTitle,
    description: content.seoDescription,
    keywords: content.seoKeywords,
    alternates: {
      canonical,
      languages: alternateLanguages("/products/ats"),
    },
    openGraph: {
      title: content.seoTitle,
      description: content.seoDescription,
      url: canonical,
      type: "website",
    },
  };
}

export default async function AtsCategoryPage({ params }: PageProps) {
  const { locale } = await params;
  const category = "ATS";
  const content = getCategoryContent(category, locale);
  const items = getProducts(locale).filter((p) => p.parentCategory === category);
  const heroImage = items[0]?.image;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: content.seoTitle,
    description: content.seoDescription,
    url: `${site.url}/products/ats`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Products", item: `${site.url}/products` },
        { "@type": "ListItem", position: 3, name: category, item: `${site.url}/products/ats` },
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
          <div className="button-row">
            <InquiryModal triggerLabel="Request Quotation" triggerClassName="btn primary" product={category} intent="quote" />
            <InquiryModal triggerLabel="Ask Technical Question" triggerClassName="btn ghost dark" product={category} intent="technical" title="Ask Technical Question" />
          </div>
        </div>
        {heroImage && (
          <div className="category-hero-image">
            <Image src={heroImage} alt={`${category} products`} width={520} height={520} priority />
          </div>
        )}
      </section>

      <CategoryProductGrid
        category={category}
        products={items}
        seriesOptions={[]}
        categorySlug="ats"
      />

      {content.faq && content.faq.length > 0 && (
        <section className="section product-faq-section">
          <span className="section-mark" aria-hidden="true" />
          <h2 className="sub-section-title">Frequently Asked Questions</h2>
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
    </main>
  );
}
