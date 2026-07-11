import { Link } from "react-router-dom";
import { ClientLogo } from "../components/ClientLogo";
import { useAuth } from "../context/AuthContext";
import { PORTFOLIO_PROJECTS } from "../data/portfolio";

interface Pillar {
  title: string;
  tagline: string;
  items: string[];
  icon: JSX.Element;
}

const iconProps = {
  className: "h-7 w-7",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.75,
};

const PILLARS: Pillar[] = [
  {
    title: "Supplier Selection",
    tagline: "Avoid choosing the wrong supplier",
    items: ["Factory on-site verification", "RFQ support", "HSE/ESG compliance check"],
    icon: (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    title: "Production Readiness",
    tagline: "Ensure successful ramp-up",
    items: ["NPI local support", "Pilot production supervision", "Run-at-rate validation"],
    icon: (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 19.5l4-1 10-10a2.121 2.121 0 00-3-3l-10 10-1 4zM14.5 6.5l3 3"
        />
      </svg>
    ),
  },
  {
    title: "Monitoring & Improvement",
    tagline: "Detect risks before they escalate",
    items: ["Periodic supplier audit", "KPI monitoring", "ESG checks"],
    icon: (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6m-9 0h14M5 19V9a1 1 0 011-1h1M19 19V6a1 1 0 00-1-1h-1"
        />
      </svg>
    ),
  },
  {
    title: "Crisis & Recovery",
    tagline: "Resolve supplier issues quickly",
    items: ["Root cause investigation", "Supplier recovery support", "Corrective action verification"],
    icon: (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m0 3.75h.008M4.93 19h14.14c1.4 0 2.26-1.53 1.56-2.75L13.56 4.75c-.7-1.22-2.42-1.22-3.12 0L3.37 16.25C2.67 17.47 3.53 19 4.93 19z"
        />
      </svg>
    ),
  },
];

export const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          {user && (
            <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-sky-100 backdrop-blur">
              Welcome back, {user.name}
            </p>
          )}
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
            Supplier Risk Control in Asia
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Local and independent partner in Asia to reduce your manufacturing risks
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-block rounded-md bg-sky-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-sky-900/30 transition hover:bg-sky-400"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/audit-guide"
              className="inline-block rounded-md border border-white/30 bg-white/5 px-8 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Download Free Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold text-blue-900 sm:text-3xl">
          Four Pillars of Supplier Risk Control
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          A structured approach covering the full supplier lifecycle, from selection to recovery.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-800">
                {pillar.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-blue-900">{pillar.title}</h3>
              <p className="mt-1 text-sm font-medium italic text-slate-500">{pillar.tagline}</p>
              <ul className="mt-4 space-y-2">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-0.5 text-sky-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-16">
            <div>
              <p className="text-3xl font-bold text-blue-900">16+ years</p>
              <p className="mt-1 text-sm text-slate-600">of field experience in Asia</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-900">500+ factories</p>
              <p className="mt-1 text-sm text-slate-600">audited across Asia</p>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-slate-600">
            Trusted by corporate buyers, sourcing managers, e-commerce brands, importers &amp;
            distributors
          </p>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold text-blue-900 sm:text-3xl">
          Sample Projects Portfolio
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Trusted by leading brands and manufacturers
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {PORTFOLIO_PROJECTS.map((project) => (
            <Link
              key={project.slug}
              to={`/portfolio/${project.slug}`}
              className="flex h-20 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm"
            >
              <ClientLogo name={project.name} logo={project.logo} className="h-10" />
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-blue-900 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to strengthen your supply chain?</h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-block rounded-md bg-sky-500 px-8 py-3 font-semibold text-white shadow-lg shadow-sky-900/30 transition hover:bg-sky-400"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/audit-guide"
              className="inline-block rounded-md border border-white/30 bg-white/5 px-8 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Download Free Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
