"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { experience } from "./about.data";

import { fadeUp, imageReveal, viewport } from "@/lib/motion";

export function AboutExperience() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="relative aspect-16/8">
            <Image
              src={experience.image}
              alt={experience.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />
          </div>

          <motion.div
            variants={fadeUp}
            className="absolute inset-0 flex items-end p-8 md:p-12 lg:p-16"
          >
            <div className="max-w-xl rounded-3xl bg-background/90 p-8 backdrop-blur">
              <span className="text-primary text-sm font-semibold uppercase tracking-[0.3em]">
                Experience
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                {experience.title}
              </h2>

              <p className="text-muted-foreground mt-6 leading-8">
                {experience.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
