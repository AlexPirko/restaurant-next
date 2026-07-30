"use client";

import Image from "next/image";
import { motion } from "motion/react";

import type { MenuItem } from "./types";

import { cardHover, imageReveal } from "@/lib/motion";

type MenuCardProps = {
  item: MenuItem;
};

export function MenuCard({ item }: MenuCardProps) {
  return (
    <motion.article
      variants={imageReveal}
      whileHover={cardHover}
      className="group overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex h-full flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold leading-tight">{item.name}</h3>

          <span className="text-primary shrink-0 text-lg font-semibold">
            ${item.price}
          </span>
        </div>

        <p className="text-muted-foreground text-sm leading-7">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}
