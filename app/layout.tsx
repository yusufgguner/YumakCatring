import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { site, company } from "@/config/site";
import { organizationSchema } from "@/constants/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

/**
 * İki font dünyası bilinçli:
 * - Playfair Display (serif) → başlıklar. Michelin / lüks otel kodu.
 * - Inter (sans)             → arayüz ve gövde. Apple / Tesla kodu.
 * display:swap → font yüklenirken metin görünür kalır, LCP bloklanmaz.
 */
const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | İstanbul Kurumsal ve Özel Gün Catering`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: site.url,
    title: `${site.name} | İstanbul Premium Catering`,
    description: site.description,
    images: [
      { url: "/images/og/og-default.jpg", width: 1200, height: 630, alt: site.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | İstanbul Premium Catering`,
    description: site.description,
    images: ["/images/og/og-default.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/images/logo/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/images/logo/apple-touch-icon.png",
  },
  other: {
    "geo.region": "TR-34",
    "geo.placename": company.address.city,
  },
};

export const viewport: Viewport = {
  themeColor: "#1c1917",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.lang} className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Hero görselleri dış kaynaktan geliyor — DNS + TLS el sıkışmasını
            ilk istek beklemeden başlat. */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body>
        {/* Organization + WebSite — her sayfada, marka varlığı için */}
        <JsonLd data={organizationSchema} />
        {/* Klavye kullanıcısı için ilk Tab'da görünür — WCAG 2.4.1 */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-[300] focus:bg-ink-900 focus:px-5 focus:py-3 focus:text-white"
        >
          İçeriğe geç
        </a>
        {children}
      </body>
    </html>
  );
}
