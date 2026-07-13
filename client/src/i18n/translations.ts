export type Language = "en" | "fr";

interface PillarText {
  title: string;
  tagline: string;
  items: string[];
}

export interface Translations {
  nav: {
    signIn: string;
    welcomeBack: string;
    signOut: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    scheduleConsultation: string;
    downloadGuide: string;
    pillarsTitle: string;
    pillarsSubtitle: string;
    years: string;
    yearsSub: string;
    factories: string;
    factoriesSub: string;
    trustedBy: string;
    portfolioTitle: string;
    portfolioSubtitle: string;
    ctaTitle: string;
  };
  wheel: {
    clickPillar: string;
  };
  pillars: {
    "supplier-selection": PillarText;
    "production-readiness": PillarText;
    "monitoring-improvement": PillarText;
    "crisis-recovery": PillarText;
  };
  auditGuide: {
    eyebrow: string;
    title: string;
    subtitle: string;
    years: string;
    yearsSub: string;
    factories: string;
    factoriesSub: string;
    getGuideCta: string;
    insideTitle: string;
    insideSubtitle: string;
    redFlags: string[];
    formTitle: string;
    formSubtitle: string;
    fieldName: string;
    fieldEmail: string;
    fieldCompany: string;
    fieldPhone: string;
    optional: string;
    submitting: string;
    submit: string;
    requiredError: string;
    genericError: string;
    successTitle: string;
    successBody: string;
    successBodyEnd: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  };
  contact: {
    title: string;
    subtitle: string;
    fieldName: string;
    fieldEmail: string;
    fieldCompany: string;
    fieldMessage: string;
    messagePlaceholder: string;
    submitting: string;
    submit: string;
    requiredError: string;
    genericError: string;
    successTitle: string;
    successBody: string;
    successBodyMid: string;
    successBodyEnd: string;
  };
  portfolio: {
    back: string;
    challenge: string;
    approach: string;
    results: string;
    ctaTitle: string;
    ctaButton: string;
    comingSoon: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      signIn: "Already a client? Sign in",
      welcomeBack: "Welcome back,",
      signOut: "Sign out",
    },
    footer: {
      tagline: "Supplier quality audits & sourcing risk consulting across Asia",
      rights: "All rights reserved.",
    },
    home: {
      heroTitle: "Supplier Risk Control in Asia",
      heroSubtitle: "Local and independent partner in Asia to reduce your manufacturing risks",
      scheduleConsultation: "Schedule a Consultation",
      downloadGuide: "Download Free Guide",
      pillarsTitle: "Four Pillars of Supplier Risk Control",
      pillarsSubtitle:
        "A structured approach covering the full supplier lifecycle, from selection to recovery.",
      years: "16+ years",
      yearsSub: "of field experience in Asia",
      factories: "500+ factories",
      factoriesSub: "audited across Asia",
      trustedBy:
        "Trusted by corporate buyers, sourcing managers, e-commerce brands, importers & distributors",
      portfolioTitle: "Sample Projects Portfolio",
      portfolioSubtitle: "Trusted by leading brands and manufacturers",
      ctaTitle: "Ready to strengthen your supply chain?",
    },
    wheel: {
      clickPillar: "Click a pillar to see the details",
    },
    pillars: {
      "supplier-selection": {
        title: "Supplier Selection",
        tagline: "Avoid choosing the wrong supplier",
        items: ["Factory on-site verification", "RFQ support", "HSE/ESG compliance check"],
      },
      "production-readiness": {
        title: "Production Readiness",
        tagline: "Ensure successful ramp-up",
        items: [
          "NPI local support",
          "Pilot production supervision",
          "Run-at-rate validation",
        ],
      },
      "monitoring-improvement": {
        title: "Monitoring & Improvement",
        tagline: "Detect risks before they escalate",
        items: ["Periodic supplier audit", "KPI monitoring", "ESG checks"],
      },
      "crisis-recovery": {
        title: "Crisis & Recovery",
        tagline: "Resolve supplier issues quickly",
        items: [
          "Root cause investigation",
          "Supplier recovery support",
          "Corrective action verification",
        ],
      },
    },
    auditGuide: {
      eyebrow: "Free Quality Audit Guide",
      title: "10 Red Flags When Sourcing Suppliers in Thailand",
      subtitle:
        "A free quality audit guide for manufacturing leaders. Spot the warning signs before they cost you a shipment, a client relationship, or your reputation.",
      years: "16+ years",
      yearsSub: "of field experience in Asia",
      factories: "500+ factories",
      factoriesSub: "audited across Thailand",
      getGuideCta: "Get the Free Guide",
      insideTitle: "What's Inside the Guide",
      insideSubtitle:
        "Ten warning signs, drawn from hundreds of factory audits, that reveal supplier risk before you place a purchase order.",
      redFlags: [
        "Unrealistic lead time guarantees",
        "Inconsistent production records",
        "Excessive subcontracting",
        "Poor communication with technical staff",
        "No documented quality control process",
        "Owner handles everything personally",
        "No material or lot traceability",
        "Blind agreement to all requests",
        "High operator turnover",
        "Pushing for big orders too fast",
      ],
      formTitle: "Get Your Free Guide",
      formSubtitle: "Enter your details and we'll send the guide straight to your inbox.",
      fieldName: "Name",
      fieldEmail: "Email",
      fieldCompany: "Company Name",
      fieldPhone: "Phone",
      optional: "(optional)",
      submitting: "Sending...",
      submit: "Get Free Guide",
      requiredError: "Please fill in your name, email, and company name.",
      genericError: "Something went wrong. Please try again in a moment.",
      successTitle: "You're all set!",
      successBody: "Check your inbox at",
      successBodyEnd: "your free guide is on its way.",
      ctaTitle: "Ready for a Professional Supplier Audit?",
      ctaBody:
        "Let our team assess your current suppliers and flag risks before they become problems.",
      ctaButton: "Schedule a Consultation",
    },
    contact: {
      title: "Schedule a Consultation",
      subtitle: "Tell us a bit about your supply chain and we'll follow up within one business day.",
      fieldName: "Name",
      fieldEmail: "Email",
      fieldCompany: "Company Name",
      fieldMessage: "Message",
      messagePlaceholder: "What supplier challenges are you facing?",
      submitting: "Sending...",
      submit: "Request Consultation",
      requiredError: "Please fill in all fields.",
      genericError: "Something went wrong. Please try again in a moment.",
      successTitle: "Message received",
      successBody: "Thanks,",
      successBodyMid: "We've sent a confirmation to",
      successBodyEnd: "and will be in touch shortly.",
    },
    portfolio: {
      back: "Back to portfolio",
      challenge: "The Challenge",
      approach: "Our Approach",
      results: "Results",
      ctaTitle: "Facing similar supplier risks?",
      ctaButton: "Schedule a Consultation",
      comingSoon: "Project description coming soon.",
    },
  },
  fr: {
    nav: {
      signIn: "Déjà client ? Se connecter",
      welcomeBack: "Bon retour,",
      signOut: "Se déconnecter",
    },
    footer: {
      tagline: "Audits qualité fournisseurs et conseil en risque d'approvisionnement en Asie",
      rights: "Tous droits réservés.",
    },
    home: {
      heroTitle: "Maîtrise du risque fournisseur en Asie",
      heroSubtitle:
        "Partenaire local et indépendant en Asie pour réduire vos risques de fabrication",
      scheduleConsultation: "Planifier une consultation",
      downloadGuide: "Télécharger le guide gratuit",
      pillarsTitle: "Quatre piliers de la maîtrise du risque fournisseur",
      pillarsSubtitle:
        "Une approche structurée couvrant tout le cycle de vie du fournisseur, de la sélection à la remédiation.",
      years: "16+ ans",
      yearsSub: "d'expérience terrain en Asie",
      factories: "500+ usines",
      factoriesSub: "auditées à travers l'Asie",
      trustedBy:
        "La confiance d'acheteurs, responsables sourcing, marques e-commerce, importateurs et distributeurs",
      portfolioTitle: "Exemples de projets",
      portfolioSubtitle: "La confiance des plus grandes marques et fabricants",
      ctaTitle: "Prêt à renforcer votre chaîne d'approvisionnement ?",
    },
    wheel: {
      clickPillar: "Cliquez sur un pilier pour voir le détail",
    },
    pillars: {
      "supplier-selection": {
        title: "Sélection du fournisseur",
        tagline: "Évitez de choisir le mauvais fournisseur",
        items: [
          "Vérification sur site de l'usine",
          "Accompagnement RFQ",
          "Contrôle de conformité HSE/ESG",
        ],
      },
      "production-readiness": {
        title: "Préparation à la production",
        tagline: "Assurez une montée en cadence réussie",
        items: [
          "Support local NPI",
          "Supervision de la production pilote",
          "Validation du run-at-rate",
        ],
      },
      "monitoring-improvement": {
        title: "Suivi et amélioration",
        tagline: "Détectez les risques avant qu'ils ne s'aggravent",
        items: ["Audit fournisseur périodique", "Suivi des KPI", "Contrôles ESG"],
      },
      "crisis-recovery": {
        title: "Gestion de crise et remédiation",
        tagline: "Résolvez rapidement les problèmes fournisseurs",
        items: [
          "Analyse des causes racines",
          "Accompagnement à la remédiation",
          "Vérification des actions correctives",
        ],
      },
    },
    auditGuide: {
      eyebrow: "Guide d'audit qualité gratuit",
      title: "10 signaux d'alerte lors du sourcing de fournisseurs en Thaïlande",
      subtitle:
        "Un guide d'audit qualité gratuit pour les responsables de production. Repérez les signaux d'alerte avant qu'ils ne vous coûtent une expédition, une relation client ou votre réputation.",
      years: "16+ ans",
      yearsSub: "d'expérience terrain en Asie",
      factories: "500+ usines",
      factoriesSub: "auditées en Thaïlande",
      getGuideCta: "Obtenir le guide gratuit",
      insideTitle: "Le contenu du guide",
      insideSubtitle:
        "Dix signaux d'alerte, tirés de centaines d'audits d'usines, qui révèlent le risque fournisseur avant de passer commande.",
      redFlags: [
        "Délais de livraison irréalistes",
        "Registres de production incohérents",
        "Sous-traitance excessive",
        "Mauvaise communication avec les équipes techniques",
        "Absence de processus qualité documenté",
        "Le propriétaire gère tout personnellement",
        "Absence de traçabilité des lots",
        "Accord aveugle à toutes les demandes",
        "Turnover élevé des opérateurs",
        "Pression pour des commandes trop importantes trop vite",
      ],
      formTitle: "Obtenez votre guide gratuit",
      formSubtitle: "Entrez vos coordonnées et nous vous enverrons le guide par email.",
      fieldName: "Nom",
      fieldEmail: "Email",
      fieldCompany: "Nom de l'entreprise",
      fieldPhone: "Téléphone",
      optional: "(facultatif)",
      submitting: "Envoi en cours...",
      submit: "Obtenir le guide gratuit",
      requiredError: "Merci de renseigner votre nom, email et le nom de votre entreprise.",
      genericError: "Une erreur est survenue. Merci de réessayer dans un instant.",
      successTitle: "C'est fait !",
      successBody: "Vérifiez votre boîte mail à l'adresse",
      successBodyEnd: "votre guide gratuit arrive.",
      ctaTitle: "Prêt pour un audit fournisseur professionnel ?",
      ctaBody:
        "Laissez notre équipe évaluer vos fournisseurs actuels et détecter les risques avant qu'ils ne deviennent des problèmes.",
      ctaButton: "Planifier une consultation",
    },
    contact: {
      title: "Planifier une consultation",
      subtitle:
        "Parlez-nous de votre chaîne d'approvisionnement, nous reviendrons vers vous sous un jour ouvré.",
      fieldName: "Nom",
      fieldEmail: "Email",
      fieldCompany: "Nom de l'entreprise",
      fieldMessage: "Message",
      messagePlaceholder: "Quels défis fournisseurs rencontrez-vous ?",
      submitting: "Envoi en cours...",
      submit: "Demander une consultation",
      requiredError: "Merci de remplir tous les champs.",
      genericError: "Une erreur est survenue. Merci de réessayer dans un instant.",
      successTitle: "Message reçu",
      successBody: "Merci,",
      successBodyMid: "Nous avons envoyé une confirmation à",
      successBodyEnd: "et reviendrons vers vous rapidement.",
    },
    portfolio: {
      back: "Retour au portfolio",
      challenge: "Le défi",
      approach: "Notre approche",
      results: "Résultats",
      ctaTitle: "Confronté à des risques fournisseurs similaires ?",
      ctaButton: "Planifier une consultation",
      comingSoon: "Description du projet à venir.",
    },
  },
};
