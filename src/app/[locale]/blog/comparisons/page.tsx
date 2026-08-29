import type { Metadata } from "next";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import { BlogCategoryPage } from "@/components/BlogCategoryPage";
import { BLOG_CATEGORY_DESCRIPTIONS, BLOG_CATEGORY_LABELS } from "@/lib/blog";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
  title: `${BLOG_CATEGORY_LABELS.comparisons} - TPKELE Blog`,
  description: BLOG_CATEGORY_DESCRIPTIONS.comparisons,
    alternates: {
      canonical: localizedPath("/blog/comparisons", locale),
      languages: alternateLanguages("/blog/comparisons"),
    },
  };
}

export default function ComparisonsPage() {
  return <BlogCategoryPage category="comparisons" title="Comparisons" crumb="Blog · Comparisons" />;
}
