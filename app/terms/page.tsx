import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { COMPANY, OFFICE_ADDRESS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Standard Commercial Terms, Regulatory Disclaimers, and Conditions of Service governing B2B trade with Triven Biomedicals Private Limited.",
};

export default function TermsPage() {
  return (
    <div className="bg-paper text-ink">
      <PageHeader
        index="P-02"
        label="Legal & Commercial"
        title="Terms and Conditions"
        lede="These terms govern the engagement, supply, and trade facilitation activities provided by Triven Biomedicals Private Limited to institutional buyers, manufacturers, and trade partners."
      />

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl space-y-12 text-sm leading-relaxed text-ink/80">
          <div className="rounded-2xl border border-ink/10 bg-cream p-6 font-mono text-[11px] text-ink/60">
            <p>Last Revised: January 1, 2026</p>
            <p className="mt-1">Corporate Entity: {COMPANY}</p>
            <p className="mt-1">Applicable Law: Republic of India</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">1. Commercial Scope & Applicability</h2>
            <p className="mt-3">
              These Terms and Conditions (&ldquo;Terms&rdquo;) govern all interactions, quotations, pro-forma invoices, purchase orders, distribution agreements, and consulting arrangements entered into with {COMPANY} (&ldquo;Company&rdquo;). Engaging in commercial transactions or submitting orders constitutes acceptance of these Terms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">2. Regulatory & Licensing Pre-requisites</h2>
            <p className="mt-3">
              Pharmaceutical, medical, and regulated food trade is conducted strictly in adherence to the Drugs and Cosmetics Act (1940), CDSCO regulations, the Food Safety and Standards Act (FSSAI 2006), and the Foreign Trade Policy (DGFT).
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1.5">
              <li>
                <strong>Buyer Due Diligence:</strong> Regulated pharmaceuticals are supplied only to verified institutions, hospitals, or wholesale license holders possessing valid Form 20B/21B or equivalent regional jurisdiction permits.
              </li>
              <li>
                <strong>Export Compliance:</strong> International transactions require destination market registrations, valid certificates of pharmaceutical products (COPP), free sale certificates (FSC), or compliant import authorizations.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">3. Quotations, Pricing & Purchase Orders</h2>
            <p className="mt-3">
              All commercial quotes and price schedules issued by the Company are subject to written confirmation, stock availability, and specified validity windows (typically 15 to 30 days depending on raw material and currency fluctuations). Purchase orders become binding only upon mutual execution of a pro-forma invoice or formal counter-signed PO acceptance.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">4. Quality Assurance, Inspection & Returns</h2>
            <p className="mt-3">
              All goods are accompanied by relevant manufacturer Certificates of Analysis (CoA), batch test reports, and regulatory documentation. Buyers are afforded a standard inspection window (typically 7 business days from port/warehouse receipt) to notify of any verifiable transit damages or batch discrepancies. Regulated cold-chain and temperature-sensitive biological items are non-returnable once custody transfer conditions are certified.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">5. Intellectual Property & Brand Representation</h2>
            <p className="mt-3">
              The Triven Biomedicals trademark, emblem, graphics, website content, and proprietary trading frameworks are the exclusive intellectual property of {COMPANY}. Third-party trademarks and brand names mentioned remain the property of their respective manufacturer principals and are displayed under authorized distribution relationships.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">6. Limitation of Liability & Force Majeure</h2>
            <p className="mt-3">
              Neither party shall be liable for delays or non-performance caused by events beyond reasonable commercial control, including but not limited to customs embargoes, port closures, regulatory statutory amendments, natural disasters, or global freight disruptions. In no event shall the Company be liable for indirect, punitive, or consequential commercial loss.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">7. Governing Law & Dispute Resolution</h2>
            <p className="mt-3">
              These Terms and any transaction dispute shall be governed by and construed in accordance with the laws of the Republic of India. Any unresolved dispute arising out of commercial contracts shall be subject to the exclusive jurisdiction of the competent courts in Gurugram, Haryana, India.
            </p>
          </div>

          <div className="pt-8 border-t border-ink/10 flex items-center justify-between">
            <Link href="/" className="font-mono text-xs uppercase tracking-wider text-moss underline">
              &larr; Return to Home
            </Link>
            <Link href="/privacy-policy" className="font-mono text-xs uppercase tracking-wider text-ink/60 hover:text-ink">
              View Privacy Policy &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
