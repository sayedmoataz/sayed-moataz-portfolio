import { getProject, projects } from "@/content/projects";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Project by Sayed Moataz";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  return renderOgImage({
    eyebrow: project ? `${project.kind} · ${project.company.name}` : "Work",
    title: project?.name ?? "Work",
    subtitle: project?.metric
      ? `${project.metric.value} ${project.metric.label}. ${project.summary}`
      : project?.summary,
    tags: project?.stack,
  });
}
