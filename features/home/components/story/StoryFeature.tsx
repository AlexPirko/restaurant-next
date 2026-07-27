import type { LucideIcon } from "lucide-react";

type StoryFeatureProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function StoryFeature({
  icon: Icon,
  title,
  description,
}: StoryFeatureProps) {
  return (
    <article className="group flex items-start gap-5">
      <div
        className="
          flex h-16 w-16 shrink-0 items-center justify-center
          rounded-full border border-amber-200
          bg-white text-amber-700
          transition-all duration-300
          group-hover:scale-105
          group-hover:border-amber-500
          group-hover:bg-amber-50
        "
      >
        <Icon
          size={28}
          strokeWidth={1.5}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="pt-1">
        <h3 className="mb-2 font-serif text-2xl text-neutral-900">{title}</h3>

        <p className="max-w-md leading-7 text-neutral-600">{description}</p>
      </div>
    </article>
  );
}
