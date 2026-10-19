"use client";

import Plexus from "./plexus";
import { RevealChars, FadeUp } from "./reveal";
import { Button } from "./ui";

export default function ClosingCTA() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-paper text-ink">
      <Plexus className="absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-paper/40 via-transparent to-paper/50" />
      <div className="relative flex w-full flex-col items-center px-6 py-28 text-center md:px-10">
        <RevealChars
          as="p"
          text="( Ready when you are )"
          className="font-mono text-[10px] uppercase tracking-[0.26em] text-ink/60"
        />
        <h2 className="mt-8 font-display text-[clamp(3rem,8vw,8.5rem)] leading-[0.95]">
          <RevealChars text="Let's work" stagger={0.025} className="block" />
          <RevealChars
            text="together."
            stagger={0.025}
            delay={0.1}
            className="block italic text-moss"
          />
        </h2>
        <FadeUp
          delay={0.35}
          className="mt-12 max-w-md text-sm leading-relaxed text-ink/70 md:text-base"
        >
          <p>
            Tell us what you need to move, source or build — we will map the
            shortest reliable path.
          </p>
        </FadeUp>
        <FadeUp delay={0.5} className="mt-10">
          <Button href="/contact" variant="dark" className="px-10 py-5">
            Partner With Us
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}
