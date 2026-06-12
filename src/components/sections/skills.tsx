"use client";

import { FadeIn } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/skills";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border bg-background py-20 md:py-28"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Skills"
            subtitle="Technical expertise across engineering, management, and development"
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => {
            const Icon = group.icon;
            return (
              <FadeIn key={group.title} delay={groupIndex * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="h-full rounded-xl border border-border bg-secondary p-6 transition-colors hover:border-accent/30"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {group.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {group.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-1.5 flex justify-between text-sm">
                          <span className="text-muted">{skill.name}</span>
                          <span className="font-medium text-accent">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-border">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                              duration: 1,
                              delay: 0.2,
                              ease: [0.21, 0.47, 0.32, 0.98],
                            }}
                            className="h-full rounded-full bg-accent"
                            role="progressbar"
                            aria-valuenow={skill.level}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label={`${skill.name} proficiency`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
