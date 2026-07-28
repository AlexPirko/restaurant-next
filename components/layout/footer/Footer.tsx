import Link from "next/link";

import { FooterContacts } from "./FooterContacts";
import { FooterInfo } from "./FooterInfo";
import { FooterMap } from "./FooterMap";
import { footerData } from "./footer.data";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-white">
      <Container>
        <div className="grid gap-10 py-20 lg:px-16 lg:grid-cols-[1fr_1fr_320px]">
          <FooterInfo />

          <FooterContacts />

          <FooterMap />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/10 py-8">
          <p className="text-sm text-white/50">
            © 2026 Maison. All rights reserved.
          </p>

          <nav className="flex flex-wrap gap-6">
            {footerData.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/60 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
