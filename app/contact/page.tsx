import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/page-header";
import { SectionHead } from "@/components/ui";
import { FadeUp } from "@/components/reveal";
import { CONTACT_DETAILS, INTERESTS } from "@/lib/content";
import { ContactForm } from "@/components/contact-form";
import Plexus from "@/components/plexus";

export const metadata: Metadata = {
  title: "Contact — Partner With Us",
  description:
    "Let's work together. Tell us what you need to move, source or build.",
};

export default function ContactPage() {
  return (
    <div className="bg-paper text-ink">
      <PageHeader
        index="11"
        label="Contact / Partner With Us"
        title="Let's work together."
        lede="Buyers, suppliers, distributors and exporters — tell us what you need and we will map the shortest reliable path to it."
      />

      <section className="px-6 pb-28 md:px-10 md:pb-40">
        <div className="mx-auto grid max-w-screen-xl gap-16 lg:grid-cols-[1.25fr_0.75fr]">
          <FadeUp>
            <div className="rounded-3xl border border-ink/10 bg-cream p-8 md:p-12">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink/50">
                ( Enquiry form )
              </p>
              <div className="mt-8 border-t border-ink/5 pt-10">
                <Suspense fallback={null}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="sticky top-28 space-y-10">
              <div className="relative h-44 overflow-hidden rounded-3xl border border-ink/10 bg-cream">
                <Plexus className="absolute inset-0 h-full w-full" />
                <span className="absolute left-5 top-5 font-mono text-[9px] uppercase tracking-[0.24em] text-ink/50">
                  ( Network — live )
                </span>
                <span className="absolute bottom-5 left-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.24em] text-moss">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-moss" />
                  Suppliers across India
                </span>
              </div>
              <div>
                <SectionHead label="Company details" />
                <div className="mt-8">
                  {CONTACT_DETAILS.map((d) => (
                    <div
                      key={d.label}
                      className="grid gap-1 border-t border-ink/10 py-4 last:border-b sm:grid-cols-[140px_1fr] sm:gap-6"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
                        {d.label}
                      </span>
                      <span
                        className={`text-sm leading-relaxed ${
                          d.value.startsWith("[") ? "text-ink/35 italic" : "text-ink/85"
                        }`}
                      >
                        {d.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <SectionHead label="A quick note" />
                <p className="mt-6 text-sm leading-relaxed text-ink/60">
                  For pharmaceutical enquiries, availability depends on
                  licences and destination-market rules. We respond to every
                  serious enquiry with what is — and isn&apos;t — possible
                  upfront.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {INTERESTS.slice(0, 3).map((i) => (
                    <span
                      key={i}
                      className="rounded-full bg-ink/5 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/50"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
