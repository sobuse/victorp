import { siteConfig } from "@/data/site";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.tagline,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    email: siteConfig.contact.email,
    sameAs: [siteConfig.contact.linkedin, siteConfig.contact.github],
    knowsAbout: [
      "Mechanical Engineering",
      "Software Development",
      "Project Management",
      "Document Control",
      "Information Management",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
