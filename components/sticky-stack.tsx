import { ArrowUpRight, Chip } from "./ui";
import { STACK_CARDS } from "@/lib/content";

export function StickyStack() {
  return (
    <div className="relative bg-paper px-6 pb-32 pt-10 md:px-10">
      <div className="mx-auto flex max-w-screen-xl flex-col">
        {STACK_CARDS.map((item, i) => (
          <div
            key={item.n}
            className="sticky"
            style={{ top: `${88 + i * 26}px` }}
          >
            <article className="ticks relative mb-10 min-h-[52vh] rounded-3xl border border-ink/10 bg-cream p-8 text-ink shadow-lux md:p-14">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <span className="font-mono text-[11px] tracking-[0.24em] text-moss">
                  ( {item.n} )
                </span>
                {item.chip ? (
                  <Chip className="border-ink/25 text-ink/60">{item.chip}</Chip>
                ) : null}
              </div>
              <h3 className="mt-10 font-display text-4xl leading-[0.95] md:text-6xl">
                {item.title}
              </h3>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/65 md:text-lg">
                {item.line}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-ink/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-12 flex items-end justify-between gap-6 border-t border-ink/10 pt-8">
                <a
                  href={item.href}
                  data-cursor-label="Open"
                  className="group flex h-12 items-center gap-3 rounded-full bg-ink px-6 font-mono text-[10px] uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:bg-acid hover:text-ink"
                >
                  {item.cta}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <span
                  aria-hidden
                  className="hidden font-display text-[8rem] leading-none text-ink/[0.07] md:block"
                >
                  {item.n}
                </span>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
