"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { gallery } from "./about.data";

import { fadeUp, imageReveal, stagger, viewport } from "@/lib/motion";

export function AboutGallery() {
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
            Gallery
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl"
          >
            Moments Worth Sharing
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground mt-6 max-w-3xl leading-8"
          >
            Every visit is filled with beautiful details—from carefully plated
            dishes to warm interiors designed for unforgettable moments.
          </motion.p>

          <div className="mt-16 grid auto-rows-55 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((image, index) => (
              <motion.div
                key={image}
                variants={imageReveal}
                className={`
                  group relative overflow-hidden rounded-3xl

                  ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
                  ${index === 1 ? "lg:row-span-2" : ""}
                  ${index === 5 ? "lg:col-span-2" : ""}
                `}
              >
                <Image
                  src={image}
                  alt={`Restaurant gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
