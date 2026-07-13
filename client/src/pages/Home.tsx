import { Link } from "react-router-dom";
import { ClientLogo } from "../components/ClientLogo";
import { PillarsWheel } from "../components/PillarsWheel";
import { useAuth } from "../context/AuthContext";
import { PILLARS } from "../data/pillars";
import { PORTFOLIO_PROJECTS } from "../data/portfolio";

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

        <PillarsWheel pillars={PILLARS} />
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
