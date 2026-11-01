import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { boxLocale } from "@/data/distribution-boxes";
import { getEnclosureSeries } from "@/data/enclosures";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import { EnclosureSeriesPage } from "./EnclosurePages";

type PageProps = { params: Promise<{ locale: string }> };

export function enclosureRoute(slug: string) {
  const path = `/products/${slug}`;

  async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const s = getEnclosureSeries(slug);
    if (!s) return {};
    const lang = boxLocale(locale);
    const canonical = localizedPath(path, locale);
    return {
      title: s.seoTitle[lang],
      description: s.seoDescription[lang],
      keywords: s.seoKeywords[lang],
      alternates: { canonical, languages: alternateLanguages(path) },
      openGraph: { title: s.seoTitle[lang], description: s.seoDescription[lang], url: canonical, type: "website" },
    };
  }

  async function Page({ params }: PageProps) {
    const { locale } = await params;
    const s = getEnclosureSeries(slug);
    if (!s) notFound();
    return <EnclosureSeriesPage series={s} locale={locale} />;
  }

  return { generateMetadata, Page };
}
