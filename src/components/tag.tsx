import { cn } from "@/lib/cn";

export function TagList({
  tags,
  className,
}: {
  tags: readonly string[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((t) => (
        <li
          key={t}
          className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}
