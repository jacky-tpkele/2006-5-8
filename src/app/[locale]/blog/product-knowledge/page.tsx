import type { Metadata } from "next";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import { BlogCategoryPage } from "@/components/BlogCategoryPage";
import { BLOG_CATEGORY_DESCRIPTIONS, BLOG_CATEGORY_LABELS } from "@/lib/blog";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
  title: `${BLOG_CATEGORY_LABELS["product-knowledge"]} - TPKELE Blog`,
  description: BLOG_CATEGORY_DESCRIPTIONS["product-knowledge"],
    alternates: {
      canonical: localizedPath("/blog/product-knowledge", locale),
      languages: alternateLanguages("/blog/product-knowledge"),
    },
  };
}

export default function ProductKnowledgePage() {
  return <BlogCategoryPage category="product-knowledge" title="Product Knowledge" crumb="Blog · Product Knowledge" />;
}
