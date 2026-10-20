"use client";

import { useState } from "react";
import { FadeUp } from "./reveal";

export type FAQItem = {
  q: string;
  a: string;
  category?: string;
};

const DEFAULT_FAQS: FAQItem[] = [
  {
    category: "Distribution",
    q: "How does Triven Biomedicals partner with hospitals and institutional buyers?",
    a: "We operate as a licensed primary distribution partner holding wholesale Drug Licences (Forms 20B & 21B) and central food accreditation. We provide consolidated, scheduled repeat fulfillment for pharmaceuticals, surgical consumables, diagnostics, and patient care with full batch traceability and cold-chain compliance.",
  },
  {
    category: "Compliance",
    q: "What compliance and regulatory verifications are conducted before supply?",
    a: "Every manufacturer and product lot undergoes mandatory due diligence: active drug/FSSAI licences, certificate of analysis (COA) verification, packaging and labelling compliance, and GST audit before any purchase order or delivery is executed.",
  },
  {
    category: "Private Label & OEM",
    q: "How do contract manufacturing and private label engagements work?",
    a: "We connect brand owners and healthcare institutions with verified GMP-certified manufacturing plants. We handle supplier audit, sample validation, commercial price negotiation, packaging design compliance, and end-to-end batch production oversight.",
  },
  {
    category: "Exports & Trade",
    q: "Can international buyers procure Indian pharmaceuticals and FMCG through Triven?",
    a: "Yes. With active DGFT Import Export Code (IEC) accreditation and established overseas trade relationships, we manage export trading, manufacturer representation, customs documentation, and landed-cost logistics for authorized international partners.",
  },
  {
    category: "Commercials",
    q: "What commercial engagement models do you offer?",
    a: "We support flexible, transparent commercial models tailored to partner needs: direct wholesale product supply margins, transparent procurement fees, retainer-based market consulting, or milestone-based export facilitation.",
  },
];

export function FAQ({ items = DEFAULT_FAQS }: { items?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <FadeUp key={item.q} delay={i * 0.05}>
            <div className="transition-colors duration-200 hover:bg-ink/[0.02]">
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-6 py-7 text-left md:py-8"
              >
                <div className="flex items-start gap-4 md:gap-8">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-moss">
                    0{i + 1}
                  </span>
                  <div>
                    {item.category ? (
                      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
                        {item.category}
                      </span>
                    ) : null}
                    <h3 className="font-display text-xl leading-snug text-ink md:text-2xl">
                      {item.q}
                    </h3>
                  </div>
                </div>
                <span
                  className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/15 font-mono text-base transition-transform duration-300 md:h-10 md:w-10 ${
                    isOpen ? "rotate-45 bg-ink text-paper" : "bg-transparent text-ink"
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  isOpen
                    ? "grid-rows-[1fr] pb-8 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden pl-7 md:pl-16">
                  <p className="max-w-3xl text-sm leading-relaxed text-ink/70 md:text-base">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        );
      })}
    </div>
  );
}
