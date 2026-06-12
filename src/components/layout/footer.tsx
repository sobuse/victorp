import { siteConfig } from "@/data/site";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-xl font-bold text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-muted">{siteConfig.subtitle}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="rounded-lg p-2 text-muted transition-colors hover:bg-white/5 hover:text-accent"
              aria-label="Email Victor Agbi"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted transition-colors hover:bg-white/5 hover:text-accent"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon />
            </a>
            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted transition-colors hover:bg-white/5 hover:text-accent"
              aria-label="GitHub profile"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
