import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { boxLocale, getBoxType } from "@/data/distribution-boxes";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import { BoxTypePage } from "./BoxTypePage";

type PageProps = { params: Promise<{ locale: string }> };

export function boxTypeRoute(slug: string) {
  const path = `/products/${slug}`;

  async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const box = getBoxType(slug);
    if (!box) return {};
    const c = box.content[boxLocale(locale)];
    const canonical = localizedPath(path, locale);
    return {
      title: c.seoTitle,
      description: c.seoDescription,
      keywords: c.seoKeywords,
      alternates: { canonical, languages: alternateLanguages(path) },
      openGraph: { title: c.seoTitle, description: c.seoDescription, url: canonical, type: "website", images: [box.image] },
    };
  }

  async function Page({ params }: PageProps) {
    const { locale } = await params;
    const box = getBoxType(slug);
    if (!box) notFound();
    return <BoxTypePage box={box} locale={locale} />;
  }

  return { generateMetadata, Page };
}
