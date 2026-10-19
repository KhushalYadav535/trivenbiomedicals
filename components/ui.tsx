import { Magnetic } from "./magnetic";
import type { ReactNode } from "react";

export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path d="M3 13 13 3M5.5 3H13v7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const VARIANTS = {
  acid: "bg-acid text-ink hover:bg-ink hover:text-paper",
  light: "bg-paper text-ink hover:bg-ink hover:text-paper",
  dark: "bg-ink text-paper hover:bg-acid hover:text-ink",
  ghost: "border border-current text-inherit hover:bg-acid hover:text-ink hover:border-acid",
} as const;

export function Button({
  href,
  children,
  variant = "light",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  className?: string;
}) {
  return (
    <Magnetic strength={0.25}>
      <a
        href={href}
        className={`sheen group inline-flex items-center gap-3 rounded-full px-7 py-4 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${VARIANTS[variant]} ${className}`}
      >
        {children}
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </Magnetic>
  );
}

export function SectionHead({
  label,
  note,
  className = "",
}: {
  label: string;
  note?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <span className="font-mono text-[10px] uppercase tracking-[0.24em] opacity-70">
        ( {label} )
      </span>
      <span className="h-px flex-1 bg-current opacity-20" />
      {note ? (
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.24em] opacity-40 md:block">
          {note}
        </span>
      ) : null}
    </div>
  );
}

export function Chip({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] ${className}`}
    >
      {children}
    </span>
  );
}

export function MagneticCTA({
  children,
  href,
  className = "",
}: {
  children: string;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group block border-t border-current py-10 md:py-14 ${className}`}
    >
      <Magnetic strength={0.12}>
        <div className="flex items-center justify-between gap-6">
          <span className="font-display text-[clamp(2.4rem,7vw,6.5rem)] leading-none transition-all duration-500 group-hover:italic group-hover:text-acid">
            {children}
          </span>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-current transition-colors duration-500 group-hover:border-acid group-hover:bg-acid group-hover:text-ink md:h-16 md:w-16">
            <ArrowUpRight className="h-5 w-5 md:h-7 md:w-7" />
          </span>
        </div>
      </Magnetic>
    </a>
  );
}
