export type Language = "en" | "fr";

interface PillarText {
  title: string;
  tagline: string;
  items: string[];
}

export interface Translations {
  nav: {
    about: string;
    signIn: string;
    welcomeBack: string;
    signOut: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
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
    metaTitle: string;
    metaDescription: string;
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
    metaTitle: string;
    metaDescription: string;
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
  testimonials: {
    title: string;
    subtitle: string;
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    name: string;
    role: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    ctaTitle: string;
    ctaButton: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: "About",
      signIn: "Already a client? Sign in",
      welcomeBack: "Welcome back,",
      signOut: "Sign out",
    },
    footer: {
      tagline: "Supplier quality audits & sourcing risk consulting across Asia",
      rights: "All rights reserved.",
    },
    home: {
      metaTitle: "Supplier Quality Audits & Sourcing Risk Consulting in Asia",
      metaDescription:
        "Independent supplier audits, factory inspections, and sourcing risk management across Asia. 20+ years of field experience, 500+ factories audited. Schedule a consultation.",
      heroTitle: "Supplier Risk Control in Asia",
      heroSubtitle: "Local and independent partner in Asia to reduce your manufacturing risks",
      scheduleConsultation: "Schedule a Consultation",
      downloadGuide: "Download Free Guide",
      pillarsTitle: "Four Pillars of Supplier Risk Control",
      pillarsSubtitle:
        "A structured approach covering the full supplier lifecycle, from selection to recovery.",
      years: "20+ years",
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
      metaTitle: "Free Supplier Audit Guide: 10 Red Flags Sourcing in Thailand",
      metaDescription:
        "Free supplier audit checklist: 10 red flags to spot before sourcing factories in Thailand, based on 500+ factory audits across Asia.",
      eyebrow: "Free Quality Audit Guide",
      title: "10 Red Flags When Sourcing Suppliers in Thailand",
      subtitle:
        "A free quality audit guide for manufacturing leaders. Spot the warning signs before they cost you a shipment, a client relationship, or your reputation.",
      years: "20+ years",
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
      metaTitle: "Schedule a Supplier Audit Consultation",
      metaDescription:
        "Talk to our supplier quality and sourcing risk experts about factory audits, supplier selection, and production readiness across Asia.",
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
    testimonials: {
      title: "What our clients say",
      subtitle: "Feedback from the teams we've worked with.",
    },
    about: {
      metaTitle: "About the Founder",
      metaDescription:
        "Antoine Guilbaud, founder of LEANOVEX: 20 years of manufacturing and operations leadership across Europe and Southeast Asia.",
      name: "Antoine Guilbaud",
      role: "Founder & Consultant, LEANOVEX",
      paragraph1:
        "Antoine Guilbaud is a manufacturing and operations leader with 20 years of experience managing complex factory ecosystems across Europe and Southeast Asia. His work has spanned automotive, aerospace, electronics, medical devices, and consumer goods, always with the same focus: scaling production, stabilizing quality, and closing the gap between engineering requirements and manufacturing execution.",
      paragraph2:
        "Over two decades, he has designed assembly processes for a new automotive plant, led Lean Manufacturing improvements on a major aircraft program, directed engineering and quality systems for a large-scale electronics plant, transferred a medical device production line into a new factory, and led manufacturing quality and new product introduction for a global consumer electronics manufacturer across multiple factories in Southeast Asia.",
      paragraph3:
        "He founded LEANOVEX in 2014 to bring that same combination of rigorous, standardized methodology and hands-on factory experience to companies sourcing and manufacturing in Asia. He is a certified ISO 9001 internal auditor, and a strong advocate of Lean, Agile, and data-driven decision making.",
      ctaTitle: "Facing supplier or manufacturing risk in Asia?",
      ctaButton: "Schedule a Consultation",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      signIn: "Déjà client ? Se connecter",
      welcomeBack: "Bon retour,",
      signOut: "Se déconnecter",
    },
    footer: {
      tagline: "Audits qualité fournisseurs et conseil en risque d'approvisionnement en Asie",
      rights: "Tous droits réservés.",
    },
    home: {
      metaTitle: "Audits Qualité Fournisseurs & Conseil en Risque d'Approvisionnement en Asie",
      metaDescription:
        "Audits fournisseurs indépendants, inspections d'usines et gestion du risque d'approvisionnement en Asie. 20+ ans d'expérience terrain, 500+ usines auditées. Planifiez une consultation.",
      heroTitle: "Maîtrise du risque fournisseur en Asie",
      heroSubtitle:
        "Partenaire local et indépendant en Asie pour réduire vos risques de fabrication",
      scheduleConsultation: "Planifier une consultation",
      downloadGuide: "Télécharger le guide gratuit",
      pillarsTitle: "Quatre piliers de la maîtrise du risque fournisseur",
      pillarsSubtitle:
        "Une approche structurée couvrant tout le cycle de vie du fournisseur, de la sélection à la remédiation.",
      years: "20+ ans",
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
      metaTitle: "Guide Gratuit : 10 Signaux d'Alerte Sourcing Fournisseurs en Thaïlande",
      metaDescription:
        "Checklist gratuite d'audit fournisseur : 10 signaux d'alerte à repérer avant de sourcer des usines en Thaïlande, basée sur 500+ audits d'usines en Asie.",
      eyebrow: "Guide d'audit qualité gratuit",
      title: "10 signaux d'alerte lors du sourcing de fournisseurs en Thaïlande",
      subtitle:
        "Un guide d'audit qualité gratuit pour les responsables de production. Repérez les signaux d'alerte avant qu'ils ne vous coûtent une expédition, une relation client ou votre réputation.",
      years: "20+ ans",
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
      metaTitle: "Planifier une Consultation d'Audit Fournisseur",
      metaDescription:
        "Échangez avec nos experts en audit qualité fournisseur et gestion du risque d'approvisionnement : audits d'usine, sélection fournisseur, préparation à la production en Asie.",
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
    testimonials: {
      title: "Ce que disent nos clients",
      subtitle: "Les retours des équipes avec lesquelles nous avons travaillé.",
    },
    about: {
      metaTitle: "À propos du fondateur",
      metaDescription:
        "Antoine Guilbaud, fondateur de LEANOVEX : 20 ans d'expérience en direction industrielle et opérations en Europe et en Asie du Sud-Est.",
      name: "Antoine Guilbaud",
      role: "Fondateur & Consultant, LEANOVEX",
      paragraph1:
        "Antoine Guilbaud est responsable industriel et opérations avec 20 ans d'expérience dans la gestion d'écosystèmes industriels complexes en Europe et en Asie du Sud-Est. Son parcours a couvert l'automobile, l'aéronautique, l'électronique, le dispositif médical et les biens de consommation, toujours avec le même objectif : monter en cadence la production, stabiliser la qualité, et faire le lien entre les exigences d'ingénierie et l'exécution industrielle.",
      paragraph2:
        "En vingt ans, il a conçu des processus d'assemblage pour une nouvelle usine automobile, mené des chantiers d'amélioration Lean sur un programme aéronautique majeur, dirigé l'ingénierie et les systèmes qualité d'une usine électronique de grande envergure, transféré une ligne de production de dispositifs médicaux vers une nouvelle usine, et piloté la qualité industrielle et l'introduction de nouveaux produits pour un fabricant mondial d'électronique grand public, à travers plusieurs usines en Asie du Sud-Est.",
      paragraph3:
        "Il a fondé LEANOVEX en 2014 pour apporter cette même combinaison de méthodologie rigoureuse et standardisée et d'expérience terrain aux entreprises qui sourcent et fabriquent en Asie. Il est auditeur interne certifié ISO 9001, et un fervent défenseur du Lean, de l'Agile et de la prise de décision fondée sur la donnée.",
      ctaTitle: "Face à un risque fournisseur ou industriel en Asie ?",
      ctaButton: "Planifier une consultation",
    },
  },
};
