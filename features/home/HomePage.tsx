import { Hero } from "./components/hero/Hero";
import { Reservation } from "./components/reservation/Reservation";
import { Story } from "./components/story/Story";
import { FeaturedMenu } from "./components/featured-menu/FeaturedMenu";
import { Gallery } from "./components/gallery/Gallery";
import { Banquet } from "./components/banquet/Banquet";
import { Locations } from "./components/locations/Locations";

export function HomePage() {
  return (
    <>
      <Hero />
      <Reservation />
      <Story />
      <FeaturedMenu />
      <Gallery />
      <Banquet />
      <Locations />
    </>
  );
}
