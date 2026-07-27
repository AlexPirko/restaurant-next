import Image from "next/image";

import type { GalleryItem as GalleryItemType } from "./gallery.data";

type GalleryItemProps = {
  item: GalleryItemType;
};

export function GalleryItem({ item }: GalleryItemProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-sm ${item.className}`}
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
      />

      <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />
    </article>
  );
}
