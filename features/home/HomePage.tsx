import { Hero } from "./components/hero/Hero";
import { Reservation } from "./components/reservation/Reservation";
import { Story } from "./components/story/Story";

export function HomePage() {
  return (
    <>
      <Hero />
      <Reservation />
      <Story />
    </>
  );
}
