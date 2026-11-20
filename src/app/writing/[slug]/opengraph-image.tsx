import { formatDate } from "@/lib/format";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";
import { getPost, getPosts } from "@/lib/writing";

export const alt = "Article by Sayed Moataz";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return renderOgImage({
    eyebrow: post ? `Writing · ${formatDate(post.date)}` : "Writing",
    title: post?.title ?? "Writing",
    tags: post?.tags,
  });
}
