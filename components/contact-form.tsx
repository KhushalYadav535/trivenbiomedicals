"use client";

import { useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ROLES, INTERESTS } from "@/lib/content";

const inputClass =
  "w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors duration-300 placeholder:text-ink/30 focus:border-ink";

const inputErrorClass =
  "w-full border-b border-rose-600 bg-rose-50/30 py-3 text-ink outline-none transition-colors duration-300 placeholder:text-rose-400 focus:border-rose-600";

const labelClass =
  "font-mono text-[10px] uppercase tracking-[0.24em] text-ink/50";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  interest?: string;
  message?: string;
}

export function ContactForm() {
  const router = useRouter();
  const params = useSearchParams();
  const preselect = params.get("interest") ?? "";

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    role: "",
    interest: preselect,
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Please enter a valid full name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Corporate or business email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. name@company.com)";
    }

    if (formData.phone.trim() && !/^[+0-9\s-]{8,20}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number with country/area code";
    }

    if (!formData.role) {
      newErrors.role = "Please select your primary role";
    }

    if (!formData.interest) {
      newErrors.interest = "Please choose an area of interest";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please share brief details of your requirement";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please enter at least 10 characters describing your requirement";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setSubmitted(true);
    router.push(`/thank-you?name=${encodeURIComponent(formData.name)}`);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-moss/30 bg-moss/[0.04] p-8 md:p-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-moss font-semibold">
          ( Transmission Confirmed )
        </p>
        <p className="mt-4 font-display text-3xl md:text-4xl leading-tight">
          Thank you, {formData.name}.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink/75">
          Your enquiry regarding <strong>{formData.interest}</strong> has been logged. Redirecting you to the confirmation page...
        </p>
        <a
          href="/thank-you"
          className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-moss underline"
        >
          Click here if not redirected automatically &rarr;
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
      <div className="field relative sm:col-span-2">
        <div className="flex items-center justify-between">
          <label htmlFor="name" className={labelClass}>
            Full Name *
          </label>
          {errors.name && (
            <span className="font-mono text-[9px] uppercase tracking-wider text-rose-600">
              {errors.name}
            </span>
          )}
        </div>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          placeholder="e.g. Dr. Rajesh Sharma / Procurement Lead"
          className={errors.name ? inputErrorClass : inputClass}
        />
      </div>

      <div className="field relative">
        <label htmlFor="company" className={labelClass}>
          Company / Hospital / Institution
        </label>
        <input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="e.g. MedSupply Global Ltd."
          className={inputClass}
        />
      </div>

      <div className="field relative">
        <div className="flex items-center justify-between">
          <label htmlFor="email" className={labelClass}>
            Business Email *
          </label>
          {errors.email && (
            <span className="font-mono text-[9px] uppercase tracking-wider text-rose-600">
              {errors.email}
            </span>
          )}
        </div>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          placeholder="you@organization.com"
          className={errors.email ? inputErrorClass : inputClass}
        />
      </div>

      <div className="field relative">
        <div className="flex items-center justify-between">
          <label htmlFor="phone" className={labelClass}>
            Phone / WhatsApp
          </label>
          {errors.phone && (
            <span className="font-mono text-[9px] uppercase tracking-wider text-rose-600">
              {errors.phone}
            </span>
          )}
        </div>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          aria-invalid={Boolean(errors.phone)}
          placeholder="+91 98110 54321"
          className={errors.phone ? inputErrorClass : inputClass}
        />
      </div>

      <div className="field relative">
        <div className="flex items-center justify-between">
          <label htmlFor="role" className={labelClass}>
            I am a *
          </label>
          {errors.role && (
            <span className="font-mono text-[9px] uppercase tracking-wider text-rose-600">
              {errors.role}
            </span>
          )}
        </div>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          aria-invalid={Boolean(errors.role)}
          className={errors.role ? inputErrorClass : inputClass}
        >
          <option value="" disabled>
            Select your category
          </option>
          {ROLES.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div className="field relative sm:col-span-2">
        <div className="flex items-center justify-between">
          <label htmlFor="interest" className={labelClass}>
            Primary Requirement *
          </label>
          {errors.interest && (
            <span className="font-mono text-[9px] uppercase tracking-wider text-rose-600">
              {errors.interest}
            </span>
          )}
        </div>
        <select
          id="interest"
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          aria-invalid={Boolean(errors.interest)}
          className={errors.interest ? inputErrorClass : inputClass}
        >
          <option value="" disabled>
            Select an area of interest
          </option>
          {INTERESTS.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div className="field relative sm:col-span-2">
        <div className="flex items-center justify-between">
          <label htmlFor="message" className={labelClass}>
            Enquiry Specifications *
          </label>
          {errors.message && (
            <span className="font-mono text-[9px] uppercase tracking-wider text-rose-600">
              {errors.message}
            </span>
          )}
        </div>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          placeholder="Please share product categories, target volumes, destinations, or specific compliance requirements..."
          className={`${errors.message ? inputErrorClass : inputClass} resize-none`}
        />
      </div>

      <div className="sm:col-span-2 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paper transition-all duration-300 hover:bg-acid hover:text-ink disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-paper border-t-transparent" />
              Transmitting enquiry...
            </>
          ) : (
            <>
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
            </>
          )}
        </button>
        <p className="mt-4 font-mono text-[9px] tracking-wide text-ink/45">
          By submitting, you agree to our{" "}
          <a href="/privacy-policy" className="underline hover:text-ink">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/terms" className="underline hover:text-ink">
            Terms of Service
          </a>
          . Confidentiality guaranteed.
        </p>
      </div>
    </form>
  );
}
