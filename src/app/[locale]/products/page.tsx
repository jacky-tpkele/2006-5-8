import type { Metadata } from "next";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { PageTitle } from "@/components/PageTitle";
import { categorySlugMap, productMenu, products } from "@/data/site";
import { getCategoryContent } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "productsPage" });

  return {
    title: t("seoTitle"),
    description: t("seoDescription"),
    alternates: {
      canonical: localizedPath("/products", locale),
      languages: alternateLanguages("/products"),
    },
  };
}

export default async function ProductsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("productsPage");

  return (
    <main>
      <PageTitle title={t("title")} crumb={t("title")} />

      <section className="section category-index">
        <div className="section-heading centered">
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2>{t("heading")}</h2>
          <p style={{ color: "var(--muted)", marginTop: 12, maxWidth: 720, marginInline: "auto" }}>
            {t("description")}
          </p>
        </div>

        <div className="category-index-grid">
          {productMenu.map((group) => {
            const slug = categorySlugMap[group.label];
            const items = products.filter((p) => p.parentCategory === group.label);
            const cover = items[0]?.image;
            const categoryData = getCategoryContent(group.label, locale);
            const intro = categoryData.intro?.split(".")[0] + ".";
            return (
              <Link key={group.label} className="category-index-card" href={`/products/category/${slug}`}>
                <div className="category-index-image">
                  {cover && <Image src={cover} alt={group.label} width={260} height={260} />}
                </div>
                <div className="category-index-body">
                  <h3>{group.label}</h3>
                  <p>{intro}</p>
                  <span className="category-index-cta">
                    {items.length === 1 ? t("viewProductsSingular", { count: items.length }) : t("viewProductsPlural", { count: items.length })}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
