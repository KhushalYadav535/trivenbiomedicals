import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHead, Button, Chip } from "@/components/ui";
import { FadeUp } from "@/components/reveal";
import { NextPage } from "@/components/next-page";

export const metadata: Metadata = {
  title: "Private Label & Contract Manufacturing",
  description:
    "Build your brand with the right manufacturing partner — own-brand, client brands and OEM sourcing. Programme in rollout.",
};

const OFFERS = [
  {
    n: "01",
    title: "Own-brand products",
    line: "Develop and launch Triven-branded lines in selected categories.",
  },
  {
    n: "02",
    title: "Support for client brands",
    line: "Take your brand from specification to shelf with the right partners.",
  },
  {
    n: "03",
    title: "OEM / contract manufacturing sourcing",
    line: "Verified factories, clear contracts, coordinated fulfilment.",
  },
];

export default function PrivateLabelPage() {
  return (
    <div className="bg-paper text-ink">
      <PageHeader
        index="09"
        label="Private Label & Contract Manufacturing"
        title="Build your brand with the right manufacturing partner."
        lede="This programme is in rollout. Early enquiries are open — we recommend founding partners a front seat in category selection."
      />

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-screen-xl items-center gap-6">
          <Chip className="border-transparent bg-acid px-5 py-2.5">
            ( Status — coming soon )
          </Chip>
          <span className="h-px flex-1 bg-ink/10" />
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-screen-xl">
          <SectionHead label="What this will cover" note="Three offers" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-3">
            {OFFERS.map((o, i) => (
              <FadeUp key={o.n} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-2xl border border-ink/10 bg-cream p-10">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-ink/40">
                    ( {o.n} )
                  </span>
                  <h3 className="mt-12 font-display text-3xl leading-tight md:text-4xl">
                    {o.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink/60 md:text-base">
                    {o.line}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.2} className="mt-16 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <p className="max-w-md text-base leading-relaxed text-ink/70">
              Categories, MOQs and partner factories are being finalised.
              Raise your hand now and we will shape the programme around
              validated demand.
            </p>
            <Button href="/contact?interest=Private%20Label%20%26%20Contract%20Manufacturing" variant="dark">
              Enquire about private label
            </Button>
          </FadeUp>
        </div>
      </section>

      <NextPage label="Why Triven." href="/why-triven" note="Operating principles" />
    </div>
  );
}
