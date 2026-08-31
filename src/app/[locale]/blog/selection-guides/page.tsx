import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import { BlogCategoryPage } from "@/components/BlogCategoryPage";
import { getBlogCategoryLabel, getBlogCategoryDescription } from "@/lib/blog";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const label = getBlogCategoryLabel("selection-guides", (k) => t(k));
  const description = getBlogCategoryDescription("selection-guides", (k) => t(k));

  return {
    title: `${label} - TPKELE Blog`,
    description,
    alternates: {
      canonical: localizedPath("/blog/selection-guides", locale),
      languages: alternateLanguages("/blog/selection-guides"),
    },
  };
}

export default async function SelectionGuidesPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const label = getBlogCategoryLabel("selection-guides", (k) => t(k));

  return <BlogCategoryPage category="selection-guides" title={label} crumb={`Blog · ${label}`} locale={locale} />;
}
