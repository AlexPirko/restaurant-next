import { ReservationCTA } from "./ReservationCTA";
import { ReservationFAQ } from "./ReservationFAQ";
import { ReservationForm } from "./ReservationForm";
import { ReservationHero } from "./ReservationHero";
import { ReservationPrivateDining } from "./ReservationPrivateDining";

export function Reservation() {
  return (
    <>
      <ReservationHero />
      <ReservationForm />
      <ReservationPrivateDining />
      <ReservationFAQ />
      <ReservationCTA />
    </>
  );
}
