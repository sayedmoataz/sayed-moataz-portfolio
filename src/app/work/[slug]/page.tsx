import { ArrowLeft, ArrowRight, Check, Globe, Lock, Palette, Store } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaApple, FaGooglePlay } from "react-icons/fa6";

import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { ProjectCover } from "@/components/project-card";
import { ProjectStatusBadge } from "@/components/project-status";
import { TagList } from "@/components/tag";
import { getProject, projects, type Project } from "@/content/projects";
import { industries, site } from "@/content/site";
import { formatPeriod } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: `${project.name} (${project.kind})`,
    description: project.summary,
    path: `/work/${project.slug}`,
    hasOwnImage: true,
  });
}

function projectJsonLd(project: Project) {
  const storeUrls = Object.values(project.links).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    url: new URL(`/work/${project.slug}`, site.url).toString(),
    genre: project.kind,
    keywords: project.stack.join(", "),
    dateCreated: project.period.start,
    creator: { "@type": "Person", name: site.name, url: site.url },
    sourceOrganization: { "@type": "Organization", name: project.company.name },
    ...(storeUrls.length > 0 && { sameAs: storeUrls }),
  };
}

function storeLinks(links: Project["links"]) {
  return [
    links.website && { href: links.website, label: "Visit website", Icon: Globe },
    links.appStore && { href: links.appStore, label: "App Store", Icon: FaApple },
    links.playStore && { href: links.playStore, label: "Google Play", Icon: FaGooglePlay },
    links.appGallery && { href: links.appGallery, label: "AppGallery", Icon: Store },
    links.design && { href: links.design, label: "View design", Icon: Palette },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof Store }[];
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const links = storeLinks(project.links);
  const projectIndustries = industries.filter((i) => project.industries.includes(i.id));

  return (
    <Container className="pt-12 pb-24 sm:pt-16">
      <JsonLd data={projectJsonLd(project)} />
      <Link
        href="/work"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
      >
        <ArrowLeft aria-hidden className="size-4" /> All work
      </Link>

      <header className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <ProjectStatusBadge status={project.status} />
            <p className="font-mono text-xs text-subtle">
              {project.kind} · {formatPeriod(project.period)}
            </p>
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-pretty text-muted">{project.summary}</p>
          <p className="mt-4 text-sm text-muted">
            Built at{" "}
            {project.company.url ? (
              <a
                href={project.company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg underline decoration-border-strong underline-offset-4 hover:decoration-fg"
              >
                {project.company.name}
              </a>
            ) : (
              <span className="text-fg">{project.company.name}</span>
            )}
          </p>

          {links.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-3">
              {links.map(({ href, label, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-2"
                  >
                    <Icon aria-hidden className="size-4" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-surface-2">
          <ProjectCover project={project} priority sizes="(min-width: 1024px) 460px, 92vw" />
        </div>
      </header>

      {project.status === "confidential" && (
        <p className="mt-10 flex items-start gap-3 rounded-2xl border border-border bg-surface p-4 text-sm text-muted">
          <Lock aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
          This work is under NDA, so the client and screens aren&apos;t shown. Happy
          to talk through the architecture and security approach in person.
        </p>
      )}

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        {project.highlights.length > 0 && (
          <section aria-labelledby="highlights">
            <h2 id="highlights" className="text-xl font-semibold tracking-tight">
              What I did
            </h2>
            <ul className="mt-5 space-y-4">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-pretty text-muted">
                  <Check aria-hidden className="mt-1 size-4 shrink-0 text-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </section>
        )}

        <aside className="space-y-8">
          <section aria-labelledby="stack">
            <h2 id="stack" className="text-sm font-medium text-subtle">
              Stack
            </h2>
            <TagList tags={project.stack} className="mt-3" />
          </section>
          {projectIndustries.length > 0 && (
            <section aria-labelledby="industries">
              <h2 id="industries" className="text-sm font-medium text-subtle">
                Industry
              </h2>
              <TagList tags={projectIndustries.map((i) => i.label)} className="mt-3" />
            </section>
          )}
        </aside>
      </div>

      {project.screens.length > 0 && (
        <section aria-labelledby="screens" className="mt-16">
          <h2 id="screens" className="text-xl font-semibold tracking-tight">
            Screens
          </h2>
          <ul className="-mx-4 mt-6 flex snap-x gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
            {project.screens.map((src, i) => (
              <li key={src.src} className="shrink-0 snap-start">
                <Image
                  src={src}
                  alt={`${project.name} screen ${i + 1}`}
                  placeholder="blur"
                  sizes="260px"
                  className="h-[460px] w-auto rounded-[1.75rem] border border-border object-contain"
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      <nav aria-label="Next project" className="mt-20 border-t border-border pt-8">
        <Link
          href={`/work/${next.slug}`}
          className="group flex items-center justify-between gap-4 rounded-2xl p-2 transition-colors"
        >
          <span>
            <span className="block text-xs text-subtle">Next project</span>
            <span className="text-xl font-semibold tracking-tight">{next.name}</span>
          </span>
          <ArrowRight
            aria-hidden
            className="size-5 text-muted transition-transform group-hover:translate-x-1 group-hover:text-fg"
          />
        </Link>
      </nav>
    </Container>
  );
}
