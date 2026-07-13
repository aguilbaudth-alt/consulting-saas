import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { submitLead } from "../api/leads";

const RED_FLAGS = [
  "Unrealistic lead time guarantees",
  "Inconsistent production records",
  "Excessive subcontracting",
  "Poor communication with technical staff",
  "No documented quality control process",
  "Owner handles everything personally",
  "No material or lot traceability",
  "Blind agreement to all requests",
  "High operator turnover",
  "Pushing for big orders too fast",
];

interface FormState {
  name: string;
  email: string;
  company: string;
  phone: string;
}

const initialForm: FormState = { name: "", email: "", company: "", phone: "" };

export const AuditGuide = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company) {
      setError("Please fill in your name, email, and company name.");
      return;
    }
    setError(null);
    setIsSubmitting(true);
    try {
      await submitLead({
        name: form.name,
        email: form.email,
        company: form.company,
        phone: form.phone || undefined,
        source: "audit-guide",
      });
      setSubmitted(true);
    } catch (err) {
      console.error("[AuditGuide] Failed to submit guide request:", err);
      setError("Something went wrong. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-800 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-300">
            Free Quality Audit Guide
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
            10 Red Flags When Sourcing Suppliers in Thailand
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            A free quality audit guide for manufacturing leaders. Spot the warning signs before
            they cost you a shipment, a client relationship, or your reputation.
          </p>

          <div className="mx-auto mt-10 inline-flex flex-col items-center gap-2 rounded-xl bg-white/10 px-6 py-4 backdrop-blur sm:flex-row sm:gap-6">
            <span className="text-2xl font-bold text-emerald-300">16+ years</span>
            <span className="hidden text-blue-200 sm:inline">of field experience in Asia</span>
            <span className="hidden h-6 w-px bg-blue-300/40 sm:inline-block" />
            <span className="text-2xl font-bold text-emerald-300">500+ factories</span>
            <span className="hidden text-blue-200 sm:inline">audited across Thailand</span>
          </div>

          <div className="mt-10">
            <a
              href="#get-guide"
              className="inline-block rounded-md bg-emerald-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-400"
            >
              Get the Free Guide
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold text-blue-900 sm:text-3xl">
          What's Inside the Guide
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Ten warning signs, drawn from hundreds of factory audits, that reveal supplier risk
          before you place a purchase order.
        </p>

        <ol className="mt-10 space-y-4">
          {RED_FLAGS.map((flag, index) => (
            <li
              key={flag}
              className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4"
            >
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-blue-900 text-sm font-semibold text-white">
                {index + 1}
              </span>
              <span className="pt-1 text-slate-800">{flag}</span>
            </li>
          ))}
        </ol>
      </section>

      <section id="get-guide" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-md px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            {submitted ? (
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  ✓
                </div>
                <h3 className="text-xl font-semibold text-blue-900">You're all set!</h3>
                <p className="mt-2 text-slate-600">
                  Thanks, {form.name.split(" ")[0]}. Check your inbox at {form.email}, your free
                  guide is on its way.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-blue-900">Get Your Free Guide</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Enter your details and we'll send the guide straight to your inbox.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange("name")}
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange("email")}
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.company}
                      onChange={handleChange("company")}
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Phone <span className="font-normal text-slate-400">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={handleChange("phone")}
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  {error && <p className="text-sm text-red-600">{error}</p>}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-md bg-blue-900 px-3 py-2.5 font-semibold text-white transition hover:bg-blue-800 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Get Free Guide"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-blue-900 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready for a Professional Supplier Audit?
          </h2>
          <p className="mt-3 text-blue-100">
            Let our team assess your current suppliers and flag risks before they become
            problems.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-md bg-emerald-500 px-8 py-3 font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-400"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
};
