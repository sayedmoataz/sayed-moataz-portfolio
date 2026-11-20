import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PostList } from "@/components/post-list";
import { Section } from "@/components/section";
import { getPosts } from "@/lib/writing";

export function LatestWriting() {
  return (
    <Section
      id="writing"
      eyebrow="Writing"
      title="Notes from production"
      description="How I approach architecture, refactoring and reliability in real apps."
    >
      <PostList posts={getPosts().slice(0, 3)} />
      <Link
        href="/writing"
        className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-fg"
      >
        All writing <ArrowRight aria-hidden className="size-4" />
      </Link>
    </Section>
  );
}
