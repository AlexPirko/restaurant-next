import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  children: ReactNode;
};

export function LocationsInfoItem({ icon, children }: Props) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 text-primary">{icon}</div>

      <div>{children}</div>
    </div>
  );
}
