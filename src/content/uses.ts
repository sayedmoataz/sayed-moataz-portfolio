/** The /uses page: tools and packages used day to day. */
export const uses: { group: string; items: { name: string; note?: string }[] }[] = [
  {
    group: "Editors & IDEs",
    items: [
      { name: "VS Code", note: "Day-to-day Flutter and Dart work." },
      { name: "Android Studio", note: "Kotlin, platform channels and profiling." },
      { name: "Xcode", note: "Swift, iOS signing and Instruments." },
    ],
  },
  {
    group: "Flutter toolkit",
    items: [
      { name: "flutter_bloc", note: "Default state management for larger apps." },
      { name: "Provider", note: "For lighter MVVM codebases." },
      { name: "Dio", note: "HTTP with interceptors, retries and cancellation tokens." },
      { name: "Hive & SQFlite", note: "Local storage for offline-first features." },
      { name: "Mocktail & bloc_test", note: "Unit and bloc tests." },
    ],
  },
  {
    group: "Shipping & monitoring",
    items: [
      { name: "GitHub Actions & Fastlane", note: "CI/CD and store releases." },
      { name: "Shorebird", note: "Over-the-air patches for Flutter." },
      { name: "Firebase Crashlytics & Sentry", note: "Crash and error tracking." },
      { name: "Branch.io & AppsFlyer", note: "Deep links and attribution." },
    ],
  },
  {
    group: "Payments",
    items: [{ name: "Stripe" }, { name: "PayPal" }, { name: "Paymob" }],
  },
  {
    group: "Design & collaboration",
    items: [
      { name: "Figma", note: "Design handoff." },
      { name: "Jira, ClickUp & Notion", note: "Planning and documentation." },
      { name: "Slack", note: "Team communication." },
    ],
  },
];
