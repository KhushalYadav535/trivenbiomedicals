import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHead, Button } from "@/components/ui";
import { FadeUp } from "@/components/reveal";
import { NextPage } from "@/components/next-page";
import { HEALTHCARE_CATEGORIES, HEALTHCARE_WHY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Healthcare Distribution",
  description:
    "Dependable healthcare supply for hospitals, pharmacies and institutions — compliance-first sourcing and repeat-order supply.",
};

export default function HealthcarePage() {
  return (
    <div className="bg-paper text-ink">
      <PageHeader
        index="04"
        label="Healthcare Distribution"
        title="Dependable healthcare supply."
        lede="For hospitals, pharmacies and institutions — built on existing supplier relationships, compliance-first sourcing and repeat-order supply."
      />

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-screen-xl">
          <SectionHead label="Product categories" note="Five lines" />
          <div className="mt-12">
            {HEALTHCARE_CATEGORIES.map((c, i) => (
              <FadeUp key={c} delay={i * 0.05}>
                <div className="group grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-ink/10 py-7 transition-colors duration-300 last:border-b hover:bg-ink/[0.03] md:gap-10 md:px-4 md:py-9">
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
          <SectionHead label="Why us" />
          <div className="grid gap-4 md:grid-cols-3">
            {HEALTHCARE_WHY.map((w, i) => (
              <FadeUp key={w.n} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-3xl bg-acid p-8 text-ink md:p-10">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-ink/60">
                    ( {w.n} )
                  </span>
                  <h3 className="mt-10 font-display text-3xl leading-none md:text-4xl">
                    {w.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink/75 md:text-base">
                    {w.line}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.2} className="mt-14">
            <Button href="/contact?interest=Healthcare%20Distribution" variant="dark">
              Enquire about healthcare supply
            </Button>
          </FadeUp>
        </div>
      </section>

      <NextPage label="Food, FMCG & Institutional." href="/fmcg-supply" note="Vertical 02" />
    </div>
  );
}
