import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "TPKELE | Low Voltage Power Solutions",
    template: "%s | TPKELE",
  },
  description: site.description,
  keywords: ["low voltage products", "MCB", "SPD", "ATS", "combiner box", "DIN rail energy meter", "OEM ODM electrical manufacturer"],
  openGraph: {
    title: "TPKELE | Low Voltage Power Solutions",
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/assets/hero-products.webp", width: 900, height: 520, alt: "TPKELE low voltage product family" }],
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
