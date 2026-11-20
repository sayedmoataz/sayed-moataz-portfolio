import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/content/site";
import { formatDate } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";
import { getPost, getPosts, getReadingMinutes } from "@/lib/writing";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/writing/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.summary,
    path: `/writing/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    hasOwnImage: true,
  });
}

export default async function PostPage({ params }: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const [{ default: Body }, minutes] = await Promise.all([
    import(`@/content/writing/${slug}.mdx`),
    getReadingMinutes(slug),
  ]);

  const url = new URL(`/writing/${post.slug}`, site.url).toString();

  return (
    <Container className="max-w-3xl pt-12 pb-24 sm:pt-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.summary,
          datePublished: post.date,
          url,
          mainEntityOfPage: url,
          image: `${url}/opengraph-image`,
          keywords: post.tags.join(", "),
          inLanguage: "en",
          author: { "@type": "Person", name: site.name, url: site.url },
        }}
      />
      <Link
        href="/writing"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
      >
        <ArrowLeft aria-hidden className="size-4" /> All writing
      </Link>

      <header className="mt-8 border-b border-border pb-8">
        <p className="font-mono text-xs text-subtle">
          <time dateTime={post.date}>{formatDate(post.date)}</time> · {minutes} min read
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-pretty text-muted">{post.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted"
            >
              {t}
            </li>
          ))}
        </ul>
      </header>

      <article className="prose mt-10 max-w-none">
        <Body />
      </article>
    </Container>
  );
}
