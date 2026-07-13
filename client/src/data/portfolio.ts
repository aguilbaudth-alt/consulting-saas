export interface LocalizedText {
  en: string;
  fr: string;
}

export interface LocalizedList {
  en: string[];
  fr: string[];
}

export interface PortfolioProject {
  slug: string;
  name: string;
  logo: string;
  photo?: string;
  sector?: LocalizedText;
  summary?: LocalizedText;
  supplierCategories?: LocalizedList;
  challenge?: LocalizedText;
  approach?: LocalizedText;
  results?: LocalizedList;
  description?: LocalizedText;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: "pur",
    name: "PUR",
    logo: "/logos/pur.svg",
    sector: {
      en: "Environmental & social impact consulting",
      fr: "Conseil en impact environnemental et social",
    },
    summary: {
      en: "Independent HSSE auditor assessing supplier risk across Asia for a French luxury goods client (name confidential under NDA), through PUR's sustainability audit program.",
      fr: "Auditeur HSSE indépendant, évaluant le risque fournisseur en Asie pour un client français du secteur du luxe (nom confidentiel sous accord de confidentialité), dans le cadre du programme d'audit de durabilité de PUR.",
    },
    supplierCategories: {
      en: [
        "Gemstone & diamond cutting",
        "Watch components",
        "Packaging",
        "Metal components",
        "Acrylic & plastics",
        "Glass",
        "Retail display & lighting equipment",
        "Material dyeing & coloring",
      ],
      fr: [
        "Taille de pierres précieuses et diamants",
        "Composants horlogers",
        "Emballages",
        "Composants métalliques",
        "Acrylique et plastiques",
        "Verre",
        "Éclairage et équipement de présentation retail",
        "Teinture et coloration de matériaux",
      ],
    },
    challenge: {
      en: "A French luxury goods brand, working through PUR's sustainability audit program, needed independent, on-the-ground auditors able to assess Health & Safety, Social, and Environmental (HSSE) risk at its supplier factories across Asia, combining a rigorous, standardized methodology with the cultural and operational fluency to work directly with local factory management.",
      fr: "Une marque de luxe française, opérant via le programme d'audit de durabilité de PUR, avait besoin d'auditeurs indépendants de terrain, capables d'évaluer les risques Santé & Sécurité, Sociaux et Environnementaux (HSSE) dans les usines de ses fournisseurs à travers l'Asie, en combinant une méthodologie rigoureuse et standardisée avec la maîtrise culturelle et opérationnelle nécessaire pour travailler directement avec les directions d'usine locales.",
    },
    approach: {
      en: "Acted as an independent HSSE auditor within PUR's program, running full-day, on-site audits of the client's suppliers: comprehensive factory walkthroughs covering safety, chemical handling and environmental processes, cross-checked against employee interviews and documentation review (contracts, payslips, licenses, risk assessments). Each audit was scored across Governance, Health & Safety, Social, and Environmental criteria, with findings and corrective action plans reported back to PUR and tracked through follow-up.",
      fr: "Intervention en tant qu'auditeur HSSE indépendant dans le cadre du programme de PUR, réalisant des audits sur site d'une journée complète auprès des fournisseurs du client : visites approfondies des usines couvrant la sécurité, la gestion des produits chimiques et les processus environnementaux, recoupées avec des entretiens salariés et une revue documentaire (contrats, fiches de paie, licences, évaluations des risques). Chaque audit était noté selon les critères Gouvernance, Santé & Sécurité, Social et Environnement, avec des constats et plans d'action correctifs transmis à PUR et suivis dans le temps.",
    },
    results: {
      en: [
        "Delivered consistent, audit-grade HSSE assessments aligned with PUR's methodology",
        "Surfaced supplier risks early, before they reached shipments or the wider supply chain",
        "Supported PUR's supplier accountability process with clear, actionable reporting",
      ],
      fr: [
        "Livraison d'évaluations HSSE rigoureuses et cohérentes, alignées avec la méthodologie de PUR",
        "Détection précoce des risques fournisseurs, avant qu'ils n'affectent les expéditions ou l'ensemble de la chaîne d'approvisionnement",
        "Accompagnement du processus de responsabilisation des fournisseurs de PUR grâce à des rapports clairs et exploitables",
      ],
    },
  },
  {
    slug: "ba-sh",
    name: "ba&sh",
    logo: "/logos/ba-sh.png",
    sector: { en: "Fashion & accessories", fr: "Mode et accessoires" },
    summary: {
      en: "Independent SSCA auditor for ba&sh's supply chain, assessing supplier sustainability and social compliance in Asia.",
      fr: "Auditeur SSCA indépendant pour la chaîne d'approvisionnement de ba&sh, évaluant la durabilité et la conformité sociale des fournisseurs en Asie.",
    },
    supplierCategories: {
      en: ["Jewelry & metal accessories manufacturing"],
      fr: ["Fabrication de bijoux et accessoires métalliques"],
    },
    challenge: {
      en: "ba&sh needed an independent, standardized assessment of its suppliers' ethical, social, and environmental practices, going beyond a simple checklist to understand where real risk sat and how much room for improvement each supplier had.",
      fr: "ba&sh avait besoin d'une évaluation indépendante et standardisée des pratiques éthiques, sociales et environnementales de ses fournisseurs, allant au-delà d'une simple check-list pour comprendre où se situait le risque réel et la marge de progrès de chaque fournisseur.",
    },
    approach: {
      en: "Conducted on-site audits using Pur Projet's Sustainable Supply Chain Audit (SSCA)® methodology, combining factory walkthroughs, structured interviews with management and employees, and documentation review. Each supplier was scored across three pillars (Governance & Ethics, People, and Ecosystems), benchmarked against international standards including ILO conventions and SA8000.",
      fr: "Réalisation d'audits sur site selon la méthodologie Sustainable Supply Chain Audit (SSCA)® de Pur Projet, combinant visites d'usine, entretiens structurés avec la direction et les employés, et revue documentaire. Chaque fournisseur était noté selon trois piliers (Gouvernance & Éthique, Social, Écosystèmes), en référence aux standards internationaux dont les conventions de l'OIT et la norme SA8000.",
    },
    results: {
      en: [
        "Delivered clear, benchmarked visibility into supplier practices across governance, labor, and environmental dimensions",
        "Identified concrete, prioritized corrective actions for each supplier",
        "Gave ba&sh a structured basis for tracking supplier improvement over time",
      ],
      fr: [
        "Apport d'une visibilité claire et objectivée sur les pratiques fournisseurs en matière de gouvernance, social et environnement",
        "Identification d'actions correctives concrètes et priorisées pour chaque fournisseur",
        "Mise en place d'une base structurée permettant à ba&sh de suivre l'amélioration des fournisseurs dans le temps",
      ],
    },
  },
  {
    slug: "cobra-advanced-composites",
    name: "Cobra Advanced Composites",
    logo: "/logos/cobra-advanced-composites.png",
  },
  {
    slug: "driessen",
    name: "Driessen",
    logo: "/logos/driessen.png",
    photo: "/portfolio/driessen-kanban.webp",
    sector: {
      en: "Aerospace manufacturing — Lean & continuous improvement",
      fr: "Industrie aéronautique — Lean et amélioration continue",
    },
    summary: {
      en: "Lean transformation of Driessen's Front End Engineering section, moving from a full process audit to a visual Kanban system that keeps 200+ simultaneous projects on track.",
      fr: "Transformation Lean de la section Front End Engineering de Driessen, passant d'un audit de processus complet à un système Kanban visuel permettant de piloter plus de 200 projets simultanés.",
    },
    challenge: {
      en: "Driessen's Front End Engineering (FEE) section — around 80 engineers, technicians, and project leaders handling pricing, prototyping, validation, and the transfer of new parts to mass production — was running more than 200 projects at once. The team needed a clearer workflow, and a way to keep the new way of working alive day-to-day rather than have it fade once the consultant left.",
      fr: "La section Front End Engineering (FEE) de Driessen, environ 80 ingénieurs, techniciens et chefs de projet en charge du chiffrage, du prototypage, de la validation et du transfert des nouvelles pièces vers la production de série, gérait plus de 200 projets en simultané. L'équipe avait besoin d'un flux de travail plus clair, et d'un moyen de faire vivre la nouvelle organisation au quotidien plutôt que de la voir s'estomper une fois le consultant parti.",
    },
    approach: {
      en: "Audited the FEE section using Value Stream Mapping (VSM), which led to a redesigned workflow and a simpler, more user-friendly documentation system. Because a new system only sticks if people can see it working, a visual management tool was added on top: a physical Kanban board giving the whole team a clear, shared view of project status, workload, and bottlenecks at a glance.",
      fr: "Audit de la section FEE à l'aide d'un VSM (Value Stream Mapping), débouchant sur un nouveau flux de travail et un système documentaire plus simple et plus ergonomique. Un nouveau système ne tient dans la durée que si les équipes en voient concrètement les effets : un outil de management visuel a donc été ajouté, sous la forme d'un tableau Kanban physique donnant à toute l'équipe une vision claire et partagée de l'état des projets, de la charge de travail et des points de blocage.",
    },
    results: {
      en: [
        "Shorter project lead times and better-balanced workload across engineers and technicians",
        "Faster, more structured problem-solving",
        "Manufacturing and quality requirements standardized and systematically carried through to production",
        "Better PPAP coordination with internal processes",
        "SPC and QA records standardized and consistently completed on the production floor",
        "Higher production yield, shorter changeover times, and a more proactive mindset among operators",
      ],
      fr: [
        "Réduction des délais projets et meilleur équilibrage de la charge entre ingénieurs et techniciens",
        "Résolution de problèmes plus rapide et plus structurée",
        "Exigences qualité et production standardisées et systématiquement transmises à la production",
        "Meilleure coordination PPAP avec les processus internes",
        "Enregistrements SPC et QA standardisés et systématiquement complétés en production",
        "Rendement de production en hausse, temps de changement de série réduits, et posture plus proactive des opérateurs",
      ],
    },
  },
  { slug: "ista", name: "ISTA", logo: "/logos/ista.png" },
  { slug: "datamars", name: "DataMars", logo: "/logos/datamars.png" },
  { slug: "b-braun", name: "B.Braun", logo: "/logos/b-braun.png" },
  { slug: "renault-nissan", name: "Renault Nissan", logo: "/logos/renault-nissan.png" },
];
