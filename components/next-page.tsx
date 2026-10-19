import Link from "next/link";
import { ArrowUpRight } from "./ui";

export function NextPage({
  label,
  href,
  note,
}: {
  label: string;
  href: string;
  note?: string;
}) {
  return (
    <Link
      href={href}
      data-cursor-label="Next"
      className="group relative block overflow-hidden bg-acid px-6 py-20 text-ink transition-colors duration-500 hover:bg-ink hover:text-paper md:px-10 md:py-28"
    >
      <div className="mx-auto flex max-w-screen-xl items-end justify-between gap-8">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ink/50 transition-colors duration-500 group-hover:text-paper/50">
            ( Next {note ? `— ${note}` : ""} )
          </p>
          <p className="mt-5 font-display text-[clamp(2.6rem,6.5vw,6rem)] leading-[0.95] transition-all duration-500 group-hover:italic">
            {label}
          </p>
        </div>
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-ink/25 transition-colors duration-500 group-hover:border-acid group-hover:bg-acid group-hover:text-ink md:h-20 md:w-20">
          <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45 md:h-8 md:w-8" />
        </span>
      </div>
    </Link>
  );
}
