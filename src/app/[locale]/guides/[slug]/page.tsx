import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import GuideTemplate from "./components/GuideTemplate";
import { getGuideBySlug, getAllGuideSlugs } from "@/data/guides";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllGuideSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Guide Not Found | TPKELE",
    };
  }

  return {
    title: `${guide.title} | TPKELE Technical Guides`,
    description: guide.description || `Complete technical guide for ${guide.title}`,
    keywords: [guide.product, guide.application, "technical guide", "selection guide", "TPKELE"],
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return <GuideTemplate guide={guide} />;
}
