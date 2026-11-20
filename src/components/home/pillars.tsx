import {
  BrainCircuit,
  Check,
  Coins,
  Gauge,
  Layers,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { TagList } from "@/components/tag";
import { pillars, type PillarIcon } from "@/content/site";
import { cn } from "@/lib/cn";

const icons: Record<PillarIcon, LucideIcon> = {
  shield: ShieldCheck,
  gauge: Gauge,
  coins: Coins,
  brain: BrainCircuit,
  layers: Layers,
  users: Users,
};

// Bento rhythm on large screens: wide+narrow, narrow+wide, narrow+wide.
const wide = [true, false, false, true, false, true];

export function Pillars() {
  return (
    <Section
      id="expertise"
      eyebrow="What I bring"
      title="Engineering that holds up in production"
      description="Every claim here comes from shipped work, not side projects."
    >
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p, i) => {
          const Icon = icons[p.icon];
          const isWide = wide[i];
          return (
            <li key={p.title} className={cn(isWide && "lg:col-span-2")}>
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <article
                  className={cn(
                    "h-full rounded-3xl border border-border bg-surface p-6 transition-colors hover:border-border-strong sm:p-8",
                    i === 0 && "bg-gradient-to-br from-accent-soft via-surface to-surface",
                    isWide
                      ? "flex flex-col lg:grid lg:grid-cols-[1.3fr_1fr] lg:gap-10"
                      : "flex flex-col",
                  )}
                >
                  <div className="flex flex-col">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-surface-2">
                      <Icon aria-hidden className="size-5 text-accent" />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-3 max-w-prose text-pretty text-muted">{p.body}</p>
                  </div>

                  {isWide ? (
                    <>
                      {/* Wide cards: tags become a checklist beside the text. */}
                      <ul className="mt-6 hidden space-y-3 self-center border-l border-border pl-8 lg:block">
                        {p.tags.map((t) => (
                          <li key={t} className="flex items-center gap-3 text-sm">
                            <Check aria-hidden className="size-4 text-accent" />
                            {t}
                          </li>
                        ))}
                      </ul>
                      <TagList tags={p.tags} className="mt-auto pt-6 lg:hidden" />
                    </>
                  ) : (
                    <TagList tags={p.tags} className="mt-auto pt-6" />
                  )}
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
