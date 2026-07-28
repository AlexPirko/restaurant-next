import { Dispatch, SetStateAction } from "react";

import { locations } from "./locations.data";

type Props = {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
};

export function LocationsTabs({ active, setActive }: Props) {
  return (
    <div className="mb-6 flex flex-wrap gap-3">
      {locations.map((location, index) => (
        <button
          key={location.id}
          onClick={() => setActive(index)}
          className={`inline-flex h-10 items-center rounded-full border px-5 text-sm font-medium cursor-pointer transition-all duration-300 active:scale-95 ${
            active === index
              ? "border-primary bg-primary text-white shadow-sm"
              : "border-border bg-white hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light"
          }`}
        >
          {location.tab}
        </button>
      ))}
    </div>
  );
}
