"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";

import { faq } from "./reservation.data";

export function ReservationFAQ() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeader
          eyebrow={faq.eyebrow}
          title={faq.title}
          description={faq.description}
          align="center"
        />

        <div className="mx-auto mt-16 max-w-3xl">
          <Accordion items={faq.items} defaultOpen={0} />
        </div>
      </Container>
    </section>
  );
}
