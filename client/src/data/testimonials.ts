import type { LocalizedText } from "./portfolio";

export interface Testimonial {
  name: string | LocalizedText;
  title: string;
  company: string;
  photo: string;
  quote: LocalizedText;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: {
      en: "LEANOVEX Engineering Team",
      fr: "Équipe ingénieurs LEANOVEX",
    },
    title: "",
    company: "PUR",
    photo: "/testimonials/pur.jpg",
    quote: {
      en: "[Placeholder quote — to be replaced with the real PUR testimonial.]",
      fr: "[Texte provisoire — à remplacer par le vrai témoignage PUR.]",
    },
  },
  {
    name: "Steve Polaski",
    title: "Business Executive",
    company: "Driessen",
    photo: "/testimonials/driessen-steve.jpg",
    quote: {
      en: "LEANOVEX is a professional consulting firm that Driessen used to help us achieve an important breakthrough within our CNC Engineering Operation. They started by improving the process to coordinate different functions such as Customer Support, Project Management, Process Engineering, Production, Technical Support, QA and Lean. In order to sustain and continuously improve the system, they designed and implemented a Kanban board that is currently used daily for visual and overall monitoring of all project status (usually more than 150 projects simultaneously), monitoring project KPIs such as lead time, inventory and on-time delivery, and identifying bottlenecks and priorities to allocate resources where needed most. LEANOVEX played a key role in creating lasting improvements and engaging people from different functions and sections through effective daily discussion. I would highly recommend LEANOVEX for any consulting work required in this area.",
      fr: "LEANOVEX est un cabinet de conseil professionnel auquel Driessen a fait appel pour nous aider à réaliser une avancée importante dans notre activité d'ingénierie CNC. Ils ont commencé par améliorer le processus de coordination entre différentes fonctions telles que le support client, la gestion de projet, l'ingénierie process, la production, le support technique, la qualité et le lean. Pour pérenniser et améliorer continuellement le système, ils ont conçu et mis en place un tableau Kanban utilisé quotidiennement pour le suivi visuel de l'ensemble des projets (souvent plus de 150 simultanément), le suivi des indicateurs clés comme les délais, les stocks et le respect des délais de livraison, ainsi que l'identification des goulots d'étranglement et des priorités pour allouer les ressources là où elles sont le plus nécessaires. LEANOVEX a joué un rôle clé dans la création d'améliorations durables et dans l'implication des équipes de différentes fonctions grâce à des échanges quotidiens efficaces. Je recommande vivement LEANOVEX pour tout besoin de conseil dans ce domaine.",
    },
  },
  {
    name: "Greg Carmer",
    title: "",
    company: "Driessen",
    photo: "/testimonials/driessen-greg.jpg",
    quote: {
      en: "LEANOVEX provides a great service. Their ability to understand our specific needs and bring the team to a good resolution is proven in the sound process and daily management routines established. LEANOVEX was able to work within the guidelines given and provide a solution that helped our team better manage their workload and get a much better visual understanding of their planning, their bottlenecks, and their process. Overall a pleasant experience.",
      fr: "LEANOVEX offre un excellent service. Leur capacité à comprendre nos besoins spécifiques et à amener l'équipe vers une bonne résolution se vérifie dans la solidité des processus et des routines de management quotidien mis en place. LEANOVEX a su travailler dans le cadre donné et proposer une solution qui a aidé notre équipe à mieux gérer sa charge de travail et à obtenir une bien meilleure visibilité sur sa planification, ses points de blocage et son processus. Une expérience globalement très positive.",
    },
  },
  {
    name: "Sylvain Blin",
    title: "Industrial Site / Project Direction",
    company: "Renault Nissan",
    photo: "/testimonials/renault-nissan.jpg",
    quote: {
      en: "LEANOVEX was engaged to act as head of the assembly process for the chassis line at Renault Nissan for one year. On this engagement, the team was a very effective partner from several points of view and showed great skill. Having worked closely with them, I particularly appreciated their ability to manage a number of topics in parallel, all with professional rigor and without defects. LEANOVEX was consistently reliable and responsible in their work and in their relationships with our teams. Their technical quality, relevance, and perseverance made them a major asset to our Assembly Methods department. Trust and professionalism are two qualities I valued highly in working with them. I strongly recommend LEANOVEX's services, and I am confident they can be a valuable asset for your company.",
      fr: "LEANOVEX est intervenu pendant un an chez Renault Nissan en tant que responsable du processus d'assemblage de la ligne châssis. Sur cette mission, l'équipe s'est révélée un partenaire très efficace à plusieurs égards et a fait preuve de grandes compétences. En travaillant étroitement avec eux, j'ai particulièrement apprécié leur capacité à gérer plusieurs sujets en parallèle, avec une rigueur professionnelle et sans défaut. LEANOVEX a toujours été fiable et responsable, aussi bien dans son travail que dans sa relation avec nos équipes. Leur qualité technique, leur pertinence et leur persévérance en ont fait un atout majeur pour notre département méthodes assemblage. La confiance et le professionnalisme sont deux qualités auxquelles je tiens particulièrement et que j'ai retrouvées chez eux. Je recommande vivement les services de LEANOVEX et suis convaincu qu'ils peuvent être un atout précieux pour votre entreprise.",
    },
  },
];
