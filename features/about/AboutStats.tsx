"use client";

import { motion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { stats } from "./about.data";

import { fadeUp, stagger, viewport, cardHover } from "@/lib/motion";

export function AboutStats() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((item) => (
            <motion.article
              key={item.label}
              variants={fadeUp}
              whileHover={cardHover}
              className="rounded-3xl border border-border bg-card p-10 text-center"
            >
              <div className="text-primary text-5xl font-bold">
                {item.value}
              </div>

              <p className="text-muted-foreground mt-4 text-sm uppercase tracking-[0.2em]">
                {item.label}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
