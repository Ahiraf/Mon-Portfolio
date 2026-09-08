// All editable portfolio content lives here.

export const profile = {
  name: "Fariha Rayhan Mim",
  role: "Full-Stack Developer",
  headline: "I build full-stack products end to end.",
  intro:
    "Developer focused on shipping clean, reliable web apps — from the interface people touch to the data underneath. I like turning fuzzy ideas into working software.",
  quote:
    "Good software is quiet — it does the hard thing and gets out of the way.",
  location: "Chattogram, Bangladesh",
  email: "fariharayhanmim@gmail.com",
  resumeUrl: "",
  available: true,
  photoUrl: "/ME.jpeg",
  photoCaption: "Full-stack developer, always shipping.",
  signatureUrl: "",
};

export const socials = [
  { kind: "github", label: "GitHub", href: "https://github.com/Ahiraf" },
  { kind: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/fariha104" },
  { kind: "twitter", label: "Twitter / X", href: "https://x.com/_Fariha_Rayhan_" },
  { kind: "devpost", label: "Devpost", href: "https://devpost.com/fariham40" },
  { kind: "email", label: "Email", href: "mailto:fariharayhanmim@gmail.com" },
];

export const about = {
  paragraphs: [
    "I'm a full-stack developer who enjoys owning a feature from the first sketch to the deploy. Most of my work sits at the seam between a clean interface and the systems that make it real.",
    "I got here through building — side projects, competitions, and a lot of shipping. That habit taught me to care about the boring parts: error states, edge cases, and code the next person can read.",
    "Right now I'm looking for an internship or junior role where I can keep learning fast and contribute to a product people actually use.",
  ],
  facts: [
    { k: "Focus", v: "Full-stack web" },
    { k: "Based in", v: "Dhaka, BD" },
    { k: "Learning", v: "System design" },
  ],
  loves: [
    {
      label: "Full-Stack Development",
      detail: "Building end-to-end solutions where a clean interface meets solid backend power.",
    },
    {
      label: "Problem Solving",
      detail: "Breaking down messy, complex challenges into elegant, scalable solutions.",
    },
    {
      label: "Continuous Learning",
      detail: "Staying curious and keeping up with new tools, frameworks, and best practices.",
    },
    {
      label: "Collaboration",
      detail: "Working with a team to turn rough ideas into products people actually use.",
    },
  ],
};

export const experience = [
  {
    role: "Back-End AI Engineering Intern",
    org: "FlyRank Corp.",
    period: "Jul 2026 — Sep 2026",
    location: "Remote · 12 weeks",
    points: [
      "Selected for FlyRank's 12-week Backend AI Engineering internship program.",
      "Building back-end services and AI-powered features as part of the program.",
      "Working with modern back-end tooling, APIs, and AI model integration.",
    ],
    tags: ["Python", "FastAPI", "AI / ML", "REST APIs"],
    offerLetter: "/flyrank-internship-confirmation-fariha-rayhan-mim-july-2026-12-weeks.pdf",
    offerLetterLabel: "View Confirmation Letter",
  },
  {
    role: "Data Science Intern",
    org: "Arsh Corporation",
    period: "Jun 2026 — Jul 2026",
    location: "Remote · 1 month",
    points: [
      "Selected as a Data Science Intern to work on real-world industry projects.",
      "Collaborating with cross-functional teams on data workflows and analysis.",
      "Gaining hands-on exposure to industry data tools and professional practices.",
    ],
    tags: ["Python", "Pandas", "Data Analysis", "Machine Learning"],
    offerLetter: "/arsh-internship-offer-letter.pdf",
  },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Chittagong University of Engineering and Technology",
    period: "2023 — 2027",
    current: "Currently in 3rd year",
    detail:
      "Focuses on Database Systems, Software Architecture, software engineering, and web development.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Chittagong College",
    period: "2020 — 2022",
    detail: "",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Aparnacharan City Corporation Girl's High School and College",
  },
];

export const achievements = [
  {
    title: "Best Use of Gemini API — Hack Days CUET",
    detail: "Won the Best Use of Gemini API Award at Hack Days CUET for ClimaGuard.",
    year: "2025",
    metric: "Winner",
    certificate: "",
    credentialUrl: "",
    credentialId: "",
  },
  {
    title: "Kaggle Competition — Bengali NLP",
    detail: "Top-tier leaderboard finish on a Bengali question-answering task.",
    year: "2025",
    metric: "Top 15%",
    certificate: "",
    credentialUrl: "",
    credentialId: "",
  },
  {
    title: "Hackathon Finalist",
    detail: "Reached the final round building a full-stack product in 36 hours.",
    year: "2024",
    metric: "Finalist",
    certificate: "",
    credentialUrl: "",
    credentialId: "",
  },
  {
    title: "Open-Source Contributor",
    detail: "Merged pull requests into public repositories used by other developers.",
    year: "2024",
    metric: "10+ PRs",
    certificate: "",
    credentialUrl: "",
    credentialId: "",
  },
  {
    title: "Dean's / Merit Recognition",
    detail: "Recognized for academic performance in Computer Science coursework.",
    year: "2023",
    metric: "Merit",
    certificate: "",
    credentialUrl: "",
    credentialId: "",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL", "Java"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "FastAPI", "REST APIs", "Auth / JWT"],
  },
  {
    title: "Data & Tools",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Git", "Docker", "Vercel"],
  },
];

export const projects = [
  {
    slug: "climaguard",
    title: "ClimaGuard",
    category: "AI Climate Safety",
    year: "2025",
    duration: "2025",
    summary:
      "AI climate-safety assistant that gives children in high-risk countries real-time, location- and age-aware safety guidance — even offline.",
    description:
      "ClimaGuard is an AI-powered climate safety assistant for children in the world's highest-risk countries, built on Google Gemini 2.5 Flash. It delivers real-time risk assessment based on location and age, an AI health advisor for symptom triage, photo-based analysis of environmental threats, and multilingual voice input across 55 languages. It runs offline in disaster zones with bundled emergency helplines for 66 UNICEF-designated high-risk countries.",
    tags: ["Next.js", "TypeScript", "Gemini AI", "Tailwind"],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Google Gemini 2.5 Flash",
      "OpenAI GPT-4o",
      "Firebase / Firestore",
      "BigQuery",
      "Open-Meteo API",
      "Vercel",
    ],
    challenges: [
      "Designing a multi-provider AI fallback (Gemini → GPT-4o) so guidance stays reliable under load.",
      "Building an offline-first PWA that caches emergency helplines for 66 countries.",
      "Handling multilingual voice input across 55 languages with speech-to-text transcription.",
      "Turning weather, location, and age data into a clear color-coded risk model.",
    ],
    improvements: [
      "Ship an on-device model for fully offline AI guidance.",
      "Add SMS fallback for very low-connectivity regions.",
      "Build caregiver dashboards to track multiple children.",
      "Expand coverage beyond the initial 66 countries.",
    ],
    image: "/projects/climaguard-logo.png",
    screenshots: [],
    live: "https://clima-guard-qepp.vercel.app",
    code: "https://github.com/Ahiraf/ClimaGuard",
  },
  {
    slug: "niramoy",
    title: "Niramoy",
    category: "AI Telemedicine Platform",
    year: "2025",
    duration: "2025",
    summary:
      "AI-assisted serverless telemedicine and appointment platform for Bangladesh — patients discover verified doctors, book conflict-free slots, and consult over video.",
    description:
      "Niramoy (নিরাময়) is an AI-assisted serverless telemedicine and appointment platform built for Bangladesh as a CUET software engineering project. Patients discover verified doctors, book conflict-free appointment slots, consult over video, and keep a digital record of prescriptions and history. An AI layer adds symptom triage, doctor recommendation, and automated visit summaries, while double-booking is prevented at the database level with a btree_gist exclusion constraint over appointment time ranges.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "AI"],
    techStack: [
      "Next.js (App Router)",
      "TypeScript",
      "PostgreSQL + Drizzle ORM",
      "PGlite",
      "Session Auth",
      "TextBee SMS",
      "Vercel Cron",
      "Gemma / OpenAI",
    ],
    challenges: [
      "Preventing double-booking at the database level with a btree_gist exclusion constraint over appointment time ranges.",
      "Supporting a zero-infrastructure clean checkout with an in-process PGlite fallback when no DATABASE_URL is set.",
      "Building session auth for three roles — patient, doctor, and admin.",
      "Integrating SMS verification over a Bangladeshi SIM with a graceful log-only fallback.",
    ],
    improvements: [
      "Ship appointment reminders and a no-show sweep via Vercel Cron.",
      "Embed live video consultation with Jitsi / Daily.",
      "Expand AI triage, recommendation, and automated visit summaries.",
      "Migrate the remaining UI incrementally to TypeScript.",
    ],
    image: "/projects/niramoy-logo.png",
    screenshots: [],
    live: "",
    code: "https://github.com/Ahiraf/Niramoy",
  },
  {
    slug: "shokhi-health",
    title: "Shokhi Health",
    category: "AI Women's Health",
    year: "2025",
    duration: "2025",
    summary:
      "A warm, Bangla-first women's health companion powered by Gemma — safe symptom triage, cycle tracking, health guides, and a voice hotline.",
    description:
      "Shokhi (সখী) is a warm, Bangla-first women's health companion powered by Gemma. It offers safe symptom triage, cycle tracking, curated health guides, and a voice hotline, aiming to make trustworthy health guidance accessible to every woman in Bangladesh.",
    tags: ["Next.js", "TypeScript", "Gemma AI", "Bangla"],
    techStack: [
      "Next.js",
      "TypeScript",
      "Gemma",
      "Tailwind CSS",
      "Vercel",
    ],
    challenges: [
      "Designing safe, guardrailed symptom triage that avoids harmful medical advice.",
      "Delivering a genuinely Bangla-first experience rather than a translated afterthought.",
      "Building a voice hotline for low-literacy and low-connectivity users.",
      "Tracking cycles and health data with privacy in mind.",
    ],
    improvements: [
      "Expand the library of curated health guides.",
      "Add reminders and personalized cycle insights.",
      "Broaden voice support across more dialects.",
      "Introduce caregiver and clinic sharing.",
    ],
    image: "",
    screenshots: [],
    live: "https://shokhi-health.vercel.app/",
    code: "https://github.com/Ahiraf/Shokhi-Health",
  },
  {
    slug: "cuet-fithub",
    title: "CUET-FitHub",
    category: "Gym Management System",
    year: "2025",
    duration: "2025",
    summary:
      "A smart gym management and fitness engagement system for CUET students.",
    description:
      "CUET-FitHub is a smart gym management and fitness engagement system built for CUET students. It streamlines gym operations and keeps students engaged with their fitness journey through management tooling and engagement features.",
    tags: ["JavaScript", "Node.js", "Web App"],
    techStack: [
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    challenges: [],
    improvements: [],
    image: "/projects/cuet-fithub-logo.png",
    screenshots: [],
    live: "",
    code: "https://github.com/Ahiraf/CUET-FitHub",
  },
  {
    slug: "physicslab-bd",
    title: "PhysicsLab BD",
    category: "Educational Web App",
    year: "2025",
    duration: "2025",
    summary:
      "48 interactive physics simulations for Bangladesh HSC students, mapped chapter-by-chapter to the NCTB syllabus.",
    description:
      "PhysicsLab BD is an interactive learning platform for Bangladesh HSC students, with 48 simulations across Physics 1st and 2nd papers organized by NCTB chapters. Instead of passively reading formulas, students manipulate live controls and watch real-time canvas animations for mechanics, waves, thermodynamics, electromagnetism, optics, and modern physics.",
    tags: ["Next.js", "React", "Canvas API", "JavaScript"],
    techStack: [
      "Next.js (App Router)",
      "React",
      "JavaScript",
      "HTML Canvas API",
      "requestAnimationFrame",
      "CSS",
    ],
    challenges: [
      "Building 48 distinct, physics-accurate canvas simulations from scratch.",
      "Keeping animations smooth with requestAnimationFrame render loops.",
      "Designing a reusable SimulationLayout for a consistent experience across topics.",
      "Structuring a data-driven, two-level navigation (papers → chapters → simulations).",
    ],
    improvements: [
      "Add short quizzes after each simulation.",
      "Let students save and share simulation states.",
      "Improve touch controls for mobile devices.",
      "Add a Bangla language toggle.",
    ],
    image: "/projects/physicslab-bd-logo.png",
    screenshots: [],
    live: "https://physics-lab-bd.vercel.app",
    code: "https://github.com/Ahiraf/PhysicsLab-BD",
  },
  {
    slug: "portablebrain-ai",
    title: "PortableBrain.ai",
    category: "AI Browser Extension",
    year: "2025",
    duration: "2025",
    summary:
      "A personal AI memory that follows you across ChatGPT, Claude and Gemini — injecting the right context into any chat with one click.",
    description:
      "PortableBrain.ai is a personal AI memory system that persists across multiple AI chat platforms through a browser extension. It stores your preferences, projects, and facts in one place, then automatically injects the most relevant context into any AI chat with a single click. It uses local retrieval-augmented generation to rank and surface only the most pertinent memories — no external embedding APIs required.",
    tags: ["JavaScript", "Next.js", "Chrome Extension", "RAG"],
    techStack: [
      "JavaScript",
      "Next.js",
      "Chrome Extension (Manifest v3)",
      "TF-IDF + Cosine Similarity",
      "Local RAG",
      "Claude / OpenAI API (optional)",
      "Token Auth",
    ],
    challenges: [
      "Implementing local RAG ranking with TF-IDF + cosine similarity — no embedding API calls.",
      "Injecting context reliably across many different chat UIs (ChatGPT, Claude, Gemini, and more).",
      "Distilling pasted text into clean, atomic memories with an LLM.",
      "Securing the backend with token auth and no open CORS.",
    ],
    improvements: [
      "Add an optional semantic-embeddings mode for sharper recall.",
      "Sync memories across devices.",
      "Ship Firefox and Safari extension builds.",
      "Support shared team memory spaces.",
    ],
    image: "",
    screenshots: [],
    live: "",
    code: "https://github.com/Ahiraf/PortableBrain.ai",
  },
];
