import { BanquetActions } from "./BanquetActions";
import { banquet } from "./banquet.data";

export function BanquetContent() {
  return (
    <div className="max-w-lg">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
        {banquet.eyebrow}
      </p>

      <h2 className="mb-6 text-4xl font-serif leading-tight lg:text-5xl">
        {banquet.title}
      </h2>

      <p className="mb-10 text-sm leading-7 text-text-muted">
        {banquet.description}
      </p>

      <BanquetActions />
    </div>
  );
}
