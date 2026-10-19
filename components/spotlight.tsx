"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";

export function SpotlightCard({
  children,
  className = "",
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={`spotlight ticks rounded-2xl ${className}`}
      style={
        {
          "--spot-color": dark
            ? "rgba(199, 242, 78, 0.12)"
            : "rgba(11, 12, 10, 0.09)",
        } as CSSProperties
      }
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--x", `${e.clientX - r.left}px`);
        el.style.setProperty("--y", `${e.clientY - r.top}px`);
      }}
    >
      {children}
    </div>
  );
}
