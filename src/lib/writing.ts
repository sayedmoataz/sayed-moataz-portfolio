import { readFile } from "node:fs/promises";
import path from "node:path";

import { cacheLife } from "next/cache";

import { posts, type Post } from "@/content/writing";

const WORDS_PER_MINUTE = 220;

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Posts sorted newest first. */
export function getPosts(): Post[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export async function getReadingMinutes(slug: string): Promise<number> {
  "use cache";
  cacheLife("max");

  const file = path.join(process.cwd(), "src/content/writing", `${slug}.mdx`);
  const source = await readFile(file, "utf8");
  const words = source.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
