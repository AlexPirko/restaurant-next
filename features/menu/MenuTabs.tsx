"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { menuCategories } from "./menu.data";

import { fadeUp, viewport } from "@/lib/motion";

export function MenuTabs() {
  const [activeSection, setActiveSection] = useState<string>(
    menuCategories[0].id,
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0,
      },
    );

    menuCategories.forEach(({ id }) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sticky top-16 z-30 border-y border-border bg-background/90 backdrop-blur">
      <Container>
        <motion.nav
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="no-scrollbar flex gap-2 overflow-x-auto py-4"
        >
          {menuCategories.map((category) => {
            const isActive = activeSection === category.id;

            return (
              <Link
                key={category.id}
                href={`#${category.id}`}
                className={`px-4 py-4 text-sm font-medium transition-colors hover:text-primary duration-300 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.label}
              </Link>
            );
          })}
        </motion.nav>
      </Container>
    </section>
  );
}
