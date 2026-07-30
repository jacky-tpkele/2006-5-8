import type { Metadata } from "next";
import { ManufacturerPage } from "../_manufacturer/ManufacturerPage";
import { mcbManufacturer as data } from "../_manufacturer/data-mcb";

export const metadata: Metadata = {
  title: data.seoTitle,
  description: data.seoDescription,
  alternates: { canonical: `/${data.slug}` },
  keywords: data.seoKeywords,
  openGraph: {
    title: data.seoTitle,
    description: data.seoDescription,
    url: `https://www.tpkele.com/${data.slug}`,
    type: "website",
  },
};

export default function McbManufacturerRoute() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "TPKELE",
        url: "https://www.tpkele.com",
        description: data.seoDescription,
      },
      {
        "@type": "FAQPage",
        mainEntity: data.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ManufacturerPage data={data} />
    </>
  );
}
