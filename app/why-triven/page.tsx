import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHead, Button } from "@/components/ui";
import { FadeUp } from "@/components/reveal";
import { NextPage } from "@/components/next-page";
import Orb from "@/components/orb";
import { WHY_POINTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Why Triven",
  description:
    "Compliance-first, verified suppliers, clear contracts, one connected partner and accountable execution.",
};

export default function WhyTrivenPage() {
  return (
    <div className="bg-paper text-ink">
      <PageHeader
        index="10"
        label="Why Triven"
        title="Five principles. Every engagement."
        lede="These are not taglines — they are operating rules that decide which deals we take and how we run them."
      />

      <section className="bg-paper px-6 py-24 text-ink md:px-10 md:py-32">
        <div className="mx-auto grid max-w-screen-xl gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHead label="Operating principles" note="Checked, not assumed" />
            <div className="mt-12">
              {WHY_POINTS.map((p, i) => (
                <FadeUp key={p.n} delay={i * 0.06}>
                  <div className="group grid grid-cols-[auto_1fr] gap-6 border-t border-ink/10 py-8 transition-colors duration-300 last:border-b md:gap-10 md:px-4 md:py-10">
                    <span className="font-mono text-[11px] tracking-[0.22em] text-moss">
                      {p.n}
                    </span>
                    <div>
                      <h3 className="font-display text-3xl leading-tight transition-all duration-300 group-hover:italic md:text-5xl">
                        {p.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/60 md:text-base">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
            <FadeUp delay={0.2} className="mt-14">
              <Button href="/contact" variant="dark">
                Partner with us
              </Button>
            </FadeUp>
          </div>

          <div className="relative">
            <div className="lg:sticky lg:top-28">
              <Orb className="aspect-square w-full max-w-full" />
              <p className="pr-4 text-center font-mono text-[10px] uppercase tracking-[0.26em] text-ink/40">
                ( Connected by design )
              </p>
            </div>
          </div>
        </div>
      </section>

      <NextPage label="Contact." href="/contact" note="Partner with us" />
    </div>
  );
}
