import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-paper/90 backdrop-blur-xs text-ink">
      <div className="relative flex h-14 w-14 items-center justify-center animate-pulse">
        <Image
          src="/emblem-transparent.png"
          alt="Triven Biomedicals Loading"
          width={56}
          height={56}
          className="h-full w-auto object-contain"
          priority
        />
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-moss" style={{ animationDelay: "0ms" }} />
        <span className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-moss" style={{ animationDelay: "150ms" }} />
        <span className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-moss" style={{ animationDelay: "300ms" }} />
      </div>
      <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.28em] text-ink/50">
        Loading Triven Network...
      </p>
    </div>
  );
}
