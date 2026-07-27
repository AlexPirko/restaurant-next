import { Container } from "@/components/ui/Container";

const timeSlots = generateTimeSlots("12:00", "22:00", 30);

function generateTimeSlots(start: string, end: string, interval: number) {
  const slots: string[] = [];

  const [startHour, startMinute] = start.split(":").map(Number);
  const [endHour, endMinute] = end.split(":").map(Number);

  const startMinutes = startHour * 60 + startMinute;
  const endMinutes = endHour * 60 + endMinute;

  for (let minutes = startMinutes; minutes <= endMinutes; minutes += interval) {
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;

    slots.push(
      `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
    );
  }

  return slots;
}

export function Reservation() {
  return (
    <section className="-mt-16 relative z-20 mb-24">
      <Container>
        <div className="rounded-3xl bg-white shadow-2xl ring-1 ring-black/5">
          <div className="grid gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
                Reservation
              </p>

              <h2 className="font-serif text-3xl font-semibold text-neutral-900 lg:text-4xl">
                Reserve Your Table
              </h2>

              <p className="mt-3 max-w-xl text-neutral-600">
                Experience refined cuisine in an elegant atmosphere. Book your
                table in just a few clicks.
              </p>
            </div>

            <form className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <input
                type="date"
                className="h-14 rounded-full border border-neutral-200 px-5 outline-none transition focus:border-black"
              />

              <div className="relative">
                <select
                  defaultValue=""
                  className="h-14 w-full appearance-none rounded-full border border-neutral-200 bg-white px-5 pr-12 outline-none transition-colors focus:border-black"
                >
                  <option value="" disabled>
                    Select time
                  </option>

                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>

                <svg
                  className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>

              <div className="relative">
                <select
                  defaultValue=""
                  className="h-14 w-full appearance-none rounded-full border border-neutral-200 bg-white px-5 pr-12 outline-none transition-colors focus:border-black"
                >
                  <option value="" disabled>
                    Guests
                  </option>

                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8 Guests</option>
                  <option value="9+">9+ Guests</option>
                </select>

                <svg
                  className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>

              <button
                type="submit"
                className="h-14 rounded-full bg-black px-8 font-semibold text-white transition hover:bg-neutral-800"
              >
                Reserve
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
