"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_EXPO } from "@/lib/motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const skip =
      document.documentElement.getAttribute("data-preloaded") === "1";

    window.__lenis?.stop();
    document.body.style.overflow = "hidden";

    if (skip) {
      requestAnimationFrame(() => {
        setDone(true);
        setCount(100);
        document.body.style.overflow = "";
        window.__lenis?.start();
        window.dispatchEvent(new Event("tb:loaded"));
      });
      return;
    }

    const duration = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        try {
          sessionStorage.setItem("tb-seen", "1");
        } catch {}
        setDone(true);
        document.body.style.overflow = "";
        window.__lenis?.start();
        window.dispatchEvent(new Event("tb:loaded"));
        ScrollTrigger.refresh();
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => window.__lenis?.start(), 100);
    return () => clearTimeout(t);
  }, [done]);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          data-preloader
          className="fixed inset-0 z-[110] flex flex-col items-center justify-center bg-paper text-ink"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: EASE_EXPO }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/60">
            Triven Biomedicals Pvt. Ltd.
          </p>
          <p className="mt-4 font-display text-[clamp(5rem,18vw,13rem)] leading-none tabular-nums">
            {count}
          </p>
          <div className="mt-6 h-px w-48 overflow-hidden bg-ink/15">
            <motion.div
              className="h-full bg-moss"
              style={{ width: `${count}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
