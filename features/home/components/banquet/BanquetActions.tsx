import Link from "next/link";

import { banquet } from "./banquet.data";

export function BanquetActions() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link
        href={banquet.actions[0].href}
        className="rounded-sm bg-primary px-6 py-3 text-white transition hover:opacity-90"
      >
        {banquet.actions[0].label}
      </Link>

      <Link
        href={banquet.actions[1].href}
        className="rounded-sm border border-border px-6 py-3 transition hover:bg-primary-light"
      >
        {banquet.actions[1].label}
      </Link>
    </div>
  );
}
