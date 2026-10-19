import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@/components/ui";
import { VERTICALS } from "@/lib/content";

export default function NotFound() {
  return (
    <div className="bg-paper text-ink min-h-[90vh] flex flex-col justify-center px-6 py-32 md:px-10">
      <div className="mx-auto max-w-4xl w-full">
        <div className="rounded-3xl border border-ink/10 bg-cream p-8 md:p-14 text-center">
          <div className="inline-flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center shrink-0">
              <Image
                src="/emblem-transparent.png"
                alt="Triven Biomedicals Emblem"
                width={44}
                height={44}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/50">
              ( 404 — Resource Not Found )
            </span>
          </div>

          <h1 className="mt-8 font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.95] tracking-tight">
            Lost in <span className="italic text-moss">transit.</span>
          </h1>
          <p className="mt-5 mx-auto max-w-lg text-base md:text-lg leading-relaxed text-ink/70">
            The page or document you requested does not exist or has been relocated to another corridor in our network.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:bg-acid hover:text-ink"
            >
              Return Home
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink/5"
            >
              Partner With Us
            </Link>
          </div>

          <div className="mt-14 border-t border-ink/10 pt-10 text-left">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink/40 text-center mb-6">
              Navigate Direct to Key Verticals
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {VERTICALS.map((v) => (
                <Link
                  key={v.href}
                  href={v.href}
                  className="group flex flex-col justify-between rounded-xl border border-ink/10 bg-paper p-4 transition-all duration-300 hover:border-moss/40 hover:bg-white"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-moss font-semibold">({v.n})</span>
                    <ArrowUpRight className="h-3 w-3 text-ink/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-moss" />
                  </div>
                  <span className="mt-2 font-display text-sm leading-snug group-hover:text-moss transition-colors">
                    {v.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
