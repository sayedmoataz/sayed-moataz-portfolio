/**
 * Renders schema.org structured data. `<` is escaped so content can never
 * close the script tag (see node_modules/next/dist/docs/01-app/02-guides/json-ld.md).
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
