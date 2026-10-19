import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHead, Chip } from "@/components/ui";
import { StickyStack } from "@/components/sticky-stack";
import { NextPage } from "@/components/next-page";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Distribution, exports, sourcing, consulting, private label and institutional B2B solutions — six verticals, one connected company.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHeader
        index="03"
        label="What We Do"
        title="Six verticals. One company."
        lede="From dependable healthcare supply to international trade and market-entry consulting — every vertical shares one standard: compliance first, verified partners, clear contracts."
      />

      <StickyStack />

      <div className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center gap-4">
          <SectionHead label="Note" />
          <Chip className="border-ink/25 text-ink/60">
            ( Private label is in rollout — enquire for early access )
          </Chip>
        </div>
      </div>

      <NextPage label="Healthcare Distribution." href="/healthcare-distribution" note="Vertical 01" />
    </>
  );
}
