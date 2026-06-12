"use client";

import { AnimatedCounter, FadeIn } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { stats } from "@/data/stats";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-border bg-background py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="About Me"
            subtitle="Bridging engineering excellence with modern technology"
          />
        </FadeIn>

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2 lg:gap-12">
          <FadeIn delay={0.1}>
            <p className="text-lg leading-relaxed text-muted">
              Victor is a multidisciplinary professional with experience in
              engineering, project coordination, information management, and
              software development.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg leading-relaxed text-muted">
              His career journey spans mechanical engineering, security
              engineering, project management, and modern software development,
              enabling him to bridge technical execution with business and
              operational goals.
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={0.1 * index}>
              <div className="group rounded-xl border border-border bg-secondary p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                <p className="text-3xl font-bold text-accent md:text-4xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-2 text-sm font-medium text-muted">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
