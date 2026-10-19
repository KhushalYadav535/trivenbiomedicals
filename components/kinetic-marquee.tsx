"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

function Row({
  items,
  base,
  className,
  wordClass = "font-display text-3xl md:text-5xl",
  starClass = "text-lg opacity-40 md:text-2xl",
}: {
  items: string[];
  base: number;
  className?: string;
  wordClass?: string;
  starClass?: string;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 220 });
  const factor = useTransform(smooth, [-1500, 0, 1500], [-3.2, 1, 3.2], {
    clamp: false,
  });
  const dir = useRef(base >= 0 ? 1 : -1);
  const display = useTransform(x, (v) => `${wrap(-50, -25, v)}%`);

  useAnimationFrame((_t, delta) => {
    if (reduce) return;
    const move = dir.current * base * (delta / 1000);
    if (move !== 0) {
      const f = factor.get();
      if (Math.abs(f) > 1.1 && Math.sign(f) !== dir.current) {
        dir.current *= -1;
      }
      x.set(x.get() + move * Math.abs(f));
    }
  });

  return (
    <motion.div style={{ x: display }} className={`flex w-max ${className ?? ""}`}>
      {[0, 1, 2, 3].map((k) => (
        <div
          key={k}
          aria-hidden={k > 0}
          className="flex shrink-0 items-center py-4 md:py-6"
        >
          {items.map((item, i) => (
            <span key={i} className="flex items-center leading-none">
              <span className={`px-6 md:px-9 ${wordClass}`}>{item}</span>
              <span className={starClass}>✦</span>
            </span>
          ))}
        </div>
      ))}
    </motion.div>
  );
}

export default function KineticMarquee({
  items,
  alt = ["Healthcare", "FMCG", "Exports", "Market Access"],
  className = "",
}: {
  items: string[];
  alt?: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <Row
        items={items}
        base={5.5}
        className="bg-acid text-ink"
        wordClass="shimmer font-display text-3xl md:text-5xl"
      />
      <Row
        items={alt}
        base={-4.5}
        className="border-t border-ink/10 bg-cream text-ink"
        wordClass="stroke font-display text-3xl md:text-5xl"
        starClass="text-lg text-moss/50 md:text-2xl"
      />
    </div>
  );
}
