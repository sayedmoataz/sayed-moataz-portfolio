import type { Metadata } from "next";

import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { WorkGrid } from "@/components/work/work-grid";
import { projects } from "@/content/projects";
import { industries } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description:
    "Production apps across banking, fintech, e-commerce, real estate, education, AI and travel.",
  path: "/work",
});

export default function WorkPage() {
  const filters = [
    { id: "all" as const, label: "All", count: projects.length },
    ...industries.map((ind) => ({
      id: ind.id,
      label: ind.label,
      count: projects.filter((p) => p.industries.includes(ind.id)).length,
    })),
  ];

  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Apps I've built and shipped"
        description={`${projects.length} projects across banking, fintech, e-commerce, real estate, education, AI and travel, from enterprise platforms to MVPs.`}
      />
      <Container className="pb-24">
        <h2 className="sr-only">Projects</h2>
        <WorkGrid projects={projects} filters={filters} />
      </Container>
    </>
  );
}
