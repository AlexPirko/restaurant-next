type MenuItem = {
  title: string;
  description: string;
  price: string;
  image: string;
};

type FeaturedMenuData = {
  eyebrow: string;
  title: string;
  description: string;
  button: string;
  items: MenuItem[];
};

export const featuredMenu: FeaturedMenuData = {
  eyebrow: "Featured Menu",

  title: "Signature Dishes\nCrafted with Passion",

  description:
    "Discover a selection of our most celebrated dishes, prepared with premium seasonal ingredients and inspired by contemporary European cuisine.",

  button: "View Full Menu",

  items: [
    {
      title: "Truffle Risotto",
      description:
        "Creamy Arborio rice with shaved black truffle and aged Parmesan.",
      price: "$28",
      image: "/images/menu/risotto.webp",
    },
    {
      title: "Grilled Sea Bass",
      description:
        "Fresh sea bass, seasonal vegetables and citrus butter sauce.",
      price: "$34",
      image: "/images/menu/sea-bass.webp",
    },
    {
      title: "Beef Tenderloin",
      description: "Premium beef with roasted potatoes and peppercorn sauce.",
      price: "$42",
      image: "/images/menu/beef.webp",
    },
    {
      title: "Chocolate Fondant",
      description: "Warm chocolate fondant with vanilla bean ice cream.",
      price: "$16",
      image: "/images/menu/dessert.webp",
    },
  ],
};
