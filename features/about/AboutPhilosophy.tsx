"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { philosophy } from "./about.data";

import {
  fadeUp,
  imageReveal,
  stagger,
  viewport,
  cardHover,
} from "@/lib/motion";

export function AboutPhilosophy() {
  return (
    <section className="bg-muted/30 py-24">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.span
            variants={fadeUp}
            className="text-primary text-sm font-semibold uppercase tracking-[0.3em]"
          >
            Philosophy
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl"
          >
            The Principles Behind Every Plate
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground mt-6 max-w-3xl leading-8"
          >
            Every decision we make—from selecting ingredients to welcoming our
            guests—is guided by a simple philosophy: quality, authenticity, and
            genuine hospitality.
          </motion.p>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {/* Featured card */}
            <motion.article
              variants={fadeUp}
              whileHover={cardHover}
              className="overflow-hidden rounded-3xl border border-border bg-card lg:col-span-2"
            >
              <motion.div
                variants={imageReveal}
                className="relative aspect-16/10 overflow-hidden"
              >
                <Image
                  src={philosophy[0].image!}
                  alt={philosophy[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              <div className="p-10">
                <span className="text-primary/70 text-xs font-semibold tracking-[0.3em] uppercase">
                  01
                </span>

                <h3 className="mt-4 text-2xl font-semibold">
                  {philosophy[0].title}
                </h3>

                <p className="text-muted-foreground mt-5 max-w-2xl leading-8">
                  {philosophy[0].description}
                </p>
              </div>
            </motion.article>

            {/* Side cards */}
            <div className="flex flex-col gap-8">
              {philosophy.slice(1).map((item, index) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  whileHover={cardHover}
                  className="flex flex-1 flex-col rounded-3xl border border-border bg-card p-10"
                >
                  <span className="text-primary/70 text-xs font-semibold uppercase tracking-[0.3em]">
                    0{index + 2}
                  </span>

                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>

                  <p className="text-muted-foreground mt-5 flex-1 leading-7">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
