"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "./ui";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past top hero fold
      setVisible(window.scrollY > 320);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-4 inset-x-4 z-[75] md:hidden">
      <div className="flex items-center justify-between gap-3 rounded-full border border-ink/15 bg-paper/95 p-2 shadow-[0_8px_24px_rgba(0,0,0,0.14)] backdrop-blur-md">
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-paper active:scale-98 transition-transform"
        >
          Partner With Us
          <ArrowUpRight className="h-3 w-3" />
        </Link>
        <a
          href="tel:+911244897200"
          className="flex items-center justify-center h-9 w-9 rounded-full border border-ink/20 text-ink bg-cream active:scale-95 transition-transform"
          aria-label="Call Triven Commercial Desk"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-moss"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
