import type { LucideIcon } from "lucide-react";
import languageLevels from "./languages.json";
import {
  BookOpen,
  BrainCircuit,
  Bug,
  Code2,
  Database,
  Globe2,
  Layers3,
  LayoutTemplate,
  MapPin,
  MonitorSmartphone,
  Smartphone,
  ShoppingBag,
  TrendingUp,
  Wrench
} from "lucide-react";

export type Lang = "fr" | "en";

export type Tech = {
  name: string;
  logo?: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Project = {
  id: "wathaqli" | "najah";
  title: string;
  arabicName: string;
  type: string;
  category: string;
  summary: string;
  detail: string;
  visualNote: string;
  image: string;
  tech: Tech[];
  accent: "bluegreen" | "najah";
  bullets: string[];
};

export const profile = {
  name: "Sid'Taher Oumar",
  role: "Full-Stack Developer · Web & Mobile",
  location: "Nouakchott, Mauritania",
  email: "24202@supnum.mr",
  personalEmail: "omarsiditaher@gmail.com",
  phone: "+222 49 14 14 33",
  github: "https://github.com/Sididaher",
  linkedin: "https://www.linkedin.com/in/siditaher-omar-5637bb336",
  portrait: "/images/siditaher-oumar-portrait.png",
  cv: "/cv/siditaher-oumar-cv.pdf"
};

export const spokenLanguages = languageLevels.languages;
export const languageScale = languageLevels.scale;

export const techLogos = {
  flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  dart: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  next: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  supabase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  php: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  nest: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
  spring: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  flask: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  django: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  node: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  intellij: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
  firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  linux: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  bash: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
};

const mobileTech: Tech[] = [
  { name: "Flutter", logo: techLogos.flutter },
  { name: "Dart", logo: techLogos.dart },
  { name: "React Native", logo: techLogos.react }
];

const languageTech: Tech[] = [
  { name: "Java", logo: techLogos.java },
  { name: "SQL", logo: techLogos.postgres },
  { name: "JavaScript", logo: techLogos.js },
  { name: "TypeScript", logo: techLogos.typescript },
  { name: "PHP", logo: techLogos.php },
  { name: "Dart", logo: techLogos.dart }
];

const webTech: Tech[] = [
  { name: "HTML", logo: techLogos.html },
  { name: "CSS", logo: techLogos.css },
  { name: "JavaScript", logo: techLogos.js },
  { name: "React", logo: techLogos.react },
  { name: "Next.js", logo: techLogos.next },
  { name: "Tailwind CSS", logo: techLogos.tailwind },
  { name: "Responsive Design" }
];

const backendTech: Tech[] = [
  { name: "Supabase", logo: techLogos.supabase },
  { name: "PostgreSQL", logo: techLogos.postgres },
  { name: "API REST" },
  { name: "NestJS", logo: techLogos.nest },
  { name: "Spring Boot", logo: techLogos.spring },
  { name: "Flask", logo: techLogos.flask },
  { name: "Django", logo: techLogos.django },
  { name: "Node.js", logo: techLogos.node }
];

const toolTech: Tech[] = [
  { name: "Git", logo: techLogos.git },
  { name: "GitHub", logo: techLogos.github },
  { name: "Docker", logo: techLogos.docker },
  { name: "Gemini CLI" },
  { name: "VS Code", logo: techLogos.vscode },
  { name: "IntelliJ IDEA", logo: techLogos.intellij },
  { name: "Firebase", logo: techLogos.firebase },
  { name: "Vercel", logo: techLogos.vercel }
];

const practiceTech: Tech[] = [
  { name: "UI/UX Optimization" },
  { name: "REST API Integration" },
  { name: "CI/CD" },
  { name: "Linux", logo: techLogos.linux },
  { name: "Bash", logo: techLogos.bash }
];

const flutterSupabaseTech: Tech[] = [
  { name: "Flutter", logo: techLogos.flutter },
  { name: "Dart", logo: techLogos.dart },
  { name: "Supabase", logo: techLogos.supabase }
];

const reactSupabaseTech: Tech[] = [
  { name: "React", logo: techLogos.react },
  { name: "Supabase", logo: techLogos.supabase }
];

const nextSupabaseTech: Tech[] = [
  { name: "Next.js", logo: techLogos.next },
  { name: "Supabase", logo: techLogos.supabase }
];

const wathaqliTech: Tech[] = [
  { name: "Flutter", logo: techLogos.flutter },
  { name: "Dart", logo: techLogos.dart },
  { name: "NestJS", logo: techLogos.nest },
  { name: "Next.js", logo: techLogos.next },
  { name: "Supabase", logo: techLogos.supabase }
];

export const certifications = [
  { title: "JavaScript Application Programming", issuer: "Alison", date: "2025-11-27" },
  { title: "Diploma in Website Development Using HTML and CSS", issuer: "Alison", date: "2025-03-13" },
  { title: "Master Python Programming: The Complete Beginner to Advanced", issuer: "Udemy", date: "2025-02-27" }
];

export const content = {
  fr: {
    nav: {
      links: [
        ["Accueil", "home"],
        ["À propos", "about"],
        ["Parcours", "journey"],
        ["Compétences", "skills"],
        ["Projets", "projects"],
        ["Services", "services"],
        ["Contact", "contact"]
      ],
      cta: "Travaillons ensemble",
      menu: "Menu"
    },
    hero: {
      badge: "Disponible pour des projets freelance",
      title: "Je transforme vos idées en expériences web et mobiles.",
      subtitle:
        "Je suis Sid'Taher Oumar, développeur full-stack à Nouakchott. Je crée des applications web et mobiles, de l'interface aux API REST et aux bases de données, avec Flutter, React, Next.js et Supabase.",
      primary: "Découvrir mes projets",
      secondary: "Me contacter",
      downloadCv: "Télécharger mon CV",
      portraitAlt: "Portrait de Sid'Taher Oumar",
      portraitRole: "Développeur full-stack · Web et mobile",
      stats: ["Flutter + Dart", "Next.js + React", "Supabase", "Remote freelance"]
    },
    about: {
      eyebrow: "À propos",
      title: "Un développeur pragmatique, attentif au produit et à l'interface.",
      body:
        "Sid'Taher Oumar est un développeur full-stack de 22 ans basé à Nouakchott, en Mauritanie, étudiant en dernière année de licence en développement des systèmes informatiques à SUPNUM. Son expérience pratique couvre les applications mobiles, les interfaces web, les bases de données et l'intégration backend.",
      body2:
        "Son approche couvre la compréhension du besoin, la conception d'une solution claire, l'intégration technique et les tests. Il utilise les outils d'intelligence artificielle avec méthode pour accélérer certaines tâches, mais garde la vérification du code, la qualité de l'interface et la cohérence du produit au centre du travail.",
      cards: [
        {
          title: "SUPNUM",
          text: "Licence en développement des systèmes informatiques à Nouakchott.",
          icon: MapPin
        },
        {
          title: "Ouverture internationale",
          text: "Disponible pour collaborer à distance avec des clients francophones et internationaux.",
          icon: Globe2
        },
        {
          title: "Produit utile",
          text: "Intérêt marqué pour les applications utiles, lisibles et réellement adaptées aux utilisateurs.",
          icon: BrainCircuit
        }
      ]
    },
    journey: {
      eyebrow: "Parcours",
      title: "Formation, expérience et apprentissage continu.",
      educationHeading: "Formation",
      experienceHeading: "Expérience professionnelle",
      certificationsHeading: "Certifications",
      languagesHeading: "Langues",
      languageScale: "CECRL",
      viewCv: "Consulter le CV",
      education: [
        { school: "SUPNUM - Institut Supérieur du Numérique", degree: "Licence en Développement des Systèmes Informatiques" },
        { school: "El Veth d'Aioun", degree: "Baccalauréat Série Sciences" }
      ],
      experience: {
        company: "Itkann-SARL",
        role: "Stagiaire en informatique",
        period: "Juin - juillet 2026",
        duration: "2 mois",
        description: "Participation au projet BA dans le cadre d'un stage en informatique."
      }
    },
    skills: {
      eyebrow: "Compétences techniques",
      title: "Du mobile au backend, une approche full-stack.",
      groups: [
        { title: "Mobile", icon: Smartphone, tech: mobileTech },
        { title: "Langages", icon: Code2, tech: languageTech },
        { title: "Frontend web", icon: LayoutTemplate, tech: webTech },
        { title: "Backend et base de données", icon: Database, tech: backendTech },
        { title: "Outils", icon: Wrench, tech: toolTech },
        { title: "Pratiques et environnement", icon: Layers3, tech: practiceTech }
      ]
    },
    projects: {
      eyebrow: "Projets sélectionnés",
      title: "Des applications mobiles et des plateformes web.",
      description:
        "Six projets autour des achats, de l'éducation, du trading et du développement web et mobile.",
      more: "Autres réalisations",
      details: "Ouvrir les détails",
      noExternal: "Lien public à ajouter",
      close: "Fermer"
    },
    projectItems: [
      {
        id: "wathaqli",
        title: "Wathaqli",
        arabicName: "وثقلي",
        type: "Application mobile",
        category: "Développement mobile",
        summary:
          "Wathaqli associe une application mobile Flutter et Dart, un backend NestJS et Supabase, et un site d'administration développé avec Next.js.",
        detail:
          "Le projet réunit une application mobile, une intégration backend avec NestJS et Supabase, et une interface d'administration Next.js. L'identité visuelle associe le bleu et le vert.",
        visualNote: "Logo officiel fourni par l'utilisateur. Captures d'interface à ajouter.",
        image: "/images/wathaqli-logo.png",
        tech: wathaqliTech,
        accent: "bluegreen",
        bullets: [
          "Projet mobile Flutter et Dart.",
          "Backend NestJS et Supabase.",
          "Site d'administration Next.js.",
          "Identité visuelle bleu et vert."
        ]
      },
      {
        id: "najah",
        title: "Najah+",
        arabicName: "نجاح+",
        type: "Plateforme éducative web",
        category: "EdTech / Éducation numérique",
        summary:
          "Najah+ est une plateforme éducative destinée aux étudiants universitaires. Elle permet d'organiser et de consulter des ressources pédagogiques, notamment des cours, des vidéos et des contenus audio, classés par année universitaire et par semestre.",
        detail:
          "Najah+ est un site éducatif développé avec React et Supabase pour le backend. Son interface s'adapte aux mobiles et facilite l'accès aux ressources pédagogiques.",
        visualNote: "Visuel Najah+ fourni par l'utilisateur. Captures produit détaillées à remplacer si nécessaire.",
        image: "/images/najah-plus-visual.png",
        tech: reactSupabaseTech,
        accent: "najah",
        bullets: [
          "Site web éducatif adapté aux mobiles.",
          "Frontend React.",
          "Backend et base de données Supabase.",
          "Ressources organisées par année universitaire et semestre."
        ]
      }
    ] satisfies Project[],
    additionalProjectItems: [
      {
        title: "Achats App",
        type: "Application mobile",
        summary: "Application mobile d'achats avec interface moderne, gestion des produits et intégration backend Supabase.",
        tech: flutterSupabaseTech,
        icon: ShoppingBag
      },
      {
        title: "Gestion Achats",
        type: "Application web",
        summary: "Application web responsive avec authentification, gestion des données et fonctionnalités CRUD basées sur Supabase.",
        tech: reactSupabaseTech,
        icon: LayoutTemplate
      },
      {
        title: "Bac-English",
        type: "Plateforme éducative",
        summary: "Plateforme d'apprentissage de l'anglais pour le Bac, avec contenu structuré, interface moderne et backend Supabase.",
        tech: nextSupabaseTech,
        icon: BookOpen
      },
      {
        title: "Oxcorex",
        type: "Plateforme web et mobile",
        summary: "Plateforme orientée trading avec interface web et mobile, développée avec Next.js et Supabase.",
        tech: nextSupabaseTech,
        icon: TrendingUp
      }
    ],
    services: {
      eyebrow: "Services",
      title: "Des prestations claires pour construire, corriger ou améliorer un produit.",
      items: [
        {
          title: "Applications mobiles Flutter",
          description:
            "Conception et développement d'applications mobiles propres, rapides et adaptées aux usages réels.",
          icon: Smartphone
        },
        {
          title: "Sites web Next.js et React",
          description:
            "Création de sites modernes, maintenables et prêts pour un déploiement fluide sur Vercel.",
          icon: Code2
        },
        {
          title: "Interfaces responsives",
          description:
            "Intégration soignée d'interfaces lisibles sur mobile, tablette et ordinateur.",
          icon: MonitorSmartphone
        },
        {
          title: "Maintenance et optimisation",
          description:
            "Correction de bugs, amélioration de performances et stabilisation de projets existants.",
          icon: Bug
        }
      ] satisfies Service[]
    },
    process: {
      eyebrow: "Méthode de travail",
      title: "Un processus simple, réaliste et orienté livraison.",
      steps: [
        ["01", "Comprendre le besoin", "Clarifier l'objectif, les utilisateurs, les contraintes et les priorités du projet."],
        ["02", "Définir la solution", "Transformer le besoin en structure, écrans, choix techniques et plan de travail."],
        ["03", "Développer et tester", "Construire les fonctionnalités, vérifier l'interface et corriger les points faibles."],
        ["04", "Livrer et améliorer", "Préparer la livraison, recueillir les retours et améliorer ce qui compte vraiment."]
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Vous avez un projet en tête ? Parlons-en.",
      subtitle:
        "Application mobile, site web ou amélioration d'un produit existant : discutons de votre idée et voyons comment lui donner vie.",
      email: "E-mail",
      personalEmail: "E-mail personnel",
      phone: "Téléphone",
      github: "GitHub",
      linkedin: "LinkedIn",
      formNote:
        "Votre message sera préparé dans votre application e-mail.",
      name: "Nom",
      emailField: "Adresse e-mail",
      message: "Message",
      submit: "Ouvrir votre e-mail",
      placeholders: {
        name: "Votre nom",
        email: "vous@example.com",
        message: "Décrivez brièvement votre projet..."
      }
    },
    footer: {
      location: "Mauritanie",
      rights: "Tous droits réservés."
    }
  },
  en: {
    nav: {
      links: [
        ["Home", "home"],
        ["About", "about"],
        ["Background", "journey"],
        ["Skills", "skills"],
        ["Projects", "projects"],
        ["Services", "services"],
        ["Contact", "contact"]
      ],
      cta: "Let's work together",
      menu: "Menu"
    },
    hero: {
      badge: "Available for freelance projects",
      title: "I turn ideas into web and mobile experiences.",
      subtitle:
        "I am Sid'Taher Oumar, a full-stack developer based in Nouakchott. I build web and mobile applications, from interfaces to REST APIs and databases, with Flutter, React, Next.js and Supabase.",
      primary: "Explore projects",
      secondary: "Contact me",
      downloadCv: "Download my CV",
      portraitAlt: "Portrait of Sid'Taher Oumar",
      portraitRole: "Full-stack developer · Web and mobile",
      stats: ["Flutter + Dart", "Next.js + React", "Supabase", "Remote freelance"]
    },
    about: {
      eyebrow: "About",
      title: "A pragmatic developer with product sense and interface care.",
      body:
        "Sid'Taher Oumar is a 22-year-old full-stack developer based in Nouakchott, Mauritania, and a final-year student in computer systems development at SUPNUM. His practical experience covers mobile applications, web interfaces, databases and backend integration.",
      body2:
        "His approach covers understanding the need, shaping a clear solution, technical implementation and testing. He uses AI tools thoughtfully to improve productivity, while keeping code review, interface quality and product coherence at the center of the work.",
      cards: [
        {
          title: "SUPNUM",
          text: "Bachelor's degree studies in computer systems development in Nouakchott.",
          icon: MapPin
        },
        {
          title: "International collaboration",
          text: "Available for remote work with French-speaking and international clients.",
          icon: Globe2
        },
        {
          title: "Useful products",
          text: "Interested in applications that are practical, readable and genuinely useful to people.",
          icon: BrainCircuit
        }
      ]
    },
    journey: {
      eyebrow: "Background",
      title: "Education, experience and continuous learning.",
      educationHeading: "Education",
      experienceHeading: "Professional experience",
      certificationsHeading: "Certifications",
      languagesHeading: "Languages",
      languageScale: "CEFR",
      viewCv: "View CV",
      education: [
        { school: "SUPNUM - Institut Supérieur du Numérique", degree: "Bachelor's degree studies in Computer Systems Development" },
        { school: "El Veth d'Aioun", degree: "Scientific Baccalaureate" }
      ],
      experience: {
        company: "Itkann-SARL",
        role: "IT intern",
        period: "June - July 2026",
        duration: "2 months",
        description: "Contributed to the BA project during an IT internship."
      }
    },
    skills: {
      eyebrow: "Technical skills",
      title: "From mobile to backend, a full-stack approach.",
      groups: [
        { title: "Mobile", icon: Smartphone, tech: mobileTech },
        { title: "Languages", icon: Code2, tech: languageTech },
        { title: "Web frontend", icon: LayoutTemplate, tech: webTech },
        { title: "Backend and database", icon: Database, tech: backendTech },
        { title: "Tools", icon: Wrench, tech: toolTech },
        { title: "Practices and environment", icon: Layers3, tech: practiceTech }
      ]
    },
    projects: {
      eyebrow: "Selected projects",
      title: "Mobile applications and web platforms.",
      description:
        "Six projects covering shopping, education, trading, and web and mobile development.",
      more: "More projects",
      details: "Open details",
      noExternal: "Public link to add",
      close: "Close"
    },
    projectItems: [
      {
        id: "wathaqli",
        title: "Wathaqli",
        arabicName: "وثقلي",
        type: "Mobile application",
        category: "Mobile development",
        summary:
          "Wathaqli combines a Flutter and Dart mobile application, a NestJS and Supabase backend, and a Next.js administration website.",
        detail:
          "The project brings together a mobile application, backend integration with NestJS and Supabase, and a Next.js administration interface. Its visual identity combines blue and green.",
        visualNote: "Official logo supplied by the user. Interface screenshots to be added.",
        image: "/images/wathaqli-logo.png",
        tech: wathaqliTech,
        accent: "bluegreen",
        bullets: [
          "Flutter and Dart mobile project.",
          "NestJS and Supabase backend.",
          "Next.js administration website.",
          "Blue and green visual identity."
        ]
      },
      {
        id: "najah",
        title: "Najah+",
        arabicName: "نجاح+",
        type: "Educational web platform",
        category: "EdTech / Digital education",
        summary:
          "Najah+ is an educational platform for university students. It helps organize and access learning resources, including courses, videos and audio content, grouped by academic year and semester.",
        detail:
          "Najah+ is an educational website built with React and Supabase for the backend. Its mobile-friendly interface makes learning resources easy to access.",
        visualNote: "Najah+ visual supplied by the user. Detailed product screenshots can replace it later.",
        image: "/images/najah-plus-visual.png",
        tech: reactSupabaseTech,
        accent: "najah",
        bullets: [
          "Mobile-friendly educational website.",
          "React frontend.",
          "Supabase backend and database.",
          "Resources organized by academic year and semester."
        ]
      }
    ] satisfies Project[],
    additionalProjectItems: [
      {
        title: "Achats App",
        type: "Mobile application",
        summary: "Mobile shopping application with a modern interface, product management and Supabase backend integration.",
        tech: flutterSupabaseTech,
        icon: ShoppingBag
      },
      {
        title: "Gestion Achats",
        type: "Web application",
        summary: "Responsive web application with authentication, data management and CRUD features powered by Supabase.",
        tech: reactSupabaseTech,
        icon: LayoutTemplate
      },
      {
        title: "Bac-English",
        type: "Educational platform",
        summary: "English-learning platform for Baccalaureate students with structured content, a modern interface and a Supabase backend.",
        tech: nextSupabaseTech,
        icon: BookOpen
      },
      {
        title: "Oxcorex",
        type: "Web and mobile platform",
        summary: "Trading-oriented platform with a web and mobile interface, built with Next.js and Supabase.",
        tech: nextSupabaseTech,
        icon: TrendingUp
      }
    ],
    services: {
      eyebrow: "Services",
      title: "Clear services to build, fix or improve a digital product.",
      items: [
        {
          title: "Flutter mobile apps",
          description:
            "Design and development of clean, fast mobile applications aligned with practical user needs.",
          icon: Smartphone
        },
        {
          title: "Next.js and React websites",
          description:
            "Modern, maintainable websites prepared for smooth deployment on Vercel.",
          icon: Code2
        },
        {
          title: "Responsive interfaces",
          description:
            "Careful implementation of interfaces that stay readable on phones, tablets and desktops.",
          icon: MonitorSmartphone
        },
        {
          title: "Maintenance and optimization",
          description:
            "Bug fixing, performance improvements and stabilization of existing projects.",
          icon: Bug
        }
      ] satisfies Service[]
    },
    process: {
      eyebrow: "Workflow",
      title: "A simple, realistic process focused on delivery.",
      steps: [
        ["01", "Understand the need", "Clarify the goal, users, constraints and project priorities."],
        ["02", "Define the solution", "Turn the need into structure, screens, technical choices and a work plan."],
        ["03", "Build and test", "Develop the features, review the interface and fix weak points."],
        ["04", "Deliver and improve", "Prepare delivery, gather feedback and improve what matters most."]
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Have a project in mind? Let's talk.",
      subtitle:
        "Mobile app, website or improvement of an existing product: let's discuss your idea and see how to bring it to life.",
      email: "Email",
      personalEmail: "Personal email",
      phone: "Phone",
      github: "GitHub",
      linkedin: "LinkedIn",
      formNote:
        "Your message will be prepared in your email application.",
      name: "Name",
      emailField: "Email address",
      message: "Message",
      submit: "Open your email",
      placeholders: {
        name: "Your name",
        email: "you@example.com",
        message: "Briefly describe your project..."
      }
    },
    footer: {
      location: "Mauritania",
      rights: "All rights reserved."
    }
  }
} as const;
