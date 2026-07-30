"use client";
import { Container } from "@/components/ui/Container";
import { motion } from "motion/react";

import { menuHero } from "./menu.data";

import { fadeUp, staggerFast, viewport } from "@/lib/motion";

export function MenuHero() {
  return (
    <section className="pt-24 pb-16">
      <Container>
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-primary mb-4 text-sm font-semibold uppercase tracking-[0.3em]"
          >
            {menuHero.eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-foreground text-5xl font-bold tracking-tight lg:text-6xl"
          >
            {menuHero.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-8"
          >
            {menuHero.description}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
