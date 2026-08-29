import type { Metadata } from "next";
import { BlogCategoryPage } from "@/components/BlogCategoryPage";
import { BLOG_CATEGORY_DESCRIPTIONS, BLOG_CATEGORY_LABELS } from "@/lib/blog";

export const metadata: Metadata = {
  title: `${BLOG_CATEGORY_LABELS["application-scenarios"]} - TPKELE Blog`,
  description: BLOG_CATEGORY_DESCRIPTIONS["application-scenarios"],
  alternates: { canonical: "/blog/application-scenarios" },
};

export default function ApplicationScenariosPage() {
  return <BlogCategoryPage category="application-scenarios" title="Applications" crumb="Blog · Applications" />;
}
