"use client";

import { FadeIn } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/data/experience";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border bg-secondary py-20 md:py-28"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Experience"
            subtitle="A decade of engineering, security, and software excellence"
          />
        </FadeIn>

        <div className="relative mx-auto max-w-3xl">
          <div
            aria-hidden="true"
            className="absolute left-6 top-0 hidden h-full w-px bg-border md:left-1/2 md:block md:-translate-x-px"
          />

          {experience.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <FadeIn key={`${item.company}-${item.period}`} delay={index * 0.1}>
                <div className="relative mb-12 md:mb-16">
                  <div
                    className={`flex flex-col gap-6 md:flex-row md:items-start ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="hidden flex-1 md:block" />

                    <div className="relative z-10 flex shrink-0 justify-start md:absolute md:left-1/2 md:-translate-x-1/2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-background shadow-lg shadow-accent/10">
                        <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                      </div>
                    </div>

                    <div className="flex-1 md:max-w-[calc(50%-3rem)]">
                      <motion.article
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                        className="rounded-xl border border-border bg-background p-6 transition-colors hover:border-accent/30"
                      >
                        <time className="text-sm font-semibold text-accent">
                          {item.period}
                        </time>
                        <h3 className="mt-2 text-xl font-bold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-1 flex items-center gap-2 text-muted">
                          <Building2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                          {item.company}
                        </p>
                        <ul className="mt-4 space-y-2">
                          {item.responsibilities.map((resp) => (
                            <li
                              key={resp}
                              className="flex gap-2 text-sm leading-relaxed text-muted"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </motion.article>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
