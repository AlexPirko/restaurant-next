export interface ReservationHero {
  title: string;
  description: string;
}

export interface ReservationFormData {
  eyebrow: string;
  title: string;
  description: string;
}

export interface OpeningHour {
  day: string;
  hours: string;
}

export interface ReservationInfo {
  title: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  openingHours: OpeningHour[];
}

export interface PrivateDiningFeature {
  title: string;
}

export interface PrivateDining {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  features: PrivateDiningFeature[];
}
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  eyebrow?: string;
  title: string;
  description?: string;
  items: FAQItem[];
}

export interface ReservationCTA {
  eyebrow?: string;
  title: string;
  description: string;
  button: {
    label: string;
    href: string;
  };
}

export interface ReservationHighlight {
  title: string;
  value: string;
}

export interface ReservationHero {
  title: string;
  description: string;

  highlights: ReservationHighlight[];
}
