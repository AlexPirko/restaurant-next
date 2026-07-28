import Image from "next/image";

import { Container } from "@/components/ui/Container";

import { BanquetContent } from "./BanquetContent";
import { banquet } from "./banquet.data";

export function Banquet() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <BanquetContent />

          <div className="relative aspect-4/3 overflow-hidden rounded-sm">
            <Image
              src={banquet.image}
              alt={banquet.title}
              fill
              className="object-cover"
              sizes="(min-width:1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
