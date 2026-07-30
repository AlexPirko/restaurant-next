"use client";

import { motion } from "motion/react";

import { fadeUp, staggerFast, viewport } from "@/lib/motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      variants={staggerFast}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={isCenter ? "text-center" : ""}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className="text-primary text-sm font-semibold uppercase tracking-[0.3em]"
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        variants={fadeUp}
        className={[
          "mt-4 text-4xl font-bold md:text-5xl",
          isCenter ? "mx-auto max-w-3xl" : "max-w-2xl",
        ].join(" ")}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeUp}
          className={[
            "text-muted-foreground mt-6 leading-8",
            isCenter ? "mx-auto max-w-3xl" : "max-w-3xl",
          ].join(" ")}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
