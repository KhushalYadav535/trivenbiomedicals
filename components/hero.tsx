"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ShaderCanvas from "./shader-canvas";
import { RevealChars, FadeUp } from "./reveal";
import { OrbitBadge } from "./badge";
import { Button } from "./ui";
import { SUBLINE } from "@/lib/content";

function ISTClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Asia/Kolkata",
          hour12: false,
        })
      );
    format();
    const id = setInterval(format, 1000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{time}</span>;
}

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
      className="relative h-[100svh] min-h-[680px] overflow-hidden bg-paper text-ink"
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
        className="absolute inset-0 flex flex-col px-6 pb-8 pt-28 md:px-10"
      >
        <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-ink/60">
          <p>
            ( Triven Biomedicals
            <br />
            Pvt. Ltd. )
          </p>
          <p className="text-right">
            ( Distribution · Sourcing · Trade
            <br />
            India )
          </p>
        </div>

        <div className="flex-1" />

        <h1 className="font-display text-[clamp(3rem,8.4vw,9rem)] leading-[0.92] tracking-[-0.02em]">
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
            <RevealChars
              text="Reliably."
              waitEvent="tb:loaded"
              delay={0.14}
              stagger={0.03}
              className="inline-block italic text-moss"
            />
          </span>
        </h1>

        <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <FadeUp
            waitEvent="tb:loaded"
            delay={0.45}
            className="max-w-md text-sm leading-relaxed text-ink/70 md:text-base"
          >
            <p>{SUBLINE}</p>
          </FadeUp>
          <FadeUp
            waitEvent="tb:loaded"
            delay={0.6}
            className="flex flex-wrap items-center gap-3"
          >
            <Button href="/contact" variant="dark">
              Partner With Us
            </Button>
            <Button href="/what-we-do" variant="ghost">
              Explore Our Services
            </Button>
          </FadeUp>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-ink/15 pt-5 font-mono text-[9px] uppercase tracking-[0.26em] text-ink/60">
          <span className="flex items-center gap-3">
            ( Scroll )
            <span className="inline-block h-8 w-px animate-pulse bg-ink/40" />
          </span>
          <span className="hidden sm:block">( Pharma — FMCG — Exports )</span>
          <span suppressHydrationWarning>
            ( <ISTClock /> IST )
          </span>
        </div>

        <OrbitBadge
          text="Triven Biomedicals · Healthcare · Trade · Sourcing · "
          className="absolute bottom-36 right-8 hidden xl:flex"
        />

        <span aria-hidden className="absolute left-6 top-24 hidden font-mono text-xs text-ink/30 md:block">
          +
        </span>
        <span aria-hidden className="absolute right-6 top-24 hidden font-mono text-xs text-ink/30 md:block">
          +
        </span>
        <span aria-hidden className="absolute bottom-6 left-6 hidden font-mono text-xs text-ink/30 md:block">
          +
        </span>
        <span aria-hidden className="absolute bottom-6 right-6 hidden font-mono text-xs text-ink/30 md:block">
          +
        </span>

        <div className="absolute left-10 top-1/2 hidden -translate-y-1/2 flex-col gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50 lg:flex">
          {[
            ["01", "Distribution", "/healthcare-distribution"],
            ["02", "Sourcing", "/sourcing"],
            ["03", "Exports", "/exports"],
          ].map(([n, label, href]) => (
            <a
              key={n}
              href={href}
              className="group flex items-center gap-3 transition-colors duration-300 hover:text-ink"
            >
              <span className="text-moss">({n})</span>
              <span className="draw">{label}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
