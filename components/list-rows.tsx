import Link from "next/link";
import { ArrowUpRight } from "./ui";

export type Row = { n: string; title: string; line: string; href: string };

export function ListRows({ items }: { items: Row[] }) {
  return (
    <div className="border-t border-ink/10">
      {items.map((item) => (
        <Link
          key={item.n}
          href={item.href}
          data-cursor-label="View"
          className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-ink/10 px-1 py-7 transition-colors duration-300 hover:bg-ink hover:text-paper md:gap-10 md:px-4 md:py-9"
        >
          <span className="font-mono text-[11px] tracking-[0.2em] text-moss transition-colors duration-300 group-hover:text-acid">
            {item.n}
          </span>
          <span className="min-w-0">
            <span className="block font-display text-[clamp(1.5rem,3.6vw,3.2rem)] leading-[1.02]">
              {item.title}
            </span>
            <span className="mt-2 block max-w-xl text-sm leading-relaxed text-ink/55 transition-colors duration-300 group-hover:text-paper/60">
              {item.line}
            </span>
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition-colors duration-300 group-hover:border-acid md:h-14 md:w-14">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:h-5 md:w-5" />
          </span>
        </Link>
      ))}
    </div>
  );
}
