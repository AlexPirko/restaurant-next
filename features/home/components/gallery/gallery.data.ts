export type GalleryItem = {
  id: string;
  image: string;
  alt: string;
  className: string;
};

type GallerySection = {
  eyebrow: string;
  title: string;
  description: string;
  items: GalleryItem[];
};

export const gallery: GallerySection = {
  eyebrow: "Gallery",
  title: "Experience the Atmosphere",
  description:
    "Discover the elegance of our interiors, the artistry of our cuisine and the passion behind every carefully crafted dish.",

  items: [
    {
      id: "1",
      image: "/images/gallery/interior.webp",
      alt: "Restaurant interior",
      className: "lg:col-span-9 lg:row-span-2",
    },
    {
      id: "2",
      image: "/images/menu/beef.webp",
      alt: "Beef Tenderloin",
      className: "lg:col-span-3",
    },
    {
      id: "3",
      image: "/images/gallery/chef.webp",
      alt: "Chef plating",
      className: "lg:col-span-3",
    },
    {
      id: "4",
      image: "/images/gallery/alcohol.webp",
      alt: "Glass of wine",
      className: "lg:col-span-3",
    },
    {
      id: "5",
      image: "/images/gallery/wine.webp",
      alt: "Wine selection",
      className: "lg:col-span-9",
    },
    {
      id: "6",
      image: "/images/gallery/evening.webp",
      alt: "Restaurant evening",
      className: "lg:col-span-12",
    },
  ],
};
