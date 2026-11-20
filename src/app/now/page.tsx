import type { Metadata } from "next";

import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { now } from "@/content/now";
import { formatDate } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Now",
  description:
    "What Sayed Moataz is building, learning and reading right now.",
  path: "/now",
});

export default function NowPage() {
  return (
    <>
      <PageHeader
        eyebrow="Now"
        title="What I'm focused on"
        description="A snapshot of what I'm building, learning and reading at the moment."
      >
        <p className="mt-6 font-mono text-xs text-subtle">
          Updated <time dateTime={now.updated}>{formatDate(now.updated)}</time> · {now.location}
        </p>
      </PageHeader>

      <Container className="pb-24">
        <div className="grid gap-5 md:grid-cols-2">
          {now.sections.map((s) => (
            <section
              key={s.title}
              aria-labelledby={`now-${s.title}`}
              className="rounded-3xl border border-border bg-surface p-6 sm:p-8"
            >
              <h2
                id={`now-${s.title}`}
                className="font-mono text-xs tracking-[0.2em] text-accent uppercase"
              >
                {s.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {s.items.map((item) => (
                  <li key={item} className="text-pretty text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
