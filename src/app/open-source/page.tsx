import { ArrowUpRight, Package as PackageIcon } from "lucide-react";
import type { Metadata } from "next";
import { FaGithub } from "react-icons/fa6";

import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { SocialIcon } from "@/components/social-icon";
import { packages, profiles, type Package, type Profile } from "@/content/open-source";
import { getGitHubRepoCount, getPackageStats, getStackOverflowReputation } from "@/lib/live-stats";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Open Source",
  description:
    "Flutter packages on pub.dev with perfect pub points, plus community contributions on GitHub and Stack Overflow.",
  path: "/open-source",
});

async function PackageCard({ pkg }: { pkg: Package }) {
  const stats = await getPackageStats(pkg);
  const items = [
    { label: "pub points", value: `${stats.points}/${stats.maxPoints}` },
    { label: "likes", value: stats.likes.toLocaleString("en-US") },
    { label: "downloads / 30 days", value: stats.monthlyDownloads.toLocaleString("en-US") },
  ];

  return (
    <article className="flex h-full flex-col rounded-3xl border border-border bg-surface p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-surface-2">
          <PackageIcon aria-hidden className="size-5 text-accent" />
        </span>
        {stats.version && (
          <span className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted">
            v{stats.version}
          </span>
        )}
      </div>
      <h2 className="mt-6 font-mono text-xl font-semibold tracking-tight">{pkg.name}</h2>
      <p className="mt-3 text-pretty text-muted">{pkg.description}</p>
      <p className="mt-3 text-sm text-pretty text-subtle">{pkg.story}</p>

      <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-6">
        {items.map((it) => (
          <div key={it.label}>
            <dt className="text-xs text-subtle">{it.label}</dt>
            <dd className="order-first font-mono text-lg font-semibold">{it.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        <a
          href={pkg.pubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
        >
          pub.dev <ArrowUpRight aria-hidden className="size-4" />
        </a>
        <a
          href={pkg.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-2"
        >
          <FaGithub aria-hidden className="size-4" /> Source
        </a>
      </div>
    </article>
  );
}

async function profileStat(stat: Profile["stat"]) {
  if (!("live" in stat)) return stat;
  const value =
    stat.live === "github-repos" ? await getGitHubRepoCount() : await getStackOverflowReputation();
  return { label: stat.label, value: value?.toLocaleString("en-US") ?? stat.fallback };
}

async function ProfileCard({ profile }: { profile: Profile }) {
  const stat = await profileStat(profile.stat);
  return (
    <a
      href={profile.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-border-strong"
    >
      <div className="flex items-center justify-between">
        <SocialIcon name={profile.icon} className="size-5 text-muted group-hover:text-fg" />
        <ArrowUpRight aria-hidden className="size-4 text-subtle group-hover:text-fg" />
      </div>
      <p className="mt-5 font-medium">{profile.platform}</p>
      <p className="mt-1 text-sm text-muted">{profile.description}</p>
      <p className="mt-auto pt-4 text-sm">
        <span className="font-mono font-semibold">{stat.value}</span>{" "}
        <span className="text-subtle">{stat.label}</span>
      </p>
    </a>
  );
}

export default function OpenSourcePage() {
  return (
    <>
      <PageHeader
        eyebrow="Open Source"
        title="Packages & community"
        description="Production problems I solved once and published for everyone. Stats are pulled live from pub.dev, GitHub and Stack Overflow."
      />
      <Container className="pb-16">
        <ul className="grid gap-5 lg:grid-cols-2">
          {packages.map((pkg) => (
            <li key={pkg.name}>
              <PackageCard pkg={pkg} />
            </li>
          ))}
        </ul>
      </Container>

      <Container className="pb-24">
        <h2 className="text-2xl font-semibold tracking-tight">Elsewhere</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {profiles.map((p) => (
            <li key={p.platform}>
              <ProfileCard profile={p} />
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
