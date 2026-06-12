"use client";

import { FadeIn } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications } from "@/data/certifications";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-border bg-background py-20 md:py-28"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Certifications & Education"
            subtitle="Academic foundation and continuous professional development"
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            const isUpcoming = cert.status === "upcoming";

            return (
              <FadeIn key={cert.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "relative h-full rounded-xl border p-6 transition-colors",
                    isUpcoming
                      ? "border-dashed border-border bg-secondary/50"
                      : "border-border bg-secondary hover:border-accent/30",
                  )}
                >
                  {isUpcoming && (
                    <span className="absolute right-4 top-4 rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent">
                      Coming Soon
                    </span>
                  )}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {cert.title}
                  </h3>
                  <p className="mt-1 font-medium text-accent">{cert.subtitle}</p>
                  <p className="mt-3 text-sm text-muted">{cert.institution}</p>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
