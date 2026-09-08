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
    ];
  },
};

export default withNextIntl(nextConfig);
