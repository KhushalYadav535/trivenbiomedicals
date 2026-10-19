import type { Metadata } from "next";
import { Suspense } from "react";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import Cursor from "@/components/cursor";
import Preloader from "@/components/preloader";
import ScrollProgress from "@/components/scroll-progress";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
import { Analytics } from "@/components/analytics";
import { COMPANY, SUBLINE } from "@/lib/content";

const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trivenbio.com"),
  title: {
    default: `${COMPANY} — Connecting Healthcare and Trade, Reliably`,
    template: `%s — Triven Biomedicals`,
  },
  description: SUBLINE,
  keywords: [
    "Triven Biomedicals",
    "Pharmaceutical Distribution India",
    "Medical Supplies Wholesaler",
    "Healthcare Supply Chain Gurugram",
    "FMCG Trade",
    "Hospital Consumables Supplier",
    "Contract Manufacturing Pharma",
    "International Trade India",
  ],
  authors: [{ name: COMPANY }],
  creator: COMPANY,
  publisher: COMPANY,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://trivenbio.com",
    title: `${COMPANY} — Connecting Healthcare and Trade, Reliably`,
    description: SUBLINE,
    siteName: COMPANY,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${COMPANY} — Connecting Healthcare and Trade, Reliably`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY} — Connecting Healthcare and Trade, Reliably`,
    description: SUBLINE,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
};

const preloadedScript = `try{if(sessionStorage.getItem("tb-seen")){document.documentElement.setAttribute("data-preloaded","1")}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrument.variable} ${inter.variable} ${jbMono.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <script dangerouslySetInnerHTML={{ __html: preloadedScript }} />
        <SmoothScroll>
          <Preloader />
          <Cursor />
          <ScrollProgress />
          <div aria-hidden className="noise pointer-events-none fixed inset-0 z-[70] opacity-[0.04]" />
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[45] hidden lg:block"
          >
            {["25%", "50%", "75%"].map((pos) => (
              <span
                key={pos}
                className="absolute top-0 h-full w-px bg-ink/[0.05]"
                style={{ left: pos }}
              />
            ))}
          </div>
          <Nav />
          <main>{children}</main>
          <Footer />
          <StickyMobileCTA />
          <CookieBanner />
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
        </SmoothScroll>
      </body>
    </html>
  );
}
