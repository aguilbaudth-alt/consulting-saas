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
    slug: "pur",
    name: "PUR",
    logo: "/logos/pur.svg",
    sector: "Environmental & social impact consulting",
    summary:
      "Independent HSSE auditor for PUR's supply chain sustainability programs, assessing supplier risk across Asia on behalf of an ultra-luxury goods client (name confidential under NDA).",
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
      "PUR needed independent, on-the-ground auditors able to assess Health & Safety, Social, and Environmental (HSSE) risk at supplier factories across Asia on behalf of an ultra-luxury brand in its client portfolio (client name withheld under confidentiality agreement) — combining a rigorous, standardized methodology with the cultural and operational fluency to work directly with local factory management.",
    approach:
      "Acted as an independent HSSE auditor for PUR, running full-day, on-site audits: comprehensive factory walkthroughs covering safety, chemical handling and environmental processes, cross-checked against employee interviews and documentation review (contracts, payslips, licenses, risk assessments). Each audit was scored across Governance, Health & Safety, Social, and Environmental criteria, with findings and corrective action plans reported back to PUR and tracked through follow-up.",
    results: [
      "Delivered consistent, audit-grade HSSE assessments aligned with PUR's methodology",
      "Surfaced supplier risks early, before they reached shipments or the wider supply chain",
      "Supported PUR's supplier accountability process with clear, actionable reporting",
    ],
  },
  {
    slug: "ba-sh",
    name: "ba&sh",
    logo: "/logos/ba-sh.png",
    sector: "Fashion & accessories",
    summary:
      "Independent SSCA auditor for ba&sh's supply chain, assessing supplier sustainability and social compliance in Asia.",
    supplierCategories: ["Jewelry & metal accessories manufacturing"],
    challenge:
      "ba&sh needed an independent, standardized assessment of its suppliers' ethical, social, and environmental practices — going beyond a simple checklist to understand where real risk sat and how much room for improvement each supplier had.",
    approach:
      "Conducted on-site audits using Pur Projet's Sustainable Supply Chain Audit (SSCA)® methodology, combining factory walkthroughs, structured interviews with management and employees, and documentation review. Each supplier was scored across three pillars — Governance & Ethics, People, and Ecosystems — benchmarked against international standards including ILO conventions and SA8000.",
    results: [
      "Delivered clear, benchmarked visibility into supplier practices across governance, labor, and environmental dimensions",
      "Identified concrete, prioritized corrective actions for each supplier",
      "Gave ba&sh a structured basis for tracking supplier improvement over time",
    ],
  },
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
