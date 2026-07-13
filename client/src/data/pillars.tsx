export interface Pillar {
  title: string;
  tagline: string;
  items: string[];
  icon: JSX.Element;
}

const iconProps = {
  className: "h-7 w-7",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.75,
};

export const PILLARS: Pillar[] = [
  {
    title: "Supplier Selection",
    tagline: "Avoid choosing the wrong supplier",
    items: ["Factory on-site verification", "RFQ support", "HSE/ESG compliance check"],
    icon: (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    title: "Production Readiness",
    tagline: "Ensure successful ramp-up",
    items: ["NPI local support", "Pilot production supervision", "Run-at-rate validation"],
    icon: (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 19.5l4-1 10-10a2.121 2.121 0 00-3-3l-10 10-1 4zM14.5 6.5l3 3"
        />
      </svg>
    ),
  },
  {
    title: "Monitoring & Improvement",
    tagline: "Detect risks before they escalate",
    items: ["Periodic supplier audit", "KPI monitoring", "ESG checks"],
    icon: (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6m-9 0h14M5 19V9a1 1 0 011-1h1M19 19V6a1 1 0 00-1-1h-1"
        />
      </svg>
    ),
  },
  {
    title: "Crisis & Recovery",
    tagline: "Resolve supplier issues quickly",
    items: ["Root cause investigation", "Supplier recovery support", "Corrective action verification"],
    icon: (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m0 3.75h.008M4.93 19h14.14c1.4 0 2.26-1.53 1.56-2.75L13.56 4.75c-.7-1.22-2.42-1.22-3.12 0L3.37 16.25C2.67 17.47 3.53 19 4.93 19z"
        />
      </svg>
    ),
  },
];
