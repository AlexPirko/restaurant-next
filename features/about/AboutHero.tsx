"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { aboutHero } from "./about.data";

import { fadeUp, staggerFast, viewport } from "@/lib/motion";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[60vh] min-h-150">
        <Image
          src={aboutHero.image}
          alt={aboutHero.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <Container>
          <div className="relative z-10 flex h-[60vh] min-h-150 items-center justify-center">
            <motion.div
              variants={staggerFast}
              initial="hidden"
              animate="visible"
              className="max-w-3xl text-center text-white"
            >
              <motion.span
                variants={fadeUp}
                viewport={viewport}
                className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-primary"
              >
                {aboutHero.title}
              </motion.span>

              <motion.h1
                variants={fadeUp}
                viewport={viewport}
                className="mb-6 text-5xl font-bold leading-tight md:text-6xl"
              >
                {aboutHero.subtitle}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                viewport={viewport}
                className="mx-auto max-w-2xl text-lg leading-8 text-white/85"
              >
                {aboutHero.description}
              </motion.p>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
