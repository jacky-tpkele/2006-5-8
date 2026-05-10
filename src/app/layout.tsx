import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "TPKELE | Solar & Low Voltage Electrical Protection Manufacturer",
    template: "%s | TPKELE",
  },
  description: site.description,
  keywords: [
    "DC MCB",
    "AC MCB",
    "DC SPD",
    "AC SPD",
    "PV combiner box",
    "solar circuit breaker",
    "surge protective device",
    "automatic transfer switch",
    "voltage protector",
    "DIN rail energy meter",
    "low voltage electrical manufacturer",
    "solar protection OEM",
  ],
  alternates: { canonical: site.url },
  openGraph: {
    title: "TPKELE | Solar & Low Voltage Electrical Protection Manufacturer",
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/assets/hero-products.webp", width: 900, height: 520, alt: "TPKELE solar and low voltage protection products" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TPKELE | Solar & Low Voltage Electrical Protection Manufacturer",
    description: site.description,
    images: ["/assets/hero-products.webp"],
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
