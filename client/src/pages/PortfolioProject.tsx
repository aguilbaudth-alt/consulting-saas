import { Link, Navigate, useParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { PORTFOLIO_PROJECTS } from "../data/portfolio";
import { usePageMeta } from "../hooks/usePageMeta";

export const PortfolioProject = () => {
  const { t, language } = useLanguage();
  const { slug } = useParams();
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

  usePageMeta(
    project ? `${project.name} Case Study` : undefined,
    project?.summary?.[language],
  );

  if (!project) {
    return <Navigate to={`/${language}`} replace />;
  }

  const sector = project.sector?.[language];
  const summary = project.summary?.[language];
  const supplierCategories = project.supplierCategories?.[language];
  const challenge = project.challenge?.[language];
  const approach = project.approach?.[language];
  const results = project.results?.[language];
  const description = project.description?.[language];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          to={`/${language}#portfolio`}
          className="text-sm font-medium text-slate-500 hover:text-blue-900"
        >
          ← {t.portfolio.back}
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-blue-950">{project.name}</h1>
        {sector && <p className="mt-1 text-sm text-slate-500">{sector}</p>}

        {summary && <p className="mt-6 text-lg text-slate-700">{summary}</p>}

        {project.photo && (
          <img
            src={project.photo}
            alt={project.name}
            className="mt-8 w-full rounded-2xl border border-slate-200 object-cover"
          />
        )}

        {supplierCategories && supplierCategories.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {supplierCategories.map((category) => (
              <span
                key={category}
                className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-900"
              >
                {category}
              </span>
            ))}
          </div>
        )}

        {!challenge && !approach && !results && (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-slate-600">
            {description ?? t.portfolio.comingSoon}
          </div>
        )}

        {challenge && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-blue-950">{t.portfolio.challenge}</h2>
            <p className="mt-3 text-slate-600">{challenge}</p>
          </div>
        )}

        {approach && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-blue-950">{t.portfolio.approach}</h2>
            <p className="mt-3 text-slate-600">{approach}</p>
          </div>
        )}

        {results && results.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-blue-950">{t.portfolio.results}</h2>
            <ul className="mt-3 space-y-2">
              {results.map((result) => (
                <li key={result} className="flex gap-2 text-slate-600">
                  <span className="mt-1 text-emerald-600">✓</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-12 rounded-2xl bg-blue-950 px-8 py-8 text-center text-white">
          <p className="text-lg font-semibold">{t.portfolio.ctaTitle}</p>
          <Link
            to={`/${language}/contact`}
            className="mt-4 inline-block rounded-md bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500"
          >
            {t.portfolio.ctaButton}
          </Link>
        </div>
      </div>
    </section>
  );
};
