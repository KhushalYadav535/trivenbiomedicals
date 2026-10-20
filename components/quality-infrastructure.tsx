import { FadeUp } from "./reveal";
import { Chip } from "./ui";

const TEMP_ZONES = [
  {
    range: "2°C — 8°C",
    name: "Validated Cold Chain",
    badge: "Biologicals & Injectables",
    desc: "Strict temperature-regulated storage and validated cold-box transit for insulins, critical serums, diagnostics, and temperature-sensitive biologicals.",
    features: ["Digital data-logger tracking", "Phase-change cold-pack packaging", "Pre-conditioned transit boxes"],
  },
  {
    range: "15°C — 25°C",
    name: "Controlled Ambient (CRT)",
    badge: "Standard Formulations",
    desc: "Climate-monitored warehousing preventing thermal degradation of tablets, capsules, oral liquids, intravenous fluids, and medical devices.",
    features: ["Continuous humidity & temp telemetry", "Insulated freight carriers", "Dust & contaminant-free staging"],
  },
  {
    range: "Ambient",
    name: "Surgical & Hospital Dry Storage",
    badge: "Consumables & PPE",
    desc: "High-density segregated storage for hospital disposables, sterile surgical drapes, PPE kits, diagnostic instruments, and institutional food packs.",
    features: ["Segregated non-reactive racking", "Pest & moisture protection", "FEFO automated inventory control"],
  },
];

const AUDIT_PILLARS = [
  {
    n: "01",
    title: "Manufacturer Batch COA Verification",
    text: "No stock leaves our hub without verified manufacturer Certificate of Analysis matching the physical batch, manufacturing date, and expiry markings.",
  },
  {
    n: "02",
    title: "Forms 20B & 21B Regulatory Mandate",
    text: "Wholesale pharmaceutical dispatches are executed strictly under statutory drug distribution licences with registered pharmacist oversight.",
  },
  {
    n: "03",
    title: "FEFO Inventory Shelf-Life Guarantee",
    text: "First-Expiry-First-Out discipline ensures hospital pharmacies and institutional partners receive product with optimal commercial shelf-life.",
  },
  {
    n: "04",
    title: "Tamper-Evident Transit Security",
    text: "Consignments are sealed with serialized tamper-evident security tape, barcoded manifests, and real-time transit proof-of-delivery (e-POD).",
  },
];

export function QualityInfrastructure() {
  return (
    <div className="space-y-12">
      {/* Temperature Control Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {TEMP_ZONES.map((zone, i) => (
          <FadeUp key={zone.name} delay={i * 0.08} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-3xl border border-ink/10 bg-cream p-8 transition-shadow duration-300 hover:shadow-lux">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl font-medium text-moss">
                    {zone.range}
                  </span>
                  <Chip className="border-moss/20 text-moss bg-moss/5 text-[9px]">
                    {zone.badge}
                  </Chip>
                </div>
                <h4 className="mt-5 font-display text-2xl text-ink">
                  {zone.name}
                </h4>
                <p className="mt-3 text-xs leading-relaxed text-ink/65 md:text-sm">
                  {zone.desc}
                </p>
              </div>

              <div className="mt-8 border-t border-ink/10 pt-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-ink/45">
                  Standard Protocols
                </p>
                <ul className="mt-3 space-y-1.5">
                  {zone.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-ink/75">
                      <span className="h-1 w-1 rounded-full bg-moss" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Audit & QA Standards Bento */}
      <div className="rounded-3xl border border-ink/10 bg-paper p-8 md:p-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 pb-6">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-moss">
              Good Distribution Practice (GDP)
            </span>
            <h4 className="mt-2 font-display text-2xl md:text-3xl text-ink">
              Four-point quality assurance framework
            </h4>
          </div>
          <span className="font-mono text-[11px] text-ink/50 uppercase tracking-[0.2em]">
            Traceable · Tested · Certified
          </span>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIT_PILLARS.map((p, i) => (
            <FadeUp key={p.n} delay={i * 0.06}>
              <div>
                <span className="font-mono text-xs tracking-[0.22em] text-moss">
                  ( {p.n} )
                </span>
                <h5 className="mt-3 font-display text-lg leading-snug text-ink">
                  {p.title}
                </h5>
                <p className="mt-2.5 text-xs leading-relaxed text-ink/65">
                  {p.text}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
}
