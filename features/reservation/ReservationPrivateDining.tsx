"use client";
import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

import { fadeRight, imageReveal, viewport } from "@/lib/motion";

import { privateDining } from "./reservation.data";

export function ReservationPrivateDining() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeader
          eyebrow={privateDining.eyebrow}
          title={privateDining.title}
          description={privateDining.description}
          align="center"
        />

        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative mt-16 overflow-hidden rounded-3xl"
        >
          <Image
            src={privateDining.image}
            alt={privateDining.title}
            width={1400}
            height={800}
            className="h-125 w-full object-cover lg:h-162.5"
          />

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="
              relative
              m-6
              rounded-3xl
              bg-black/50
              p-8
              text-white
              backdrop-blur-xl

              lg:absolute
              lg:bottom-8
              lg:left-8
              lg:m-0
              lg:max-w-md
            "
          >
            <h3 className="text-2xl font-semibold">Exclusive Events</h3>

            <p className="mt-3 text-sm leading-7 text-white/80">
              Perfect for celebrations, corporate dinners and unforgettable
              private occasions.
            </p>

            <ul className="mt-8 space-y-4">
              {privateDining.features.map((feature) => (
                <li key={feature.title} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </span>

                  <span>{feature.title}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
