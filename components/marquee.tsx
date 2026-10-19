export function Marquee({
  items,
  tone = "acid",
  className = "",
}: {
  items: string[];
  tone?: "acid" | "dark";
  className?: string;
}) {
  const outer =
    tone === "acid"
      ? "bg-acid text-ink"
      : "bg-ink text-paper border-y border-paper/10";
  return (
    <div className={`group overflow-hidden ${outer} ${className}`}>
      <div className="animate-marquee flex w-max">
        {[0, 1].map((k) => (
          <div
            key={k}
            aria-hidden={k === 1}
            className="flex shrink-0 items-center py-5 md:py-7"
          >
            {items.map((item, i) => (
              <span
                key={i}
                className="flex items-center font-display text-3xl leading-none md:text-5xl"
              >
                <span className="px-7 md:px-10">{item}</span>
                <span className="text-lg opacity-40 md:text-2xl">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
