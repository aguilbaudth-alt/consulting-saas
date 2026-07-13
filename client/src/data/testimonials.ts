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
    name: "Tristan Lecomte",
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
      en: "LEANOVEX helped us achieve an important breakthrough within our CNC Engineering Operation. They played a key role in creating lasting improvements and engaging people across the organization. I would highly recommend LEANOVEX for any consulting work in this area.",
      fr: "LEANOVEX nous a aidés à réaliser une avancée importante dans notre activité d'ingénierie CNC. Ils ont joué un rôle clé dans la création d'améliorations durables et l'implication de toute l'organisation. Je recommande vivement LEANOVEX pour tout besoin de conseil dans ce domaine.",
    },
  },
  {
    name: "Greg Carmer",
    title: "",
    company: "Driessen",
    photo: "/testimonials/driessen-greg.jpg",
    quote: {
      en: "LEANOVEX provides a great service. Their ability to understand our specific needs and bring the team to a good resolution really stands out. Overall, a pleasant experience.",
      fr: "LEANOVEX offre un excellent service. Leur capacité à comprendre nos besoins spécifiques et à mener l'équipe vers une bonne résolution se démarque vraiment. Une expérience globalement très positive.",
    },
  },
  {
    name: "Sylvain Blin",
    title: "Industrial Site / Project Direction",
    company: "Renault Nissan",
    photo: "/testimonials/renault-nissan.jpg",
    quote: {
      en: "Our LEANOVEX engineer was a very effective partner, showing great skill and professional rigor on every topic he managed. Trust and professionalism are two qualities I valued highly working with him.",
      fr: "L'ingénieur LEANOVEX s'est révélé un partenaire très efficace, faisant preuve de grandes compétences et d'une rigueur professionnelle sur chaque sujet traité. La confiance et le professionnalisme sont deux qualités que j'ai particulièrement appréciées chez lui.",
    },
  },
];
