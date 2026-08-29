import { site } from "@/data/site";
import type { ManufacturerData } from "./types";

/**
 * Builds the JSON-LD graph for a manufacturer landing page.
 * CollectionPage + ItemList tells Google the page is a product-series hub,
 * not a company profile, so the series links get indexed with it.
 */
export function buildManufacturerJsonLd(data: ManufacturerData) {
  const pageUrl = `${site.url}/${data.slug}`;

  const absolute = (href: string) =>
    href.startsWith("http") ? href : `${site.url}${href.startsWith("/") ? href : `/${href}`}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": pageUrl,
        url: pageUrl,
        name: data.seoTitle,
        description: data.seoDescription,
        about: data.category,
        isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: data.productLabel, item: pageUrl },
          ],
        },
        ...(data.series.length > 0
          ? {
              mainEntity: {
                "@type": "ItemList",
                name: data.scopeTitle,
                numberOfItems: data.series.length,
                itemListElement: data.series.map((item, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  name: item.label,
                  description: item.meta,
                  url: absolute(item.href),
                })),
              },
            }
          : {}),
      },
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        alternateName: "Wenzhou TPKELE Electric Co., Ltd",
        url: site.url,
        logo: `${site.url}/logo.png`,
        description: data.seoDescription,
        email: site.email,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Wenzhou",
          addressRegion: "Zhejiang",
          addressCountry: "CN",
          streetAddress: site.address,
        },
        areaServed: "Worldwide",
        sameAs: [site.social.linkedin, site.social.youtube, site.social.facebook],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: data.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}
