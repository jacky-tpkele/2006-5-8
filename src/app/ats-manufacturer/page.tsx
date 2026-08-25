import type { Metadata } from "next";
import { ManufacturerPage } from "../_manufacturer/ManufacturerPage";
import { atsManufacturer as data } from "../_manufacturer/data-ats";
import { buildManufacturerJsonLd } from "../_manufacturer/schema";

export const metadata: Metadata = {
  title: data.seoTitle,
  description: data.seoDescription,
  alternates: { canonical: `/${data.slug}` },
  keywords: data.seoKeywords,
  openGraph: { title: data.seoTitle, description: data.seoDescription, url: `https://www.tpkele.com/${data.slug}`, type: "website" },
};

export default function AtsManufacturerRoute() {
  const jsonLd = buildManufacturerJsonLd(data);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ManufacturerPage data={data} />
    </>
  );
}
