"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

import { Clock3, MapPin, Phone } from "lucide-react";

import { LocationsInfoItem } from "./LocationsInfoItem";
import { locations } from "./locations.data";

type Props = {
  active: number;
};

export function LocationsInfo({ active }: Props) {
  const location = locations[active];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.id}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
      >
        <h3 className="mb-4 font-serif text-3xl">{location.title}</h3>

        <div className="space-y-2">
          {location.description.map((paragraph) => (
            <p key={paragraph} className="leading-6 text-sm text-text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-6 space-y-2">
          <LocationsInfoItem icon={<Phone size={18} strokeWidth={1.75} />}>
            <a
              href={`tel:${location.phone}`}
              className="transition hover:text-primary"
            >
              {location.phone}
            </a>
          </LocationsInfoItem>

          <LocationsInfoItem icon={<MapPin size={18} strokeWidth={1.75} />}>
            <a
              href={location.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-primary"
            >
              {location.address}
            </a>
          </LocationsInfoItem>

          <LocationsInfoItem icon={<Clock3 size={18} strokeWidth={1.75} />}>
            {location.hours}
          </LocationsInfoItem>
        </div>

        <div className="mt-10">
          <Link
            href={location.reservation}
            className="inline-flex rounded-sm bg-primary px-6 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Reserve a Table
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
