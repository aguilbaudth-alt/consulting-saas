import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { PillarIcon } from "../data/pillars";

const NODE_POSITIONS = [
  { top: "1%", left: "50%" }, // top
  { top: "50%", left: "99%" }, // right
  { top: "99%", left: "50%" }, // bottom
  { top: "50%", left: "1%" }, // left
];

const ARROW_ANGLES = [45, 135, 225, 315];

interface PillarsWheelProps {
  pillars: PillarIcon[];
}

export const PillarsWheel = ({ pillars }: PillarsWheelProps) => {
  const [active, setActive] = useState(0);
  const { t } = useLanguage();
  const activePillar = pillars[active];
  const activeText = t.pillars[activePillar.id];

  return (
    <div className="mx-auto mt-12 max-w-lg">
      <div className="relative mx-auto aspect-square w-full">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="text-blue-200"
          />
          {ARROW_ANGLES.map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x = 50 + 48 * Math.sin(rad);
            const y = 50 - 48 * Math.cos(rad);
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

        <div
          key={activePillar.id}
          className="absolute left-1/2 top-1/2 flex h-64 w-64 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-blue-50 px-8 text-center sm:h-96 sm:w-96 sm:px-14"
        >
          <span className="flex h-7 w-7 items-center justify-center text-blue-800 sm:h-9 sm:w-9">
            {activePillar.icon}
          </span>
          <h3 className="mt-1.5 text-base font-bold leading-tight text-blue-900 sm:mt-2 sm:text-lg">
            {activeText.title}
          </h3>
          <p className="mt-1 text-xs italic leading-snug text-slate-500 sm:mt-1.5 sm:text-sm">
            {activeText.tagline}
          </p>
          <div className="mt-2.5 w-16 border-t border-blue-200 sm:mt-3 sm:w-20" />
          <ul className="mt-2.5 space-y-1 sm:mt-3 sm:space-y-1.5">
            {activeText.items.map((item) => (
              <li key={item} className="text-[11px] leading-snug text-slate-600 sm:text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {pillars.map((pillar, index) => {
          const pos = NODE_POSITIONS[index];
          const isActive = index === active;
          return (
            <button
              key={pillar.id}
              type="button"
              onClick={() => setActive(index)}
              style={{ top: pos.top, left: pos.left }}
              className={`absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 shadow-sm transition sm:h-20 sm:w-20 ${
                isActive
                  ? "border-blue-900 bg-blue-900 text-white"
                  : "border-slate-200 bg-white text-blue-800 hover:border-blue-300"
              }`}
              aria-pressed={isActive}
            >
              <span className="h-4 w-4 sm:h-7 sm:w-7">{pillar.icon}</span>
              <span
                className={`absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-bold shadow-sm sm:h-6 sm:w-6 sm:text-xs ${
                  isActive ? "bg-white text-blue-900" : "bg-blue-900 text-white"
                }`}
              >
                {index + 1}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-12 text-center text-xs font-medium text-slate-400">
        {t.wheel.clickPillar}
      </p>

      <div className="mt-4 flex justify-center gap-2">
        {pillars.map((pillar, index) => (
          <button
            key={pillar.id}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show ${t.pillars[pillar.id].title}`}
            className={`h-1.5 w-8 rounded-full transition ${
              index === active ? "bg-blue-900" : "bg-slate-200 hover:bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
