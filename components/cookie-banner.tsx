"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("tb_cookie_consent");
    if (!stored) {
      // Delay showing so it doesn't collide with preloader
      const t = setTimeout(() => setDismissed(false), 2400);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = (type: "all" | "necessary") => {
    localStorage.setItem("tb_cookie_consent", type);
    setDismissed(true);
  };

  if (!mounted || dismissed) return null;

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-6 right-6 z-[85] max-w-lg md:left-auto md:right-8"
        >
          <div className="rounded-2xl border border-ink/15 bg-paper/95 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md text-ink">
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-ink/50">
                ( Cookie & Data Notice )
              </span>
              <button
                onClick={() => accept("necessary")}
                aria-label="Close notice"
                className="text-ink/40 hover:text-ink transition-colors font-mono text-xs"
              >
                ✕
              </button>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-ink/80">
              We use functional cookies to ensure platform reliability and anonymous telemetry to optimize our international trade corridors. Review our{" "}
              <Link href="/privacy-policy" className="underline font-medium hover:text-moss">
                Privacy Policy
              </Link>{" "}
              for complete details.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => accept("all")}
                className="rounded-full bg-ink px-5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-paper transition-colors duration-200 hover:bg-moss"
              >
                Accept All
              </button>
              <button
                onClick={() => accept("necessary")}
                className="rounded-full border border-ink/20 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors duration-200 hover:bg-ink/5"
              >
                Necessary Only
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
