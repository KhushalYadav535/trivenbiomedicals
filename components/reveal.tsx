"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealProps = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  waitEvent?: string;
};

export function RevealChars({
  text,
  as = "span",
  className,
  delay = 0,
  stagger = 0.016,
  waitEvent,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let ctx: gsap.Context | undefined;

    const run = () => {
      ctx = gsap.context(() => {
        gsap.fromTo(
          el.querySelectorAll("[data-ch]"),
          { yPercent: 118, rotate: 3 },
          {
            yPercent: 0,
            rotate: 0,
            duration: 0.9,
            ease: "power4.out",
            stagger,
            delay,
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          }
        );
      });
    };

    let handler: (() => void) | undefined;
    if (waitEvent) {
      handler = () => {
        window.removeEventListener(waitEvent, handler!);
        run();
      };
      window.addEventListener(waitEvent, handler);
    } else {
      run();
    }
    return () => {
      if (waitEvent && handler) window.removeEventListener(waitEvent, handler);
      ctx?.revert();
    };
  }, [delay, stagger, waitEvent]);

  const Tag = as as ElementType;
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block whitespace-nowrap">
          {Array.from(w).map((c, j) => (
            <span key={j} className="clip">
              <span
                data-ch
                className="inline-block will-change-transform"
              >
                {c}
              </span>
            </span>
          ))}
          {i < words.length - 1 ? <span>&nbsp;</span> : null}
        </span>
      ))}
    </Tag>
  );
}

export function ScrollFill({
  text,
  as = "p",
  className,
}: {
  text: string;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-w]"),
        { opacity: 0.14 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.06,
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            end: "top 30%",
            scrub: 0.5,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const Tag = as as ElementType;

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span
          key={i}
          data-w
          aria-hidden
          className="inline-block will-change-[opacity]"
        >
          {w}
          {i < text.split(" ").length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}

export function FadeUp({
  children,
  className,
  delay = 0,
  waitEvent,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  waitEvent?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let ctx: gsap.Context | undefined;

    const run = () => {
      ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { y: 34, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay,
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          }
        );
      });
    };

    let handler: (() => void) | undefined;
    if (waitEvent) {
      handler = () => {
        window.removeEventListener(waitEvent, handler!);
        run();
      };
      window.addEventListener(waitEvent, handler);
    } else {
      run();
    }
    return () => {
      if (waitEvent && handler) window.removeEventListener(waitEvent, handler);
      ctx?.revert();
    };
  }, [delay, waitEvent]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
