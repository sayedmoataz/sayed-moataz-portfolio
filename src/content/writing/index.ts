/**
 * Article metadata. Each post's body lives next to this file as `<slug>.mdx`.
 * Reading time is computed from the MDX file at build time (see lib/writing.ts).
 */
export type Post = {
  slug: string;
  title: string;
  summary: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  tags: string[];
};

export const posts: Post[] = [
  {
    slug: "pdf-services",
    title: "Refactoring Legacy PDF Service: From Monolith to SOLID Architecture",
    summary:
      "How I broke a 500-line, untestable PDF service into a clean, SOLID architecture across 25+ focused files.",
    date: "2025-08-07",
    tags: ["Flutter", "Refactoring", "SOLID", "Clean Architecture"],
  },
  {
    slug: "notification-services",
    title:
      "Building a Robust Notification Status Service in Flutter: A Deep Dive into Clean Architecture and SOLID Principles",
    summary:
      "A production-ready notification monitoring system with real-time status, error tracking and automatic recovery, and the design principles behind it.",
    date: "2025-07-05",
    tags: ["Flutter", "Notifications", "Clean Architecture", "SOLID"],
  },
  {
    slug: "firebase-analytics",
    title:
      "Building a Robust Firebase Analytics Layer in Flutter: A Clean Architecture Approach",
    summary:
      "How I built a scalable, testable analytics system with dependency injection and clean architecture principles.",
    date: "2025-06-29",
    tags: ["Flutter", "Firebase", "Analytics", "Dependency Injection"],
  },
];
