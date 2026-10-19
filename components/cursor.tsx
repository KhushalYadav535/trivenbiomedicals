"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [hover, setHover] = useState(false);
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
      setHover(Boolean(t?.closest("a, button, [data-cursor], input, select, textarea, label")));
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
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[101] mix-blend-difference"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-paper" />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          className="rounded-full border border-paper/70"
          animate={{ width: hover ? 56 : 34, height: hover ? 56 : 34, opacity: hover ? 1 : 0.6 }}
          transition={{ type: "spring", stiffness: 320, damping: 26 }}
        />
      </motion.div>
    </div>
  );
}
