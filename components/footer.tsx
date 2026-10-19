"use client";

import Link from "next/link";
import Image from "next/image";
import { Magnetic } from "./magnetic";
import { ArrowUpRight } from "./ui";
import { ISTClock } from "./clock";
import { NAV_LINKS, VERTICALS, COMPANY, DISCLAIMER } from "@/lib/content";

const QUICK = NAV_LINKS.slice(1, 6);
const MORE = NAV_LINKS.slice(6);

export default function Footer() {
  const toTop = () => {
    window.__lenis?.scrollTo(0, { duration: 1.4 });
  };

  return (
    <footer className="wash relative border-t border-ink/10 bg-cream px-6 pt-20 text-ink md:px-10">
      <div className="mx-auto grid max-w-screen-xl gap-14 md:grid-cols-12">
        <div className="md:col-span-6">
          <Link href="/" className="group mb-6 inline-flex items-center gap-3.5">
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/emblem-transparent.png"
                alt="Triven Biomedicals Emblem"
                width={48}
                height={48}
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="relative flex h-6 items-center md:h-7">
                <Image
                  src="/triven-wordmark.png"
                  alt="TRIVEN"
                  width={160}
                  height={26}
                  className="h-full w-auto object-contain"
                />
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-ink/70 mt-1">
                Biomedicals Pvt. Ltd.
              </span>
            </div>
          </Link>
          <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ink/50">
            ( Trade · Services · Brands )
          </p>
          <p className="mt-6 max-w-md font-display text-3xl leading-[1.05] md:text-4xl">
            Trade. Services. Brands.{" "}
            <span className="italic text-moss">One connected company.</span>
          </p>
          <div className="mt-8">
            <Magnetic strength={0.2}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:bg-acid hover:text-ink"
              >
                Partner with us
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Magnetic>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 md:col-span-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ink/40">
              Company
            </p>
            <ul className="mt-5 space-y-3">
              {QUICK.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="draw text-sm text-ink/70 transition-colors hover:text-moss"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ink/40">
              Verticals
            </p>
            <ul className="mt-5 space-y-3">
              {VERTICALS.map((v) => (
                <li key={v.href}>
                  <Link
                    href={v.href}
                    className="draw text-sm text-ink/70 transition-colors hover:text-moss"
                  >
                    {v.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ink/40">
              More
            </p>
            <ul className="mt-5 space-y-3">
              {MORE.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="draw text-sm text-ink/70 transition-colors hover:text-moss"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-screen-xl border-t border-ink/10 py-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <p className="max-w-2xl font-mono text-[10px] leading-relaxed tracking-[0.08em] text-ink/40">
            {DISCLAIMER}
          </p>
          <button
            onClick={toTop}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 transition-colors duration-300 hover:border-acid hover:bg-acid hover:text-ink"
            aria-label="Back to top"
          >
            <ArrowUpRight className="h-4 w-4 -rotate-90 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-ink/5 pt-4">
          <div className="flex flex-wrap items-center gap-5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
            <span>© 2026 {COMPANY}</span>
            <Link href="/privacy-policy" className="hover:text-ink transition-colors underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-ink transition-colors underline">
              Terms & Conditions
            </Link>
          </div>
          <span className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
            <span className="flex items-center gap-2 text-moss">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-moss" />
              Open for partnerships
            </span>
            <span suppressHydrationWarning>
              <ISTClock /> IST
            </span>
          </span>
        </div>
      </div>

      <div aria-hidden data-cursor className="overflow-hidden px-1 pb-4">
        <div className="select-none text-center font-display text-[19vw] leading-[0.78] tracking-tight text-ink/[0.07]">
          {"TRIVEN".split("").map((ch, i) => (
            <span
              key={i}
              className="inline-block transition-all duration-300 hover:-translate-y-3 hover:italic hover:text-moss"
            >
              {ch}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
