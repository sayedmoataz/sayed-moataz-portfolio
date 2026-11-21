import { site } from "@/content/site";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = `${site.name}, ${site.role}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: `${site.yearsExperience}+ years · ${site.location}`,
    title: site.headline,
    subtitle: "Banking, fintech, e-commerce, real estate, education, AI and travel.",
    tags: ["Flutter", "Kotlin", "Swift"],
  });
}
