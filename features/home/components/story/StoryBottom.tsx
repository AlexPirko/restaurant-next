import Image from "next/image";
import Link from "next/link";

import { storyContent } from "./story.data";

export function StoryBottom() {
  const { menu } = storyContent;

  return (
    <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative aspect-[4/5] order-2 overflow-hidden rounded-sm lg:order-1">
        <Image
          src={menu.image}
          alt={menu.title.replace("\n", " ")}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      <div className="order-1 lg:order-2">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
          {menu.eyebrow}
        </p>

        <h2 className="mb-8 whitespace-pre-line font-serif text-4xl leading-tight text-neutral-900 lg:text-5xl">
          {menu.title}
        </h2>

        <div className="mb-8 h-px w-20 bg-amber-700" />

        <p className="mb-10 max-w-xl text-lg leading-8 text-neutral-600">
          {menu.description}
        </p>

        <Link
          href="/menu"
          className="group inline-flex items-center gap-3 font-medium text-neutral-900 transition-colors hover:text-amber-700"
        >
          {menu.button}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
