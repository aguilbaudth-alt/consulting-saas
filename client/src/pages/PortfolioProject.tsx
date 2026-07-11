import { Link, Navigate, useParams } from "react-router-dom";
import { ClientLogo } from "../components/ClientLogo";
import { PORTFOLIO_PROJECTS } from "../data/portfolio";

export const PortfolioProject = () => {
  const { slug } = useParams();
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

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

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-slate-600">
          {project.description ?? "Project description coming soon."}
        </div>
      </div>
    </section>
  );
};
