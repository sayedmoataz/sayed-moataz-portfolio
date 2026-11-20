import { IndustryIcon } from "@/components/industry-icon";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { projectsByIndustry } from "@/content/projects";
import { industries, type IndustryId } from "@/content/site";

const numberWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

/** Up to three project names per industry, featured ones first. */
function examplesFor(id: IndustryId) {
  return projectsByIndustry(id)
    .toSorted((a, b) => Number(!!b.featured) - Number(!!a.featured))
    .slice(0, 3)
    .map((p) => p.name);
}

export function Industries() {
  return (
    <Section
      id="industries"
      eyebrow="Industries"
      title={`Production apps across ${numberWords[industries.length] ?? industries.length} industries`}
      description="Different domains, same standard: secure, fast and maintainable."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind, i) => (
          <li key={ind.id}>
            <Reveal delay={i * 0.05} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-border-strong">
                <IndustryIcon industry={ind.id} className="size-5 text-accent" />
                <h3 className="mt-4 font-medium">{ind.label}</h3>
                <p className="mt-2 text-sm text-pretty text-muted">{ind.summary}</p>
                <p className="mt-auto pt-4 font-mono text-xs text-subtle">
                  {examplesFor(ind.id).join(" · ")}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
