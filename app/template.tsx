"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { EASE, EASE_EXPO } from "@/lib/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.__lenis?.scrollTo(0, { immediate: true, force: true });
  }, []);
  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[95] origin-bottom bg-acid"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.75, delay: 0.05, ease: EASE_EXPO }}
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {children}
      </motion.div>
    </>
  );
}
