"use client";

import { useState } from "react";

import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/content/projects";
import type { IndustryId } from "@/content/site";
import { cn } from "@/lib/cn";

type Filter = { id: IndustryId | "all"; label: string; count: number };

export function WorkGrid({
  projects,
  filters,
}: {
  projects: Project[];
  filters: Filter[];
}) {
  const [active, setActive] = useState<Filter["id"]>("all");
  const visible =
    active === "all"
      ? projects
      : projects.filter((p) => p.industries.includes(active));

  return (
    <>
      <div
        role="group"
        aria-label="Filter projects by industry"
        className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={active === f.id}
            onClick={() => setActive(f.id)}
            className={cn(
              "inline-flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors",
              active === f.id
                ? "border-fg bg-fg text-bg"
                : "border-border text-muted hover:border-border-strong hover:text-fg",
            )}
          >
            {f.label}
            <span
              className={cn(
                "font-mono text-xs",
                active === f.id ? "text-bg/70" : "text-subtle",
              )}
            >
              {f.count}
            </span>
          </button>
        ))}
      </div>

      <p aria-live="polite" className="sr-only">
        Showing {visible.length} projects
      </p>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <li key={p.slug}>
            <ProjectCard project={p} priority={i < 3} />
          </li>
        ))}
      </ul>
    </>
  );
}
