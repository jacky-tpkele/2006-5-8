import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { CategoryProductGrid } from "@/components/CategoryProductGrid";
import { InquiryModal } from "@/components/InquiryModal";
import {
  productMenu,
  site,
} from "@/data/site";
import { getCategoryContent, getProducts, getSubCategories } from "@/lib/i18n";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = getCategoryContent("SPD", locale);
  const canonical = localizedPath("/products/spd", locale);

  return {
    title: content.seoTitle,
    description: content.seoDescription,
    keywords: content.seoKeywords,
    alternates: {
      canonical,
      languages: alternateLanguages("/products/spd"),
    },
    openGraph: {
      title: content.seoTitle,
      description: content.seoDescription,
      url: canonical,
      type: "website",
    },
  };
}

export default async function SpdCategoryPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("common");
  const category = "SPD";
  const content = getCategoryContent(category, locale);
  const menuGroup = productMenu.find((g) => g.label === category);
  const items = getProducts(locale).filter((p) => p.parentCategory === category);
  const subs = getSubCategories(locale).filter((s) => s.parent === category);
  const heroImage = items[0]?.image;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: content.seoTitle,
    description: content.seoDescription,
    url: `${site.url}/products/spd`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Products", item: `${site.url}/products` },
        { "@type": "ListItem", position: 3, name: category, item: `${site.url}/products/spd` },
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
            <InquiryModal triggerLabel={t("requestQuotation")} triggerClassName="btn primary" product={category} intent="quote" />
            <InquiryModal triggerLabel={t("askTechnical")} triggerClassName="btn ghost dark" product={category} intent="technical" title={t("askTechnical")} />
          </div>
        </div>
        {heroImage && (
          <div className="category-hero-image">
            <Image src={heroImage} alt={`${category} products`} width={520} height={520} priority />
          </div>
        )}
      </section>

      {subs.length > 0 && (
        <section className="section">
          <h2 className="sub-section-title">{category} Product Lines</h2>
          <div className="sub-category-grid">
            {subs.map((sub) => (
              <Link key={sub.slug} href={`/products/${sub.slug}`} className="sub-category-card">
                <h3>{sub.label}</h3>
                <p>{sub.intro}</p>
                <span className="text-link">View {sub.label} →</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CategoryProductGrid
        category={category}
        products={items}
        seriesOptions={menuGroup?.children ?? []}
        categorySlug="spd"
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
