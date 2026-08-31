import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import { BlogCategoryPage } from "@/components/BlogCategoryPage";
import { getBlogCategoryLabel, getBlogCategoryDescription } from "@/lib/blog";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const label = getBlogCategoryLabel("product-knowledge", (k) => t(k));
  const description = getBlogCategoryDescription("product-knowledge", (k) => t(k));

  return {
    title: `${label} - TPKELE Blog`,
    description,
    alternates: {
      canonical: localizedPath("/blog/product-knowledge", locale),
      languages: alternateLanguages("/blog/product-knowledge"),
    },
  };
}

export default async function ProductKnowledgePage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const label = getBlogCategoryLabel("product-knowledge", (k) => t(k));

  return <BlogCategoryPage category="product-knowledge" title={label} crumb={`Blog · ${label}`} locale={locale} />;
}
