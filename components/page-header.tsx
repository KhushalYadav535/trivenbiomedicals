import { RevealChars } from "./reveal";

export function PageHeader({
  index,
  label,
  title,
  lede,
  className = "",
}: {
  index: string;
  label: string;
  title: string;
  lede?: string;
  className?: string;
}) {
  return (
    <header
      className={`wash relative overflow-hidden border-b border-ink/10 bg-paper text-ink px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-48 ${className}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-10 select-none font-display text-[38vw] leading-none text-ink/[0.05] md:text-[26vw]"
      >
        {index}
      </span>
      <RevealChars
        as="p"
        text={`( ${index} — ${label} )`}
        delay={0.05}
        className="relative font-mono text-[10px] uppercase tracking-[0.26em] text-ink/60"
      />
      <h1 className="balance relative mt-8 font-display text-[clamp(2.7rem,7vw,7rem)] leading-[0.95] tracking-[-0.01em] md:mt-10">
        <RevealChars text={title} delay={0.12} stagger={0.012} />
      </h1>
      {lede ? (
        <p className="dropcap relative mt-10 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
          {lede}
        </p>
      ) : null}
    </header>
  );
}
