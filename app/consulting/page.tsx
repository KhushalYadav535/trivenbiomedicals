import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHead, Button, Chip } from "@/components/ui";
import { FadeUp, ScrollFill } from "@/components/reveal";
import { NextPage } from "@/components/next-page";
import { CONSULTING_SERVICES, CONSULTING_MODELS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Consulting & Market Access — Distribution Strategy India",
  description:
    "Commercial market-entry advisory, authorized distributor identification, margin structuring, and export-readiness support for healthcare and FMCG brands.",
};

export default function ConsultingPage() {
  return (
    <div className="bg-paper text-ink">
      <PageHeader
        index="08"
        label="Consulting & Market Access"
        title="Enter new markets with a clear plan."
        lede="Market-entry and channel strategy, distributor development and commercial support — delivered by operators, not decks."
      />

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-screen-xl">
          <SectionHead label="Services" note="Five engagements" />
          <div className="mt-12">
            {CONSULTING_SERVICES.map((s, i) => (
              <FadeUp key={s.n} delay={i * 0.05}>
                <div className="group grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-ink/10 py-7 transition-colors duration-300 last:border-b hover:bg-ink/[0.03] md:gap-10 md:px-4 md:py-9">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-ink/40">
                    {s.n}
                  </span>
                  <span className="font-display text-2xl leading-tight md:text-4xl">
                    {s.title}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-screen-xl">
          <SectionHead label="Engagement models" note="Pick what fits" />
          <div className="mt-14 grid gap-14 lg:grid-cols-2">
            <ScrollFill
              as="p"
              text="Project-based, retainer or a defined success fee — scoped upfront, with territory, pricing and deliverables in writing."
              className="font-display text-[clamp(1.8rem,3.6vw,3.2rem)] leading-[1.15]"
            />
            <FadeUp delay={0.2} className="flex flex-col justify-end gap-8">
              <div className="flex flex-wrap gap-3">
                {CONSULTING_MODELS.map((m) => (
                  <Chip key={m} className="border-transparent bg-acid px-5 py-2.5">
                    {m}
                  </Chip>
                ))}
              </div>
              <Button href="/contact?interest=Consulting%20%26%20Market%20Access" variant="dark">
                Book a market-entry consult
              </Button>
            </FadeUp>
          </div>
        </div>
      </section>

      <NextPage label="Private Label & Manufacturing." href="/private-label" note="Vertical 06" />
    </div>
  );
}
