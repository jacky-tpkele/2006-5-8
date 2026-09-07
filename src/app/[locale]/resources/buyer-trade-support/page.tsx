import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import BuyerTradeSupport from "./components/BuyerTradeSupport";
import "./buyer-trade-support.css";

const site = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tpkele.com";
const canonical = `${site}/resources/buyer-trade-support`;

export const metadata: Metadata = {
  title: "International Buyer Trade Support",
  description:
    "Plan OEM packaging, export documents, Incoterms, payment, shipping and production requirements before sending a TPKELE inquiry.",
  alternates: { canonical },
  openGraph: {
    title: "International Buyer Trade Support | TPKELE",
    description:
      "Build your order requirement while reviewing packaging customization, export documents, trade terms, shipping and lead time.",
    url: canonical,
    siteName: "TPKELE",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site },
    { "@type": "ListItem", position: 2, name: "Resources", item: `${site}/resources` },
    { "@type": "ListItem", position: 3, name: "Buyer Trade Support", item: canonical },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I request custom packaging before I have final artwork?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Select the packaging type first and describe the intended style. Final artwork, MOQ and feasibility are confirmed before mass production.",
      },
    },
    {
      "@type": "Question",
      name: "Can I request packing dimensions before placing the order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Packing dimensions can be discussed for freight estimates, warehouse planning and container analysis. Final values follow the confirmed product and packaging combination.",
      },
    },
    {
      "@type": "Question",
      name: "What if I do not know which Incoterm to choose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the trade-term helper or select Not Sure. TPKELE can review your destination and logistics arrangement before confirming the quotation basis.",
      },
    },
  ],
};

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function BuyerTradeSupportPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BuyerTradeSupport />
    </>
  );
}
