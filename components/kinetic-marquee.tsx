"use client";

import { useState } from "react";
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
  base = 1.0,
  className,
  wordClass = "font-display text-3xl md:text-5xl",
  starClass = "text-lg opacity-40 md:text-2xl",
}: {
  items: string[];
  base?: number;
  className?: string;
  wordClass?: string;
  starClass?: string;
}) {
  const reduce = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 220 });
  const factor = useTransform(smooth, [-1000, 0, 1000], [1.6, 1, 1.6], {
    clamp: true,
  });
  const display = useTransform(x, (v) => `${wrap(-50, -25, v)}%`);

  useAnimationFrame((_t, delta) => {
    if (reduce) return;
    const dt = Math.min(delta / 1000, 0.05);
    const scrollMultiplier = factor.get();
    const hoverMultiplier = isHovered ? 0.25 : 1;
    const move = base * dt * scrollMultiplier * hoverMultiplier;
    x.set(x.get() + move);
  });

  return (
    <motion.div
      style={{ x: display }}
      className={`flex w-max cursor-default select-none ${className ?? ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
  speed = 1.0,
}: {
  items: string[];
  alt?: string[];
  className?: string;
  speed?: number;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <Row
        items={items}
        base={-speed}
        className="bg-acid text-ink"
        wordClass="shimmer font-display text-3xl md:text-5xl"
      />
      <Row
        items={alt}
        base={speed * 0.85}
        className="border-t border-ink/10 bg-cream text-ink"
        wordClass="stroke font-display text-3xl md:text-5xl"
        starClass="text-lg text-moss/50 md:text-2xl"
      />
    </div>
  );
}
