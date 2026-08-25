import type { Metadata } from "next";
import { BlogCategoryPage } from "@/components/BlogCategoryPage";
import { BLOG_CATEGORY_DESCRIPTIONS, BLOG_CATEGORY_LABELS } from "@/lib/blog";

export const metadata: Metadata = {
  title: `${BLOG_CATEGORY_LABELS.comparisons} - TPKELE Blog`,
  description: BLOG_CATEGORY_DESCRIPTIONS.comparisons,
  alternates: { canonical: "/blog/comparisons" },
};

export default function ComparisonsPage() {
  return <BlogCategoryPage category="comparisons" title="Comparisons" crumb="Blog · Comparisons" />;
}
