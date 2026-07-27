export type Locale = "en" | "uk";

export type HeroSlide = {
  id: string;
  image: string;
  href: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  button: Record<Locale, string>;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "menu",
    image: "/images/hero/slide1.webp",
    href: "/menu",
    title: {
      en: "Exceptional Dining Experience",
      uk: "Вишукана гастрономія",
    },
    description: {
      en: "Discover seasonal cuisine crafted with premium ingredients and inspired by modern culinary traditions.",
      uk: "Відкрийте для себе сезонні страви, створені з добірних інгредієнтів та сучасним кулінарним баченням.",
    },
    button: {
      en: "Explore Menu",
      uk: "Переглянути меню",
    },
  },
  {
    id: "reservation",
    image: "/images/hero/slide2.webp",
    href: "/reservation",
    title: {
      en: "Reserve Your Table",
      uk: "Забронюйте столик",
    },
    description: {
      en: "Whether it's a romantic dinner or a celebration with friends, your perfect table is waiting.",
      uk: "Романтична вечеря чи зустріч із друзями — ми підготуємо для вас ідеальне місце.",
    },
    button: {
      en: "Book a Table",
      uk: "Забронювати",
    },
  },
  {
    id: "contact",
    image: "/images/hero/slide3.webp",
    href: "/contact",
    title: {
      en: "Welcome to Our Restaurant",
      uk: "Завітайте до нас",
    },
    description: {
      en: "Enjoy warm hospitality, elegant interiors and unforgettable moments in the heart of the city.",
      uk: "Насолоджуйтеся затишною атмосферою, вишуканим інтер'єром та незабутніми вечорами.",
    },
    button: {
      en: "Find Us",
      uk: "Як нас знайти",
    },
  },
];
