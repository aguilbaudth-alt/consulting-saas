export interface PortfolioProject {
  slug: string;
  name: string;
  logo: string;
  description?: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  { slug: "chanel", name: "Chanel", logo: "/logos/chanel.png" },
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
