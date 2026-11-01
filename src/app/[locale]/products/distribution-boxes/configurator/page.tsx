import type { Metadata } from "next";
import { ConfiguratorPage, PATH, seo } from "@/components/box-configurator/ConfiguratorPage";
import { boxLocale } from "@/data/distribution-boxes";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const m = seo[boxLocale(locale)];
  const canonical = localizedPath(PATH, locale);
  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    alternates: { canonical, languages: alternateLanguages(PATH) },
    openGraph: { title: m.title, description: m.description, url: canonical, type: "website", images: ["/assets/enclosures/enclosure-hv.webp"] },
  };
}

export default async function BoxConfiguratorPage({ params }: PageProps) {
  const { locale } = await params;
  return <ConfiguratorPage locale={locale} />;
}
