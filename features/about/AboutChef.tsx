"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { chef } from "./about.data";

import {
  fadeLeft,
  fadeRight,
  imageReveal,
  staggerFast,
  viewport,
} from "@/lib/motion";

export function AboutChef() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeLeft}>
              <div className="relative aspect-4/5 overflow-hidden rounded-3xl">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.span
              variants={fadeRight}
              className="text-primary text-sm font-semibold uppercase tracking-[0.3em]"
            >
              Meet the Chef
            </motion.span>

            <motion.h2
              variants={fadeRight}
              className="mt-4 text-4xl font-bold md:text-5xl"
            >
              {chef.name}
            </motion.h2>

            <motion.p
              variants={fadeRight}
              className="text-primary mt-3 text-lg font-medium"
            >
              {chef.role}
            </motion.p>

            <motion.blockquote
              variants={fadeRight}
              className="mt-10 border-l-2 border-primary pl-6 text-2xl font-light leading-relaxed italic"
            >
              “{chef.quote}”
            </motion.blockquote>

            <motion.p
              variants={fadeRight}
              className="text-muted-foreground mt-10 leading-8"
            >
              {chef.description}
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
