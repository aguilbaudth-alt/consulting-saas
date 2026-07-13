import { Link, Navigate, useParams } from "react-router-dom";
import { ClientLogo } from "../components/ClientLogo";
import { PORTFOLIO_PROJECTS } from "../data/portfolio";
import { usePageMeta } from "../hooks/usePageMeta";

export const PortfolioProject = () => {
  const { slug } = useParams();
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

  usePageMeta(
    project ? `${project.name} Case Study` : undefined,
    project?.summary,
  );

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Link to="/#portfolio" className="text-sm font-medium text-slate-500 hover:text-blue-800">
          ← Back to portfolio
        </Link>

        <div className="mt-6 flex h-24 w-48 items-center justify-start">
          <ClientLogo name={project.name} logo={project.logo} className="h-full" />
        </div>

        <h1 className="mt-6 text-3xl font-bold text-blue-900">{project.name}</h1>
        {project.sector && <p className="mt-1 text-sm text-slate-500">{project.sector}</p>}

        {project.summary && (
          <p className="mt-6 text-lg text-slate-700">{project.summary}</p>
        )}

        {project.supplierCategories && project.supplierCategories.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.supplierCategories.map((category) => (
              <span
                key={category}
                className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800"
              >
                {category}
              </span>
            ))}
          </div>
        )}

        {!project.challenge && !project.approach && !project.results && (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-slate-600">
            {project.description ?? "Project description coming soon."}
          </div>
        )}

        {project.challenge && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-blue-900">The Challenge</h2>
            <p className="mt-3 text-slate-600">{project.challenge}</p>
          </div>
        )}

        {project.approach && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-blue-900">Our Approach</h2>
            <p className="mt-3 text-slate-600">{project.approach}</p>
          </div>
        )}

        {project.results && project.results.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-blue-900">Results</h2>
            <ul className="mt-3 space-y-2">
              {project.results.map((result) => (
                <li key={result} className="flex gap-2 text-slate-600">
                  <span className="mt-1 text-emerald-600">✓</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-12 rounded-2xl bg-blue-900 px-8 py-8 text-center text-white">
          <p className="text-lg font-semibold">Facing similar supplier risks?</p>
          <Link
            to="/contact"
            className="mt-4 inline-block rounded-md bg-sky-500 px-6 py-2.5 font-semibold text-white shadow-lg shadow-sky-900/30 transition hover:bg-sky-400"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};
