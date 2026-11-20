import { cacheLife } from "next/cache";

import type { Package } from "@/content/open-source";

/**
 * Public stats fetched at build time and refreshed daily, so numbers on the
 * site never go stale. Every fetcher falls back to a snapshot on failure, so
 * an API outage can never break a build.
 */

const TIMEOUT_MS = 8000;

async function getJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export type PackageStats = {
  points: number;
  maxPoints: number;
  likes: number;
  monthlyDownloads: number;
  version: string | null;
  live: boolean;
};

export async function getPackageStats(pkg: Package): Promise<PackageStats> {
  "use cache";
  cacheLife("days");

  const [score, info] = await Promise.all([
    getJson<{
      grantedPoints: number;
      maxPoints: number;
      likeCount: number;
      downloadCount30Days: number;
    }>(`https://pub.dev/api/packages/${pkg.name}/score`),
    getJson<{ latest: { version: string } }>(
      `https://pub.dev/api/packages/${pkg.name}`,
    ),
  ]);

  if (!score) return { ...pkg.fallback, version: info?.latest.version ?? null, live: false };
  return {
    points: score.grantedPoints,
    maxPoints: score.maxPoints,
    likes: score.likeCount,
    monthlyDownloads: score.downloadCount30Days,
    version: info?.latest.version ?? null,
    live: true,
  };
}

export async function getGitHubRepoCount(): Promise<number | null> {
  "use cache";
  cacheLife("days");

  const user = await getJson<{ public_repos: number }>(
    "https://api.github.com/users/sayedmoataz",
  );
  return user?.public_repos ?? null;
}

export async function getStackOverflowReputation(): Promise<number | null> {
  "use cache";
  cacheLife("days");

  const data = await getJson<{ items: { reputation: number }[] }>(
    "https://api.stackexchange.com/2.3/users/11287483?site=stackoverflow",
  );
  return data?.items[0]?.reputation ?? null;
}
