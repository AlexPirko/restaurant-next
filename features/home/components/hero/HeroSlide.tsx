import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

import type { HeroSlide as HeroSlideData, Locale } from "./slides";

type HeroSlideProps = {
  slide: HeroSlideData;
  locale: Locale;
  priority?: boolean;
};

export function HeroSlide({ slide, locale, priority = false }: HeroSlideProps) {
  return (
    <div className="relative h-[65vh] min-h-[620px] max-h-[800px] overflow-hidden">
      <Image
        src={slide.image}
        alt={slide.title[locale]}
        fill
        priority={priority}
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 flex items-center">
        <Container>
          <div className="hero-content max-w-2xl text-white">
            <h1 className="mb-6 font-serif text-5xl leading-tight font-semibold lg:text-7xl">
              {slide.title[locale]}
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-8 text-white/90 lg:text-xl">
              {slide.description[locale]}
            </p>

            <Link
              href={slide.href}
              className="inline-flex h-14 items-center justify-center rounded-full border border-white bg-white px-8 text-sm font-semibold tracking-wide text-black transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              {slide.button[locale]}
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}
