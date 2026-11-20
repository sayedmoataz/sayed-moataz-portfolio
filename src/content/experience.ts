export type ExperienceKind = "work" | "internship" | "education" | "service";

export type Experience = {
  role: string;
  org: string;
  orgUrl?: string;
  /** One line on what the organisation does, for less well-known companies. */
  orgSummary?: string;
  location?: string;
  employment?: string;
  kind: ExperienceKind;
  /** "YYYY-MM", or "YYYY" when only the year is known. `end: null` means present. */
  start: string;
  end: string | null;
  highlights: string[];
  stack: string[];
  /** Slugs from projects.ts. */
  projects: string[];
};

// Newest first. Bullets for the four most recent roles come from cv.tex.
export const experience: Experience[] = [
  {
    role: "Senior Mobile Developer",
    org: "Cubic Information Systems",
    orgUrl: "https://cubicsystems.com/",
    location: "Cairo, Egypt",
    kind: "work",
    start: "2026-05",
    end: null,
    highlights: [
      "Architecting an enterprise online banking platform for corporate and retail banking using Flutter and Clean Architecture.",
      "Leading on-site client deliveries and UAT cycles, aligning business workflows with client stakeholders.",
      "Implemented OWASP Mobile Top 10 controls, SSL pinning and tamper detection, verified by third-party penetration tests.",
      "Built custom Android and iOS platform channels for biometric authentication with attempt throttling and lockout.",
      "Enforce strict TDD with unit and bloc tests (Mocktail), and audit dependencies to minimize supply-chain risk.",
      "Mentor engineering interns through code reviews, architecture workshops and clean-code practice.",
    ],
    stack: ["Flutter", "Clean Architecture", "BLoC", "Kotlin", "Swift", "Platform Channels", "OWASP Mobile Top 10", "Mocktail"],
    projects: ["mobile-banking"],
  },
  {
    role: "Cloud Engineer",
    org: "Bexprt",
    orgUrl: "https://bexprt.com/",
    orgSummary:
      "AWS Advanced Consulting Partner building production AI agents and resilient cloud platforms for enterprises.",
    employment: "Contract · 6 months",
    kind: "work",
    start: "2026",
    end: "2026",
    highlights: [
      "Ran the database and AWS infrastructure assessment for a client's multi-tenant Odoo platform on Aurora PostgreSQL Serverless v2: more than a dozen clusters behind 11 RDS Proxies.",
      "Led the root-cause analysis of a production degradation incident, correlating CloudWatch metrics, RDS Proxy logs, ECS alarms and application logs across tenants.",
      "Proved RDS Proxy was giving no connection pooling: Odoo's SET statements, temp tables and advisory locks pinned 74–89% of database connections on the busiest cluster. An architecture mismatch, not a misconfiguration.",
      "Showed connections, not compute, were the bottleneck: about 1,260 connections at 8% CPU with 83 GB of memory free.",
      "Recommended replacing RDS Proxy with PgBouncer, agreed with the client, and ranked the clusters for migration by measured pinning.",
      "Planned the Serverless v2 to Provisioned move from 7-day capacity (ACU) data per cluster: pilot cluster, migration order and instance sizes (db.r6g.2xlarge / 4xlarge).",
      "Wrote the assessment and recommendations report and presented the findings in client meetings.",
    ],
    stack: [
      "Aurora PostgreSQL",
      "Aurora Serverless v2",
      "RDS Proxy",
      "PgBouncer",
      "CloudWatch",
      "ECS",
      "Odoo",
      "DBeaver",
    ],
    projects: [],
  },
  {
    role: "Software Engineer",
    org: "Ajwaa (أجواء العالم)",
    orgUrl: "https://ajwaaa.com/",
    employment: "Freelance",
    kind: "work",
    start: "2026",
    end: "2026",
    highlights: [
      "Built an online travel agency (OTA) website with an admin dashboard for booking Makkah hotels for Hajj and Umrah.",
      "Integrated the Billbed B2B hotel booking API for live inventory and reservations.",
      "Connected respond.io to answer customers over WhatsApp.",
    ],
    stack: ["NestJS", "Node.js", "PostgreSQL", "Billbed API", "respond.io"],
    projects: ["ajwaa"],
  },
  {
    role: "Flutter Developer (Mid-to-Senior)",
    org: "PLANET LAND LLC",
    orgUrl: "https://www.planetland.net/",
    location: "Remote, UAE",
    employment: "Full-time",
    kind: "work",
    start: "2025-03",
    end: "2026-05",
    highlights: [
      "Architected and shipped 6 production real estate apps on iOS and Android with Flutter, BLoC and Firebase.",
      "Cut app launch time from 30s to under 1s with lazy module initialization, deferred background work and parallel loading.",
      "Built Branch.io deep-linking infrastructure for contextual referral and marketing campaigns.",
      "Established unit-test suites using the Arrange-Act-Assert pattern across auth and payment flows.",
    ],
    stack: ["Flutter", "BLoC", "Firebase", "Branch.io", "Google Maps", "Crashlytics", "Clean Architecture", "TDD"],
    projects: ["ai-homes", "homesxp", "ai-feasibility", "ai-radar", "ai-card"],
  },
  {
    role: "Flutter Developer",
    org: "Sonbla",
    orgUrl: "https://sonbla.app/",
    location: "Remote, KSA",
    employment: "Part-time",
    kind: "work",
    start: "2025-02",
    end: "2026-03",
    highlights: [
      "Owned end-to-end development of 3 multi-tenant e-commerce apps (customer, delivery, vendor) using Clean MVVM and Provider.",
      "Cut Google Maps API spend from $3,500 to under $500 a month by optimizing geolocation request lifecycles.",
      "Removed 60% of redundant network calls with debouncing and cancellation tokens, bringing latency under 1s.",
      "Eliminated checkout drop-offs by resolving race conditions in coupon redemption and transaction validation.",
    ],
    stack: ["Flutter", "MVVM", "Provider", "Streams", "Sentry", "Branch.io"],
    projects: ["sonbla", "sonbla-driver"],
  },
  {
    role: "Flutter Developer",
    org: "Metachain Technologies Inc.",
    orgUrl: "https://mcti.io",
    location: "Remote, Canada",
    employment: "Full-time",
    kind: "work",
    start: "2023-11",
    end: "2025-03",
    highlights: [
      "Delivered 5 MVP apps across AI-driven real estate, multi-agent productivity assistants and real-time voice.",
      "Integrated the OpenAI Assistants API, vector search and GraphRAG pipelines for property search with 95% query precision.",
      "Built continuous conversational voice interfaces with bi-directional speech-to-text and low-latency audio streaming.",
    ],
    stack: ["Flutter", "OpenAI Assistants API", "GraphRAG", "Vector search", "BigQuery", "Firebase", "Speech-to-Text"],
    projects: ["crewai", "matchbuy", "speakgpt"],
  },
  {
    role: "Military Service",
    org: "Egyptian Armed Forces",
    location: "Egypt",
    employment: "Mandatory service",
    kind: "service",
    start: "2022-10",
    end: "2023-12",
    highlights: ["Completed mandatory military service."],
    stack: [],
    projects: [],
  },
  {
    role: "Flutter Developer Intern",
    org: "Algoriza",
    orgUrl: "https://algoriza.com/",
    location: "Remote, Egypt",
    employment: "Internship",
    kind: "internship",
    start: "2022-07",
    end: "2022-09",
    highlights: [
      "Built Flutter features covering state management, API integration and local storage.",
      "Worked in an agile team with Git-based workflows.",
    ],
    stack: ["Flutter", "Dart", "SQFlite", "Git"],
    projects: [],
  },
  {
    role: "Flutter Developer",
    org: "Freelance",
    location: "Remote, Egypt",
    employment: "Freelance",
    kind: "work",
    start: "2022-01",
    end: null,
    highlights: [
      "Built apps for education, health and local services clients.",
      "Integrated the Paymob payment gateway for secure in-app transactions.",
      "Fixed in-app purchase and Apple Push Notification issues in production apps.",
    ],
    stack: ["Flutter", "Dart", "Paymob", "Push notifications", "App distribution"],
    projects: ["privilege", "3elagk", "aelanji", "hadayek-hof"],
  },
  {
    role: "Software Engineer Intern",
    org: "Master Micro",
    orgUrl: "https://www.master-micro.com/",
    location: "Remote, Egypt",
    employment: "Internship",
    kind: "internship",
    start: "2021-06",
    end: "2021-08",
    highlights: [
      "Solved data-structure and algorithm problems in C/C++, Java and Python, optimizing for efficiency.",
    ],
    stack: ["C/C++", "Java", "Python"],
    projects: [],
  },
  {
    role: "BSc Computer Science",
    org: "Helwan University",
    orgUrl: "https://www.helwan.edu.eg/",
    location: "Cairo, Egypt",
    kind: "education",
    start: "2018-09",
    end: "2022-06",
    highlights: [
      "Faculty of Computers and Artificial Intelligence.",
      "Graduation project: an augmented-reality app built with Flutter and Unity 3D (grade A).",
    ],
    stack: ["Flutter", "Unity 3D", "Augmented Reality"],
    projects: [],
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional working proficiency" },
] as const;
