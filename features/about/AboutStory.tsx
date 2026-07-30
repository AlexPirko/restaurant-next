"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { aboutStory } from "./about.data";

import {
  fadeLeft,
  fadeRight,
  imageReveal,
  staggerFast,
  viewport,
} from "@/lib/motion";

export function AboutStory() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.span
              variants={fadeLeft}
              className="text-primary text-sm font-semibold uppercase tracking-[0.3em]"
            >
              About
            </motion.span>

            <motion.h2 variants={fadeLeft} className="mt-4 text-4xl font-bold">
              {aboutStory.title}
            </motion.h2>

            <div className="mt-8 space-y-6">
              {aboutStory.description.map((paragraph) => (
                <motion.p
                  key={paragraph}
                  variants={fadeLeft}
                  className="text-muted-foreground leading-8"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeRight}>
              <div className="relative aspect-4/5 overflow-hidden rounded-3xl">
                <Image
                  src={aboutStory.image}
                  alt={aboutStory.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
