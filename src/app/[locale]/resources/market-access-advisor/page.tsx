import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import MarketAccessAdvisor from "./components/MarketAccessAdvisor";

export const metadata: Metadata = {
  title: "Global Market Access Advisor | TPKELE",
  description:
    "Review technical standards, market-access considerations, supporting documents and product-specific compliance checks for electrical products in global markets.",
  keywords: [
    "market access",
    "electrical product certification",
    "technical standards",
    "compliance",
    "IEC standards",
    "CE marking",
    "UL listing",
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
