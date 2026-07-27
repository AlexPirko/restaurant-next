import { Hero } from "./components/hero/Hero";
import { Reservation } from "./components/reservation/Reservation";
import { Story } from "./components/story/Story";
import { FeaturedMenu } from "./featured-menu/FeaturedMenu";

export function HomePage() {
  return (
    <>
      <Hero />
      <Reservation />
      <Story />
      <FeaturedMenu />
    </>
  );
}
