import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../i18n/translations";
import { TESTIMONIALS } from "../data/testimonials";

const resolveName = (name: string | { en: string; fr: string }, language: Language) =>
  typeof name === "string" ? name : name[language];

const SPEED_PX_PER_SEC = 30;

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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const dragRef = useRef<{ pointerId: number; startX: number; startOffset: number } | null>(null);
  const wheelResumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [dragging, setDragging] = useState(false);

  const track = [...TESTIMONIALS, ...TESTIMONIALS];

  useEffect(() => {
    let frame: number;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = now - last;
      last = now;

      const el = trackRef.current;
      if (el) {
        if (!pausedRef.current) {
          offsetRef.current += (SPEED_PX_PER_SEC * dt) / 1000;
        }
        const singleSetWidth = el.scrollWidth / 2;
        if (singleSetWidth > 0) {
          offsetRef.current = ((offsetRef.current % singleSetWidth) + singleSetWidth) % singleSetWidth;
        }
        el.style.transform = `translateX(-${offsetRef.current}px)`;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      offsetRef.current += e.deltaX;
      pausedRef.current = true;
      if (wheelResumeTimer.current) clearTimeout(wheelResumeTimer.current);
      wheelResumeTimer.current = setTimeout(() => {
        pausedRef.current = false;
      }, 1000);
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", handleWheel);
      if (wheelResumeTimer.current) clearTimeout(wheelResumeTimer.current);
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    dragRef.current = { pointerId: e.pointerId, startX: e.clientX, startOffset: offsetRef.current };
    pausedRef.current = true;
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== e.pointerId) return;
    offsetRef.current = drag.startOffset - (e.clientX - drag.startX);
  };

  const endDrag = () => {
    if (!dragRef.current) return;
    dragRef.current = null;
    setDragging(false);
    pausedRef.current = false;
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
      </div>

      <div
        ref={wrapperRef}
        className={`mt-10 overflow-hidden px-6 ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{ touchAction: "pan-y" }}
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          if (!dragRef.current) pausedRef.current = false;
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div ref={trackRef} className="flex w-max gap-6">
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
