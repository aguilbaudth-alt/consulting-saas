import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { TESTIMONIALS } from "../data/testimonials";

const Avatar = ({ name, photo }: { name: string; photo: string }) => {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  if (failed) {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800">
        {initials}
      </div>
    );
  }

  return (
    <img
      src={photo}
      alt={name}
      className="h-12 w-12 shrink-0 rounded-full object-cover"
      onError={() => setFailed(true)}
    />
  );
};

export const TestimonialsSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-bold text-blue-900 sm:text-3xl">
          {t.testimonials.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          {t.testimonials.subtitle}
        </p>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <p className="flex-1 text-sm leading-relaxed text-slate-600">
                &ldquo;{testimonial.quote[language]}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar name={testimonial.name} photo={testimonial.photo} />
                <div>
                  <p className="font-semibold text-blue-900">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">
                    {testimonial.title ? `${testimonial.title}, ` : ""}
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
