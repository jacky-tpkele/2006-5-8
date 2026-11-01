import type { Metadata } from "next";
import { EnclosureHubPage } from "@/components/distribution-boxes/EnclosurePages";
import { boxLocale } from "@/data/distribution-boxes";
import { enclosureHub } from "@/data/enclosures";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const h = enclosureHub[boxLocale(locale)];
  const canonical = localizedPath("/products/enclosures", locale);
  return {
    title: h.seoTitle,
    description: h.seoDescription,
    keywords: h.seoKeywords,
    alternates: { canonical, languages: alternateLanguages("/products/enclosures") },
    openGraph: { title: h.seoTitle, description: h.seoDescription, url: canonical, type: "website" },
  };
}

export default async function EnclosuresPage({ params }: PageProps) {
  const { locale } = await params;
  return <EnclosureHubPage locale={locale} />;
}
