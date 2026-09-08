import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import MarketAccessAdvisor from "./components/MarketAccessAdvisor";

export const metadata: Metadata = {
  title: "Electrical International Standards Inquiry Center | TPKELE",
  description:
    "Review technical standards, market-access considerations, supporting documents and product-specific compliance checks for electrical products in global markets.",
  keywords: [
    "international standards",
    "electrical product certification",
    "technical standards",
    "compliance",
    "IEC standards",
    "CE marking",
    "UL listing",
    "market access",
  ],
};

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function MarketAccessAdvisorPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <MarketAccessAdvisor />;
}
