import { useState } from "react";
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
  const [paused, setPaused] = useState(false);

  const track = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="bg-slate-50 py-16">
      <style>{`
        @keyframes testimonials-marquee {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-bold text-blue-900 sm:text-3xl">
          {t.testimonials.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          {t.testimonials.subtitle}
        </p>
      </div>

      <div
        className="mt-10 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex w-max gap-6 px-6"
          style={{
            animation: "testimonials-marquee 50s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {track.map((testimonial, i) => {
            const name = resolveName(testimonial.name, language);
            return (
              <div
                key={i}
                className="flex w-80 shrink-0 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:w-96 sm:p-8"
              >
                <p className="text-sm leading-relaxed text-slate-600">
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
