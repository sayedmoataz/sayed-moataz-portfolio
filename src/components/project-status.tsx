import type { ProjectStatus } from "@/content/projects";
import { cn } from "@/lib/cn";

export const statusLabels: Record<ProjectStatus, string> = {
  live: "Live",
  mvp: "MVP",
  "in-development": "In development",
  design: "Design prototype",
  confidential: "Confidential",
};

export function ProjectStatusBadge({
  status,
  className,
}: {
  status: ProjectStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/90 px-2.5 py-1 text-xs text-muted backdrop-blur",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "size-1.5 rounded-full",
          status === "live" ? "bg-accent" : "bg-subtle",
        )}
      />
      {statusLabels[status]}
    </span>
  );
}
