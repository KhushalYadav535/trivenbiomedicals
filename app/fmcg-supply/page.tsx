import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHead, Button } from "@/components/ui";
import { FadeUp, ScrollFill } from "@/components/reveal";
import { NextPage } from "@/components/next-page";
import { FMCG_CATEGORIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Food, FMCG & Institutional Supply — Triven Biomedicals",
  description:
    "Consistent multi-category supply of packaged foods, ingredients, personal care, and institutional catering products for hospitals and corporate enterprises.",
};

export default function FmcgPage() {
  return (
    <div className="bg-paper text-ink">
      <PageHeader
        index="05"
        label="Food, FMCG & Institutional Supply"
        title="Consistent supply, at scale."
        lede="For hospitality, catering and corporate buyers — selected brands, dependable replenishment and multi-category institutional supply."
      />

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-screen-xl">
          <SectionHead label="Categories" note="Five lines" />
          <div className="mt-12">
            {FMCG_CATEGORIES.map((c, i) => (
              <FadeUp key={c} delay={i * 0.05}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-ink/10 py-7 transition-colors duration-300 last:border-b hover:bg-ink/[0.03] md:gap-10 md:px-4 md:py-9">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-ink/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl leading-tight md:text-4xl">
                    {c}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-screen-xl">
          <SectionHead label="For institutions" />
          <div className="mt-14 grid gap-14 lg:grid-cols-2">
            <ScrollFill
              as="p"
              text="Multi-category supply, recurring contracts, replenishment support and vendor consolidation — from one accountable partner."
              className="font-display text-[clamp(1.8rem,3.6vw,3.2rem)] leading-[1.15]"
            />
            <FadeUp
              delay={0.2}
              className="flex flex-col items-start justify-end gap-8 text-base leading-relaxed text-ink/70"
            >
              <p>
                Institutions run on predictability. We consolidate categories
                under one contract, one point of contact and one measurable
                process — so procurement teams stop chasing five vendors.
              </p>
              <Button href="/contact?interest=Food%2C%20FMCG%20%26%20Institutional%20Supply" variant="dark">
                Discuss an institutional contract
              </Button>
            </FadeUp>
          </div>
        </div>
      </section>

      <NextPage label="Exports & International Trade." href="/exports" note="Vertical 03" />
    </div>
  );
}
