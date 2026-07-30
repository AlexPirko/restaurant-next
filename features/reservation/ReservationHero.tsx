"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import { Container } from "@/components/ui/Container";

import { reservationHero } from "./reservation.data";

import {
  buttonHover,
  buttonTap,
  fadeLeft,
  fadeRight,
  imageReveal,
  staggerFast,
  viewport,
} from "@/lib/motion";

export function ReservationHero() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        variants={imageReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="relative h-[80vh] min-h-175"
      >
        <Image
          src="/images/reservation/hero-reservation.webp"
          alt={reservationHero.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Left */}
              <motion.div
                variants={staggerFast}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <motion.span
                  variants={fadeLeft}
                  className="text-primary text-sm font-semibold uppercase tracking-[0.3em]"
                >
                  Reservation
                </motion.span>

                <motion.h1
                  variants={fadeLeft}
                  className="mt-6 max-w-2xl text-5xl font-bold leading-tight text-white md:text-7xl"
                >
                  {reservationHero.title}
                </motion.h1>

                <motion.p
                  variants={fadeLeft}
                  className="mt-8 max-w-xl text-lg leading-8 text-white/80"
                >
                  {reservationHero.description}
                </motion.p>

                <motion.div variants={fadeLeft} className="mt-10">
                  <motion.div
                    whileHover={buttonHover}
                    whileTap={buttonTap}
                    className="inline-flex"
                  >
                    <Link
                      href="#reservation-form"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center rounded-full px-8 py-4 text-sm font-medium transition-colors"
                    >
                      Book Your Table
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right */}
              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="flex justify-end"
              >
                <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-white/10 p-8 text-white backdrop-blur-xl">
                  <h2 className="text-2xl font-semibold">Restaurant Details</h2>

                  <div className="mt-8 space-y-6">
                    {reservationHero.highlights.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-center justify-between border-b border-white/10 pb-4 last:border-none last:pb-0"
                      >
                        <span className="text-white/70">{item.title}</span>

                        <span className="font-semibold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </div>
      </motion.div>
    </section>
  );
}
