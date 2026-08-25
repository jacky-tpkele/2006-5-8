import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { WebVitals } from "@/components/WebVitals";
import { CookieConsent } from "@/components/CookieConsent";
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
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "TPKELE",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    title: "TPKELE | Solar & Low Voltage Electrical Protection Manufacturer",
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/assets/factory-home.webp", width: 1672, height: 941, alt: "TPKELE manufacturing facility" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TPKELE | Solar & Low Voltage Electrical Protection Manufacturer",
    description: site.description,
    images: ["/assets/factory-home.webp"],
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
        <GoogleAnalytics />
        <WebVitals />
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
