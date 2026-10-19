import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@/components/ui";
import { OFFICE_ADDRESS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Thank You — Enquiry Received",
  description: "Thank you for reaching out to Triven Biomedicals. Our commercial & distribution team will contact you shortly.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return (
    <div className="bg-paper text-ink min-h-[85vh] pt-32 pb-24 px-6 md:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl border border-ink/10 bg-cream p-8 md:p-14 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
              <Image
                src="/emblem-transparent.png"
                alt="Triven Biomedicals Emblem"
                width={40}
                height={40}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-moss font-semibold">
              ( Enquiry Transmitted Successfully )
            </p>
          </div>

          <h1 className="mt-6 font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.05] tracking-tight">
            Thank you for reaching out.
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-ink/75">
            Your enquiry has been assigned to our commercial and supply chain team. A dedicated category specialist will review your specifications and contact you within 24 to 48 business hours.
          </p>

          <div className="mt-10 border-t border-ink/10 pt-8">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink/50">
              What Happens Next
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-ink/10 bg-paper p-5">
                <span className="font-mono text-[11px] font-semibold text-moss">01</span>
                <h3 className="mt-2 font-display text-lg">Initial Screening</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink/65">
                  Verification of regulatory compliance, licences, and supply parameters.
                </p>
              </div>
              <div className="rounded-2xl border border-ink/10 bg-paper p-5">
                <span className="font-mono text-[11px] font-semibold text-moss">02</span>
                <h3 className="mt-2 font-display text-lg">Direct Consultation</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink/65">
                  A representative reaches out with pricing matrices, availability, and lead times.
                </p>
              </div>
              <div className="rounded-2xl border border-ink/10 bg-paper p-5">
                <span className="font-mono text-[11px] font-semibold text-moss">03</span>
                <h3 className="mt-2 font-display text-lg">Commercial Agreement</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink/65">
                  Clear terms, payment security, and scheduled dispatch coordination.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-ink/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                Need Immediate Assistance?
              </p>
              <p className="mt-1 font-mono text-sm font-medium text-ink">
                Email{" "}
                <a
                  href={`mailto:${OFFICE_ADDRESS.email}`}
                  className="underline text-moss hover:text-ink font-semibold"
                >
                  {OFFICE_ADDRESS.email}
                </a>{" "}
                for priority response.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:bg-acid hover:text-ink"
              >
                Return to Home
                <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink/5"
              >
                Explore Capabilities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
