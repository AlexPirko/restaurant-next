import Link from "next/link";

import { phones } from "./header.data";

export function CallDropdown() {
  return (
    <div className="group relative ml-8">
      <button className="font-medium">Call</button>

      <div className="absolute right-0 top-full mt-4  w-64 rounded-2xl bg-white p-5 shadow-xl opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="space-y-4">
          {phones.map((phone) => (
            <div key={phone.title}>
              <p className="text-sm text-neutral-500">{phone.title}</p>

              <Link href={`tel:${phone.phone}`} className="font-medium">
                {phone.phone}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
