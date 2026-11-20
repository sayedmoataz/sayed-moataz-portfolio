import { Briefcase, Download, GraduationCap, Shield, type LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { TagList } from "@/components/tag";
import { experience, languages, type Experience, type ExperienceKind } from "@/content/experience";
import { getProject } from "@/content/projects";
import { site } from "@/content/site";
import { stack } from "@/content/stack";
import { formatDuration, formatMonth } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Experience",
  description:
    `${site.yearsExperience}+ years building production mobile apps, from fintech and banking to e-commerce and AI.`,
  path: "/experience",
});

const kindIcons: Record<ExperienceKind, LucideIcon> = {
  work: Briefcase,
  internship: Briefcase,
  education: GraduationCap,
  service: Shield,
};

function Dates({ item }: { item: Experience }) {
  const duration = item.end ? formatDuration(item.start, item.end) : "";
  const sameYear = item.end === item.start;
  if (sameYear) {
    // Year-only role within one year, e.g. "2026".
    return (
      <p className="font-mono text-xs text-subtle">
        <time dateTime={item.start}>{formatMonth(item.start)}</time>
      </p>
    );
  }
  return (
    <p className="font-mono text-xs text-subtle">
      <time dateTime={item.start}>{formatMonth(item.start)}</time> –{" "}
      {item.end ? <time dateTime={item.end}>{formatMonth(item.end)}</time> : "Present"}
      {duration && <span> · {duration}</span>}
    </p>
  );
}

function TimelineItem({ item }: { item: Experience }) {
  const Icon = kindIcons[item.kind];
  const current = item.end === null;
  const related = item.projects.map(getProject).filter((p) => p !== undefined);

  return (
    <li className="relative pb-12 pl-12 last:pb-0 sm:pl-16">
      {/* Rail + node */}
      <span aria-hidden className="absolute top-10 bottom-0 left-[15px] w-px bg-border sm:left-[19px]" />
      <span
        aria-hidden
        className={
          "absolute top-0 left-0 inline-flex size-8 items-center justify-center rounded-full border sm:size-10 " +
          (current ? "border-accent bg-accent-soft text-accent" : "border-border bg-surface text-muted")
        }
      >
        <Icon className="size-4" />
      </span>

      <Dates item={item} />
      <h3 className="mt-1.5 text-lg font-semibold tracking-tight">
        {item.role}{" "}
        <span className="text-muted">
          ·{" "}
          {item.orgUrl ? (
            <a
              href={item.orgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-border-strong underline-offset-4 hover:text-fg hover:decoration-fg"
            >
              {item.org}
            </a>
          ) : (
            item.org
          )}
        </span>
      </h3>
      <p className="mt-1 text-sm text-subtle">
        {[item.location, item.employment].filter(Boolean).join(" · ")}
      </p>
      {item.orgSummary && (
        <p className="mt-2 max-w-3xl text-sm text-pretty text-muted">{item.orgSummary}</p>
      )}

      <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-pretty text-muted marker:text-border-strong">
        {item.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      {item.stack.length > 0 && <TagList tags={item.stack} className="mt-5" />}

      {related.length > 0 && (
        <p className="mt-4 text-sm text-subtle">
          Projects:{" "}
          {related.map((p, i) => (
            <span key={p.slug}>
              {i > 0 && ", "}
              <Link
                href={`/work/${p.slug}`}
                className="text-fg underline decoration-border-strong underline-offset-4 hover:decoration-accent"
              >
                {p.name}
              </Link>
            </span>
          ))}
        </p>
      )}
    </li>
  );
}

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Where I've worked"
        description={`${site.yearsExperience}+ years shipping production mobile apps, currently building enterprise mobile banking at Cubic Information Systems.`}
      >
        <a
          href={site.cv.href}
          download={site.cv.fileName}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-2"
        >
          <Download aria-hidden className="size-4" /> Download CV
        </a>
      </PageHeader>

      <Container className="pb-8">
        <h2 className="sr-only">Career timeline</h2>
        <ol aria-label="Career timeline">
          {experience.map((item) => (
            <TimelineItem key={`${item.org}-${item.start}`} item={item} />
          ))}
        </ol>
      </Container>

      <Container className="py-20">
        <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
        <dl className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((g) => (
            <div key={g.group}>
              <dt className="text-sm font-medium text-subtle">{g.group}</dt>
              <dd>
                <TagList tags={g.items} className="mt-3" />
              </dd>
            </div>
          ))}
          <div>
            <dt className="text-sm font-medium text-subtle">Languages</dt>
            <dd className="mt-3 space-y-1 text-sm text-muted">
              {languages.map((l) => (
                <p key={l.name}>
                  <span className="text-fg">{l.name}</span> · {l.level}
                </p>
              ))}
            </dd>
          </div>
        </dl>
      </Container>
    </>
  );
}
