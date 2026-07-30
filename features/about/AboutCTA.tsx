"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { aboutCta } from "./about.data";

import {
  buttonHover,
  buttonTap,
  fadeUp,
  staggerFast,
  viewport,
} from "@/lib/motion";

export function AboutCTA() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="rounded-3xl border border-border bg-card px-8 py-16 text-center md:px-16"
        >
          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-3xl text-4xl font-bold md:text-5xl"
          >
            {aboutCta.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground mx-auto mt-6 max-w-2xl leading-8"
          >
            {aboutCta.description}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex justify-center">
            <motion.div whileHover={buttonHover} whileTap={buttonTap}>
              <Link
                href={aboutCta.button.href}
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center rounded-full px-8 py-4 text-sm font-medium transition-colors"
              >
                {aboutCta.button.label}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
