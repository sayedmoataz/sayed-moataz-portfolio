import { ArrowUpRight, Mail } from "lucide-react";

import { Container } from "@/components/container";
import { site, socials } from "@/content/site";

const linkedin = socials.find((s) => s.icon === "linkedin")!;

export function ContactCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-24 py-16 sm:py-24"
    >
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-12 sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="absolute -top-24 -right-24 size-72 rounded-full bg-accent-soft blur-3xl"
          />
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Contact
          </p>
          <h2
            id="contact-title"
            className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Building something that has to be secure and fast?
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-muted">
            Tell me about your product and I&apos;ll get back to you within a
            couple of days.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
            >
              <Mail aria-hidden className="size-4" /> {site.email}
            </a>
            <a
              href={linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-2"
            >
              Connect on LinkedIn{" "}
              <ArrowUpRight aria-hidden className="size-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
