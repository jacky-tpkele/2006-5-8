/**
 * RCBO Australia & New Zealand — Buyer-journey blog article.
 *
 * 这是一篇「采购导航式」文章：结构与普通博客不同，因此按 slug 单独建档，
 * 由 RichBlogArticle 渲染，普通文章继续走原来的 blog/[slug] 模版。
 *
 * 合规红线（来自集成包 J 条款）：
 *   不得把 "AS/NZS 61009.1 marking" 改写为 "Australia Certified" / "RCM Certified"
 *   / "Approved for Australia and New Zealand"。本节文字保持集成包的谨慎表述。
 */

export type RichBlock =
  | { kind: "p"; html: string }
  | { kind: "h3"; text: string }
  | { kind: "list"; ordered: boolean; items: string[] }
  | { kind: "callout"; tone: "info" | "warn" | "tip"; title?: string; html: string }
  | { kind: "comparison"; items: { title: string; lines: string[] }[] }
  | { kind: "figure"; webp: string; png: string; alt: string; caption: string }
  | { kind: "specGrid"; items: { label: string; text: string }[] }
  | { kind: "table"; head: string[]; rows: string[][] }
  | { kind: "contextAction"; title: string; text: string; href: string; label: string }
  | {
      kind: "resourceStrip";
      items: { index: string; title: string; sub: string; href: string }[];
    }
  | {
      kind: "productAction";
      eyebrow: string;
      title: string;
      text: string;
      href: string;
      label: string;
    }
  | { kind: "documentGrid"; items: { title: string; text: string }[] }
  | {
      kind: "resourceHub";
      title: string;
      items: { title: string; text: string; href: string }[];
    }
  | {
      kind: "purchaseSteps";
      items: { step: string; title: string; sub: string; href: string }[];
    };

export type RichSection = {
  id: string;
  /** 侧栏 "ON THIS PAGE" 是否展示 */
  inSidebar?: boolean;
  heading: string;
  blocks: RichBlock[];
};

export type RichBlogArticle = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  canonical: string;
  date: string;
  readingTime: number;
  eyebrow: string;
  lead: string;
  complianceNote: string;
  heroImage: string;
  heroImageAlt: string;
  /** sticky 采购导航 */
  journey: { label: string; anchor: string }[];
  /** 顶部 Buyer Quick Navigator */
  quickNavigator: {
    eyebrow: string;
    title: string;
    text: string;
    cards: {
      kicker: string;
      title: string;
      cta: string;
      href: string;
      primary?: boolean;
    }[];
  };
  sections: RichSection[];
  faq: { question: string; answer: string }[];
  references: { title: string; url: string }[];
  relatedProducts: string[];
  intent: string;
  disclaimer: string;
  /** 结构化数据用 */
  schemaImages: string[];
  about: string[];
};

const IMG = "/images/blog/rcbo-australia-new-zealand";

export const rcboAuNzGuide: RichBlogArticle = {
  slug: "rcbo-australia-new-zealand-selection-guide",
  title:
    "RCBO Selection Guide for Australia & New Zealand: 30mA, 6kA, Type A and AS/NZS 61009.1",
  seoTitle: "RCBO Australia & New Zealand: 30mA, 6kA & Type A Guide | TPKELE",
  seoDescription:
    "Learn how to select an RCBO for Australian and New Zealand electrical installations, including 30mA sensitivity, Type A considerations, 6kA breaking capacity, 1P+N design and AS/NZS 61009.1 compliance checks.",
  canonical:
    "https://www.tpkele.com/blog/rcbo-australia-new-zealand-selection-guide",
  date: "2026-10-01",
  readingTime: 11,
  eyebrow: "AUSTRALIA & NEW ZEALAND · RCBO PROCUREMENT GUIDE",
  lead: "Selecting an RCBO for Australian and New Zealand installations involves more than choosing an ampere rating. This guide is organized as a buyer journey: understand the device, shortlist the specification, review the destination-market compliance path, prepare documents and then move to quotation or sample evaluation.",
  complianceNote:
    "Standard markings and technical test data do not by themselves prove that a specific model is legally approved for sale in every Australian or New Zealand jurisdiction. Verify the exact model, certificate scope, registration and RCM requirements before placing product on the market.",
  heroImage: `${IMG}/tpkele-rcbo-front-30ma-6ka.webp`,
  heroImageAlt:
    "TPKELE compact RCBO front view showing C20, 30mA, 230-240V and 6000 markings",

  journey: [
    { label: "Understand", anchor: "#understand" },
    { label: "Select", anchor: "#select" },
    { label: "Compliance", anchor: "#compliance" },
    { label: "Documents", anchor: "#documents" },
    { label: "Product / Quote", anchor: "#buy" },
  ],

  quickNavigator: {
    eyebrow: "BUYER QUICK NAVIGATOR",
    title: "What are you trying to do?",
    text: "Jump directly to the TPKELE resource that matches the next procurement task.",
    cards: [
      {
        kicker: "TECHNICAL SELECTION",
        title: "Compare RCCB vs RCBO and selection parameters",
        cta: "Open RCBO Selection Guide →",
        href: "/guides/rccb-rcbo-selection-guide",
      },
      {
        kicker: "AU / NZ MARKET CHECK",
        title: "Review country-specific market-access questions",
        cta: "Open Market Access Advisor →",
        href: "/resources/market-access-advisor",
      },
      {
        kicker: "PROCUREMENT DOCUMENTS",
        title: "Check certificates, technical files and OEM support",
        cta: "Open Buyer Trade Support →",
        href: "/resources/buyer-support",
      },
      {
        kicker: "PRODUCT",
        title: "Review the 1P+N 18mm 6kA RCBO",
        cta: "Open Product Page →",
        href: "/products/1pn-rcbo",
        primary: true,
      },
    ],
  },

  sections: [
    {
      id: "understand",
      inSidebar: true,
      heading: "What Is an RCBO?",
      blocks: [
        {
          kind: "p",
          html: "An RCBO combines two protection functions in one DIN-rail device: overcurrent protection and residual-current protection. It can protect a final circuit against overload and short circuit while also detecting residual current that may indicate earth leakage. This combination is particularly useful where one protective device per final circuit is preferred.",
        },
        {
          kind: "comparison",
          items: [
            {
              title: "MCB",
              lines: ["Overload protection", "Short-circuit protection"],
            },
            {
              title: "RCBO",
              lines: [
                "Overload protection",
                "Short-circuit protection",
                "Residual-current protection",
              ],
            },
          ],
        },
        {
          kind: "p",
          html: 'The wider product family is covered on the <a href="/products/category/rcbo">RCBO category page</a>, and the compact single-module format is described on the <a href="/products/1pn-rcbo">1P+N 18mm 6kA RCBO product page</a>.',
        },
        {
          kind: "contextAction",
          title: "Need a broader technical comparison?",
          text: "Continue to the TPKELE RCCB and RCBO Selection Guide before you shortlist a model.",
          href: "/guides/rccb-rcbo-selection-guide",
          label: "Open Selection Guide →",
        },
      ],
    },
    {
      id: "compliance",
      inSidebar: true,
      heading: "RCBO Requirements in Australia and New Zealand",
      blocks: [
        {
          kind: "p",
          html: "Australia and New Zealand share many electrical standards, but market-access obligations should not be treated as identical. For RCBO procurement, AS/NZS 61009.1 is one of the key product standards used for residual current operated circuit-breakers with integral overcurrent protection for household and similar applications.",
        },
        {
          kind: "p",
          html: 'In Australia, the Electrical Equipment Safety System (EESS) provides a framework used by participating jurisdictions for in-scope electrical equipment. Depending on equipment classification and market route, Responsible Supplier, documentary evidence, registration and Regulatory Compliance Mark (RCM) obligations can apply. See the official <a href="https://www.eess.gov.au/responsible-supplier/manufacturers-and-importers-responsible-suppliers/" target="_blank" rel="noopener noreferrer">EESS Responsible Supplier guidance</a> and <a href="https://www.eess.gov.au/rcm/marking-of-electrical-equipment/" target="_blank" rel="noopener noreferrer">EESS RCM marking guidance</a>.',
        },
        {
          kind: "p",
          html: 'New Zealand also has electrical safety requirements. Buyers should confirm the actual destination-market obligations rather than assuming an Australian compliance route automatically covers New Zealand. Refer to <a href="https://www.worksafe.govt.nz/topic-and-industry/electricity/appliances-and-fittings/core-requirements/" target="_blank" rel="noopener noreferrer">WorkSafe New Zealand electrical safety guidance</a>.',
        },
        {
          kind: "resourceStrip",
          items: [
            {
              index: "01",
              title: "Market Access Advisor",
              sub: "Choose product + country + application",
              href: "/resources/market-access-advisor",
            },
            {
              index: "02",
              title: "Standards Database",
              sub: "Review IEC / UL reference layers",
              href: "/resources/standards-database",
            },
          ],
        },
      ],
    },
    {
      id: "ratings",
      inSidebar: true,
      heading: "Understanding RCBO Ratings: 20A, 30mA and 6kA",
      blocks: [
        {
          kind: "p",
          html: "Rated current, residual operating current and breaking capacity describe different functions. They should be checked independently during specification and quotation.",
        },
        {
          kind: "figure",
          webp: `${IMG}/tpkele-rcbo-front-30ma-6ka.webp`,
          png: `${IMG}/tpkele-rcbo-front-30ma-6ka.png`,
          alt: "TPKELE compact RCBO front view showing C20, 30mA, 230-240V and 6000 markings",
          caption:
            "Example RCBO front marking showing C20, 30mA residual-current sensitivity, 230–240V AC and 6000 marking.",
        },
        {
          kind: "specGrid",
          items: [
            {
              label: "C20",
              text: "20A rated current with C characteristic on the illustrated model.",
            },
            {
              label: "IΔn = 30mA",
              text: "Rated residual operating current; not the normal load current.",
            },
            {
              label: "230–240V~",
              text: "Rated AC operating voltage shown on the illustrated device.",
            },
            {
              label: "6000",
              text: "6kA short-circuit breaking-capacity marking on the illustrated device.",
            },
            {
              label: "T",
              text: "Test button for checking the residual-current tripping function per instructions.",
            },
          ],
        },
      ],
    },
    {
      id: "30ma",
      heading: "Why 30mA RCBOs Are Common in Final Circuits",
      blocks: [
        {
          kind: "p",
          html: "A 30mA value refers to residual-current sensitivity rather than the amount of current the protected load normally draws. For example, a C20 30mA RCBO may be rated for a 20A circuit while the residual-current function is designed to operate at a much lower leakage-current threshold. The exact protective arrangement still depends on the installation rules and circuit.",
        },
      ],
    },
    {
      id: "type-a",
      inSidebar: true,
      heading: "Type A vs Type AC RCBO: What Buyers Should Check",
      blocks: [
        {
          kind: "p",
          html: "RCD type matters because modern loads often contain power electronics. Type AC devices are intended for sinusoidal alternating residual currents, while Type A devices additionally detect pulsating DC residual currents within the scope of the applicable standard.",
        },
        {
          kind: "table",
          head: ["Selection point", "Type AC", "Type A"],
          rows: [
            ["Sinusoidal AC residual current", "Yes", "Yes"],
            [
              "Pulsating DC residual current",
              "Not its primary detection scope",
              "Yes, within standard scope",
            ],
            [
              "Modern electronic loads",
              "Check suitability carefully",
              "Often the more relevant option",
            ],
          ],
        },
        {
          kind: "p",
          html: "Confirm the exact RCD type on the datasheet, test report and product documentation for the model being supplied.",
        },
      ],
    },
    {
      id: "6ka",
      heading: "What Does a 6kA RCBO Breaking Capacity Mean?",
      blocks: [
        {
          kind: "p",
          html: "A 6kA marking does not mean that the RCBO carries 6000A during normal operation. It relates to specified short-circuit breaking capability under defined test conditions. The required breaking capacity depends on prospective fault current and installation design.",
        },
      ],
    },
    {
      id: "compact",
      inSidebar: true,
      heading: "Why a Compact 18mm 1P+N RCBO Can Matter in Switchboards",
      blocks: [
        {
          kind: "p",
          html: "Switchboard space is valuable. A compact 1P+N RCBO can combine overcurrent and residual-current protection in a narrow DIN-rail format, helping panel builders increase circuit density where the board design allows it.",
        },
        {
          kind: "figure",
          webp: `${IMG}/rcbo-product-range-switchboard-options.webp`,
          png: `${IMG}/rcbo-product-range-switchboard-options.png`,
          alt: "Comparison of multiple RCBO mechanical designs for switchboard applications",
          caption:
            "RCBOs are available in different mechanical formats and pole configurations. Selection should follow the circuit and installation requirements rather than appearance alone.",
        },
        {
          kind: "productAction",
          eyebrow: "MATCH THE ARTICLE TO THE PRODUCT",
          title: "1P+N 18mm RCBO 6kA — Type A / AC, 1–40A",
          text: "Continue from the guide to the live TPKELE product page to review current ratings, sensitivity options and enquiry actions.",
          href: "/products/1pn-rcbo",
          label: "View 1P+N RCBO →",
        },
      ],
    },
    {
      id: "wiring",
      inSidebar: true,
      heading: "RCBO Wiring, Terminals and Installation Considerations",
      blocks: [
        {
          kind: "p",
          html: "RCBO terminal arrangements are not universal. Before installation, check the manufacturer's wiring diagram, terminal identification and line/load orientation. Do not wire one model by copying another brand's terminal arrangement.",
        },
        {
          kind: "figure",
          webp: `${IMG}/rcbo-rear-wiring-diagram-as-nzs-61009-1.webp`,
          png: `${IMG}/rcbo-rear-wiring-diagram-as-nzs-61009-1.png`,
          alt: "Rear view of RCBO showing wiring diagram, terminal markings and AS/NZS 61009.1 marking",
          caption:
            "Rear view showing terminal identification, wiring diagram and IEC/EN 61009-1 / AS/NZS 61009.1 markings on the illustrated product.",
        },
      ],
    },
    {
      id: "select",
      inSidebar: true,
      heading: "Buyer Selection Checklist for Australia or New Zealand",
      blocks: [
        {
          kind: "table",
          head: ["Parameter", "What the buyer should verify"],
          rows: [
            ["Rated voltage", "Match the supply and installation design."],
            [
              "Rated current",
              "Choose according to conductor capacity, load and circuit design.",
            ],
            [
              "Trip characteristic",
              "Confirm B, C or other required characteristic for the load.",
            ],
            [
              "Residual sensitivity",
              "Confirm 30mA or another value required by the application.",
            ],
            [
              "RCD type",
              "Confirm Type A or another required type for the connected equipment and local rules.",
            ],
            [
              "Breaking capacity",
              "Ensure the rating is adequate for prospective fault current.",
            ],
            [
              "Pole configuration",
              "Check 1P+N or other arrangement and neutral switching requirements.",
            ],
            ["Physical width", "Confirm compatibility with the intended DIN-rail board."],
            [
              "Wiring arrangement",
              "Follow the exact model's line/load and neutral terminal diagram.",
            ],
            [
              "Product standard",
              "Confirm applicable AS/NZS / IEC standard and exact test-report scope.",
            ],
            [
              "Market compliance",
              "Verify registration, certification, supplier and RCM obligations for the destination.",
            ],
          ],
        },
        {
          kind: "contextAction",
          title: "Still comparing RCBO structures?",
          text: "Use the dedicated RCCB / RCBO guide for the broader selection workflow.",
          href: "/guides/rccb-rcbo-selection-guide",
          label: "Continue Technical Selection →",
        },
      ],
    },
    {
      id: "documents",
      inSidebar: true,
      heading: "What Procurement Teams Should Request Before Ordering",
      blocks: [
        {
          kind: "p",
          html: "A technically suitable RCBO is only part of a B2B procurement decision. Importers, distributors and panel builders should also review the exact commercial and technical document pack for the model they intend to buy.",
        },
        {
          kind: "documentGrid",
          items: [
            {
              title: "01 · Datasheet",
              text: "Ratings, curve, sensitivity, poles, dimensions and wiring.",
            },
            {
              title: "02 · Test Reports",
              text: "Check exact model coverage and test scope.",
            },
            {
              title: "03 · Certificates / Registration",
              text: "Verify destination-market relevance and validity.",
            },
            {
              title: "04 · Drawings",
              text: "Mechanical dimensions and terminal arrangement.",
            },
            {
              title: "05 · Marking / Label",
              text: "Review model, electrical ratings and required marks.",
            },
            {
              title: "06 · OEM / Packaging",
              text: "Confirm private-label and packaging requirements before production.",
            },
          ],
        },
        {
          kind: "resourceHub",
          title: "Continue the procurement workflow inside TPKELE",
          items: [
            {
              title: "Buyer Trade Support",
              text: "Certificates, technical files, OEM and trade documentation →",
              href: "/resources/buyer-support",
            },
            {
              title: "Market Access Advisor",
              text: "Country + product + application compliance workflow →",
              href: "/resources/market-access-advisor",
            },
            {
              title: "Standards Database",
              text: "Technical standards reference and scope checks →",
              href: "/resources/standards-database",
            },
            {
              title: "FAQ Knowledge Base",
              text: "Product selection, certification, OEM and ordering questions →",
              href: "/resources/faq",
            },
            {
              title: "Application Solutions",
              text: "Residential distribution and system-level design context →",
              href: "/resources/application-solutions",
            },
            {
              title: "All Resources",
              text: "Return to the complete TPKELE engineering resource center →",
              href: "/resources",
            },
          ],
        },
      ],
    },
    {
      id: "buy",
      inSidebar: true,
      heading: "TPKELE RCBO Route for Australian and New Zealand Buyers",
      blocks: [
        {
          kind: "p",
          html: 'TPKELE supplies low-voltage circuit-protection products for distributors, switchboard manufacturers, electrical contractors and OEM customers. The current <a href="/products/1pn-rcbo">1P+N RCBO product page</a> lists an 18mm single-module design, 1–40A range, 230V AC, 6kA breaking capacity and multiple residual-current sensitivity options. Buyers should still request documentation for the exact model and variant intended for the project.',
        },
        {
          kind: "p",
          html: 'For the wider range, see <a href="/products/category/rcbo">RCBO products</a> and the <a href="/resources/technical-guides">technical guides library</a>.',
        },
        {
          kind: "purchaseSteps",
          items: [
            {
              step: "STEP 1",
              title: "Review Product",
              sub: "1P+N 18mm RCBO",
              href: "/products/1pn-rcbo",
            },
            {
              step: "STEP 2",
              title: "Check Market",
              sub: "Australia / New Zealand",
              href: "/resources/market-access-advisor",
            },
            {
              step: "STEP 3",
              title: "Prepare Documents",
              sub: "Certificates / OEM / files",
              href: "/resources/buyer-support",
            },
            {
              step: "STEP 4",
              title: "Request Quote / Sample",
              sub: "Send project requirements",
              href: "/contact",
            },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      question: "Is 30mA the same as a 30A RCBO?",
      answer:
        "No. 30mA normally refers to residual-current sensitivity, while 30A would refer to load current.",
    },
    {
      question: "Does a 6kA RCBO carry 6000A continuously?",
      answer:
        "No. The 6kA marking relates to specified short-circuit breaking capability under defined conditions, not normal load current.",
    },
    {
      question: "Should Australian buyers choose Type A instead of Type AC?",
      answer:
        "Type A is relevant for many modern installations because of the residual-current waveforms it can detect. Confirm the exact requirement against the installation rules, connected equipment and local guidance.",
    },
    {
      question:
        "Does AS/NZS 61009.1 marking automatically mean an RCBO is approved for sale in Australia and New Zealand?",
      answer:
        "No. A standard marking is not the same as a complete market-access approval. Verify certificate scope, registration and RCM obligations for the exact model and destination.",
    },
    {
      question: "Where can I check TPKELE procurement and compliance resources?",
      answer:
        "Use the TPKELE Market Access Advisor for country-specific checks, Buyer Trade Support for documents, Standards Database for technical references and the FAQ Knowledge Base for common procurement questions.",
    },
  ],

  references: [
    {
      title: "EESS — Manufacturers and Importers / Responsible Suppliers",
      href: "https://www.eess.gov.au/responsible-supplier/manufacturers-and-importers-responsible-suppliers/",
    },
    {
      title: "EESS — Marking of Electrical Equipment / RCM",
      href: "https://www.eess.gov.au/rcm/marking-of-electrical-equipment/",
    },
    {
      title: "EESS — Registration Purpose",
      href: "https://www.eess.gov.au/registration/eess-registrations-purpose/",
    },
    {
      title: "WorkSafe New Zealand — Electrical Safety Compliance",
      href: "https://www.worksafe.govt.nz/topic-and-industry/electricity/appliances-and-fittings/core-requirements/",
    },
  ],

  relatedProducts: ["1pn-rcbo"],

  intent: "RCBO selection support for Australia & New Zealand",

  disclaimer:
    "This article is a general product-selection and procurement guide. It is not a substitute for local electrical design, installation rules, certification review or regulatory advice.",

  schemaImages: [
    "https://www.tpkele.com/images/blog/rcbo-australia-new-zealand/tpkele-rcbo-front-30ma-6ka.png",
    "https://www.tpkele.com/images/blog/rcbo-australia-new-zealand/rcbo-product-range-switchboard-options.png",
    "https://www.tpkele.com/images/blog/rcbo-australia-new-zealand/rcbo-rear-wiring-diagram-as-nzs-61009-1.png",
  ],

  about: [
    "RCBO",
    "Australia",
    "New Zealand",
    "AS/NZS 61009.1",
    "30mA",
    "6kA",
    "Type A RCBO",
  ],
};

/** slug → 富文本文章 */
export const richBlogArticles: Record<string, RichBlogArticle> = {
  [rcboAuNzGuide.slug]: rcboAuNzGuide,
};

export function getRichBlogArticle(slug: string): RichBlogArticle | undefined {
  return richBlogArticles[slug];
}

export function getRichBlogSlugs(): string[] {
  return Object.keys(richBlogArticles);
}

/** 全部采购导航式文章 */
export function getRichBlogArticles(): RichBlogArticle[] {
  return Object.values(richBlogArticles);
}

/** 供 sitemap 使用：slug + 发布日期 */
export function getRichBlogArticlesForSitemap(): { slug: string; date: string }[] {
  return getRichBlogArticles().map((article) => ({
    slug: article.slug,
    date: article.date,
  }));
}

/** 侧栏 "ON THIS PAGE" 条目 */
export function getRichArticleToc(article: RichBlogArticle) {
  return article.sections
    .filter((section) => section.inSidebar)
    .map((section) => ({ id: section.id, title: section.heading }));
}
