import { Container } from "@/components/ui/Container";

import { HeaderActions } from "./HeaderActions";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white">
      <Container>
        <div className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-12">
          <HeaderLogo />

          <HeaderNav />

          <HeaderActions />
        </div>
      </Container>
    </header>
  );
}
