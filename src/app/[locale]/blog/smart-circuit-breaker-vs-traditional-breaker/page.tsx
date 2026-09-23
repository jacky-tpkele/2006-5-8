import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { localizedPath, alternateLanguages } from '@/lib/locale-path';
import { articleHtml } from './article-content';
import SmartArticleEnhancements from './SmartArticleEnhancements';
import './smart-blog.css';

type PageProps = { params: Promise<{ locale: string }> };

const slug = "smart-circuit-breaker-vs-traditional-breaker";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const route = `/blog/${slug}`;

  return {
    title: "Smart Circuit Breaker vs Traditional Breaker | TPKELE",
    description: "Compare smart Wi-Fi switches and traditional MCBs: verified protection, remote control, energy monitoring, safety standards and practical selection criteria.",
    alternates: {
      canonical: localizedPath(route, locale),
      languages: alternateLanguages(route),
    },
    openGraph: {
      type: 'article',
      url: localizedPath(route, locale),
      title: "Smart Circuit Breaker vs Traditional Breaker | TPKELE",
      description: "Compare smart Wi-Fi switches and traditional MCBs: verified protection, remote control, energy monitoring, safety standards and practical selection criteria.",
      images: [{
        url: '/images/blog/smart-circuit-breaker-vs-traditional-breaker/smart-circuit-breaker-og-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'TPKELE Smart Circuit Breaker vs Traditional Breaker'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: "Smart Circuit Breaker vs Traditional Breaker | TPKELE",
      description: "Compare smart Wi-Fi switches and traditional MCBs: verified protection, remote control, energy monitoring, safety standards and practical selection criteria.",
      images: ['/images/blog/smart-circuit-breaker-vs-traditional-breaker/smart-circuit-breaker-og-1200x630.jpg']
    },
  };
}

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "Smart Circuit Breaker vs Traditional Circuit Breaker: Functions, Differences & Selection Guide",
      "description": "Compare smart Wi-Fi switches and traditional MCBs: verified protection, remote control, energy monitoring, safety standards and practical selection criteria.",
      "image": [
        "https://www.tpkele.com/images/blog/smart-circuit-breaker-vs-traditional-breaker/smart-circuit-breaker-og-1200x630.jpg"
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.tpkele.com/blog/smart-circuit-breaker-vs-traditional-breaker"
      },
      "author": {
        "@type": "Organization",
        "name": "TPKELE Technical Content"
      },
      "publisher": {
        "@type": "Organization",
        "name": "TPKELE",
        "url": "https://www.tpkele.com"
      },
      "datePublished": "2026-09-23",
      "dateModified": "2026-09-23",
      "inLanguage": "en",
      "about": [
        {
          "@type": "Thing",
          "name": "Smart circuit breaker"
        },
        {
          "@type": "Thing",
          "name": "Miniature circuit breaker"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.tpkele.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.tpkele.com/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Smart Circuit Breaker vs Traditional Breaker",
          "item": "https://www.tpkele.com/blog/smart-circuit-breaker-vs-traditional-breaker"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a Wi-Fi smart switch replace an MCB?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not automatically. Remote switching does not prove a certified short-circuit interruption rating. Verify the exact device classification and test documentation."
          }
        },
        {
          "@type": "Question",
          "name": "Will the protective function still work if Wi-Fi is disconnected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Confirm the local protective behavior and test evidence for the exact model. Remote commands and alerts may be unavailable while offline."
          }
        },
        {
          "@type": "Question",
          "name": "Does a 30 mA mark prove that the device is an RCBO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Device classification, integral overcurrent protection and applicable certification require separate evidence."
          }
        },
        {
          "@type": "Question",
          "name": "Is a Wi-Fi smart circuit breaker suitable for a solar PV DC string?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only if the exact model has the required verified DC rating, polarity conditions and fault-interruption capability."
          }
        },
        {
          "@type": "Question",
          "name": "Can an app kWh reading replace a billing meter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only where metering accuracy, calibration and local billing requirements are verified. Consider a dedicated energy meter for billing."
          }
        }
      ]
    }
  ]
};

export default async function SmartCircuitBreakerArticle({ params }: PageProps) {
  const { locale } = await params;

  return (
    <main className="tpb" id="tpb-smart-guide">
      <SmartArticleEnhancements />
      <div dangerouslySetInnerHTML={{ __html: articleHtml }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }} />
    </main>
  );
}
