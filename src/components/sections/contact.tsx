"use client";

import { FadeIn } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactCards = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.contact.phone,
      href: `tel:+234${siteConfig.contact.phone.replace(/^0/, "").replace(/\s/g, "")}`,
    },
    {
      icon: LinkedInIcon,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: siteConfig.contact.linkedin,
    },
    {
      icon: GitHubIcon,
      label: "GitHub",
      value: "View repositories",
      href: siteConfig.contact.github,
    },
  ];

  return (
    <section
      id="contact"
      className="border-t border-border bg-secondary py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Contact"
            subtitle="Let's discuss how I can support your next project"
          />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.a
                    key={card.label}
                    href={card.href}
                    target={card.label === "LinkedIn" || card.label === "GitHub" ? "_blank" : undefined}
                    rel={card.label === "LinkedIn" || card.label === "GitHub" ? "noopener noreferrer" : undefined}
                    whileHover={{ y: -2 }}
                    className="rounded-xl border border-border bg-background p-5 transition-colors hover:border-accent/30"
                  >
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    <p className="mt-3 text-sm font-medium text-muted">
                      {card.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      {card.value}
                    </p>
                  </motion.a>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            {submitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-xl border border-accent/30 bg-background p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Send className="h-8 w-8 text-accent" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  Message Sent
                </h3>
                <p className="mt-2 text-muted">
                  Thank you for reaching out. I&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-border bg-background p-6 md:p-8"
                aria-label="Contact form"
              >
                <div className="grid gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-foreground placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-foreground placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      autoComplete="organization"
                      className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-foreground placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full resize-none rounded-lg border border-border bg-secondary px-4 py-2.5 text-foreground placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-background transition-colors hover:bg-accent/90"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
