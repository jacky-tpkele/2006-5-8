import type { Metadata } from "next";
import { BlogCategoryPage } from "@/components/BlogCategoryPage";
import { BLOG_CATEGORY_DESCRIPTIONS, BLOG_CATEGORY_LABELS } from "@/lib/blog";

export const metadata: Metadata = {
  title: `${BLOG_CATEGORY_LABELS["product-knowledge"]} - TPKELE Blog`,
  description: BLOG_CATEGORY_DESCRIPTIONS["product-knowledge"],
  alternates: { canonical: "/blog/product-knowledge" },
};

export default function ProductKnowledgePage() {
  return <BlogCategoryPage category="product-knowledge" title="Product Knowledge" crumb="Blog · Product Knowledge" />;
}
