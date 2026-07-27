import Link from "next/link";

import { Container } from "@/components/ui/Container";

import { MenuCard } from "./MenuCard";
import { featuredMenu } from "./menu.data";

export function FeaturedMenu() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
            {featuredMenu.eyebrow}
          </span>

          <h2 className="font-serif mt-4 whitespace-pre-line text-5xl text-neutral-900">
            {featuredMenu.title}
          </h2>

          <div className="mx-auto my-8 h-px w-20 bg-amber-700" />

          <p className="leading-8 text-neutral-600">
            {featuredMenu.description}
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {featuredMenu.items.map((item) => (
            <MenuCard key={item.title} {...item} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-3 border-b border-amber-700 pb-1 text-lg font-medium text-amber-700 transition-colors hover:text-neutral-900 hover:border-neutral-900"
          >
            {featuredMenu.button}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
