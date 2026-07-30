"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { menuCta } from "./menu.data";

import {
  buttonHover,
  buttonTap,
  fadeUp,
  staggerFast,
  viewport,
} from "@/lib/motion";

export function MenuCTA() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="bg-card mx-auto max-w-4xl rounded-3xl border px-8 py-16 text-center"
        >
          <motion.h2 variants={fadeUp} className="text-4xl font-bold">
            {menuCta.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg"
          >
            {menuCta.description}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <motion.div whileHover={buttonHover} whileTap={buttonTap}>
              <Link
                href={menuCta.button.href}
                className="bg-primary text-primary-foreground inline-flex rounded-full px-8 py-4 font-medium"
              >
                {menuCta.button.label}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
