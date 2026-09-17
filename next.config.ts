import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.1.70", "*.local"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      // Market Access Advisor 301 redirects
      {
        source: "/electrical-international-standards-inquiry-center",
        destination: "/resources/market-access-advisor",
        permanent: true,
      },
      {
        source: "/:locale/electrical-international-standards-inquiry-center",
        destination: "/:locale/resources/market-access-advisor",
        permanent: true,
      },

      // Standards Database 301 redirects
      {
        source: "/electric-standards-database",
        destination: "/resources/standards-database",
        permanent: true,
      },
      {
        source: "/:locale/electric-standards-database",
        destination: "/:locale/resources/standards-database",
        permanent: true,
      },
      {
        source: "/electric-standards-database/:slug",
        destination: "/resources/standards-database/:slug",
        permanent: true,
      },
      {
        source: "/:locale/electric-standards-database/:slug",
        destination: "/:locale/resources/standards-database/:slug",
        permanent: true,
      },

      // Buyer Trade Support 301 redirect
      {
        source: "/resources/buyer-trade-support",
        destination: "/resources/buyer-support",
        permanent: true,
      },
      {
        source: "/:locale/resources/buyer-trade-support",
        destination: "/:locale/resources/buyer-support",
        permanent: true,
      },

      // Fix duplicate URL patterns (typos in old links)
      {
        source: "/resources/application-solutionsapplication-solutions",
        destination: "/resources/application-solutions",
        permanent: true,
      },
      {
        source: "/resources/market-access-advisormarket-access",
        destination: "/resources/market-access-advisor",
        permanent: true,
      },
      {
        source: "/projects/zimbabwe-sirdc-solar-projectzimbabwe",
        destination: "/projects/zimbabwe-sirdc-solar-project",
        permanent: true,
      },

      // Blog to Guides redirects (old blog articles moved to technical guides)
      {
        source: "/blog/solar-dc-circuit-breaker-selection",
        destination: "/guides/dc-mcb-selection-guide",
        permanent: true,
      },
      {
        source: "/:locale/blog/solar-dc-circuit-breaker-selection",
        destination: "/:locale/guides/dc-mcb-selection-guide",
        permanent: true,
      },
      {
        source: "/blog/mcb-selection-guide",
        destination: "/guides/ac-mcb-selection-guide",
        permanent: true,
      },
      {
        source: "/:locale/blog/mcb-selection-guide",
        destination: "/:locale/guides/ac-mcb-selection-guide",
        permanent: true,
      },
      {
        source: "/blog/dc-circuit-breaker-selection-guide",
        destination: "/guides/dc-mcb-selection-guide",
        permanent: true,
      },
      {
        source: "/:locale/blog/dc-circuit-breaker-selection-guide",
        destination: "/:locale/guides/dc-mcb-selection-guide",
        permanent: true,
      },
      {
        source: "/blog/pv-combiner-box-guide",
        destination: "/guides/pv-combiner-box-selection-guide",
        permanent: true,
      },
      {
        source: "/:locale/blog/pv-combiner-box-guide",
        destination: "/:locale/guides/pv-combiner-box-selection-guide",
        permanent: true,
      },

      // Old product routes to new structure
      {
        source: "/products/over-voltage-protector",
        destination: "/products/voltage-protector",
        permanent: true,
      },
      {
        source: "/:locale/products/over-voltage-protector",
        destination: "/:locale/products/voltage-protector",
        permanent: true,
      },

      // Old general routes to specific product categories
      {
        source: "/dc-circuit-breakers",
        destination: "/products/dc-mcb",
        permanent: true,
      },
      {
        source: "/:locale/dc-circuit-breakers",
        destination: "/:locale/products/dc-mcb",
        permanent: true,
      },
      {
        source: "/circuit-breakers",
        destination: "/products/mcb",
        permanent: true,
      },
      {
        source: "/:locale/circuit-breakers",
        destination: "/:locale/products/mcb",
        permanent: true,
      },
      {
        source: "/solar-dc-protectionsolar",
        destination: "/products/dc-mcb",
        permanent: true,
      },

      // Language route fixes
      {
        source: "/ru/index.html",
        destination: "/ru",
        permanent: true,
      },
      {
        source: "/privacy.html",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/:locale/privacy.html",
        destination: "/:locale/privacy-policy",
        permanent: true,
      },

      // Remove /en prefix (redirect to default locale)
      {
        source: "/en",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/products",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/en/products/:slug",
        destination: "/products/:slug",
        permanent: true,
      },
      {
        source: "/en/blog/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
