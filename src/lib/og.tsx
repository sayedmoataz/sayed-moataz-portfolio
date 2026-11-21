import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

import { site } from "@/content/site";

/**
 * Shared template for generated Open Graph images (1200×630), rendered at
 * build time. Colours mirror the dark theme tokens in globals.css.
 */

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const colors = {
  bg: "#09090b",
  surface: "#111114",
  border: "#232329",
  fg: "#fafafa",
  muted: "#a1a1aa",
  subtle: "#71717a",
  accent: "#2dd4bf",
  accentFg: "#042f2e",
};

const fontDir = path.join(process.cwd(), "node_modules/geist/dist/fonts");
const fonts = Promise.all([
  readFile(path.join(fontDir, "geist-sans/Geist-Regular.ttf")),
  readFile(path.join(fontDir, "geist-sans/Geist-SemiBold.ttf")),
  readFile(path.join(fontDir, "geist-mono/GeistMono-Medium.ttf")),
]);

// viewPhoto.png is actually a JPEG, so the data URL says so explicitly.
const portrait = readFile(path.join(process.cwd(), "public/viewPhoto.png")).then(
  (buf) => `data:image/jpeg;base64,${buf.toString("base64")}`,
);

/** The "SM" monogram from the header, used for favicons and touch icons. */
export async function renderMonogram(px: number, { rounded = true } = {}) {
  const [, , mono] = await fonts;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: colors.accent,
          color: colors.accentFg,
          borderRadius: rounded ? px * 0.22 : 0,
          fontFamily: "Geist Mono",
          fontSize: px * 0.44,
          letterSpacing: -px * 0.02,
        }}
      >
        SM
      </div>
    ),
    {
      width: px,
      height: px,
      fonts: [{ name: "Geist Mono", data: mono, weight: 500, style: "normal" }],
    },
  );
}

/**
 * The OG renderer (Satori) can't shape Arabic script, and it fails the build
 * on it. Drop Arabic runs and any brackets left empty, so
 * "Ajwaa (أجواء العالم)" becomes "Ajwaa". The pages themselves render Arabic fine.
 */
function latinOnly(text: string) {
  return text
    .replace(/[؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿]+/g, "")
    .replace(/\(\s*\)/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([.,])/g, "$1")
    .trim();
}

export async function renderOgImage(input: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  tags?: string[];
}) {
  return renderOgLayout({
    eyebrow: latinOnly(input.eyebrow),
    title: latinOnly(input.title),
    subtitle: input.subtitle && latinOnly(input.subtitle),
    tags: input.tags?.map(latinOnly).filter(Boolean),
  });
}

async function renderOgLayout({
  eyebrow,
  title,
  subtitle,
  tags = [],
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  tags?: string[];
}) {
  const [[regular, semibold, mono], photo] = await Promise.all([fonts, portrait]);
  const titleSize = title.length > 70 ? 52 : title.length > 40 ? 60 : 72;
  const domain = new URL(site.url).host;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: colors.bg,
          backgroundImage: `radial-gradient(circle at 100% 0%, rgba(45, 212, 191, 0.18), transparent 45%)`,
          padding: "64px 72px",
          fontFamily: "Geist",
          color: colors.fg,
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 36 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo}
            width={64}
            height={64}
            alt=""
            style={{
              borderRadius: 999,
              objectFit: "cover",
              border: `2px solid ${colors.accent}`,
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 26, fontWeight: 600 }}>{site.name}</span>
            <span style={{ fontSize: 20, color: colors.muted }}>{site.role}</span>
          </div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: "auto" }}>
          <span
            style={{
              fontFamily: "Geist Mono",
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: colors.accent,
            }}
          >
            {eyebrow}
          </span>
          <span
            style={{
              marginTop: 18,
              fontSize: titleSize,
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 1000,
            }}
          >
            {title}
          </span>
          {subtitle && (
            <span
              style={{
                marginTop: 22,
                fontSize: 28,
                lineHeight: 1.4,
                color: colors.muted,
                maxWidth: 940,
              }}
            >
              {subtitle}
            </span>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 44,
            paddingTop: 28,
            borderTop: `1px solid ${colors.border}`,
          }}
        >
          <div style={{ display: "flex", gap: 12 }}>
            {tags.slice(0, 3).map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "Geist Mono",
                  fontSize: 18,
                  color: colors.muted,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 999,
                  padding: "6px 16px",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <span style={{ fontFamily: "Geist Mono", fontSize: 20, color: colors.subtle }}>
            {domain}
          </span>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: semibold, weight: 600, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 500, style: "normal" },
      ],
    },
  );
}
