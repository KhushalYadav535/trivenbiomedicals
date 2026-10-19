import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { COMPANY, OFFICE_ADDRESS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy and Data Protection Framework of Triven Biomedicals Private Limited in compliance with applicable Indian and global commercial regulations.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-paper text-ink">
      <PageHeader
        index="P-01"
        label="Legal & Compliance"
        title="Privacy Policy"
        lede="How Triven Biomedicals Private Limited collects, safeguards, and processes corporate, commercial, and personal information across our distribution and trading operations."
      />

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl space-y-12 text-sm leading-relaxed text-ink/80">
          <div className="rounded-2xl border border-ink/10 bg-cream p-6 font-mono text-[11px] text-ink/60">
            <p>Effective Date: January 1, 2026</p>
            <p className="mt-1">Entity: {COMPANY} (CIN: U24239HR2023PTC112345)</p>
            <p className="mt-1">Jurisdiction: Gurugram, Haryana, Republic of India</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">1. Overview and Commitment</h2>
            <p className="mt-3">
              {COMPANY} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to maintaining the highest standards of data integrity, confidentiality, and commercial security. This Privacy Policy governs the processing of information gathered through our digital platform, corporate inquiries, supplier on-boarding, and trade facilitation services in accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and the Information Technology Act, 2000.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">2. Categories of Information Collected</h2>
            <div className="mt-3 space-y-2">
              <p>We collect and process the following categories of information strictly for legitimate commercial and regulatory verification purposes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Business Contact & Identity Data:</strong> Name, professional title, corporate email address, contact phone number, company name, and commercial role.
                </li>
                <li>
                  <strong>Statutory & Regulatory Records:</strong> Drug licenses (Forms 20B/21B or equivalent), GSTIN, IEC, FSSAI numbers, corporate registrations, and related verifiable compliance documentation.
                </li>
                <li>
                  <strong>Procurement & Transaction Specifications:</strong> Product requirements, bill of quantities (BOQ), technical delivery schedules, destination ports, and payment modalities.
                </li>
                <li>
                  <strong>Technical & Telemetry Data:</strong> IP address, browser type, operating system, visit timestamps, and anonymous session telemetry necessary for system security and website performance.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">3. Purpose and Legal Basis of Processing</h2>
            <p className="mt-3">
              We process data solely under lawful bases including contract performance, regulatory compliance, and legitimate B2B commercial interest:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1.5">
              <li>To evaluate partnership inquiries, RFQs, and sourcing requisitions.</li>
              <li>To conduct statutory KYC, supplier verification, and drug licensing compliance checks.</li>
              <li>To fulfill purchase orders, logistics tracking, and customs clearance protocols.</li>
              <li>To prevent fraudulent commercial transactions and maintain platform security.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">4. Non-Disclosure & Confidentiality</h2>
            <p className="mt-3">
              We operate under strict commercial confidentiality. We do not sell, rent, or trade partner data to third parties or advertising brokers. Data is shared exclusively with:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1.5">
              <li>Vetted logistics, freight, and warehousing partners necessary to execute deliveries.</li>
              <li>Statutory government bodies, regulatory drug inspectors, or customs authorities when mandated by applicable law.</li>
              <li>Direct commercial parties subject to mutual non-disclosure and service agreements.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">5. Cookies and Telemetry</h2>
            <p className="mt-3">
              Our website uses strictly necessary cookies and anonymous performance telemetry to remember session preferences and understand navigational flows. You can manage or disable cookie preferences at any time via your browser settings or our on-page cookie consent banner.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">6. Data Security and Retention</h2>
            <p className="mt-3">
              We deploy industry-standard administrative, physical, and digital safeguards including TLS encryption, restricted access control, and periodic vulnerability audits. Commercial transaction records are retained in compliance with Indian Companies Act statutory requirements (minimum 8 years) or for the duration of the commercial engagement.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">7. Grievance Officer & Contact Information</h2>
            <p className="mt-3">
              For inquiries regarding data access, corrections, or privacy compliance, please direct communications to:
            </p>
            <div className="mt-4 rounded-xl border border-ink/10 bg-cream p-5 font-mono text-xs space-y-1">
              <p className="font-semibold text-ink">Grievance & Compliance Officer</p>
              <p>{COMPANY}</p>
              <p>Republic of India (Corporate address available upon formal commercial requisition)</p>
              <p>Email: <a href="mailto:connect@trivenbio.com" className="underline text-moss">connect@trivenbio.com</a></p>
              <p>Phone: {OFFICE_ADDRESS.phone}</p>
            </div>
          </div>

          <div className="pt-8 border-t border-ink/10 flex items-center justify-between">
            <Link href="/" className="font-mono text-xs uppercase tracking-wider text-moss underline">
              &larr; Return to Home
            </Link>
            <Link href="/terms" className="font-mono text-xs uppercase tracking-wider text-ink/60 hover:text-ink">
              View Terms & Conditions &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
