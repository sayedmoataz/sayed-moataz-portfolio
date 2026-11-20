import { Container } from "@/components/container";
import { metrics } from "@/content/site";
import { cn } from "@/lib/cn";

export function Metrics() {
  return (
    <section aria-label="Impact" className="border-y border-border bg-surface/50">
      <Container>
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={cn(
                "flex flex-col px-2 py-8 sm:px-6",
                i % 2 === 1 && "border-l border-border",
                i >= 2 && "border-t border-border lg:border-t-0",
                i === 2 && "lg:border-l",
              )}
            >
              <dt className="text-sm text-muted">{m.label}</dt>
              <dd className="order-first mb-2 font-mono text-2xl font-semibold tracking-tight sm:text-3xl">
                {m.value}
              </dd>
              <dd className="mt-1 text-xs text-subtle">{m.context}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
