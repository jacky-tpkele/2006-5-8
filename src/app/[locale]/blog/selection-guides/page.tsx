import type { Metadata } from "next";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import { BlogCategoryPage } from "@/components/BlogCategoryPage";
import { BLOG_CATEGORY_DESCRIPTIONS, BLOG_CATEGORY_LABELS } from "@/lib/blog";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
  title: `${BLOG_CATEGORY_LABELS["selection-guides"]} - TPKELE Blog`,
  description: BLOG_CATEGORY_DESCRIPTIONS["selection-guides"],
    alternates: {
      canonical: localizedPath("/blog/selection-guides", locale),
      languages: alternateLanguages("/blog/selection-guides"),
    },
  };
}

export default function SelectionGuidesPage() {
  return <BlogCategoryPage category="selection-guides" title="Selection Guides" crumb="Blog · Selection Guides" />;
}
