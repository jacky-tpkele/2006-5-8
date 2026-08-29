import type { Metadata } from "next";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import { BlogCategoryPage } from "@/components/BlogCategoryPage";
import { BLOG_CATEGORY_DESCRIPTIONS, BLOG_CATEGORY_LABELS } from "@/lib/blog";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
  title: `${BLOG_CATEGORY_LABELS.faqs} - TPKELE Blog`,
  description: BLOG_CATEGORY_DESCRIPTIONS.faqs,
    alternates: {
      canonical: localizedPath("/blog/faqs", locale),
      languages: alternateLanguages("/blog/faqs"),
    },
  };
}

export default function FaqsPage() {
  return <BlogCategoryPage category="faqs" title="FAQs" crumb="Blog · FAQs" />;
}
