"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { EASE, EASE_EXPO } from "@/lib/motion";
import { NAV_LINKS, COMPANY } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (open) {
      window.__lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      window.__lenis?.start();
      document.body.style.overflow = "";
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        className="fixed inset-x-0 top-0 z-[80] mix-blend-difference"
      >
        <div className="flex items-center justify-between px-6 py-5 md:px-10">
          <Link
            href="/"
            className="flex items-baseline gap-2 text-white"
            aria-label="Triven Biomedicals — Home"
          >
            <span className="font-display text-xl tracking-tight md:text-2xl">
              Triven
            </span>
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.28em] opacity-70 sm:block">
              Biomedicals Pvt. Ltd.
            </span>
          </Link>
          <div className="flex items-center gap-6 md:gap-10">
            <Link
              href="/contact"
              className="hidden font-mono text-[10px] uppercase tracking-[0.24em] text-white/70 transition-colors hover:text-white md:block"
            >
              Partner With Us
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.26em] text-white"
              aria-expanded={open}
            >
              {open ? "Close" : "Menu"}
              <span className="relative block h-3 w-6">
                <span
                  className={`absolute left-0 top-0 h-px w-full bg-white transition-transform duration-300 ${
                    open ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0.5 left-0 h-px w-full bg-white transition-transform duration-300 ${
                    open ? "-translate-y-1 rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-paper text-ink"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.7, ease: EASE_EXPO }}
          >
            <motion.div
              className="flex h-full flex-col justify-between overflow-y-auto px-6 pb-8 pt-24 md:px-10"
              data-lenis-prevent
            >
              <nav className="grid content-start gap-x-16 md:grid-cols-2 lg:grid-cols-3">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ y: 28, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ delay: 0.15 + i * 0.035, duration: 0.6, ease: EASE }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`group flex items-baseline gap-4 border-b border-ink/10 py-3.5 md:py-4 ${
                        pathname === link.href ? "text-moss" : ""
                      }`}
                    >
                      <span className="font-mono text-[10px] tracking-[0.2em] text-moss transition-colors duration-300 group-hover:text-ink/50">
                        {link.n}
                      </span>
                      <span className="font-display text-2xl leading-none transition-all duration-300 group-hover:italic md:text-4xl">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                className="flex flex-wrap items-end justify-between gap-4 pt-10 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50"
              >
                <span>{COMPANY}</span>
                <span>connect@trivenbiomedicals.com</span>
                <span>© 2026</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
