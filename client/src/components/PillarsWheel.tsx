import { useState } from "react";
import { Pillar } from "../data/pillars";

const NODE_POSITIONS = [
  { top: "4%", left: "50%" }, // top
  { top: "50%", left: "96%" }, // right
  { top: "96%", left: "50%" }, // bottom
  { top: "50%", left: "4%" }, // left
];

const ARROW_ANGLES = [45, 135, 225, 315];

interface PillarsWheelProps {
  pillars: Pillar[];
}

export const PillarsWheel = ({ pillars }: PillarsWheelProps) => {
  const [active, setActive] = useState(0);
  const activePillar = pillars[active];

  return (
    <div className="mt-12 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
      <div className="relative mx-auto aspect-square w-full max-w-sm">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="text-blue-200"
          />
          {ARROW_ANGLES.map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x = 50 + 42 * Math.sin(rad);
            const y = 50 - 42 * Math.cos(rad);
            return (
              <polygon
                key={angle}
                points="-3,-3 3,-3 0,4"
                transform={`translate(${x} ${y}) rotate(${angle})`}
                className="fill-sky-500"
              />
            );
          })}
        </svg>

        <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-blue-50 text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-blue-800">
            Supplier
          </span>
          <span className="text-sm font-bold uppercase tracking-wide text-blue-800">
            Control
          </span>
        </div>

        {pillars.map((pillar, index) => {
          const pos = NODE_POSITIONS[index];
          const isActive = index === active;
          return (
            <button
              key={pillar.title}
              type="button"
              onClick={() => setActive(index)}
              style={{ top: pos.top, left: pos.left }}
              className={`absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 shadow-sm transition sm:h-20 sm:w-20 ${
                isActive
                  ? "border-blue-900 bg-blue-900 text-white"
                  : "border-slate-200 bg-white text-blue-800 hover:border-blue-300 hover:-translate-y-1/2"
              }`}
              aria-pressed={isActive}
            >
              <span className="h-5 w-5 sm:h-6 sm:w-6">{pillar.icon}</span>
              <span className="mt-1 hidden text-[9px] font-semibold leading-tight sm:block">
                {index + 1}
              </span>
            </button>
          );
        })}
      </div>

      <div
        key={activePillar.title}
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-800">
          {activePillar.icon}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-blue-900">{activePillar.title}</h3>
        <p className="mt-1 text-sm font-medium italic text-slate-500">{activePillar.tagline}</p>
        <ul className="mt-5 space-y-2.5">
          {activePillar.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
              <span className="mt-0.5 text-sky-600">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-2">
          {pillars.map((pillar, index) => (
            <button
              key={pillar.title}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show ${pillar.title}`}
              className={`h-1.5 flex-1 rounded-full transition ${
                index === active ? "bg-blue-900" : "bg-slate-200 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
