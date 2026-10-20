"use client";

import { useState } from "react";
import { ArrowUpRight, Chip } from "./ui";
import { FadeUp } from "./reveal";

type PartnerRole = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  sla: string;
  deliverables: string[];
  docs: string[];
  commercialModel: string;
  ctaText: string;
  ctaHref: string;
};

const ROLES: PartnerRole[] = [
  {
    id: "hospital",
    label: "Hospitals & Healthcare Networks",
    title: "Institutional Pharma & Clinical Supplies",
    subtitle:
      "Licensed distribution of ethical formulations, surgical consumables, and lab diagnostics for hospitals, nursing homes, and diagnostic chains.",
    sla: "24–48 Hours Pan-India Dispatch (Emergency lines expedited)",
    deliverables: [
      "Scheduled repeat supply of critical hospital consumables & injectables",
      "Full manufacturer Certificate of Analysis (COA) per batch",
      "Direct manufacturer wholesale pricing with volume credit terms",
      "Cold-chain temperature logging from dispatch to hospital dock",
    ],
    docs: ["Valid Drug Licence (Form 20B / 21B)", "Hospital GSTIN", "Institutional Purchase Order"],
    commercialModel: "Direct Wholesale Trading Margin / Contract Supply",
    ctaText: "Request Hospital Rate Card",
    ctaHref: "/contact?interest=Healthcare%20Distribution",
  },
  {
    id: "brand",
    label: "Manufacturers & Principals",
    title: "All-India Distribution & Market Access",
    subtitle:
      "We act as your authorized distribution and commercial partner, expanding your product presence across institutional buyers, retail stockists, and overseas markets.",
    sla: "Structured 30-day onboarding & inventory staging",
    deliverables: [
      "Authorized wholesale representation & sales channel development",
      "Regulatory compliance & label alignment with Indian CDSCO / FSSAI rules",
      "Warehousing, buffer inventory management, and last-mile dispatch",
      "Transparent secondary sales reporting & payment collection discipline",
    ],
    docs: ["Manufacturing Licence & GMP Certification", "Product Dossier & COAs", "Trademark Registration"],
    commercialModel: "Exclusive / Authorized Distribution Margin",
    ctaText: "Discuss Principal Representation",
    ctaHref: "/contact?interest=Consulting%20%26%20Market%20Access",
  },
  {
    id: "export",
    label: "International Importers",
    title: "Indian Pharmaceutical & FMCG Exports",
    subtitle:
      "Direct export trading and sourcing of verified Indian pharmaceuticals, hospital disposables, and food commodities for qualified overseas importers.",
    sla: "FOB / CIF shipment within 14–21 business days post-inspection",
    deliverables: [
      "Pre-shipment batch testing, inspection, and export packaging",
      "DGFT IEC registered foreign trade documentation & customs clearance",
      "Legalized export documents: Certificate of Origin, COA, Bill of Lading",
      "Letter of Credit (LC) & structured trade finance compliance",
    ],
    docs: ["Buyer Import Licence / MoH Authorization", "Commercial Letter of Intent (LOI)", "Importing Country Customs Code"],
    commercialModel: "Direct Export Trade / Facilitation Fee",
    ctaText: "Enquire for Overseas Trade",
    ctaHref: "/contact?interest=Exports%20%26%20International%20Trade",
  },
  {
    id: "privatelabel",
    label: "Private Label & Brand Owners",
    title: "OEM Contract Manufacturing & Sourcing",
    subtitle:
      "End-to-end management of contract manufacturing for your proprietary healthcare, wellness, or consumer brand lines with audited GMP facilities.",
    sla: "Turnkey sample-to-production in 45–60 days",
    deliverables: [
      "Audited factory shortlisting & commercial price negotiation",
      "Formulation compliance, stability testing, and regulatory filings",
      "Packaging artwork review, barcode validation & legal metrology checks",
      "Quality assurance inspection prior to final warehouse release",
    ],
    docs: ["Brand Trademark / Application", "Product Specification Sheet", "Confidentiality NDA"],
    commercialModel: "Procurement Fee / OEM Supply Contract",
    ctaText: "Initiate Private Label Sourcing",
    ctaHref: "/contact?interest=Private%20Label%20%26%20Contract%20Manufacturing",
  },
];

export function PartnerSelector() {
  const [activeId, setActiveId] = useState<string>("hospital");
  const activeRole = ROLES.find((r) => r.id === activeId) ?? ROLES[0];

  return (
    <div className="rounded-3xl border border-ink/10 bg-cream p-6 md:p-12 shadow-lux">
      {/* Role Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-ink/10 pb-6">
        {ROLES.map((role) => {
          const isActive = role.id === activeId;
          return (
            <button
              key={role.id}
              type="button"
              onClick={() => setActiveId(role.id)}
              className={`rounded-full px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] transition-all duration-200 ${
                isActive
                  ? "bg-ink text-paper shadow-sm"
                  : "bg-paper/70 text-ink/70 hover:bg-paper hover:text-ink border border-ink/10"
              }`}
            >
              {role.label}
            </button>
          );
        })}
      </div>

      {/* Role Details Panel */}
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-moss">
              Operational Scope
            </span>
            <Chip className="border-moss/30 text-moss bg-moss/5 text-[9px]">
              Active Channel
            </Chip>
          </div>

          <h3 className="mt-4 font-display text-2xl leading-tight md:text-4xl text-ink">
            {activeRole.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/70 md:text-base">
            {activeRole.subtitle}
          </p>

          <div className="mt-8 border-t border-ink/10 pt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
              Key Deliverables & Capabilities
            </p>
            <ul className="mt-4 space-y-2.5">
              {activeRole.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-ink/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-moss" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Info Box */}
        <div className="flex flex-col justify-between rounded-2xl border border-ink/10 bg-paper p-6 md:p-8">
          <div className="space-y-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                Fulfilment Timeline & SLA
              </p>
              <p className="mt-1.5 font-display text-lg text-ink font-normal">
                {activeRole.sla}
              </p>
            </div>

            <div className="border-t border-ink/10 pt-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                Commercial Model
              </p>
              <p className="mt-1.5 font-display text-base text-moss font-medium">
                {activeRole.commercialModel}
              </p>
            </div>

            <div className="border-t border-ink/10 pt-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                Required Onboarding Documents
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {activeRole.docs.map((doc, i) => (
                  <span
                    key={i}
                    className="rounded bg-ink/5 px-2.5 py-1 font-mono text-[10px] tracking-wide text-ink/70"
                  >
                    {doc}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-ink/10 pt-6">
            <a
              href={activeRole.ctaHref}
              className="group flex h-12 w-full items-center justify-between rounded-full bg-ink px-6 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:bg-acid hover:text-ink"
            >
              <span>{activeRole.ctaText}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
