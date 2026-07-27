import { Container } from "@/components/ui/Container";

import { gallery } from "./gallery.data";
import { GalleryItem } from "./GalleryItem";

export function Gallery() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-medium uppercase tracking-[0.3em] text-amber-700">
            {gallery.eyebrow}
          </span>

          <h2 className="font-serif text-4xl text-neutral-900 lg:text-5xl">
            {gallery.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            {gallery.description}
          </p>
        </div>

        <div
          className="
            grid
            grid-cols-1
            gap-6

            md:grid-cols-2

            lg:grid-cols-12
            lg:auto-rows-90
          "
        >
          {gallery.items.map((item) => (
            <GalleryItem key={item.image} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
