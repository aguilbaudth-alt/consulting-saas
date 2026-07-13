import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../i18n/translations";
import { TESTIMONIALS } from "../data/testimonials";

const resolveName = (name: string | { en: string; fr: string }, language: Language) =>
  typeof name === "string" ? name : name[language];

const Avatar = ({ name, photo }: { name: string; photo: string }) => {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  if (failed) {
    return (
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-800">
        {initials}
      </div>
    );
  }

  return (
    <img
      src={photo}
      alt={name}
      className="h-16 w-16 shrink-0 rounded-full object-cover"
      onError={() => setFailed(true)}
    />
  );
};

export const TestimonialsSection = () => {
  const { t, language } = useLanguage();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = TESTIMONIALS[active];
  const name = resolveName(testimonial.name, language);

  const goTo = (index: number) => {
    setActive((index + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-bold text-blue-900 sm:text-3xl">
          {t.testimonials.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          {t.testimonials.subtitle}
        </p>

        <div className="mx-auto mt-10 max-w-2xl">
          <div className="flex items-center gap-3 sm:gap-6">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-800 shadow-sm transition hover:border-blue-300"
            >
              ←
            </button>

            <div
              key={active}
              className="flex min-h-[220px] flex-1 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                &ldquo;{testimonial.quote[language]}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar name={name} photo={testimonial.photo} />
                <div>
                  <p className="font-semibold text-blue-900">{name}</p>
                  <p className="text-xs text-slate-500">
                    {testimonial.title ? `${testimonial.title}, ` : ""}
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => goTo(active + 1)}
              aria-label="Next testimonial"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-800 shadow-sm transition hover:border-blue-300"
            >
              →
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((item, index) => (
              <button
                key={resolveName(item.name, language)}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className={`h-1.5 w-8 rounded-full transition ${
                  index === active ? "bg-blue-900" : "bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
