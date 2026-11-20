import { ArrowRight, Download, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import portrait from "../../../public/viewPhoto.png";
import { Container } from "@/components/container";
import { SocialIcon } from "@/components/social-icon";
import { site, socials } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <Container className="grid items-center gap-12 pt-16 pb-20 sm:pt-24 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {site.availability}
          </p>

          <p className="mb-3 font-mono text-sm text-accent">
            {site.role} · {site.yearsExperience}+ years
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {site.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-pretty text-muted">
            {site.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
            >
              View my work <ArrowRight aria-hidden className="size-4" />
            </Link>
            <a
              href={site.cv.href}
              download={site.cv.fileName}
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-2"
            >
              <Download aria-hidden className="size-4" /> Download CV
            </a>
          </div>

          <ul className="mt-8 flex items-center gap-4 text-muted">
            {socials.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="transition-colors hover:text-fg"
                >
                  <SocialIcon name={s.icon} className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface">
            <Image
              src={portrait}
              alt={`Portrait of ${site.name}`}
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 400px, 90vw"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="absolute right-4 -bottom-5 left-4 rounded-2xl border border-border bg-surface/90 p-4 backdrop-blur-md sm:right-6 sm:left-6">
            <p className="text-xs text-subtle">Currently</p>
            <p className="text-sm font-medium">
              Senior Mobile Developer · Cubic Information Systems
            </p>
            <p className="mt-1 flex items-center gap-1 text-xs text-muted">
              <MapPin aria-hidden className="size-3" /> {site.location}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
