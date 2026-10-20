import type { Metadata } from "next";
import Hero from "@/components/hero";
import { SectionHead, Button, Chip } from "@/components/ui";
import { ScrollFill, FadeUp } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight";
import ClosingCTA from "@/components/closing-cta";
import KineticMarquee from "@/components/kinetic-marquee";
import { StickyStack } from "@/components/sticky-stack";
import Orb from "@/components/orb";
import { FAQ } from "@/components/faq";
import { PartnerSelector } from "@/components/partner-selector";
import { QualityInfrastructure } from "@/components/quality-infrastructure";
import { TradeNetwork } from "@/components/trade-network";
import { PILLARS, WHY_POINTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Triven Biomedicals — Connecting Healthcare and Trade, Reliably",
  description:
    "Triven Biomedicals Private Limited is an Indian distribution, sourcing and trade partner for pharmaceuticals, hospital consumables, FMCG, and institutional supply chains.",
};

const PORTFOLIOS = [
  {
    n: "01",
    tag: "Pharmaceuticals & Healthcare",
    chip: "Forms 20B & 21B",
    title: "Licensed Healthcare Distribution",
    desc: "Wholesale supply of ethical formulations, hospital injectables, surgical consumables, and diagnostic reagents across India.",
    points: [
      "Ethical formulations & branded generics",
      "Hospital surgicals & ICU consumables",
      "Diagnostic test kits & clinical lab reagents",
      "Temperature-monitored cold-chain integrity",
    ],
    href: "/healthcare-distribution",
    cta: "Healthcare Portfolio",
  },
  {
    n: "02",
    tag: "Food & Institutional",
    chip: "FSSAI Accredited",
    title: "FMCG & Institutional Bulk Supply",
    desc: "Single-vendor consolidation for packaged foods, dairy ingredients, corporate pantries, and multi-facility catering operations.",
    points: [
      "Bulk packaged food & culinary ingredients",
      "Dairy, frozen & temperature-controlled goods",
      "Corporate pantry & hospitality supplies",
      "Consolidated monthly billing & SLA delivery",
    ],
    href: "/fmcg-supply",
    cta: "FMCG Solutions",
  },
  {
    n: "03",
    tag: "Cross-Border Commerce",
    chip: "DGFT IEC Registered",
    title: "Exports & International Trade",
    desc: "Direct trading, overseas manufacturer representation, and export facilitation connecting Indian manufacturers with qualified global buyers.",
    points: [
      "Direct export of Indian pharma & food",
      "Overseas territory distributor appointments",
      "Customs, registration & logistics clearance",
      "Structured trade finance & payment security",
    ],
    href: "/exports",
    cta: "Export Capabilities",
  },
  {
    n: "04",
    tag: "Contract Manufacturing",
    chip: "OEM & Advisory",
    title: "Sourcing, Private Label & Consulting",
    desc: "End-to-end partner for OEM manufacturer discovery, white-label product formulation, regulatory filings, and market access consulting.",
    points: [
      "Verified GMP manufacturing plant discovery",
      "Contract negotiation & pricing structures",
      "Custom brand packaging & compliance audit",
      "Market entry & distribution channel design",
    ],
    href: "/private-label",
    cta: "Private Label & Sourcing",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Requirement & Sourcing Scope",
    desc: "Buyer or principal defines product specs, volumes, target landing costs, delivery timelines, and destination regulatory requirements.",
  },
  {
    step: "02",
    title: "Supplier Diligence & Compliance Audit",
    desc: "Rigorous verification of drug licences, FSSAI certificates, GMP audits, factory test reports, and financial stability before selection.",
  },
  {
    step: "03",
    title: "Commercial & Margin Structuring",
    desc: "Clear upfront contracts defining purchase price, payment safeguards, delivery milestones, and warranty/liability allocation.",
  },
  {
    step: "04",
    title: "Fulfilment, Cold Chain & Dispatch",
    desc: "Batch test COA checks, temperature-monitored transit, insurance coverage, and real-time shipment updates to hospital or port docks.",
  },
  {
    step: "05",
    title: "Account Continuity & Repeat Cycles",
    desc: "Dedicated relationship desk, scheduled re-order forecasting, and buffer inventory management for uninterrupted operations.",
  },
];

const TRUST_FACTS = [
  {
    n: "01",
    label: "Wholesale Pharma Licences",
    val: "Forms 20B & 21B",
    sub: "Authorized wholesale pharmaceutical distribution for scheduled drugs, hospital injectables, and diagnostic consumables.",
  },
  {
    n: "02",
    label: "Food & International Trade",
    val: "FSSAI & DGFT IEC",
    sub: "Central FSSAI accredited for institutional food supply & DGFT IEC licensed for global export commerce.",
  },
  {
    n: "03",
    label: "Operational Hub",
    val: "Gurugram, NCR",
    sub: "Strategic Northern India logistics hub connected to air cargo, sea ports, and national highway freight corridors.",
  },
  {
    n: "04",
    label: "Traceability Standard",
    val: "Zero-Compromise",
    sub: "Every pharmaceutical lot backed by authentic manufacturer Certificate of Analysis (COA) and valid GST invoices.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* 01 — Capabilities (Four pillars) */}
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

      {/* 02 — The idea */}
      <section className="wash relative bg-cream px-6 py-24 text-ink md:px-10 md:py-36">
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

      {/* Kinetic Marquee Ticker */}
      <KineticMarquee
        className="my-20 md:my-28"
        items={["Trade", "Services", "Brands", "Distribution", "Sourcing", "Exports"]}
        alt={["Evidence-first", "Supplier Networks", "Market Access", "Compliance"]}
      />

      {/* 03 — What we do (StickyStack) */}
      <section className="bg-paper px-6 pt-20 text-ink md:px-10 md:pt-32">
        <div className="mx-auto max-w-screen-xl">
          <SectionHead label="03 — What we do" note="Six verticals" />
          <FadeUp className="mt-12 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl font-display text-[clamp(2.2rem,4.6vw,4.5rem)] leading-[1.02]">
              Pick a lane. <span className="italic text-moss">We take it from there.</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-ink/65 md:text-base">
              From licensed pharmaceutical distribution to international commodity trade and private-label manufacturing, explore how we execute across the commerce spectrum.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Sticky Stacking Cards */}
      <StickyStack />

      {/* 04 — Core Portfolios */}
      <section className="bg-paper px-6 py-24 text-ink md:px-10 md:py-36">
        <div className="mx-auto max-w-screen-xl">
          <SectionHead label="04 — Core Portfolios" note="Category scope" />
          <FadeUp className="mt-12 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl font-display text-[clamp(2.2rem,4.6vw,4.5rem)] leading-[1.02]">
              Every product verified. <span className="italic text-moss">Every shipment tracked.</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-ink/65 md:text-base">
              Explore our four core supply divisions with dedicated compliance, procurement specialists, and fulfillment infrastructure.
            </p>
          </FadeUp>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {PORTFOLIOS.map((item, i) => (
              <FadeUp key={item.n} delay={i * 0.08} className="h-full">
                <div className="group flex h-full flex-col justify-between rounded-3xl border border-ink/10 bg-cream p-8 transition-shadow duration-300 hover:shadow-lux md:p-12">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-moss">
                        {item.tag}
                      </span>
                      <Chip className="border-ink/20 text-ink/60">{item.chip}</Chip>
                    </div>

                    <h3 className="mt-6 font-display text-2xl leading-snug md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/65 md:text-base">
                      {item.desc}
                    </p>

                    <div className="mt-8 border-t border-ink/10 pt-6">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                        Key Deliverables
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {item.points.map((pt) => (
                          <li
                            key={pt}
                            className="flex items-start gap-3 text-xs leading-relaxed text-ink/75 md:text-sm"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-moss" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-ink/10">
                    <Button href={item.href} variant="ghost" className="w-full justify-between">
                      {item.cta}
                    </Button>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Partner Solutions (Interactive Engagement Selector) */}
      <section className="bg-cream px-6 py-24 text-ink md:px-10 md:py-36 border-y border-ink/10">
        <div className="mx-auto max-w-screen-xl">
          <SectionHead label="05 — Engagement Framework" note="Role-based solutions" />
          <FadeUp className="mt-12 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl font-display text-[clamp(2.2rem,4.6vw,4.5rem)] leading-[1.02]">
              Choose your profile. <span className="italic text-moss">See our playbook.</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-ink/65 md:text-base">
              Whether you are a hospital procurement head, manufacturer principal, global buyer, or private brand owner, explore tailored SLAs, compliance, and deliverables.
            </p>
          </FadeUp>

          <div className="mt-14">
            <PartnerSelector />
          </div>
        </div>
      </section>

      {/* 06 — Quality & Cold Chain Infrastructure */}
      <section className="bg-paper px-6 py-24 text-ink md:px-10 md:py-36">
        <div className="mx-auto max-w-screen-xl">
          <SectionHead label="06 — Quality Assurance" note="Cold chain & GDP standard" />
          <FadeUp className="mt-12 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl font-display text-[clamp(2.2rem,4.6vw,4.5rem)] leading-[1.02]">
              Temperature-monitored. <span className="italic text-moss">Batch-traceable.</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-ink/65 md:text-base">
              Pharmaceuticals and clinical supplies require uncompromised storage integrity. We maintain validated temperature corridors from warehouse rack to hospital receiving dock.
            </p>
          </FadeUp>

          <div className="mt-16">
            <QualityInfrastructure />
          </div>
        </div>
      </section>

      {/* 07 — Why Triven (Operating Principles + 3D Orb) */}
      <section className="bg-paper px-6 py-24 text-ink md:px-10 md:py-36 border-t border-ink/10">
        <div className="mx-auto grid max-w-screen-xl gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHead label="07 — Why Triven" note="Operating principles" />
            <FadeUp className="mt-12">
              <h2 className="font-display text-[clamp(2.2rem,4.6vw,4.5rem)] leading-[1.02]">
                Five principles. <span className="italic text-moss">Every engagement.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/65">
                These are not taglines — they are non-negotiable operating rules that decide which deals we accept and how we execute them.
              </p>
            </FadeUp>
            <div className="mt-14">
              {WHY_POINTS.map((p, i) => (
                <FadeUp key={p.n} delay={i * 0.06}>
                  <div className="group grid grid-cols-[auto_1fr] gap-6 border-t border-ink/10 py-7 transition-colors duration-300 last:border-b md:gap-10 md:py-8">
                    <span className="font-mono text-[11px] tracking-[0.22em] text-moss">
                      ( {p.n} )
                    </span>
                    <div>
                      <h3 className="font-display text-2xl leading-tight transition-all duration-300 group-hover:italic md:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/65 md:text-base">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
            <FadeUp delay={0.2} className="mt-12">
              <Button href="/contact" variant="dark">
                Partner with us
              </Button>
            </FadeUp>
          </div>

          <div className="relative">
            <div className="lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-cream p-8 md:p-12 shadow-lux">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-moss">
                    Live 3D Engine
                  </span>
                  <span className="inline-block h-2 w-2 rounded-full bg-acid animate-pulse" />
                </div>
                <Orb className="aspect-square w-full max-w-full my-4" />
                <div className="border-t border-ink/10 pt-6 text-center">
                  <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-ink/60">
                    Connected Commercial Engine
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-ink/50">
                    Combining physical trading operations with fee-based advisory services under one roof.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08 — How We Work (5-Step Execution Workflow) */}
      <section className="bg-paper px-6 py-24 text-ink md:px-10 md:py-36">
        <div className="mx-auto max-w-screen-xl">
          <SectionHead label="08 — Execution Framework" note="Five-step workflow" />
          <FadeUp className="mt-12 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl font-display text-[clamp(2.2rem,4.6vw,4.5rem)] leading-[1.02]">
              Structured from inquiry to <span className="italic text-moss">repeat delivery.</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-ink/65 md:text-base">
              A disciplined, compliance-first operational model that guarantees product authenticity, price transparency, and on-time fulfillment.
            </p>
          </FadeUp>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {WORKFLOW_STEPS.map((w, i) => (
              <FadeUp key={w.step} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-cream p-7 transition-colors duration-200 hover:border-moss">
                  <div>
                    <span className="font-mono text-2xl font-light text-moss">
                      {w.step}
                    </span>
                    <h3 className="mt-5 font-display text-lg leading-snug md:text-xl">
                      {w.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-ink/65 md:text-sm">
                    {w.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — Trade & Distribution Network (Pan-India & Global) */}
      <section className="bg-cream px-6 py-24 text-ink md:px-10 md:py-36 border-t border-ink/10">
        <div className="mx-auto max-w-screen-xl">
          <SectionHead label="09 — Reach & Corridors" note="Domestic & global logistics" />
          <FadeUp className="mt-12 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl font-display text-[clamp(2.2rem,4.6vw,4.5rem)] leading-[1.02]">
              Domestic network strength. <span className="italic text-moss">Global trade reach.</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-ink/65 md:text-base">
              Connecting Northern and Central India logistics hubs with all-India hospital networks and licensed export importers across GCC, Southeast Asia, and Africa.
            </p>
          </FadeUp>

          <div className="mt-16">
            <TradeNetwork />
          </div>
        </div>
      </section>

      {/* 10 — Corporate Credentials & Trust Indicators */}
      <section className="bg-paper px-6 py-24 text-ink md:px-10 md:py-36">
        <div className="mx-auto max-w-screen-xl">
          <SectionHead label="10 — Corporate Trust" note="Licences & credentials" />
          <FadeUp className="mt-12 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl font-display text-[clamp(2.2rem,4.6vw,4.5rem)] leading-[1.02]">
              Commercial rigor meets <span className="italic text-moss">regulatory compliance.</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-ink/65 md:text-base">
              We operate under statutory drug licences, national food safety accreditations, and direct foreign trade authorizations.
            </p>
          </FadeUp>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_FACTS.map((tf, i) => (
              <FadeUp key={tf.n} delay={i * 0.08} className="h-full">
                <div className="flex h-full min-h-[260px] flex-col justify-between bg-cream p-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink/40">
                        ( {tf.n} )
                      </span>
                      <span className="inline-block h-2 w-2 rounded-full bg-moss/30" />
                    </div>
                    <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-moss">
                      {tf.label}
                    </p>
                    <p className="mt-2 font-display text-3xl leading-tight md:text-4xl">
                      {tf.val}
                    </p>
                  </div>
                  <p className="mt-6 text-xs leading-relaxed text-ink/60">
                    {tf.sub}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 11 — Frequently Asked Questions (FAQ) */}
      <section className="bg-paper px-6 py-24 text-ink md:px-10 md:py-36 border-t border-ink/10">
        <div className="mx-auto max-w-screen-xl">
          <SectionHead label="11 — Questions & Clarity" note="Partner FAQ" />
          <FadeUp className="mt-12 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl font-display text-[clamp(2.2rem,4.6vw,4.5rem)] leading-[1.02]">
              Everything you need to know. <span className="italic text-moss">Upfront.</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-ink/65 md:text-base">
              Common questions about our wholesale licensing, supplier vetting, private-label engagements, and export fulfillment.
            </p>
          </FadeUp>
          <div className="mt-16">
            <FAQ />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <ClosingCTA />
    </>
  );
}
