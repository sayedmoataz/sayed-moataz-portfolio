import { Quote } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section id="testimonials" eyebrow="Testimonials" title="What people I've worked with say">
      <ul className="grid gap-5 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <li key={t.name}>
            <Reveal delay={(i % 2) * 0.06} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-surface p-6 sm:p-8">
                <Quote aria-hidden className="size-6 text-accent" />
                <blockquote className="mt-4 text-lg text-pretty">
                  <p>{t.quote}</p>
                </blockquote>
                <figcaption className="mt-auto pt-6 text-sm">
                  {t.url ? (
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-accent"
                    >
                      {t.name}
                    </a>
                  ) : (
                    <span className="font-medium">{t.name}</span>
                  )}
                  <span className="block text-muted">
                    {t.role}
                    {t.company && ` · ${t.company}`}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
