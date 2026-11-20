import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { PostList } from "@/components/post-list";
import { SocialIcon } from "@/components/social-icon";
import { profiles } from "@/content/open-source";
import { getPosts } from "@/lib/writing";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Writing",
  description:
    "Engineering write-ups on Flutter architecture, refactoring and building reliable mobile services.",
  path: "/writing",
});

const elsewhere = profiles.filter((p) => ["medium", "devto", "linkedin"].includes(p.icon));

export default function WritingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Notes from production"
        description="Deep dives on Flutter architecture, refactoring legacy code and building services that hold up in real apps."
      />
      <Container className="pb-16">
        <h2 className="sr-only">Articles</h2>
        <PostList posts={getPosts()} />
      </Container>

      <Container className="pb-24">
        <h2 className="text-sm font-medium text-subtle">More on other platforms</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {elsewhere.map((p) => (
            <li key={p.platform}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-border-strong hover:text-fg"
              >
                <SocialIcon name={p.icon} className="size-4" />
                {p.platform}
                <ArrowUpRight aria-hidden className="size-3.5" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
