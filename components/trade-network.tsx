import { FadeUp } from "./reveal";
import { Chip } from "./ui";

const DOMESTIC_HUBS = [
  {
    city: "Gurugram, NCR",
    role: "Northern India Commercial & Logistics Hub",
    coverage: "Delhi-NCR, Haryana, Punjab, Uttar Pradesh, Rajasthan",
    focus: "Hospital distribution, rapid cold-chain dispatch, air cargo transit",
  },
  {
    city: "Indore, MP",
    role: "Central Registered Corporate Base",
    coverage: "Madhya Pradesh, Maharashtra, Gujarat, Central India",
    focus: "Interstate warehousing, bulk manufacturer consolidation, ground freight",
  },
  {
    city: "Key Metro Corridors",
    role: "Tier-1 Healthcare Dispatch Lines",
    coverage: "Mumbai, Bengaluru, Hyderabad, Kolkata, Ahmedabad",
    focus: "Scheduled weekly replenishment for institutional pharmacy networks",
  },
];

const GLOBAL_CORRIDORS = [
  {
    region: "Middle East & GCC",
    countries: "UAE · Saudi Arabia · Oman · Qatar",
    scope: "Branded generics, hospital surgical consumables, packaged institutional foods",
    badge: "Active Trade Lane",
  },
  {
    region: "Southeast Asia",
    countries: "Vietnam · Philippines · Myanmar · Cambodia",
    scope: "Ethical pharmaceutical formulations, clinical lab reagents, OTC products",
    badge: "Expanding Corridor",
  },
  {
    region: "East Africa & Indian Ocean",
    countries: "Kenya · Tanzania · Uganda · Mauritius",
    scope: "Essential medicines, generic injectables, diagnostic kits, emergency relief",
    badge: "Direct Sourcing",
  },
  {
    region: "CIS & Central Asia",
    countries: "Uzbekistan · Kazakhstan · Armenia",
    scope: "Contract-manufactured formulation batches, private-label packaging",
    badge: "OEM & Facilitation",
  },
];

export function TradeNetwork() {
  return (
    <div className="space-y-12">
      {/* Network Stats Bar */}
      <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Dispatch Commitment", val: "24–48 Hrs", sub: "Priority hospital transit in NCR & metro hubs" },
          { label: "Regulatory Licences", val: "Form 20B/21B", sub: "State FDA wholesale pharmaceutical compliance" },
          { label: "Global Trade Code", val: "DGFT IEC", sub: "Central customs registration for foreign commerce" },
          { label: "Food Authority", val: "FSSAI Central", sub: "Institutional bulk food & ingredients certification" },
        ].map((stat, i) => (
          <FadeUp key={stat.label} delay={i * 0.06} className="h-full">
            <div className="h-full bg-cream p-7">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
                {stat.label}
              </span>
              <p className="mt-3 font-display text-2xl text-moss md:text-3xl">
                {stat.val}
              </p>
              <p className="mt-2 text-xs text-ink/65">
                {stat.sub}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Domestic vs International Split */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Domestic Distribution */}
        <div className="flex flex-col justify-between rounded-3xl border border-ink/10 bg-cream p-8 md:p-12">
          <div>
            <div className="flex items-center justify-between border-b border-ink/10 pb-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-moss">
                Domestic Network
              </span>
              <Chip className="border-ink/20 text-ink/60 text-[9px]">Pan-India Fulfillment</Chip>
            </div>
            <h4 className="mt-6 font-display text-2xl md:text-3xl text-ink">
              Multi-hub domestic distribution architecture
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              Anchored by strategic fulfillment hubs in Gurugram NCR and Indore, we connect premier pharmaceutical manufacturers with regional hospital chains and retail distribution partners.
            </p>

            <div className="mt-8 space-y-4">
              {DOMESTIC_HUBS.map((hub) => (
                <div
                  key={hub.city}
                  className="rounded-2xl border border-ink/10 bg-paper p-5 transition-colors hover:border-moss/40"
                >
                  <div className="flex items-center justify-between">
                    <h5 className="font-display text-lg text-ink">{hub.city}</h5>
                    <span className="font-mono text-[10px] uppercase tracking-wide text-moss">
                      {hub.role}
                    </span>
                  </div>
                  <p className="mt-2 text-xs font-mono text-ink/60">
                    Reach: {hub.coverage}
                  </p>
                  <p className="mt-1 text-xs text-ink/75">
                    {hub.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* International Export Corridors */}
        <div className="flex flex-col justify-between rounded-3xl border border-ink/10 bg-cream p-8 md:p-12">
          <div>
            <div className="flex items-center justify-between border-b border-ink/10 pb-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-moss">
                International Trade Corridors
              </span>
              <Chip className="border-moss/20 text-moss bg-moss/5 text-[9px]">DGFT Accredited</Chip>
            </div>
            <h4 className="mt-6 font-display text-2xl md:text-3xl text-ink">
              Export trading & overseas representation
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              Facilitating direct commercial transactions between verified Indian manufacturing facilities and licensed overseas importers with complete regulatory dossier and export clearance support.
            </p>

            <div className="mt-8 space-y-4">
              {GLOBAL_CORRIDORS.map((corridor) => (
                <div
                  key={corridor.region}
                  className="rounded-2xl border border-ink/10 bg-paper p-5 transition-colors hover:border-moss/40"
                >
                  <div className="flex items-center justify-between">
                    <h5 className="font-display text-lg text-ink">{corridor.region}</h5>
                    <span className="font-mono text-[9px] uppercase tracking-wide text-moss">
                      {corridor.badge}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-mono text-ink/60">
                    Markets: {corridor.countries}
                  </p>
                  <p className="mt-1.5 text-xs text-ink/75">
                    {corridor.scope}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
