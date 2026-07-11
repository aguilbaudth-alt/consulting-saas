import { FormEvent, useState } from "react";
import { submitLead } from "../api/leads";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

const initialForm: FormState = { name: "", email: "", company: "", message: "" };

export const Contact = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    setError(null);
    setIsSubmitting(true);
    try {
      await submitLead({ ...form, source: "contact" });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-900">Schedule a Consultation</h1>
          <p className="mt-3 text-slate-600">
            Tell us a bit about your supply chain and we'll follow up within one business day.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          {submitted ? (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                ✓
              </div>
              <h2 className="text-xl font-semibold text-blue-900">Message received</h2>
              <p className="mt-2 text-slate-600">
                Thanks, {form.name.split(" ")[0]}. We've sent a confirmation to {form.email} and
                will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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
                <label className="block text-sm font-medium text-slate-700">Company Name</label>
                <input
                  type="text"
                  required
                  value={form.company}
                  onChange={handleChange("company")}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="What supplier challenges are you facing?"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-blue-900 px-3 py-2.5 font-semibold text-white transition hover:bg-blue-800 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Request Consultation"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
