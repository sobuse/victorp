"use client";

import { FadeIn } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GitHubIcon } from "@/components/ui/icons";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ExternalLink, FolderKanban } from "lucide-react";

export function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border bg-secondary py-20 md:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Featured Projects"
            subtitle="Enterprise solutions built for efficiency and operational excellence"
          />
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
              >
                <div
                  className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${project.gradient}`}
                >
                  <FolderKanban
                    className="h-16 w-16 text-accent/40 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <span className="absolute bottom-3 left-3 rounded-md bg-background/80 px-2 py-1 text-xs font-medium text-muted backdrop-blur-sm">
                    Project Image
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  {project.features && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="rounded-md bg-secondary px-2 py-1 text-xs text-muted"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-accent/30 px-3 py-0.5 text-xs font-medium text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={project.demoUrl}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent/90"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/50 hover:text-accent"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GitHubIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
