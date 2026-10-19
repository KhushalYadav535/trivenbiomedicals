import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-paper px-6 text-ink">
      <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ink/50">
        ( 404 — consignment not found )
      </p>
      <p className="mt-8 text-center font-display text-[clamp(3rem,9vw,8rem)] leading-none">
        Lost in <span className="italic text-moss">transit.</span>
      </p>
      <Link
        href="/"
        className="mt-12 rounded-full border border-ink/25 px-8 py-4 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 hover:border-acid hover:bg-acid hover:text-ink"
      >
        Back to home
      </Link>
    </div>
  );
}
