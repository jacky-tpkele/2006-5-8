import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import GuideTemplate from "./components/GuideTemplate";
import { getGuideBySlug, getAllGuideSlugs } from "@/data/guides";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllGuideSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Guide Not Found | TPKELE",
    };
  }

  const title = `${guide.title} | TPKELE Technical Guides`;
  const description = guide.description || `Complete technical guide for ${guide.title}`;
  const canonicalUrl = `https://www.tpkele.com/guides/${slug}`;

  return {
    title,
    description,
    keywords: [
      guide.product,
      guide.application,
      "technical guide",
      "selection guide",
      "TPKELE",
      "electrical protection",
      "IEC standards",
    ],
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "TPKELE",
      type: "article",
      images: [
        {
          url: `https://www.tpkele.com/images/guides/${slug}/hero.png`,
          width: 1200,
          height: 630,
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://www.tpkele.com/images/guides/${slug}/hero.png`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: guide.title,
    description: guide.description,
    image: `https://www.tpkele.com/images/guides/${slug}/hero.png`,
    author: {
      "@type": "Organization",
      name: "TPKELE Technical Team",
      url: "https://www.tpkele.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "TPKELE",
      logo: {
        "@type": "ImageObject",
        url: "https://www.tpkele.com/icon.png",
      },
    },
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.tpkele.com/guides/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuideTemplate guide={guide} />
    </>
  );
}
