/**
 * Brand & identity: the single source of truth for who Sayed is and how the
 * site talks about him. Copy here is derived from cv.tex (Nov 2026).
 */

export const site = {
  name: "Sayed Moataz",
  role: "Senior Mobile Developer",
  yearsExperience: 4,
  location: "Cairo, Egypt",
  email: "sayedmoataz9@gmail.com",
  url: "https://sayed-moataz-portfolio.vercel.app",
  cv: {
    href: "/Sayed%20Moataz%20-%20Senior%20Mobile%20Developer.pdf",
    fileName: "Sayed Moataz - Senior Mobile Developer.pdf",
  },

  headline: "Secure, high-performance mobile apps, shipped to production.",
  intro:
    "I build Flutter and native mobile apps for banking, fintech, e-commerce, real estate, education and AI. Currently architecting an enterprise mobile banking platform at Cubic Information Systems.",
  metaDescription:
    "Sayed Moataz is a Senior Mobile Developer with 4+ years of experience building secure, high-performance Flutter and native apps for banking, fintech, e-commerce, education and AI.",

  availability: "Open to senior mobile roles & select freelance work",
} as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/sayedmoataz", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saayeedmdawoud/",
    icon: "linkedin",
  },
  { label: "Medium", href: "https://medium.com/@sayedmoataz9", icon: "medium" },
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/11287483/saayeed-m-daawoud",
    icon: "stackoverflow",
  },
  { label: "dev.to", href: "https://dev.to/sayedmoataz", icon: "devto" },
] as const;

export type SocialIcon = (typeof socials)[number]["icon"];

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/open-source", label: "Open Source" },
  { href: "/writing", label: "Writing" },
  { href: "/now", label: "Now" },
] as const;

export type IndustryId =
  | "banking-fintech"
  | "ecommerce"
  | "real-estate"
  | "education"
  | "ai"
  | "travel";

export const industries: {
  id: IndustryId;
  label: string;
  summary: string;
}[] = [
  {
    id: "banking-fintech",
    label: "Banking & Fintech",
    summary:
      "Enterprise mobile banking with OWASP-grade security, plus mortgage and investment tooling.",
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    summary:
      "Multi-tenant customer, vendor and delivery apps with real-time order flow.",
  },
  {
    id: "real-estate",
    label: "Real Estate",
    summary:
      "Six production property apps, from map-driven discovery to AI matchmaking.",
  },
  {
    id: "education",
    label: "Education",
    summary:
      "A study companion for medical students: flashcards, quizzes, planner and notes.",
  },
  {
    id: "ai",
    label: "AI Products",
    summary:
      "Multi-agent assistants, GraphRAG search and real-time voice interfaces.",
  },
  {
    id: "travel",
    label: "Travel & Hospitality",
    summary:
      "Online hotel booking for Hajj and Umrah travellers, with live availability and WhatsApp support.",
  },
];

export const metrics = [
  { value: "30s → <1s", label: "App launch time", context: "PLANET LAND" },
  { value: "−85%", label: "Google Maps API cost", context: "$3.5k → <$500/mo" },
  { value: "−60%", label: "Redundant network calls", context: "Sonbla" },
  { value: "160/160", label: "pub.dev points", context: "2 open-source packages" },
] as const;

export type PillarIcon =
  | "shield"
  | "gauge"
  | "coins"
  | "brain"
  | "layers"
  | "users";

export const pillars: {
  title: string;
  body: string;
  icon: PillarIcon;
  tags: string[];
}[] = [
  {
    title: "Security & compliance",
    body: "OWASP Mobile Top 10 controls, SSL pinning and tamper detection on a tier-1 banking platform, verified by third-party penetration tests.",
    icon: "shield",
    tags: ["OWASP Mobile Top 10", "SSL pinning", "Biometrics", "Secure storage"],
  },
  {
    title: "Performance",
    body: "Cut a 30-second cold start to under one second with lazy initialization, deferred background work and parallel loading.",
    icon: "gauge",
    tags: ["Startup profiling", "Lazy init", "Parallel loading"],
  },
  {
    title: "Cost & network efficiency",
    body: "Brought Google Maps spend from $3,500 to under $500 a month and removed 60% of redundant calls with debouncing and cancellation.",
    icon: "coins",
    tags: ["Debouncing", "Request lifecycles", "Caching"],
  },
  {
    title: "AI integration",
    body: "OpenAI Assistants, vector search and GraphRAG pipelines with 95% query precision, plus low-latency speech interfaces.",
    icon: "brain",
    tags: ["GraphRAG", "Assistants API", "STT / TTS"],
  },
  {
    title: "Native + cross-platform",
    body: "Flutter at the core, with custom platform channels in Kotlin and Swift, and Kotlin Multiplatform where it fits.",
    icon: "layers",
    tags: ["Flutter", "Kotlin", "Swift", "KMP"],
  },
  {
    title: "Quality & leadership",
    body: "Strict TDD with bloc tests and Mocktail, on-site UAT with clients, and mentoring interns through reviews and workshops.",
    icon: "users",
    tags: ["TDD", "Code review", "Mentoring"],
  },
];
