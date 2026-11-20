import { Container } from "./container";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <Container className="pt-16 pb-10 sm:pt-24">
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-5 max-w-2xl text-lg text-pretty text-muted">
          {description}
        </p>
      )}
      {children}
    </Container>
  );
}
