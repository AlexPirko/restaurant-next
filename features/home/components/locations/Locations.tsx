"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

import { Container } from "@/components/ui/Container";

import { LocationsContent } from "./LocationsContent";
import { locations } from "./locations.data";

export function Locations() {
  const [active, setActive] = useState(0);

  const location = locations[active];

  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.id}
                className="relative aspect-square overflow-hidden rounded-sm"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                <Image
                  src={location.image}
                  alt={location.title}
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 50vw, 100vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <LocationsContent
            key={location.id}
            active={active}
            setActive={setActive}
          />
        </div>
      </Container>
    </section>
  );
}
