import Image from "next/image";
import { motion } from "motion/react";

import { cardHover, fadeUp } from "@/lib/motion";

type MenuCardProps = {
  title: string;
  description: string;
  price: string;
  image: string;
};

export function MenuCard({ title, description, price, image }: MenuCardProps) {
  return (
    <motion.article
      key={price}
      variants={fadeUp}
      whileHover={cardHover}
      className="group"
    >
      <div className="overflow-hidden rounded-sm">
        <Image
          src={image}
          alt={title}
          width={700}
          height={700}
          className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between gap-4">
          <h3 className="font-serif text-2xl text-neutral-900">{title}</h3>

          <span className="text-lg font-medium text-amber-700">{price}</span>
        </div>

        <p className="leading-7 text-neutral-600">{description}</p>
      </div>
    </motion.article>
  );
}
