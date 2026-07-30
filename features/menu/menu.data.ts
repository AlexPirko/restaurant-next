export const menuHero = {
  eyebrow: "Menu",

  title: "Seasonal Menu",

  description:
    "Fresh ingredients. Timeless recipes. Thoughtfully crafted dishes inspired by seasonal flavors.",
};

export const menuCategories = [
  {
    id: "appetizers",
    label: "Appetizers",
  },
  {
    id: "salads",
    label: "Salads",
  },
  {
    id: "soups",
    label: "Soups",
  },
  {
    id: "mains",
    label: "Main Courses",
  },
  {
    id: "desserts",
    label: "Desserts",
  },
] as const;

export const menuCta = {
  title: "Reserve Your Table",

  description:
    "Enjoy our seasonal menu in a warm and welcoming atmosphere. Book your table today for an unforgettable dining experience.",

  button: {
    label: "Reserve a Table",
    href: "/reservation",
  },
};

import type { MenuItem } from "./types";

export const menu: MenuItem[] = [
  // Appetizers

  {
    id: "burrata-tomatoes",
    category: "appetizers",
    name: "Burrata with Tomatoes",
    description:
      "Creamy burrata, heirloom tomatoes, fresh basil, olive oil and balsamic glaze.",
    price: 18,
    image: "/images/menu/burrata-tomatoes.webp",
  },
  {
    id: "beef-carpaccio",
    category: "appetizers",
    name: "Beef Carpaccio",
    description:
      "Thinly sliced beef tenderloin with Parmesan, arugula, capers and truffle oil.",
    price: 19,
    image: "/images/menu/carpaccio.webp",
  },
  {
    id: "bruschetta-trio",
    category: "appetizers",
    name: "Bruschetta Trio",
    description:
      "Three artisan bruschettas with tomato, smoked salmon and truffle mushrooms.",
    price: 16,
    image: "/images/menu/bruschetta.webp",
  },

  // Salads

  {
    id: "caesar-salad",
    category: "salads",
    name: "Caesar Salad",
    description:
      "Grilled chicken, crisp romaine, Parmesan, herb croutons and Caesar dressing.",
    price: 17,
    image: "/images/menu/caesar.webp",
  },
  {
    id: "burrata-salad",
    category: "salads",
    name: "Burrata Salad",
    description:
      "Burrata, roasted peaches, cherry tomatoes, arugula and basil pesto.",
    price: 19,
    image: "/images/menu/burrata-salad.webp",
  },
  {
    id: "greek-salad",
    category: "salads",
    name: "Greek Salad",
    description:
      "Tomatoes, cucumber, Kalamata olives, feta cheese and oregano vinaigrette.",
    price: 16,
    image: "/images/menu/greek-salad.webp",
  },

  // Soups

  {
    id: "tomato-basil-soup",
    category: "soups",
    name: "Tomato Basil Soup",
    description:
      "Roasted tomato soup finished with basil, cream and Parmesan crisp.",
    price: 14,
    image: "/images/menu/tomato-soup.webp",
  },
  {
    id: "french-onion-soup",
    category: "soups",
    name: "French Onion Soup",
    description:
      "Slow-cooked onions, rich beef broth, Gruyère cheese and toasted bread.",
    price: 15,
    image: "/images/menu/onion-soup.webp",
  },
  {
    id: "pumpkin-cream-soup",
    category: "soups",
    name: "Pumpkin Cream Soup",
    description:
      "Velvety pumpkin soup with roasted seeds, herbs and fresh cream.",
    price: 14,
    image: "/images/menu/pumpkin-soup.webp",
  },
  {
    id: "seafood-chowder",
    category: "soups",
    name: "Seafood Chowder",
    description:
      "Creamy chowder with shrimp, salmon, mussels, potatoes and fresh herbs.",
    price: 18,
    image: "/images/menu/seafood-chowder.webp",
  },

  // Main Courses

  {
    id: "truffle-risotto",
    category: "mains",
    name: "Truffle Risotto",
    description:
      "Creamy Arborio rice with black truffle, Parmesan and fresh microgreens.",
    price: 28,
    image: "/images/menu/risotto.webp",
  },
  {
    id: "grilled-sea-bass",
    category: "mains",
    name: "Grilled Sea Bass",
    description:
      "Sea bass fillet, asparagus, roasted tomatoes and herb butter.",
    price: 34,
    image: "/images/menu/sea-bass.webp",
  },
  {
    id: "beef-tenderloin",
    category: "mains",
    name: "Beef Tenderloin",
    description:
      "Medium-rare beef tenderloin with baby potatoes and peppercorn sauce.",
    price: 39,
    image: "/images/menu/beef.webp",
  },
  {
    id: "duck-breast",
    category: "mains",
    name: "Duck Breast",
    description:
      "Roasted duck breast with potato purée, baby carrots and cherry reduction.",
    price: 36,
    image: "/images/menu/duck-breast.webp",
  },
  {
    id: "mushroom-risotto",
    category: "mains",
    name: "Mushroom Risotto",
    description:
      "Creamy risotto with wild mushrooms, Parmesan and fresh thyme.",
    price: 27,
    image: "/images/menu/mushroom-risotto.webp",
  },

  // Desserts

  {
    id: "chocolate-fondant",
    category: "desserts",
    name: "Chocolate Fondant",
    description:
      "Warm chocolate fondant with vanilla ice cream and seasonal berries.",
    price: 14,
    image: "/images/menu/dessert.webp",
  },
  {
    id: "tiramisu",
    category: "desserts",
    name: "Tiramisu",
    description:
      "Classic Italian dessert with mascarpone, espresso and cocoa powder.",
    price: 13,
    image: "/images/menu/tiramisu.webp",
  },
  {
    id: "creme-brulee",
    category: "desserts",
    name: "Crème Brûlée",
    description:
      "Silky vanilla custard with caramelized sugar crust and fresh berries.",
    price: 13,
    image: "/images/menu/creme-brule.webp",
  },
];
