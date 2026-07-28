import { Dispatch, SetStateAction } from "react";

import { LocationsInfo } from "./LocationsInfo";
import { LocationsTabs } from "./LocationsTabs";

type Props = {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
};

export function LocationsContent({ active, setActive }: Props) {
  return (
    <div className="max-w-xl">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
        Visit Us
      </p>

      <h2 className="mb-8 font-serif text-4xl leading-tight lg:text-5xl">
        Our Locations
      </h2>

      <LocationsTabs active={active} setActive={setActive} />

      <LocationsInfo key={active} active={active} />
    </div>
  );
}
