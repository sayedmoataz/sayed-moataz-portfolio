import Link from "next/link";

import { site, socials } from "@/content/site";

import { Container } from "./container";
import { SocialIcon } from "./social-icon";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-muted">
          <p className="font-medium text-fg">{site.name}</p>
          <p>
            {site.role} · {site.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted">
          <Link href="/uses" className="hover:text-fg">
            Uses
          </Link>
          <a href={`mailto:${site.email}`} className="hover:text-fg">
            {site.email}
          </a>
          <ul className="flex items-center gap-3">
            {socials.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="hover:text-fg"
                >
                  <SocialIcon name={s.icon} className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
