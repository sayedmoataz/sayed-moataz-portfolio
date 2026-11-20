import type { Metadata } from "next";

import { ContactCta } from "@/components/home/contact-cta";
import { FeaturedWork } from "@/components/home/featured-work";
import { Hero } from "@/components/home/hero";
import { Industries } from "@/components/home/industries";
import { LatestWriting } from "@/components/home/latest-writing";
import { Metrics } from "@/components/home/metrics";
import { Pillars } from "@/components/home/pillars";
import { Testimonials } from "@/components/home/testimonials";
import { JsonLd } from "@/components/json-ld";
import { site, socials } from "@/content/site";
import { stack } from "@/content/stack";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  description: site.metaDescription,
  path: "/",
  hasOwnImage: true,
});

const personId = `${site.url}/#person`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      jobTitle: site.role,
      description: site.metaDescription,
      url: site.url,
      image: new URL("/viewPhoto.png", site.url).toString(),
      email: `mailto:${site.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
      worksFor: { "@type": "Organization", name: "Cubic Information Systems" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Helwan University" },
      knowsAbout: stack.flatMap((g) => g.items).slice(0, 20),
      sameAs: socials.map((s) => s.href),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.metaDescription,
      inLanguage: "en",
      author: { "@id": personId },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Hero />
      <Metrics />
      <FeaturedWork />
      <Industries />
      <Pillars />
      <Testimonials />
      <LatestWriting />
      <ContactCta />
    </>
  );
}
