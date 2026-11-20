import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Keep links to the old CRA routes working after the rebrand.
  async redirects() {
    return [
      { source: "/projects", destination: "/work", permanent: true },
      { source: "/experiences", destination: "/experience", permanent: true },
      { source: "/publications", destination: "/open-source", permanent: true },
      { source: "/blog", destination: "/writing", permanent: true },
    ];
  },
};

// Plugins are passed by name (with serializable options) so Turbopack can
// load them; see node_modules/next/dist/docs/01-app/02-guides/mdx.md.
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [
      "rehype-slug",
      [
        "rehype-pretty-code",
        {
          theme: { dark: "github-dark-dimmed", light: "github-light" },
          keepBackground: false,
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
