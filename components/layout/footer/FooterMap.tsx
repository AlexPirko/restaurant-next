import Image from "next/image";
import Link from "next/link";

import { footerData } from "./footer.data";

export function FooterMap() {
  return (
    <Link
      href={footerData.map.href}
      target="_blank"
      className="overflow-hidden rounded-2xl"
    >
      <Image
        src={footerData.map.image}
        alt="Restaurant location"
        width={380}
        height={300}
        className="h-full w-full object-cover transition duration-500 hover:scale-105"
      />
    </Link>
  );
}
