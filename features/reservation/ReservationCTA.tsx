"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

import {
  buttonHover,
  buttonTap,
  fadeUp,
  staggerFast,
  viewport,
} from "@/lib/motion";

import { reservationCta } from "./reservation.data";

export function ReservationCTA() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="rounded-3xl bg-card px-8 py-16 text-center md:px-16"
        >
          <SectionHeader
            eyebrow={reservationCta.eyebrow}
            title={reservationCta.title}
            description={reservationCta.description}
            align="center"
          />

          <motion.div variants={fadeUp} className="mt-10 flex justify-center">
            <motion.div whileHover={buttonHover} whileTap={buttonTap}>
              <Link
                href={reservationCta.button.href}
                className="inline-flex items-center rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition hover:opacity-90"
              >
                {reservationCta.button.label}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
