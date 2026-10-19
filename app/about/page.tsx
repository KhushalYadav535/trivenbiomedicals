import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHead, Button, Chip } from "@/components/ui";
import { FadeUp, ScrollFill } from "@/components/reveal";
import { NextPage } from "@/components/next-page";
import { COMPANY } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Triven Biomedicals is built on pharmaceutical distribution and long-standing commercial and supplier relationships.",
};

const INFO = [
  { label: "Company", value: COMPANY },
  { label: "Founded", value: "[Year — to be added]" },
  { label: "Founders", value: "[Founder names — to be added]" },
  { label: "Drug licence", value: "[Drug licence no. — to be added]" },
  { label: "GSTIN", value: "[GSTIN — to be added]" },
  { label: "Team", value: "[Team size — to be added]" },
];

export default function AboutPage() {
  return (
    <div className="bg-paper text-ink">
      <PageHeader
        index="02"
        label="About Us"
        title="Built on distribution. Powered by relationships."
        lede="Triven Biomedicals Private Limited is built on pharmaceutical distribution and long-standing commercial and supplier relationships. We combine product trading with fee-based services, so our partners get one reliable point of contact for supply, sourcing and market access."
      />

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-screen-xl">
          <SectionHead label="Our approach" />
          <div className="mt-14 grid gap-14 lg:grid-cols-2">
            <ScrollFill
              as="p"
              text="We grow through adjacent capabilities and validated demand. We focus on doing a connected set of activities well, rather than doing everything."
              className="font-display text-[clamp(1.8rem,3.6vw,3.2rem)] leading-[1.15]"
            />
            <FadeUp
              delay={0.2}
              className="flex flex-col justify-end gap-6 text-base leading-relaxed text-ink/70"
            >
              <p>
                That means we enter a line of work only when the demand is
                validated and the capability is adjacent to something we
                already do well. It keeps our promises realistic — and our
                execution accountable.
              </p>
              <div className="flex flex-wrap gap-2">
                <Chip className="border-ink/25 text-ink/60">Compliance-first</Chip>
                <Chip className="border-ink/25 text-ink/60">Verified suppliers</Chip>
                <Chip className="border-ink/25 text-ink/60">One point of contact</Chip>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-screen-xl">
          <SectionHead label="Company facts" note="Placeholders — fill from registry" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {INFO.map((row, i) => (
              <FadeUp key={row.label} delay={i * 0.06} className="h-full">
                <div className="h-full rounded-2xl border border-ink/10 bg-cream p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink/50">
                    {row.label}
                  </p>
                  <p
                    className={`mt-4 font-display text-2xl leading-tight ${
                      row.value.startsWith("[") ? "text-ink/35" : ""
                    }`}
                  >
                    {row.value}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="mt-14 flex justify-center">
            <Button href="/what-we-do" variant="dark">
              See what we do
            </Button>
          </FadeUp>
        </div>
      </section>

      <NextPage label="What we do." href="/what-we-do" note="Capabilities" />
    </div>
  );
}
