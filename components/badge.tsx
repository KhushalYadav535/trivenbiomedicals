import { ArrowUpRight } from "./ui";

export function OrbitBadge({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={`group relative h-32 w-32 ${className}`} data-cursor-label="Explore">
      <svg
        viewBox="0 0 100 100"
        className="animate-spin-slow h-full w-full text-ink/60"
        aria-hidden
      >
        <defs>
          <path
            id="orbit-circle"
            d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
          />
        </defs>
        <text fill="currentColor" fontSize="7.4" letterSpacing="1.9">
          <textPath href="#orbit-circle">{text}</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 m-auto flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 bg-cream">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </div>
  );
}
