import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHead, Button } from "@/components/ui";
import { FadeUp } from "@/components/reveal";
import { NextPage } from "@/components/next-page";
import { EXPORT_HOW, EXPORT_AREAS, EXPORT_CHECKS } from "@/lib/content";
import { SpotlightCard } from "@/components/spotlight";

export const metadata: Metadata = {
  title: "Exports & International Trade — Indian Healthcare & FMCG",
  description:
    "Global export trading, overseas distributor representation, and compliant international supply facilitation for Indian pharmaceutical and commercial products.",
};

export default function ExportsPage() {
  return (
    <div className="bg-paper text-ink">
      <PageHeader
        index="06"
        label="Exports & International Trade"
        title="Taking Indian products to qualified international buyers."
        lede="Export trading, commission-based facilitation and manufacturer representation — with market access and payment security designed into every deal."
      />

      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-screen-xl">
          <SectionHead label="How we work" note="Four models" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {EXPORT_HOW.map((m, i) => (
              <FadeUp key={m.n} delay={i * 0.07} className="h-full">
                <SpotlightCard className="h-full border border-ink/10 bg-cream p-10">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-ink/45">
                    ( {m.n} )
                  </span>
                  <h3 className="mt-12 font-display text-3xl leading-tight md:text-4xl">
                    {m.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink/60">
                    {m.line}
                  </p>
                </SpotlightCard>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-screen-xl gap-20 lg:grid-cols-2">
          <div>
            <SectionHead label="Product areas" />
            <div className="mt-10">
              {EXPORT_AREAS.map((a, i) => (
                <FadeUp key={a} delay={i * 0.05}>
                  <div className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-ink/10 py-6 last:border-b md:px-2">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-ink/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl leading-snug md:text-2xl">
                      {a}
                    </span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
          <div>
            <SectionHead label="Our checks" note="Before every deal" />
            <div className="mt-10">
              {EXPORT_CHECKS.map((c, i) => (
                <FadeUp key={c} delay={i * 0.05}>
                  <div className="flex items-baseline gap-4 border-t border-ink/10 py-6 last:border-b md:px-2">
                    <span className="font-mono text-sm text-ink">+</span>
                    <span className="text-base leading-relaxed text-ink/80 md:text-lg">
                      {c}
                    </span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-screen-xl rounded-3xl bg-acid p-10 text-ink md:p-16">
          <FadeUp className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <h2 className="max-w-2xl font-display text-[clamp(1.8rem,3.6vw,3.2rem)] leading-[1.08]">
              Exporting something specific?{" "}
              <span className="italic text-moss">Let&apos;s check the route.</span>
            </h2>
            <Button href="/contact?interest=Exports%20%26%20International%20Trade" variant="dark">
              Enquire about exports
            </Button>
          </FadeUp>
        </div>
      </section>

      <NextPage label="Sourcing & Procurement." href="/sourcing" note="Vertical 04" />
    </div>
  );
}
