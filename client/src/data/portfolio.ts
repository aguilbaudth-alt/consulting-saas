export interface PortfolioProject {
  slug: string;
  name: string;
  logo: string;
  sector?: string;
  summary?: string;
  supplierCategories?: string[];
  challenge?: string;
  approach?: string;
  results?: string[];
  description?: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: "chanel",
    name: "Chanel",
    logo: "/logos/chanel.png",
    sector: "Luxury goods",
    summary:
      "Independent HSSE auditor for Chanel's Sustainability Excellence Program (SEP), assessing supplier risk across the Asian supply chain.",
    supplierCategories: [
      "Gemstone & diamond cutting",
      "Watch components",
      "Packaging",
      "Metal components",
      "Acrylic & plastics",
      "Glass",
      "Retail display & lighting equipment",
      "Material dyeing & coloring",
    ],
    challenge:
      "As part of its Sustainability Excellence Program, Chanel needed independent, on-the-ground auditors able to assess Health & Safety, Social, and Environmental (HSSE) risk at supplier factories across Asia — combining a rigorous, standardized methodology with the cultural and operational fluency to work directly with local factory management.",
    approach:
      "Acted as an independent SEP-qualified auditor, running full-day, on-site HSSE audits: comprehensive factory walkthroughs covering safety, chemical handling and environmental processes, cross-checked against employee interviews and documentation review (contracts, payslips, licenses, risk assessments). Each audit was scored across Governance, Health & Safety, Social, and Environmental criteria, with findings and corrective action plans reported back to Chanel's purchasing teams and tracked through follow-up.",
    results: [
      "Delivered consistent, audit-grade HSSE assessments aligned with Chanel's SEP methodology",
      "Surfaced supplier risks early, before they reached shipments or the wider supply chain",
      "Supported Chanel's supplier accountability process with clear, actionable reporting",
    ],
  },
  { slug: "ba-sh", name: "ba&sh", logo: "/logos/ba-sh.png" },
  {
    slug: "cobra-advanced-composites",
    name: "Cobra Advanced Composites",
    logo: "/logos/cobra-advanced-composites.png",
  },
  { slug: "driessen", name: "Driessen", logo: "/logos/driessen.png" },
  { slug: "ista", name: "ISTA", logo: "/logos/ista.png" },
  { slug: "datamars", name: "DataMars", logo: "/logos/datamars.png" },
  { slug: "b-braun", name: "B.Braun", logo: "/logos/b-braun.png" },
  { slug: "renault-nissan", name: "Renault Nissan", logo: "/logos/renault-nissan.png" },
];
