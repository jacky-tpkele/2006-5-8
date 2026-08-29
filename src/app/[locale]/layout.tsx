import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";
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
  alternates: { canonical: "/" },
  manifest: "/manifest.json",
  appleWebApp: { capable: true, title: "TPKELE", statusBarStyle: "default" },
  // Yandex / Bing 已通过 public/ 下的验证文件完成，无需重复 meta 标签
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  // 启用静态渲染优化
  setRequestLocale(locale);

  // 加载当前语言的 UI 文案
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <GoogleAnalytics />
          <WebVitals />
          <Header />
          {children}
          <Footer />
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
