import { ChefHat, Leaf, Wine } from "lucide-react";

export const storyContent = {
  about: {
    eyebrow: "Our Story",
    title: "Crafted Around\nSeasonal Flavors",
    description:
      "Every dish begins with carefully selected ingredients and a passion for honest cooking. Our kitchen combines timeless techniques with fresh seasonal produce to create an experience worth sharing.",

    features: [
      {
        icon: Leaf,
        title: "Seasonal Ingredients",
        description: "Fresh local produce selected daily for every service.",
      },
      {
        icon: ChefHat,
        title: "Signature Cuisine",
        description:
          "Thoughtfully crafted recipes inspired by Mediterranean traditions.",
      },
      {
        icon: Wine,
        title: "Curated Wine Selection",
        description: "Handpicked wines perfectly paired with every course.",
      },
    ],

    button: "Learn More",

    image: "/images/story/interior.webp",
  },

  menu: {
    eyebrow: "OUR MENU",

    title: "A Collection of\nSignature Dishes",

    description:
      "Explore a menu inspired by regional traditions and elevated with modern creativity. Every plate is designed to be memorable.",

    button: "Explore Menu",

    image: "/images/story/menu.webp",
  },
};
