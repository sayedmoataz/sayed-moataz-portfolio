import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { getPosts } from "@/lib/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, site.url).toString();

  const pages: MetadataRoute.Sitemap = [
    { url: url("/"), changeFrequency: "monthly", priority: 1 },
    { url: url("/work"), changeFrequency: "monthly", priority: 0.9 },
    { url: url("/experience"), changeFrequency: "monthly", priority: 0.8 },
    { url: url("/open-source"), changeFrequency: "weekly", priority: 0.7 },
    { url: url("/writing"), changeFrequency: "monthly", priority: 0.7 },
    { url: url("/now"), changeFrequency: "monthly", priority: 0.5 },
    { url: url("/uses"), changeFrequency: "yearly", priority: 0.3 },
  ];

  return [
    ...pages,
    ...projects.map((p) => ({
      url: url(`/work/${p.slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...getPosts().map((p) => ({
      url: url(`/writing/${p.slug}`),
      lastModified: p.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
