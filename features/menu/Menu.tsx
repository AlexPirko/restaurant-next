import { menuCategories } from "./menu.data";
import { MenuCTA } from "./MenuCTA";
import { MenuHero } from "./MenuHero";
import { MenuSection } from "./MenuSection";
import { MenuTabs } from "./MenuTabs";

export function Menu() {
  return (
    <>
      <MenuHero />

      <MenuTabs />

      {menuCategories.map((category) => (
        <MenuSection
          key={category.id}
          id={category.id}
          title={category.label}
        />
      ))}

      <MenuCTA />
    </>
  );
}
