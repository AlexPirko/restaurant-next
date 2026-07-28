export type Location = {
  id: string;
  tab: string;
  title: string;
  description: string[];
  image: string;

  phone: string;
  address: string;
  hours: string;

  directions: string;
  reservation: string;
};

export const locations: Location[] = [
  {
    id: "downtown",

    tab: "Downtown",

    title: "Downtown Restaurant",

    description: [
      "Located in the heart of the city, our flagship restaurant blends contemporary design with seasonal cuisine inspired by local ingredients.",

      "Whether you're joining us for a business lunch, romantic dinner or celebration with friends, you'll enjoy attentive service and an inviting atmosphere.",
    ],

    image: "/images/locations/downtown.webp",

    phone: "+1 (555) 123-4567",

    address: "123 Main Street, New York",

    hours: "Daily • 12:00 – 22:00",

    directions: "#",
    reservation: "#",
  },

  {
    id: "riverside",

    tab: "Riverside",

    title: "Riverside Restaurant",

    description: [
      "Our riverside location offers panoramic views, elegant interiors and a relaxed atmosphere overlooking the waterfront.",

      "Perfect for family dinners, weekend brunches and private events, the restaurant features spacious seating and seasonal menus.",
    ],

    image: "/images/locations/riverside.webp",

    phone: "+1 (555) 987-6543",

    address: "85 River Avenue, New York",

    hours: "Daily • 11:30 – 23:00",

    directions: "#",
    reservation: "#",
  },
];
