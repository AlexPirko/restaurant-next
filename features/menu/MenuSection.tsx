"use client";

import { motion } from "motion/react";

import { MenuCard } from "./MenuCard";
import { menu } from "./menu.data";
import type { MenuCategory } from "./types";
import { Container } from "@/components/ui/Container";
import { fadeUp, stagger, viewport } from "@/lib/motion";

type MenuSectionProps = {
  id: MenuCategory;
  title: string;
};

export function MenuSection({ id, title }: MenuSectionProps) {
  const items = menu.filter((item) => item.category === id);

  if (!items.length) return null;

  return (
    <section id={id} className="scroll-mt-32 py-20">
      <Container>
        <motion.header
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight">{title}</h2>
        </motion.header>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
        >
          {items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
