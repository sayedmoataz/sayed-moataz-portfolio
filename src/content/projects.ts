import type { StaticImageData } from "next/image";

import elagkCover from "@/assets/projects/3elagk/cover.jpg";
import elagk1 from "@/assets/projects/3elagk/screen-1.png";
import elagk2 from "@/assets/projects/3elagk/screen-2.png";
import aelanjiCover from "@/assets/projects/aelanji/cover.png";
import aelanji1 from "@/assets/projects/aelanji/screen-1.png";
import aelanji2 from "@/assets/projects/aelanji/screen-2.png";
import aiCardCover from "@/assets/projects/ai-card/cover.jpg";
import ajwaaCover from "@/assets/projects/ajwaa/cover.png";
import feasibilityCover from "@/assets/projects/ai-feasibility/cover.jpg";
import feasibility1 from "@/assets/projects/ai-feasibility/screen-1.png";
import feasibility2 from "@/assets/projects/ai-feasibility/screen-2.png";
import aiHomesCover from "@/assets/projects/ai-homes/cover.jpg";
import aiRadarCover from "@/assets/projects/ai-radar/cover.jpg";
import aiRadar1 from "@/assets/projects/ai-radar/screen-1.png";
import aiRadar2 from "@/assets/projects/ai-radar/screen-2.png";
import crewCover from "@/assets/projects/crewai/cover.jpg";
import crew1 from "@/assets/projects/crewai/screen-1.jpg";
import crew2 from "@/assets/projects/crewai/screen-2.jpg";
import crew3 from "@/assets/projects/crewai/screen-3.png";
import hadayekCover from "@/assets/projects/hadayek-hof/cover.jpg";
import homesxpCover from "@/assets/projects/homesxp/cover.jpg";
import homesxp1 from "@/assets/projects/homesxp/screen-1.png";
import matchbuyCover from "@/assets/projects/matchbuy/cover.jpg";
import matchbuy1 from "@/assets/projects/matchbuy/screen-1.jpg";
import matchbuy2 from "@/assets/projects/matchbuy/screen-2.jpg";
import privilegeCover from "@/assets/projects/privilege/cover.jpg";
import sonblaCover from "@/assets/projects/sonbla/cover.jpg";

import type { IndustryId } from "./site";

export type ProjectStatus =
  | "live"
  | "mvp"
  | "in-development"
  | "design"
  | "confidential";

export type Project = {
  slug: string;
  name: string;
  /** Short descriptor shown next to the name, e.g. "AI Real Estate". */
  kind: string;
  summary: string;
  highlights: string[];
  industries: IndustryId[];
  company: { name: string; url?: string };
  /** Years, e.g. "2025". `end: null` means ongoing. */
  period: { start: string; end: string | null };
  stack: string[];
  status: ProjectStatus;
  links: {
    website?: string;
    playStore?: string;
    appStore?: string;
    appGallery?: string;
    design?: string;
  };
  cover?: StaticImageData;
  /**
   * Solid background for logo-style covers (e.g. a wide logo on white):
   * the logo is padded on this colour instead of the blurred backdrop.
   */
  coverBackground?: string;
  screens: StaticImageData[];
  featured?: boolean;
  /** Headline result, shown on cards when present. */
  metric?: { value: string; label: string };
};

const PLANET_LAND = { name: "PLANET LAND LLC", url: "https://www.planetland.net/" };
const METACHAIN = { name: "Metachain Technologies", url: "https://mcti.io" };
const SONBLA = { name: "Sonbla", url: "https://sonbla.app/" };
const CUBIC = { name: "Cubic Information Systems", url: "https://cubicsystems.com/" };
const FREELANCE = { name: "Freelance" };

export const projects: Project[] = [
  {
    slug: "mobile-banking",
    name: "Enterprise Mobile Banking",
    kind: "Banking",
    summary:
      "An enterprise online banking platform for corporate and retail customers, built with Flutter and Clean Architecture to tier-1 banking security standards.",
    highlights: [
      "OWASP Mobile Top 10 controls, SSL pinning and tamper detection, verified by third-party penetration tests.",
      "Custom Android and iOS platform channels for biometric authentication with attempt throttling and lockout.",
      "Strict TDD with unit and bloc tests (Mocktail), plus dependency audits to reduce supply-chain risk.",
      "On-site client delivery and UAT cycles with bank stakeholders.",
    ],
    industries: ["banking-fintech"],
    company: CUBIC,
    period: { start: "2026", end: null },
    stack: ["Flutter", "Clean Architecture", "BLoC", "Kotlin", "Swift", "Platform Channels", "OWASP", "Mocktail"],
    status: "confidential",
    links: {},
    screens: [],
    featured: true,
    metric: { value: "OWASP", label: "Mobile Top 10, pen-tested" },
  },
  {
    slug: "ajwaa",
    name: "Ajwaa (أجواء العالم)",
    kind: "Travel Booking",
    summary:
      "An online travel agency for booking Makkah hotels for Hajj and Umrah, with an admin dashboard, live hotel inventory from Billbed and WhatsApp customer support.",
    highlights: [
      "Built the booking website: search by destination, dates, guests and rooms, live availability and pricing, and online checkout.",
      "Built the admin dashboard for managing hotels and bookings.",
      "Integrated the Billbed B2B hotel booking API for inventory and reservations.",
      "Connected respond.io so customer questions are answered over WhatsApp.",
    ],
    industries: ["travel"],
    company: { name: "Ajwaa (أجواء العالم)", url: "https://ajwaaa.com/" },
    period: { start: "2026", end: "2026" },
    stack: ["NestJS", "Node.js", "PostgreSQL", "Billbed API", "respond.io", "WhatsApp"],
    status: "live",
    links: { website: "https://ajwaaa.com/" },
    cover: ajwaaCover,
    coverBackground: "#ffffff",
    screens: [],
  },
  {
    slug: "ai-homes",
    name: "AI Homes",
    kind: "Real Estate",
    summary:
      "A high-traffic real estate app whose 30-second cold start I rebuilt to launch in under a second.",
    highlights: [
      "Re-architected the startup sequence with parallel async loading and lazy initialization.",
      "Optimized the local caching layer and deferred non-critical background work.",
      "The approach became the basis for my open-source performance_monitor package.",
    ],
    industries: ["real-estate"],
    company: PLANET_LAND,
    period: { start: "2025", end: "2026" },
    stack: ["Flutter", "Dart", "Clean Architecture", "BLoC", "Performance profiling"],
    status: "live",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.homes.radar",
      appStore: "https://apps.apple.com/ae/app/ai-homes/id6744656599",
    },
    cover: aiHomesCover,
    screens: [],
    featured: true,
    metric: { value: "30s → <1s", label: "cold start" },
  },
  {
    slug: "homesxp",
    name: "HomesXP",
    kind: "Fintech & Real Estate",
    summary:
      "An AI-driven fintech and virtual real estate platform with mortgage tooling, investment tracking and five ways to explore the market.",
    highlights: [
      "Mortgage calculator and investment tracking tools.",
      "Multi-view engine: Map, Radar, List, Posts and Live Statistics.",
      "AI-driven market analysis for off-plan investment decisions.",
    ],
    industries: ["banking-fintech", "real-estate"],
    company: PLANET_LAND,
    period: { start: "2025", end: "2026" },
    stack: ["Flutter", "BLoC", "Firebase", "Google Maps"],
    status: "live",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.homesxp.homesxp",
      appStore: "https://apps.apple.com/ae/app/homesxp/id6752358412",
    },
    cover: homesxpCover,
    screens: [homesxp1],
    featured: true,
  },
  {
    slug: "ai-feasibility",
    name: "AI Feasibility",
    kind: "Fintech",
    summary:
      "A financial engine that produces real estate feasibility assessments for banks, developers and investors.",
    highlights: [
      "Calculates IRR, NPV, ROI and payback period with instant feedback.",
      "Scenario testing: adjust costs and timelines and see the cash-flow impact live.",
      "Grounded in real-time UAE market transaction data.",
    ],
    industries: ["banking-fintech", "real-estate"],
    company: PLANET_LAND,
    period: { start: "2025", end: "2026" },
    stack: ["Flutter", "Dart", "Data analysis"],
    status: "live",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=at.ai.feasibility.world",
      appStore: "https://apps.apple.com/ae/app/ai-feasibility/id6755543887",
    },
    cover: feasibilityCover,
    screens: [feasibility1, feasibility2],
  },
  {
    slug: "ai-radar",
    name: "AI RADAR",
    kind: "AR Discovery",
    summary:
      "An augmented-reality discovery app that blends live geospatial data with an AR camera view.",
    highlights: [
      "Three-way navigation: interactive map, list and AR camera.",
      "Google Places integration with fetching tuned for smooth tracking on the move.",
    ],
    industries: ["real-estate"],
    company: PLANET_LAND,
    period: { start: "2025", end: "2026" },
    stack: ["Flutter", "Augmented Reality", "Google Maps", "Google Places"],
    status: "live",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.atworld.atradar",
      appStore: "https://apps.apple.com/ae/app/ai-radar/id6747173241",
    },
    cover: aiRadarCover,
    screens: [aiRadar1, aiRadar2],
  },
  {
    slug: "ai-card",
    name: "AI CARD",
    kind: "AR Networking",
    summary:
      "A geospatial business-networking app with a 360° radar scanner and AR view of nearby professionals.",
    highlights: [
      "360° radar scanner and AR view for real-time discovery.",
      "Digital business cards with instant profiles, contacts and media.",
      "Real-time GPS positioning and navigation to business locations.",
    ],
    industries: ["real-estate"],
    company: PLANET_LAND,
    period: { start: "2025", end: "2026" },
    stack: ["Flutter", "Firebase Realtime Database", "Google Maps", "AR"],
    status: "live",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=at.world.business.card",
      appStore: "https://apps.apple.com/ae/app/ai-card/id6756216613",
    },
    cover: aiCardCover,
    screens: [],
  },
  {
    slug: "sonbla",
    name: "Sonbla",
    kind: "E-commerce",
    summary:
      "A Saudi e-commerce and delivery platform serving many stores with dynamic inventory, secure payments and live order tracking.",
    highlights: [
      "Cut Google Maps API spend from $3,500 to under $500 a month.",
      "Removed 60% of redundant network calls with debouncing and cancellation tokens.",
      "Fixed race conditions in coupon redemption that were causing checkout drop-offs.",
    ],
    industries: ["ecommerce"],
    company: SONBLA,
    period: { start: "2025", end: "2026" },
    stack: ["Flutter", "MVVM", "Provider", "Payment gateways", "Sentry", "Branch.io"],
    status: "live",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=app.sonbla",
      appStore: "https://apps.apple.com/ae/app/sonbla/id6742665454",
    },
    cover: sonblaCover,
    screens: [],
    featured: true,
    metric: { value: "−85%", label: "Maps API cost" },
  },
  {
    slug: "sonbla-driver",
    name: "Sonbla Driver",
    kind: "Logistics",
    summary:
      "The delivery side of the Sonbla ecosystem: live tracking, order management and earnings for drivers.",
    highlights: [
      "High-precision background location for live order tracking.",
      "Accept, manage and update orders in real time across driver, merchant and customer apps.",
      "Earnings and delivery-history dashboard.",
    ],
    industries: ["ecommerce"],
    company: SONBLA,
    period: { start: "2025", end: "2026" },
    stack: ["Flutter", "Streams", "WebSockets", "Background location"],
    status: "live",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=app.sonbla.driver",
      appStore: "https://apps.apple.com/ae/app/sonbla-driver/id6743680783",
    },
    cover: sonblaCover,
    screens: [],
  },
  {
    slug: "crewai",
    name: "CrewAI",
    kind: "AI Workforce",
    summary:
      "A platform for hiring and managing a digital workforce of AI agents that automate professional workflows.",
    highlights: [
      "Onboarding flow to define each agent's traits and professional role.",
      "Real-time event management synced with user calendars and Google Meet.",
      "Immersive, cinematic interface for AI personas.",
    ],
    industries: ["ai"],
    company: METACHAIN,
    period: { start: "2024", end: "2025" },
    stack: ["Flutter", "LangChain", "Firebase", "Google Cloud"],
    status: "mvp",
    links: {},
    cover: crewCover,
    screens: [crew1, crew2, crew3],
    featured: true,
  },
  {
    slug: "matchbuy",
    name: "MatchBuy",
    kind: "AI Real Estate",
    summary:
      "An AI real estate assistant that answers market questions and matches buyers with sellers.",
    highlights: [
      "Conversational assistant built on the OpenAI Assistants API and vector search.",
      "GraphRAG pipelines delivering 95% query precision on property search.",
      "Buyer-seller matching based on needs and real-time market data.",
    ],
    industries: ["ai", "real-estate"],
    company: METACHAIN,
    period: { start: "2024", end: "2025" },
    stack: ["Flutter", "OpenAI Assistants API", "GraphRAG", "Vector search", "Clean Architecture"],
    status: "mvp",
    links: {},
    cover: matchbuyCover,
    screens: [matchbuy1, matchbuy2],
    metric: { value: "95%", label: "query precision" },
  },
  {
    slug: "speakgpt",
    name: "SpeakGPT",
    kind: "Voice AI",
    summary:
      "A voice-first GPT client with continuous, hands-free conversation.",
    highlights: [
      "Bi-directional speech-to-text and text-to-speech.",
      "Low-latency audio streaming for natural back-and-forth.",
    ],
    industries: ["ai"],
    company: METACHAIN,
    period: { start: "2024", end: "2025" },
    stack: ["Flutter", "Speech-to-Text", "Text-to-Speech", "OpenAI"],
    status: "mvp",
    links: {},
    screens: [],
  },
  {
    slug: "privilege",
    name: "Privilege",
    kind: "EdTech",
    summary:
      "A study companion for medical students with flashcards, quizzes, a study planner and organized notes.",
    highlights: [
      "Interactive flashcards and quiz engine for exam preparation.",
      "Study planner with progress tracking and scheduled notifications.",
      "Hierarchical notes system optimized for fast retrieval, with dark mode.",
    ],
    industries: ["education"],
    company: FREELANCE,
    period: { start: "2022", end: "2023" },
    stack: ["Flutter", "Android", "iOS", "Push notifications"],
    status: "live",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.privilegeapps.privilege",
      appStore: "https://apps.apple.com/us/app/privilege/id1632963488",
    },
    cover: privilegeCover,
    screens: [],
    featured: true,
  },
  {
    slug: "3elagk",
    name: "3Elagk",
    kind: "Medical Commerce",
    summary:
      "A medical commerce ecosystem of three connected apps for buyers, pharmacies and delivery agents.",
    highlights: [
      "Real-time order flow from customer to pharmacy to delivery agent.",
      "FCM notifications and deep links across all three apps.",
      "Inventory management, secure checkout and live order tracking over REST APIs.",
    ],
    industries: ["ecommerce"],
    company: FREELANCE,
    period: { start: "2022", end: "2023" },
    stack: ["Flutter", "Firebase", "Firestore", "FCM", "REST APIs"],
    status: "design",
    links: {
      design: "https://xd.adobe.com/view/a60dcd99-a4cf-423c-84eb-30ffe1121fc3-f35e/grid/",
    },
    cover: elagkCover,
    screens: [elagk1, elagk2],
  },
  {
    slug: "aelanji",
    name: "Aelanji",
    kind: "Classifieds Marketplace",
    summary:
      "A classifieds marketplace built for large-scale listings and real-time buyer-seller chat.",
    highlights: [
      "Flexible ad posting across categories such as real estate, electronics and jobs.",
      "Location-based search for nearby listings.",
      "In-app messaging and a media upload and caching pipeline.",
    ],
    industries: ["ecommerce"],
    company: FREELANCE,
    period: { start: "2025", end: null },
    stack: ["Flutter", "Dart", "Clean Architecture"],
    status: "in-development",
    links: {},
    cover: aelanjiCover,
    screens: [aelanji1, aelanji2],
  },
  {
    slug: "hadayek-hof",
    name: "Hadayek-Hof",
    kind: "Local Services",
    summary:
      "A local services app for community interaction and service discovery, with encrypted backend communication.",
    highlights: [],
    industries: [],
    company: FREELANCE,
    period: { start: "2022", end: "2022" },
    stack: ["Flutter", "Firebase", "Encryption"],
    status: "live",
    links: { appGallery: "https://appgallery.huawei.com/app/C106661249" },
    cover: hadayekCover,
    screens: [],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function projectsByIndustry(industry: IndustryId) {
  return projects.filter((p) => p.industries.includes(industry));
}
