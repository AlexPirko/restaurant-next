import Image from "next/image";
import Link from "next/link";

import { storyContent } from "./story.data";
import { StoryFeature } from "./StoryFeature";

export function StoryTop() {
  const { about } = storyContent;

  return (
    <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
          {about.eyebrow}
        </p>

        <h2 className="mb-8 whitespace-pre-line font-serif text-4xl leading-tight text-neutral-900 lg:text-5xl">
          {about.title}
        </h2>

        <div className="mb-8 h-px w-20 bg-amber-700" />

        <p className="mb-10 max-w-xl text-lg leading-8 text-neutral-600">
          {about.description}
        </p>

        <div className="mb-14 space-y-8">
          {about.features.map((feature) => (
            <StoryFeature
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <Link
          href="/about"
          className="group inline-flex items-center gap-3 font-medium text-neutral-900 transition-colors hover:text-amber-700"
        >
          {about.button}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </Link>
      </div>

      <div className="relative aspect-4/5 overflow-hidden rounded-sm">
        <Image
          src={about.image}
          alt={about.title.replace("\n", " ")}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    </div>
  );
}
