"use client";

import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";
import { buttonTap, fadeUp } from "@/lib/motion";

import type { AccordionItemData } from "./Accordion";

interface AccordionItemProps {
  item: AccordionItemData;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border transition-colors",
        isOpen ? "border-primary/30 bg-card" : "border-border",
      )}
    >
      <motion.button
        whileTap={buttonTap}
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <span className="text-lg font-semibold">{item.question}</span>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-primary text-2xl font-light"
        >
          +
        </motion.span>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="overflow-hidden"
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="px-6 pb-6 text-muted-foreground leading-7"
            >
              {item.answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
