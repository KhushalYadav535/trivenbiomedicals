"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { EASE, EASE_EXPO } from "@/lib/motion";
import { NAV_LINKS, COMPANY } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-300 ${
          scrolled
            ? "border-b border-ink/10 bg-paper/90 py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] backdrop-blur-md"
            : "py-5"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            className="group flex items-center gap-3 text-ink transition-opacity hover:opacity-90"
            aria-label="Triven Biomedicals — Home"
          >
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/emblem-transparent.png"
                alt="Triven Biomedicals Emblem"
                width={40}
                height={40}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="relative flex h-5 items-center md:h-6">
                <Image
                  src="/triven-wordmark.png"
                  alt="TRIVEN"
                  width={150}
                  height={22}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
              <span className="hidden font-mono text-[8.5px] uppercase tracking-[0.28em] text-ink/70 sm:block mt-1">
                Biomedicals Pvt. Ltd.
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-6 md:gap-10">
            <Link
              href="/contact"
              className="hidden font-mono text-[10px] uppercase tracking-[0.24em] text-ink/75 transition-colors hover:text-moss md:block"
            >
              Partner With Us
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.26em] text-ink transition-colors hover:text-moss"
              aria-expanded={open}
            >
              {open ? "Close" : "Menu"}
              <span className="relative block h-3 w-6">
                <span
                  className={`absolute left-0 top-0 h-px w-full bg-ink transition-transform duration-300 ${
                    open ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0.5 left-0 h-px w-full bg-ink transition-transform duration-300 ${
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
                className="flex flex-wrap items-center justify-between gap-6 border-t border-ink/10 pt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/60"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="/emblem-transparent.png"
                    alt="Triven Biomedicals Emblem"
                    width={28}
                    height={28}
                    className="h-7 w-auto object-contain"
                  />
                  <span>{COMPANY}</span>
                </div>
                <span>connect@trivenbio.com</span>
                <span>© 2026</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
