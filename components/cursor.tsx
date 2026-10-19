"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function Cursor() {
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 900, damping: 50, mass: 0.4 });
  const dotY = useSpring(y, { stiffness: 900, damping: 50, mass: 0.4 });
  const ringX = useSpring(x, { stiffness: 220, damping: 26, mass: 0.8 });
  const ringY = useSpring(y, { stiffness: 220, damping: 26, mass: 0.8 });

  useEffect(() => {
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const tagged = t?.closest("[data-cursor-label]");
      if (tagged) {
        setLabel(tagged.getAttribute("data-cursor-label"));
        setHover(true);
        return;
      }
      setLabel(null);
      setHover(
        Boolean(
          t?.closest("a, button, [data-cursor], input, select, textarea, label")
        )
      );
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  return (
    <div className="hidden [@media(pointer:fine)]:block">
      <AnimatePresence>
        {label ? (
          <motion.div
            key="cursor-label"
            aria-hidden
            className="pointer-events-none fixed left-0 top-0 z-[102]"
            style={{
              x: ringX,
              y: ringY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ scale: 0.35, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.35, opacity: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-ink/10 bg-acid text-center font-mono text-[9px] uppercase leading-tight tracking-[0.12em] text-ink">
              {label}
            </span>
          </motion.div>
        ) : (
          <>
            <motion.div
              aria-hidden
              className="pointer-events-none fixed left-0 top-0 z-[101] mix-blend-difference"
              style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
            >
              <motion.div
                className="rounded-full bg-paper"
                animate={{ width: hover ? 10 : 6, height: hover ? 10 : 6 }}
              />
            </motion.div>
            <motion.div
              aria-hidden
              className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
              style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
            >
              <motion.div
                className="rounded-full border border-paper/70"
                animate={{
                  width: hover ? 56 : 34,
                  height: hover ? 56 : 34,
                  opacity: hover ? 1 : 0.6,
                }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
