import { cn } from "@/lib/cn";
import { Container } from "./container";

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const headingId = id ? `${id}-title` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("scroll-mt-24 py-16 sm:py-24", className)}
    >
      <Container>
        <header className="mb-10 max-w-2xl">
          {eyebrow && (
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
          )}
          <h2
            id={headingId}
            className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-pretty text-muted">{description}</p>
          )}
        </header>
        {children}
      </Container>
    </section>
  );
}
