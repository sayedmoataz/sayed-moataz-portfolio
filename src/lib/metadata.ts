import type { Metadata } from "next";

import { site } from "@/content/site";

/**
 * Per-page metadata. Next merges metadata shallowly, so a page that sets
 * `openGraph` or `alternates` replaces the layout's version entirely. This
 * helper builds both objects completely for each page: canonical URL,
 * og:title / og:url and the RSS link always match the page.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  hasOwnImage = false,
}: {
  /**
   * True for routes with their own opengraph-image file. An explicit
   * `images` entry here would override that file, so it's left out.
   */
  hasOwnImage?: boolean;
  /** Omit on the home page to use the layout's default title. */
  title?: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const ogTitle = title ? `${title} · ${site.name}` : `${site.name} · ${site.role}`;
  // Site-wide image from app/opengraph-image.tsx, for routes without their
  // own. Needed because a page's `openGraph` replaces the layout's entirely.
  const images = hasOwnImage
    ? undefined
    : [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name}, ${site.role}` }];
  return {
    ...(title && { title }),
    description,
    alternates: {
      canonical: path,
      types: {
        "application/rss+xml": [{ url: "/writing/rss.xml", title: `${site.name} · Writing` }],
      },
    },
    openGraph: {
      type,
      siteName: site.name,
      locale: "en_US",
      title: ogTitle,
      description,
      url: path,
      ...(images && { images }),
      ...(publishedTime && { publishedTime, authors: [site.url] }),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      ...(images && { images }),
    },
  };
}
