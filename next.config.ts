import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.1.70", "*.local"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
