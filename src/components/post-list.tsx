import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import type { Post } from "@/content/writing";
import { formatDate } from "@/lib/format";
import { getReadingMinutes } from "@/lib/writing";

import { TagList } from "./tag";

async function PostItem({ post }: { post: Post }) {
  const minutes = await getReadingMinutes(post.slug);
  return (
    <article className="group relative grid gap-3 py-8 sm:grid-cols-[10rem_1fr] sm:gap-8">
      <p className="font-mono text-xs text-subtle sm:pt-1.5">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span className="block">{minutes} min read</span>
      </p>
      <div>
        <h3 className="text-lg font-semibold tracking-tight text-balance">
          <Link
            href={`/writing/${post.slug}`}
            className="after:absolute after:inset-0 after:content-[''] group-hover:text-accent"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 text-pretty text-muted">{post.summary}</p>
        <TagList tags={post.tags} className="mt-4" />
      </div>
      <ArrowUpRight
        aria-hidden
        className="absolute top-8 right-0 hidden size-4 text-subtle group-hover:text-fg sm:block"
      />
    </article>
  );
}

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {posts.map((post) => (
        <li key={post.slug}>
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
}
