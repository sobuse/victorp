"use client";

import { FadeIn } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogPosts } from "@/data/blog";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export function Blog() {
  return (
    <section
      id="blog"
      className="border-t border-border bg-background py-20 md:py-28"
      aria-labelledby="blog-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Blog"
            subtitle="Insights on engineering, information management, and software development"
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group flex h-full flex-col rounded-xl border border-border bg-secondary p-6 transition-all hover:border-accent/30"
              >
                <span className="inline-flex w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {post.category}
                </span>
                <h3 className="mt-4 text-xl font-bold text-foreground transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>
                <a
                  href={`#blog-${post.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
