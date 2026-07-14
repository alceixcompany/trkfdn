import type { Metadata } from "next";
import { DM_Sans, Marcellus } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ReduxProvider from "@/components/ReduxProvider";

const dmSans = DM_Sans({ 
  subsets: ["latin", "latin-ext"],
  variable: '--font-dm-sans',
});

const marcellus = Marcellus({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: '--font-marcellus',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trkfdnelektrik.com"),
  title: "TRKFDN Elektrik | İstanbul Elektrikçi ve Acil Elektrik Servisi",
  description: "TRKFDN Elektrik ile İstanbul'da sigorta arızaları, elektrik bakım-onarım-tadilat, ev/ofis elektrik işleri, aydınlatma, taahhüt ve kamera kurulum hizmetleri alın.",
  keywords: [
    "trkfdn",
    "trkfdn elektrik",
    "mehmet yöney elektrik",
    "elektrikçi",
    "istanbul elektrikçi",
    "acil elektrikçi",
    "sigorta arızaları",
    "elektrik bakım onarım",
    "elektrik tadilat",
    "ev elektrik işleri",
    "ofis elektrik işleri",
    "aydınlatma montajları",
    "taahhüt işleri",
    "kamera montaj",
    "kamera kurulum"
  ].join(", "),
  authors: [{ name: "TRKFDN Elektrik" }],
  creator: "TRKFDN Elektrik",
  publisher: "TRKFDN Elektrik",
  robots: "index, follow",
  alternates: {
    canonical: "https://trkfdnelektrik.com"
  },
  category: "local service",
  classification: "Business",
  other: {
    "geo.region": "TR-34",
    "geo.placename": "İstanbul",
    "geo.position": "41.080369;28.916935",
    "ICBM": "41.080369, 28.916935"
  },
  icons: {
    icon: [
      { url: '/brand/trkfdn-logo.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/brand/trkfdn-logo.svg',
    apple: [
      { url: '/brand/trkfdn-logo.svg', type: 'image/svg+xml' },
    ],
    other: [
      { rel: 'mask-icon', url: '/brand/trkfdn-logo.svg' },
    ],
  },
  openGraph: {
    title: "TRKFDN Elektrik | İstanbul Elektrikçi Servisi",
    description: "Sigorta arızaları, bakım-onarım, ev/ofis elektrik işleri, aydınlatma, taahhüt ve kamera kurulum hizmetleri.",
    type: "website",
    locale: "tr_TR",
    siteName: "TRKFDN Elektrik",
    url: "https://trkfdnelektrik.com",
    images: [
      {
        url: '/trkfdn/home-hero.png',
        width: 1536,
        height: 1024,
        alt: 'TRKFDN Elektrik acil elektrik servis görseli'
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "TRKFDN Elektrik",
    description: "Profesyonel elektrikçi ve acil elektrik servisi.",
    images: ['/trkfdn/home-hero.png']
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${dmSans.variable} ${marcellus.variable} font-sans`}>
        <ReduxProvider>
          <RootLayoutContent>{children}</RootLayoutContent>
        </ReduxProvider>
      </body>
    </html>
  );
}

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  // Admin sayfalarında Header, Footer ve FloatingContact gösterme
  // Bu kontrol client-side'da yapılacak
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingContact />
    </>
  );
}
