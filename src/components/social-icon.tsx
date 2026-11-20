import { FaDev, FaGithub, FaLinkedin, FaMedium, FaStackOverflow } from "react-icons/fa6";

import type { SocialIcon as SocialIconName } from "@/content/site";

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  medium: FaMedium,
  stackoverflow: FaStackOverflow,
  devto: FaDev,
} satisfies Record<SocialIconName, unknown>;

export function SocialIcon({
  name,
  className,
}: {
  name: SocialIconName;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon aria-hidden className={className} />;
}
