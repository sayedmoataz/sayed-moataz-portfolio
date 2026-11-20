import type { SocialIcon } from "./site";

export type Package = {
  name: string;
  pubUrl: string;
  repoUrl: string;
  description: string;
  /** Why it exists: the production problem it came from. */
  story: string;
  /** Used when pub.dev can't be reached at build time. Snapshot: 2026-11-20. */
  fallback: { points: number; maxPoints: number; likes: number; monthlyDownloads: number };
};

export const packages: Package[] = [
  {
    name: "performance_monitor",
    pubUrl: "https://pub.dev/packages/performance_monitor",
    repoUrl: "https://github.com/sayedmoataz/flutter-performance-services",
    description:
      "Lightweight performance monitoring with optional smart caching to optimize app startup time.",
    story:
      "Extracted from the work that cut AI Homes' cold start from 30 seconds to under one.",
    fallback: { points: 160, maxPoints: 160, likes: 19, monthlyDownloads: 136 },
  },
  {
    name: "advanced_responsive",
    pubUrl: "https://pub.dev/packages/advanced_responsive",
    repoUrl: "https://github.com/sayedmoataz/advanced_responsive",
    description:
      "Responsive layouts with Material Design 3 breakpoints, device detection, adaptive spacing and context extensions.",
    story:
      "A Material 3 adaptive layout engine I kept rebuilding across client apps, packaged once.",
    fallback: { points: 160, maxPoints: 160, likes: 23, monthlyDownloads: 132 },
  },
];

export type Profile = {
  platform: string;
  icon: SocialIcon;
  href: string;
  description: string;
  /** Static stat, or a key into the live stats fetched at build time. */
  stat: { label: string; value: string } | { live: "github-repos" | "so-reputation"; label: string; fallback: string };
};

export const profiles: Profile[] = [
  {
    platform: "GitHub",
    icon: "github",
    href: "https://github.com/sayedmoataz",
    description: "Packages, samples and experiments.",
    stat: { live: "github-repos", label: "public repos", fallback: "75" },
  },
  {
    platform: "Stack Overflow",
    icon: "stackoverflow",
    href: "https://stackoverflow.com/users/11287483/saayeed-m-daawoud",
    description: "Answering Flutter and mobile questions.",
    stat: { live: "so-reputation", label: "reputation", fallback: "460+" },
  },
  {
    platform: "Medium",
    icon: "medium",
    href: "https://medium.com/@sayedmoataz9",
    description: "Long-form engineering breakdowns.",
    stat: { label: "articles", value: "5+" },
  },
  {
    platform: "dev.to",
    icon: "devto",
    href: "https://dev.to/sayedmoataz",
    description: "Tutorials and community posts.",
    stat: { label: "posts", value: "3+" },
  },
  {
    platform: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/saayeedmdawoud/",
    description: "Career notes and industry perspective.",
    stat: { label: "articles", value: "10+" },
  },
];
