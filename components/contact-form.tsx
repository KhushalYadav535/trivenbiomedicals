"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { ROLES, INTERESTS } from "@/lib/content";

const inputClass =
  "w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors duration-300 placeholder:text-ink/30 focus:border-ink";

const labelClass =
  "font-mono text-[10px] uppercase tracking-[0.24em] text-ink/50";

export function ContactForm() {
  const params = useSearchParams();
  const preselect = params.get("interest") ?? "";
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-ink/15 bg-paper p-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink/50">
          ( Enquiry noted )
        </p>
        <p className="mt-6 font-display text-4xl leading-tight">Thank you.</p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/70">
          Your enquiry has been recorded in this preview build. Send it across
          directly and the team will get back to you.
        </p>
        <a
          href="mailto:connect@trivenbiomedicals.com?subject=Partnership%20enquiry%20—%20Triven%20Biomedicals"
          className="group mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:bg-acid hover:text-ink"
        >
          Email the team
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          >
            <path d="M3 13 13 3M5.5 3H13v7.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
      <div className="field relative sm:col-span-2">
        <label htmlFor="name" className={labelClass}>
          Name *
        </label>
        <input id="name" name="name" required placeholder="Your full name" className={inputClass} />
      </div>
      <div className="field relative">
        <label htmlFor="company" className={labelClass}>
          Company
        </label>
        <input id="company" name="company" placeholder="Company name" className={inputClass} />
      </div>
      <div className="field relative">
        <label htmlFor="email" className={labelClass}>
          Email *
        </label>
        <input id="email" name="email" type="email" required placeholder="you@company.com" className={inputClass} />
      </div>
      <div className="field relative">
        <label htmlFor="phone" className={labelClass}>
          Phone
        </label>
        <input id="phone" name="phone" type="tel" placeholder="+91" className={inputClass} />
      </div>
      <div className="field relative">
        <label htmlFor="role" className={labelClass}>
          I am a *
        </label>
        <select id="role" name="role" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select
          </option>
          {ROLES.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>
      <div className="field relative sm:col-span-2">
        <label htmlFor="interest" className={labelClass}>
          Interested in *
        </label>
        <select
          id="interest"
          name="interest"
          required
          defaultValue={preselect}
          className={inputClass}
        >
          <option value="" disabled>
            Select
          </option>
          {INTERESTS.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
      <div className="field relative sm:col-span-2">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us what you are looking for"
          className={`${inputClass} resize-none`}
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:bg-acid hover:text-ink"
        >
          Submit enquiry
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          >
            <path d="M3 13 13 3M5.5 3H13v7.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </form>
  );
}
