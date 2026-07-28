"use client";

import { motion } from "motion/react";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { fadeRight, imageReveal, viewport } from "@/lib/motion";

import { BanquetContent } from "./BanquetContent";
import { banquet } from "./banquet.data";

export function Banquet() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <BanquetContent />
          </motion.div>

          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative aspect-4/3 overflow-hidden rounded-sm"
          >
            <Image
              src={banquet.image}
              alt={banquet.title}
              fill
              className="object-cover"
              sizes="(min-width:1024px) 50vw, 100vw"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
