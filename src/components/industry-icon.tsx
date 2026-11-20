import {
  Bot,
  Building2,
  GraduationCap,
  Landmark,
  Plane,
  ShoppingBag,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import type { IndustryId } from "@/content/site";

export const industryIcons: Record<IndustryId, LucideIcon> = {
  "banking-fintech": Landmark,
  ecommerce: ShoppingBag,
  "real-estate": Building2,
  education: GraduationCap,
  ai: Bot,
  travel: Plane,
};

export function IndustryIcon({
  industry,
  className,
}: {
  industry: IndustryId | undefined;
  className?: string;
}) {
  const Icon = industry ? industryIcons[industry] : Smartphone;
  return <Icon aria-hidden className={className} />;
}
