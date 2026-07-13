import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { usePageMeta } from "../hooks/usePageMeta";

export const About = () => {
  const { t, language } = useLanguage();

  usePageMeta(t.about.metaTitle, t.about.metaDescription);

  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <img
              src="/about/antoine-guilbaud.jpg"
              alt={t.about.name}
              className="h-32 w-32 shrink-0 rounded-full object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-blue-950 sm:text-3xl">{t.about.name}</h1>
              <p className="mt-1 text-slate-500">{t.about.role}</p>
            </div>
          </div>

          <div className="mt-10 space-y-6 text-slate-700">
            <p>{t.about.paragraph1}</p>
            <p>{t.about.paragraph2}</p>
            <p>{t.about.paragraph3}</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-950 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">{t.about.ctaTitle}</h2>
          <Link
            to={`/${language}/contact`}
            className="mt-8 inline-block rounded-md bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500"
          >
            {t.about.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
};
