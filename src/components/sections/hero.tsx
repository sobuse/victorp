"use client";

import { GridBackground } from "@/components/ui/grid-background";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
      aria-label="Introduction"
    >
      <GridBackground />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Portfolio
          </p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-accent sm:text-2xl">
            {siteConfig.tagline}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Engineering professional with experience spanning Mechanical
            Engineering, Security Systems, Project Management, Information
            Management, and Modern Software Development. Passionate about
            building systems that improve efficiency, transparency, and
            operational excellence.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects" size="lg">
              View Projects
            </Button>
            <Button href="/resume.pdf" variant="outline" size="lg">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-accent/10 blur-2xl" />
            <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-accent/20 bg-secondary shadow-2xl shadow-accent/5 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <Image
                src="/images/victor-agbi.png"
                alt={`${siteConfig.name} - Professional headshot`}
                fill
                priority
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                className="object-cover object-[center_15%]"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </motion.a>
    </section>
  );
}
