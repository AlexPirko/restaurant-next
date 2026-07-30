import type {
  FAQSection,
  PrivateDining,
  ReservationCTA,
  ReservationFormData,
  ReservationHero,
  ReservationInfo,
} from "./types";

export const reservationHero: ReservationHero = {
  title: "Reserve Your Table",

  description:
    "Book your table in just a few moments and enjoy an unforgettable dining experience crafted with seasonal ingredients and exceptional hospitality.",

  highlights: [
    {
      title: "Open Today",
      value: "11:00 – 23:00",
    },
    {
      title: "Average Visit",
      value: "≈ 2 Hours",
    },
    {
      title: "Reservations",
      value: "Recommended",
    },
  ],
};

export const reservationForm: ReservationFormData = {
  eyebrow: "Reservation",
  title: "Book a Table",
  description:
    "Complete the form below and our team will confirm your reservation as soon as possible.",
};

export const reservationInfo: ReservationInfo = {
  title: "Restaurant Information",
  description:
    "We welcome guests every day for lunch and dinner. For larger groups or special occasions, please contact us in advance.",

  phone: "+1 (555) 123-4567",
  email: "hello@restaurant.com",
  address: "125 Madison Avenue, New York, NY",

  openingHours: [
    { day: "Monday-Thursday", hours: "11:00 – 22:00" },
    { day: "Friday", hours: "11:00 – 23:00" },
    { day: "Saturday", hours: "12:00 – 24:00" },
    { day: "Sunday", hours: "12:00 – 23:00" },
  ],
};

export const privateDining: PrivateDining = {
  eyebrow: "Private Dining",
  title: "Celebrate Your Special Moments",
  description:
    "Host unforgettable private events with tailored menus, elegant spaces, and dedicated service.",

  image: "/images/reservation/private-dining.webp",

  features: [
    { title: "Up to 40 guests" },
    { title: "Custom tasting menus" },
    { title: "Dedicated event coordinator" },
    { title: "Wine pairing available" },
  ],
};

export const faq: FAQSection = {
  eyebrow: "FAQ",
  title: "Frequently Asked Questions",
  description: "Everything you need to know before your visit.",

  items: [
    {
      question: "How far in advance can I book?",
      answer: "Reservations are available up to 30 days in advance.",
    },
    {
      question: "Can I modify my reservation?",
      answer: "Yes. Please contact us by phone or email as early as possible.",
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answer:
        "Absolutely. Please mention any allergies or dietary preferences when booking.",
    },
    {
      question: "Is there a dress code?",
      answer: "Smart casual attire is recommended for dinner service.",
    },
  ],
};

export const reservationCta: ReservationCTA = {
  eyebrow: "Reservation",

  title: "Ready to Reserve Your Table?",

  description:
    "Experience exceptional cuisine, warm hospitality, and unforgettable moments. Reserve your table today.",

  button: {
    label: "Book a Table",
    href: "#reservation-form",
  },
};
