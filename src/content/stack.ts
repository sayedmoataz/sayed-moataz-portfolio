/**
 * Technical skills, grouped as in cv.tex. No proficiency percentages: the
 * projects and experience pages are the evidence.
 */
export const stack: { group: string; items: string[] }[] = [
  {
    group: "Core",
    items: ["Flutter", "Dart", "Kotlin", "Jetpack Compose", "Kotlin Multiplatform", "Swift", "Platform Channels"],
  },
  {
    group: "Architecture & state",
    items: ["Clean Architecture", "BLoC / Cubit", "Provider", "MVVM", "Offline-first", "SOLID", "Design patterns"],
  },
  {
    group: "Testing & quality",
    items: ["TDD", "Mocktail / Mockito", "bloc_test", "Integration testing", "Code review"],
  },
  {
    group: "Security",
    items: ["OWASP Mobile Top 10", "SSL pinning", "Tamper detection", "Biometric auth", "Secure storage", "RBAC"],
  },
  {
    group: "AI integration",
    items: ["OpenAI Assistants API", "GraphRAG", "Vector search", "LangChain", "Speech-to-Text / TTS"],
  },
  {
    group: "Backend & databases",
    items: [
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Aurora (Serverless v2 / Provisioned)",
      "RDS Proxy",
      "PgBouncer",
      "DBeaver",
      "REST APIs",
    ],
  },
  {
    group: "DevOps & cloud",
    items: ["GitHub Actions", "Fastlane", "Shorebird", "Firebase", "Google Cloud (BigQuery)", "AWS (CloudWatch, ECS)"],
  },
  {
    group: "Tools & analytics",
    items: ["Git", "Jira", "Figma", "Sentry", "Crashlytics", "Branch.io", "AppsFlyer", "Stripe", "Paymob"],
  },
];
