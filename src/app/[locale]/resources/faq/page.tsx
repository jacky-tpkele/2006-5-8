import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { NextStep } from "@/components/resources/NextStep";
import "./faq.css";

export const metadata: Metadata = {
  title: "FAQ Knowledge Base | TPKELE Resources",
  description:
    "Frequently asked questions about electrical protection products, customization, certification, ordering and delivery. Get answers from TPKELE experts.",
  keywords: [
    "product FAQ",
    "OEM customization",
    "certification questions",
    "ordering FAQ",
    "electrical products FAQ",
    "MCB questions",
    "SPD questions",
    "technical support",
  ],
  openGraph: {
    title: "FAQ Knowledge Base - Your Questions Answered | TPKELE",
    description:
      "Get answers to frequently asked questions about electrical protection products, OEM services, certification, and ordering.",
    url: "https://www.tpkele.com/resources/faq",
    siteName: "TPKELE",
    type: "website",
    images: [
      {
        url: "https://www.tpkele.com/images/resources/faq-og.png",
        width: 1200,
        height: 630,
        alt: "TPKELE FAQ Knowledge Base",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ Knowledge Base - Your Questions Answered",
    description: "Frequently asked questions about electrical protection products, OEM, certification, and ordering.",
    images: ["https://www.tpkele.com/images/resources/faq-og.png"],
  },
  alternates: {
    canonical: "https://www.tpkele.com/resources/faq",
  },
};

type PageProps = {
  params: Promise<{ locale: string }>;
};

const faqCategories = [
  {
    id: "product-selection",
    title: "Product Selection",
    icon: "🔍",
    description: "Questions about choosing the right protection devices for your application",
    faqs: [
      {
        q: "How do I choose between AC MCB and DC MCB?",
        a: "DC MCBs are specifically designed for direct current applications with arc suppression optimized for DC circuits. Use DC MCBs for solar PV, battery systems, and DC power supplies. AC MCBs are for alternating current applications like building distribution boards. Never use AC MCBs in DC systems—they cannot safely interrupt DC arcs.",
      },
      {
        q: "What's the difference between Type 1, Type 2, and Type 3 SPDs?",
        a: "Type 1 SPDs (Class I) handle direct lightning strikes at the service entrance. Type 2 SPDs (Class II) protect against induced surges at sub-distribution boards—most common in buildings. Type 3 SPDs (Class III) are point-of-use protection at sensitive equipment. For comprehensive protection, use coordinated Type 1 + Type 2 systems.",
      },
      {
        q: "How do I size a DC MCB for a solar PV string?",
        a: "Use our DC MCB Selection Guide: (1) Calculate string Isc (short-circuit current), (2) Select MCB rated current ≥ 1.25 × Isc, (3) Verify DC voltage rating ≥ system Voc, (4) Confirm breaking capacity matches fault current. Our technical team can validate your calculations.",
      },
      {
        q: "What's the difference between RCCB and RCBO?",
        a: "RCCB (Residual Current Circuit Breaker) only detects earth leakage/residual current and provides shock protection. RCBO (Residual Current Breaker with Overcurrent) combines RCD functionality with overcurrent protection (like an MCB), saving panel space. Use RCBOs when you need both functions in a single device.",
      },
    ],
  },
  {
    id: "customization-oem",
    title: "Customization & OEM",
    icon: "⚙️",
    description: "OEM services, branding, and product customization options",
    faqs: [
      {
        q: "What customization options are available?",
        a: "We offer: (1) Logo printing on product housing, (2) Custom label design, (3) Modified current ratings within standard frames, (4) Custom packaging and labeling, (5) Private labeling with your brand. MOQ varies by customization type—contact us for specific requirements.",
      },
      {
        q: "Can you manufacture products to our specifications?",
        a: "Yes, we provide ODM services for custom designs. Our engineering team can develop products based on your specifications, including modified mechanical dimensions, special current ratings, integrated features, or application-specific designs. Lead time typically 8-12 weeks after design approval.",
      },
      {
        q: "What's the MOQ for OEM orders?",
        a: "MOQ depends on customization level: Simple logo printing (500-1000 units), Custom label design (1000-2000 units), Modified product design (2000-5000 units). Contact our sales team for volume pricing and flexible MOQ options for long-term partnerships.",
      },
      {
        q: "Do you provide technical support for OEM projects?",
        a: "Yes, comprehensive OEM technical support includes: Product selection consulting, Application engineering review, Test report interpretation, Certification guidance (CE, UL, IEC), Installation documentation, and Post-sales technical assistance. Dedicated engineers assigned to major OEM accounts.",
      },
    ],
  },
  {
    id: "certification-testing",
    title: "Certification & Testing",
    icon: "✓",
    description: "Standards compliance, test reports, and certification documentation",
    faqs: [
      {
        q: "What certifications do your products have?",
        a: "Our products are certified to major international standards: IEC 60947-2 (MCBs), IEC 61643-11 (SPDs), IEC 60947-6-1 (ATS), UL 489 (MCBs), UL 1449 (SPDs). Specific certifications vary by product—check product datasheets or use our Market Access Advisor to verify requirements for your target market.",
      },
      {
        q: "Can you provide test reports for customs clearance?",
        a: "Yes, we provide: (1) Type test reports from accredited labs (TÜV, CNAS, ITS), (2) Certificate of conformity, (3) Factory inspection certificates, (4) Material declarations (RoHS, REACH), (5) Product datasheets with technical specifications. Documents available in English and can be notarized if required.",
      },
      {
        q: "Do your products meet European CE requirements?",
        a: "Yes, applicable products carry CE marking and comply with: Low Voltage Directive (LVD 2014/35/EU), EMC Directive (2014/30/EU), RoHS Directive (2011/65/EU). We provide Declaration of Conformity (DoC) and technical files for regulatory inspections. Use our Market Access Advisor for EU-specific requirements.",
      },
      {
        q: "How do I verify if your product meets my country's standards?",
        a: "Use our Market Access Advisor tool: (1) Select your product type, (2) Choose your target country/region, (3) Get country-specific requirements and applicable standards, (4) View which of our products meet those requirements. For complex projects, request a compliance review from our technical team.",
      },
    ],
  },
  {
    id: "ordering-delivery",
    title: "Ordering & Delivery",
    icon: "📦",
    description: "Order process, shipping, lead times, and payment terms",
    faqs: [
      {
        q: "What's the typical lead time for standard products?",
        a: "Standard products (catalog items): 2-3 weeks for stock items, 4-6 weeks for made-to-order standard configurations. OEM/customized products: 6-8 weeks after sample approval. Large volume orders (container loads): 8-10 weeks. Express production available for urgent orders with additional fees.",
      },
      {
        q: "What are your payment terms?",
        a: "Standard terms: 30% deposit, 70% before shipment (T/T). For established customers: Net 30-60 days with approved credit. LC at sight accepted for large orders. PayPal/Alibaba Trade Assurance available for smaller trial orders. Contact us to discuss terms suitable for your business.",
      },
      {
        q: "Do you ship internationally? What are shipping options?",
        a: "Yes, we ship worldwide. Options: (1) Sea freight (FCL/LCL)—most economical for large orders, (2) Air freight—faster for urgent orders, (3) Express courier (DHL, FedEx, UPS)—for samples and small shipments. We handle FOB, CIF, DDU terms. Incoterms negotiable based on your preference.",
      },
      {
        q: "Can I order samples before placing a bulk order?",
        a: "Yes, samples available for evaluation. Sample policy: (1) Free samples for established customers (freight collect), (2) Sample cost for new customers (refundable against first order), (3) Customized samples charged at cost. Samples typically ship within 3-5 days via express courier.",
      },
      {
        q: "What's your minimum order quantity (MOQ)?",
        a: "MOQ varies by product: Standard products (no customization): 100-500 units per SKU, OEM/customized products: 1000-5000 units depending on customization level. Flexible MOQ for trial orders and long-term partnerships. Contact sales for specific product MOQ and volume discounts.",
      },
    ],
  },
  {
    id: "technical-support",
    title: "Technical Support",
    icon: "🛠️",
    description: "After-sales support, troubleshooting, and technical assistance",
    faqs: [
      {
        q: "What warranty do you offer?",
        a: "Standard warranty: 24 months from shipment date for manufacturing defects. Extended warranty available for OEM partnerships. Warranty covers material and workmanship defects. Does not cover damage from improper installation, overvoltage, environmental factors, or normal wear. Repair or replacement at our discretion.",
      },
      {
        q: "How do I handle a product quality issue?",
        a: "Contact us immediately with: (1) Product model and batch number, (2) Photos/videos of the issue, (3) Description of the problem. Our QA team will investigate within 24 hours. For confirmed defects: replacement units shipped, credit issued, or repair arranged. Detailed quality claim process available from your account manager.",
      },
      {
        q: "Do you provide installation support?",
        a: "Yes, we provide: (1) Detailed installation manuals (English, Chinese), (2) Wiring diagrams and dimensional drawings, (3) Installation videos for complex products, (4) Remote technical support via email/WhatsApp, (5) On-site commissioning support for large projects (fees apply). Training sessions available for distributors.",
      },
      {
        q: "Can your engineers review our electrical design?",
        a: "Yes, we offer free application engineering review for projects using our products: (1) System design review, (2) Product selection validation, (3) Protection coordination check, (4) Standards compliance verification. Submit your single-line diagram and specifications via our contact form for review within 3-5 business days.",
      },
    ],
  },
];

export default async function FAQPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Generate FAQ Schema (JSON-LD) for all FAQs
  const allFaqs = faqCategories.flatMap((category) => category.faqs);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="faq-page">
      <section className="faq-hero">
        <h1>FAQ Knowledge Base</h1>
        <p>
          Answers to frequently asked questions about products, customization, certification, ordering and technical
          support.
        </p>
      </section>

      <section className="faq-content">
        <div className="faq-categories">
          {faqCategories.map((category) => (
            <div key={category.id} className="faq-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <div>
                  <h2>{category.title}</h2>
                  <p className="category-description">{category.description}</p>
                </div>
              </div>

              <div className="faq-list">
                {category.faqs.map((faq, idx) => (
                  <details key={idx} className="faq-item">
                    <summary className="faq-question">
                      <span className="q-icon">Q</span>
                      <span className="q-text">{faq.q}</span>
                      <span className="expand-icon">+</span>
                    </summary>
                    <div className="faq-answer">
                      <span className="a-icon">A</span>
                      <p>{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-cta">
        <div className="cta-box">
          <h2>Still Have Questions?</h2>
          <p>
            Can't find the answer you're looking for? Our technical and sales teams are here to help with your specific
            questions.
          </p>
          <div className="cta-actions">
            <Link href="/contact" className="cta-btn primary">
              Contact Us
            </Link>
            <Link href="/resources/technical-guides" className="cta-btn secondary">
              Browse Technical Guides
            </Link>
          </div>
        </div>
      </section>

      <NextStep
        title="Explore Technical Resources"
        description="Dive deeper into product selection and compliance requirements"
        actions={[
          {
            title: "Technical Guides",
            href: "/resources/technical-guides",
            description: "Comprehensive selection guides for DC MCB, SPD, ATS, Energy Meters, and more",
            icon: "📘",
            badge: "10+ GUIDES",
          },
          {
            title: "Application Solutions",
            href: "/resources/application-solutions",
            description: "Real-world system designs for solar PV, data centers, and industrial projects",
            icon: "🔧",
          },
          {
            title: "Standards Database",
            href: "/resources/standards-database",
            description: "Search 32+ IEC and UL standards by product and application",
            icon: "📚",
          },
        ]}
      />
    </div>
    </>
  );
}
