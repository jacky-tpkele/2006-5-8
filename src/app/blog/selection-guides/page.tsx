import type { Metadata } from "next";
import { BlogCategoryPage } from "@/components/BlogCategoryPage";
import { BLOG_CATEGORY_DESCRIPTIONS, BLOG_CATEGORY_LABELS } from "@/lib/blog";

export const metadata: Metadata = {
  title: `${BLOG_CATEGORY_LABELS["selection-guides"]} - TPKELE Blog`,
  description: BLOG_CATEGORY_DESCRIPTIONS["selection-guides"],
  alternates: { canonical: "/blog/selection-guides" },
};

export default function SelectionGuidesPage() {
  return <BlogCategoryPage category="selection-guides" title="Selection Guides" crumb="Blog · Selection Guides" />;
}
