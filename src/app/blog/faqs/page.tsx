import type { Metadata } from "next";
import { BlogCategoryPage } from "@/components/BlogCategoryPage";
import { BLOG_CATEGORY_DESCRIPTIONS, BLOG_CATEGORY_LABELS } from "@/lib/blog";

export const metadata: Metadata = {
  title: `${BLOG_CATEGORY_LABELS.faqs} - TPKELE Blog`,
  description: BLOG_CATEGORY_DESCRIPTIONS.faqs,
  alternates: { canonical: "/blog/faqs" },
};

export default function FaqsPage() {
  return <BlogCategoryPage category="faqs" title="FAQs" crumb="Blog · FAQs" />;
}
