"use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";

import { reservationForm, reservationInfo } from "./reservation.data";

import {
  buttonHover,
  buttonTap,
  fadeLeft,
  fadeRight,
  staggerFast,
  viewport,
} from "@/lib/motion";

export function ReservationForm() {
  return (
    <section id="reservation-form" className="py-24">
      <Container>
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionHeader
            eyebrow={reservationForm.eyebrow}
            title={reservationForm.title}
            description={reservationForm.description}
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.7fr_1fr]">
            {/* FORM */}

            <motion.div
              variants={fadeLeft}
              className="rounded-3xl border border-border bg-card p-8 md:p-10"
            >
              <form className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <Field label="Full Name" required>
                    <input
                      type="text"
                      placeholder="John Smith"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Email Address" required>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Phone Number">
                    <input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Guests" required>
                    <select className={inputClass}>
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5 Guests</option>
                      <option>6+ Guests</option>
                    </select>
                  </Field>

                  <Field label="Reservation Date" required>
                    <input type="date" className={inputClass} />
                  </Field>

                  <Field label="Preferred Time" required>
                    <input type="time" className={inputClass} />
                  </Field>
                </div>

                <Field label="Special Requests">
                  <textarea
                    rows={5}
                    placeholder="Tell us about allergies, dietary preferences or special occasions..."
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-full px-8 py-4 font-medium transition-colors"
                  >
                    Reserve Table
                  </button>
                </motion.div>
              </form>
            </motion.div>

            {/* INFO */}

            <motion.aside
              variants={fadeRight}
              className="rounded-3xl border border-border bg-card p-8 md:p-10"
            >
              <h3 className="text-2xl font-semibold">Visit Information</h3>

              <p className="text-muted-foreground mt-4 leading-7">
                {reservationInfo.description}
              </p>

              <div className="mt-8">
                <h4 className="text-lg font-semibold">Opening Hours</h4>

                <div className="mt-5 space-y-4">
                  {reservationInfo.openingHours.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between border-b border-border pb-3 last:border-none"
                    >
                      <span className="text-muted-foreground">{item.day}</span>

                      <span className="font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <InfoItem label="Address" value={reservationInfo.address} />

                <InfoItem label="Phone" value={reservationInfo.phone} />

                <InfoItem label="Email" value={reservationInfo.email} />
              </div>

              <div className="bg-primary/10 border-primary/20 mt-10 rounded-2xl border p-6">
                <h4 className="text-lg font-semibold">Need Assistance?</h4>

                <p className="text-muted-foreground mt-3 leading-7">
                  Planning a birthday, anniversary or private event? Our team
                  will gladly help you organize an unforgettable experience.
                </p>
              </div>
            </motion.aside>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

const inputClass =
  "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary";

interface FieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ label, required, children }: FieldProps) {
  return (
    <label className="block">
      <span className="text-sm font-medium">
        {label}

        {required && <span className="text-primary ml-1">*</span>}
      </span>

      {children}
    </label>
  );
}

interface InfoItemProps {
  label: string;
  value: string;
}

function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div>
      <div className="text-muted-foreground text-sm uppercase tracking-wider">
        {label}
      </div>

      <div className="mt-2 font-medium">{value}</div>
    </div>
  );
}
