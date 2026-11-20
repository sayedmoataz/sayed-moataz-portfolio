import { renderMonogram } from "@/lib/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS applies its own rounded mask, so the source stays square.
export default function AppleIcon() {
  return renderMonogram(180, { rounded: false });
}
