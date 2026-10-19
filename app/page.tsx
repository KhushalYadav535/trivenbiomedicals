import Hero from "@/components/hero";
import { SectionHead, Button } from "@/components/ui";
import { ScrollFill, FadeUp } from "@/components/reveal";
import { ListRows } from "@/components/list-rows";
import { SpotlightCard } from "@/components/spotlight";
import ClosingCTA from "@/components/closing-cta";
import KineticMarquee from "@/components/kinetic-marquee";
import { PILLARS, VERTICALS } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-paper px-6 py-24 text-ink md:px-10 md:py-36">
        <div className="mx-auto max-w-screen-xl">
          <SectionHead label="01 — Capabilities" note="Four pillars" />
          <FadeUp className="mt-12 max-w-3xl">
            <h2 className="font-display text-[clamp(2.2rem,4.6vw,4.5rem)] leading-[1.02]">
              One partner across the supply chain.
            </h2>
          </FadeUp>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <FadeUp key={p.n} delay={i * 0.08} className="h-full">
                <SpotlightCard className="group flex h-full min-h-[300px] flex-col justify-between border border-ink/10 bg-cream p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-[0.22em] text-ink/50">
                      ( {p.n} )
                    </span>
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-4 w-4 text-ink/40 transition-all duration-300 group-hover:text-ink"
                      aria-hidden
                    >
                      <path d="M3 13 13 3M5.5 3H13v7.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl leading-none">{p.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-ink/60">{p.line}</p>
                    <a
                      href={p.href}
                      className="mt-8 inline-block font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50 underline decoration-ink/20 underline-offset-4 transition-colors group-hover:text-ink"
                    >
                      Explore
                    </a>
                  </div>
                </SpotlightCard>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-cream px-6 py-24 text-ink md:px-10 md:py-36">
        <div className="mx-auto max-w-screen-xl">
          <SectionHead label="02 — The idea" note="Connected by design" />
          <div className="mt-16">
            <ScrollFill
              as="p"
              text="Trade. Services. Brands. One connected company — built on pharmaceutical distribution and long-standing supplier relationships, combining product trading with fee-based services."
              className="max-w-5xl font-display text-[clamp(1.7rem,3.8vw,3.4rem)] leading-[1.18]"
            />
            <FadeUp className="mt-12 max-w-xl text-base leading-relaxed text-ink/65">
              <p>
                So our partners get one reliable point of contact for supply,
                sourcing and market access — and a teammate who grows through
                adjacent capabilities and validated demand, rather than doing
                everything.
              </p>
            </FadeUp>
            <FadeUp delay={0.15} className="mt-10">
              <Button href="/about" variant="dark">
                About Triven
              </Button>
            </FadeUp>
          </div>
        </div>
      </section>

      <KineticMarquee
        className="my-24 md:my-32"
        items={["Trade", "Services", "Brands", "Distribution", "Sourcing", "Exports"]}
        alt={["Evidence-first", "Supplier Networks", "Market Access", "Compliance"]}
      />

      <section className="bg-paper px-6 pb-28 text-ink md:px-10 md:pb-40">
        <div className="mx-auto max-w-screen-xl pt-24 md:pt-32">
          <SectionHead label="03 — What we do" note="Six verticals" />
          <FadeUp className="mt-12 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl font-display text-[clamp(2.2rem,4.6vw,4.5rem)] leading-[1.02]">
              Pick a lane. <span className="italic text-moss">We take it from there.</span>
            </h2>
          </FadeUp>
          <div className="mt-16">
            <ListRows items={VERTICALS} />
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
