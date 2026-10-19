"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ShaderCanvas from "./shader-canvas";
import { RevealChars, FadeUp } from "./reveal";
import { OrbitBadge } from "./badge";
import { Button } from "./ui";
import { ISTClock } from "./clock";
import { SUBLINE } from "@/lib/content";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);

  return (
    <section
      ref={ref}
      className="relative min-h-[640px] h-[100svh] md:min-h-[700px] overflow-hidden bg-paper text-ink"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.15 }}
      >
        <ShaderCanvas
          className="h-full w-full"
          palette={["#f2f0e6", "#a7c4ae", "#dff06a"]}
          speed={0.9}
          vignette={0.1}
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-paper/60 via-transparent to-paper/85" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex h-full flex-col justify-between px-6 pb-6 pt-24 sm:pt-28 md:px-10"
      >
        {/* Top meta row */}
        <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-ink/60">
          <p>
            ( Triven Biomedicals
            <br />
            Pvt. Ltd. )
          </p>
          <div className="hidden lg:flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/60">
            {[
              ["01", "Distribution", "/healthcare-distribution"],
              ["02", "Sourcing", "/sourcing"],
              ["03", "Exports", "/exports"],
            ].map(([n, label, href]) => (
              <a
                key={n}
                href={href}
                className="group flex items-center gap-2 transition-colors duration-300 hover:text-ink"
              >
                <span className="text-moss">({n})</span>
                <span className="draw">{label}</span>
              </a>
            ))}
          </div>
          <p className="text-right">
            ( Distribution · Sourcing · Trade
            <br />
            India )
          </p>
        </div>

        {/* Center Headline */}
        <div className="my-auto py-4">
          <h1 className="font-display text-[clamp(2.5rem,6.8vw,7.2rem)] leading-[0.98] tracking-[-0.02em]">
            <RevealChars
              text="Connecting Healthcare"
              waitEvent="tb:loaded"
              stagger={0.02}
              className="block"
            />
            <span className="block">
              <RevealChars
                text="and Trade,"
                waitEvent="tb:loaded"
                stagger={0.02}
                className="inline-block"
              />
              <span className="relative inline-block ml-3">
                <RevealChars
                  text="Reliably."
                  waitEvent="tb:loaded"
                  delay={0.14}
                  stagger={0.03}
                  className="inline-block italic text-moss"
                />
                <motion.svg
                  viewBox="0 0 200 12"
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-3 w-[104%]"
                  initial="hidden"
                  animate="show"
                >
                  <motion.path
                    d="M3 9 C 55 2.5, 120 11.5, 197 4.5"
                    fill="none"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="text-acid"
                    stroke="currentColor"
                    variants={{
                      hidden: { pathLength: 0, opacity: 0 },
                      show: { pathLength: 1, opacity: 1 },
                    }}
                    transition={{ duration: 0.9, delay: 1.4, ease: "easeOut" }}
                  />
                </motion.svg>
              </span>
            </span>
          </h1>
        </div>

        {/* Bottom CTA and Description */}
        <div>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end md:gap-10">
            <FadeUp
              waitEvent="tb:loaded"
              delay={0.45}
              className="max-w-lg text-sm leading-relaxed text-ink/75 md:text-base"
            >
              <p>{SUBLINE}</p>
            </FadeUp>
            <FadeUp
              waitEvent="tb:loaded"
              delay={0.6}
              className="flex flex-wrap items-center gap-3 shrink-0"
            >
              <Button href="/contact" variant="dark">
                Partner With Us
              </Button>
              <Button href="/what-we-do" variant="ghost">
                Explore Our Services
              </Button>
            </FadeUp>
          </div>

          {/* Bottom ticker bar */}
          <div className="mt-8 flex items-center justify-between border-t border-ink/15 pt-4 font-mono text-[9px] uppercase tracking-[0.26em] text-ink/60">
            <span className="flex items-center gap-3">
              ( Scroll )
              <span className="inline-block h-8 w-px animate-pulse bg-ink/40" />
            </span>
            <span className="hidden sm:block">( Pharma — FMCG — Exports )</span>
            <span suppressHydrationWarning>
              ( <ISTClock /> IST )
            </span>
          </div>
        </div>

        {/* OrbitBadge only in safe 2xl zone where there is ample open space */}
        <OrbitBadge
          text="Triven Biomedicals · Healthcare · Trade · Sourcing · "
          className="absolute top-28 right-12 hidden 2xl:flex pointer-events-none"
        />

        {/* Subtle decorative grid marks */}
        <span aria-hidden className="absolute left-6 top-24 hidden font-mono text-xs text-ink/25 md:block">
          +
        </span>
        <span aria-hidden className="absolute right-6 top-24 hidden font-mono text-xs text-ink/25 md:block">
          +
        </span>
        <span aria-hidden className="absolute bottom-6 left-6 hidden font-mono text-xs text-ink/25 md:block">
          +
        </span>
        <span aria-hidden className="absolute bottom-6 right-6 hidden font-mono text-xs text-ink/25 md:block">
          +
        </span>
      </motion.div>
    </section>
  );
}
