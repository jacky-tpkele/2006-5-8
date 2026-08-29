import type { Metadata } from "next";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import { ManufacturerPage } from "../_manufacturer/ManufacturerPage";
import { atsManufacturer as data } from "../_manufacturer/data-ats";
import { buildManufacturerJsonLd } from "../_manufacturer/schema";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const route = `/${data.slug}`;

  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: data.seoKeywords,
    alternates: {
      canonical: localizedPath(route, locale),
      languages: alternateLanguages(route),
    },
    openGraph: {
      title: data.seoTitle,
      description: data.seoDescription,
      url: `https://www.tpkele.com${localizedPath(route, locale)}`,
      type: "website",
    },
  };
}

export default function AtsManufacturerRoute() {
  const jsonLd = buildManufacturerJsonLd(data);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ManufacturerPage data={data} />
    </>
  );
}
