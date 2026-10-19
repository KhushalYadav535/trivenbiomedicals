import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import Cursor from "@/components/cursor";
import Preloader from "@/components/preloader";
import ScrollProgress from "@/components/scroll-progress";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
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
  title: {
    default: `${COMPANY} — Connecting Healthcare and Trade, Reliably`,
    template: `%s — Triven Biomedicals`,
  },
  description: SUBLINE,
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
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
