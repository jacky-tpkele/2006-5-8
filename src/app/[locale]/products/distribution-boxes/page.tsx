import type { Metadata } from "next";
import { BoxHubPage } from "@/components/distribution-boxes/BoxHubPage";
import { boxLocale, hubContent } from "@/data/distribution-boxes";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const h = hubContent[boxLocale(locale)];
  const canonical = localizedPath("/products/distribution-boxes", locale);
  return {
    title: h.seoTitle,
    description: h.seoDescription,
    keywords: h.seoKeywords,
    alternates: { canonical, languages: alternateLanguages("/products/distribution-boxes") },
    openGraph: { title: h.seoTitle, description: h.seoDescription, url: canonical, type: "website", images: ["/assets/projects/mongolia-layout-1.webp"] },
  };
}

export default async function DistributionBoxesPage({ params }: PageProps) {
  const { locale } = await params;
  return <BoxHubPage locale={locale} />;
}
