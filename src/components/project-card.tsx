import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/content/projects";
import { formatPeriod } from "@/lib/format";

import { IndustryIcon } from "./industry-icon";
import { ProjectStatusBadge } from "./project-status";

export function ProjectCover({
  project,
  sizes,
  priority,
}: {
  project: Project;
  sizes: string;
  priority?: boolean;
}) {
  if (project.cover && project.coverBackground) {
    // Logo-style cover: padded on its own brand colour.
    return (
      <div
        className="flex h-full w-full items-center justify-center p-[8%]"
        style={{ background: project.coverBackground }}
      >
        <Image
          src={project.cover}
          alt=""
          placeholder="blur"
          sizes={sizes}
          priority={priority}
          className="h-full w-full object-contain"
        />
      </div>
    );
  }
  if (project.cover) {
    // Covers are 4:3 brand tiles. Show the whole tile, and fill any leftover
    // space with a blurred copy of the same image (same URL, one download).
    return (
      <div className="relative h-full w-full">
        <Image
          src={project.cover}
          alt=""
          aria-hidden
          sizes={sizes}
          className="absolute inset-0 h-full w-full scale-125 object-cover opacity-60 blur-2xl"
        />
        <Image
          src={project.cover}
          alt=""
          placeholder="blur"
          sizes={sizes}
          priority={priority}
          className="relative h-full w-full object-contain"
        />
      </div>
    );
  }
  // No artwork (confidential or unreleased): an icon on a soft gradient.
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-soft via-surface-2 to-surface">
      <span className="inline-flex size-16 items-center justify-center rounded-2xl border border-border bg-surface">
        <IndustryIcon industry={project.industries[0]} className="size-7 text-accent" />
      </span>
    </div>
  );
}

export function ProjectCard({
  project,
  priority,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-border-strong">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface-2">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
          <ProjectCover
            project={project}
            priority={priority}
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 92vw"
          />
        </div>
        <ProjectStatusBadge status={project.status} className="absolute top-3 left-3" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-xs text-subtle">
          {project.kind} · {formatPeriod(project.period)}
        </p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight">
          {/* Stretched link: the whole card is clickable. */}
          <Link
            href={`/work/${project.slug}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {project.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-pretty text-muted">
          {project.summary}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          {project.metric ? (
            <p className="text-sm">
              <span className="font-mono font-semibold text-accent">
                {project.metric.value}
              </span>{" "}
              <span className="text-subtle">{project.metric.label}</span>
            </p>
          ) : (
            <p className="text-sm text-subtle">{project.company.name}</p>
          )}
          <ArrowUpRight
            aria-hidden
            className="size-4 shrink-0 text-subtle transition-colors group-hover:text-fg"
          />
        </div>
      </div>
    </article>
  );
}
