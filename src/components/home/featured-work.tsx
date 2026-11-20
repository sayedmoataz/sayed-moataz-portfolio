import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { featuredProjects, projects } from "@/content/projects";

export function FeaturedWork() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Shipped to the stores, used by real people"
      description="A few highlights. Every project has a page with what I did and the stack behind it."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((p, i) => (
          <li key={p.slug}>
            <Reveal delay={(i % 3) * 0.06} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          </li>
        ))}
      </ul>
      <Link
        href="/work"
        className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-fg"
      >
        See all {projects.length} projects <ArrowRight aria-hidden className="size-4" />
      </Link>
    </Section>
  );
}
