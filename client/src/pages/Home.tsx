import { Link } from "react-router-dom";
import { ClientLogo } from "../components/ClientLogo";
import { PillarsWheel } from "../components/PillarsWheel";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import { PILLARS } from "../data/pillars";
import { PORTFOLIO_PROJECTS } from "../data/portfolio";

export const Home = () => {
  const { user } = useAuth();
  const { t, language } = useLanguage();

  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          {user && (
            <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-sky-100 backdrop-blur">
              {t.nav.welcomeBack} {user.name}
            </p>
          )}
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl">{t.home.heroTitle}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">{t.home.heroSubtitle}</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to={`/${language}/contact`}
              className="inline-block rounded-md bg-sky-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-sky-900/30 transition hover:bg-sky-400"
            >
              {t.home.scheduleConsultation}
            </Link>
            <Link
              to={`/${language}/audit-guide`}
              className="inline-block rounded-md border border-white/30 bg-white/5 px-8 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              {t.home.downloadGuide}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold text-blue-900 sm:text-3xl">
          {t.home.pillarsTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          {t.home.pillarsSubtitle}
        </p>

        <PillarsWheel pillars={PILLARS} />
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-16">
            <div>
              <p className="text-3xl font-bold text-blue-900">{t.home.years}</p>
              <p className="mt-1 text-sm text-slate-600">{t.home.yearsSub}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-900">{t.home.factories}</p>
              <p className="mt-1 text-sm text-slate-600">{t.home.factoriesSub}</p>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-slate-600">{t.home.trustedBy}</p>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold text-blue-900 sm:text-3xl">
          {t.home.portfolioTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          {t.home.portfolioSubtitle}
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {PORTFOLIO_PROJECTS.map((project) => (
            <Link
              key={project.slug}
              to={`/${language}/portfolio/${project.slug}`}
              className="flex h-20 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm"
            >
              <ClientLogo name={project.name} logo={project.logo} className="h-10" />
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-blue-900 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">{t.home.ctaTitle}</h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to={`/${language}/contact`}
              className="inline-block rounded-md bg-sky-500 px-8 py-3 font-semibold text-white shadow-lg shadow-sky-900/30 transition hover:bg-sky-400"
            >
              {t.home.scheduleConsultation}
            </Link>
            <Link
              to={`/${language}/audit-guide`}
              className="inline-block rounded-md border border-white/30 bg-white/5 px-8 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              {t.home.downloadGuide}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
