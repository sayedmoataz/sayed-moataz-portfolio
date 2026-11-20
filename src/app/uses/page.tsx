import type { Metadata } from "next";

import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { uses } from "@/content/uses";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Uses",
  description:
    "The editors, Flutter packages and tools Sayed Moataz uses to build and ship mobile apps.",
  path: "/uses",
});

export default function UsesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Uses"
        title="Tools & setup"
        description="The editors, packages and services I reach for when building and shipping mobile apps."
      />
      <Container className="pb-24">
        <div className="divide-y divide-border border-y border-border">
          {uses.map((g) => (
            <section
              key={g.group}
              aria-labelledby={`uses-${g.group}`}
              className="grid gap-4 py-8 sm:grid-cols-[14rem_1fr] sm:gap-8"
            >
              <h2 id={`uses-${g.group}`} className="font-medium">
                {g.group}
              </h2>
              <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {g.items.map((item) => (
                  <li key={item.name}>
                    <p className="text-fg">{item.name}</p>
                    {item.note && <p className="text-sm text-muted">{item.note}</p>}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
