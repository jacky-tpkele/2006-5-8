import type { Metadata } from "next";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import { BlogCategoryPage } from "@/components/BlogCategoryPage";
import { BLOG_CATEGORY_DESCRIPTIONS, BLOG_CATEGORY_LABELS } from "@/lib/blog";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
  title: `${BLOG_CATEGORY_LABELS["application-scenarios"]} - TPKELE Blog`,
  description: BLOG_CATEGORY_DESCRIPTIONS["application-scenarios"],
    alternates: {
      canonical: localizedPath("/blog/application-scenarios", locale),
      languages: alternateLanguages("/blog/application-scenarios"),
    },
  };
}

export default function ApplicationScenariosPage() {
  return <BlogCategoryPage category="application-scenarios" title="Applications" crumb="Blog · Applications" />;
}
