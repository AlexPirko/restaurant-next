import Link from "next/link";

import { navigation } from "./header.data";

export function HeaderNav() {
  return (
    <nav className="flex justify-center gap-10">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="transition-opacity hover:opacity-70"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
