export type MenuCategory =
  | "appetizers"
  | "salads"
  | "soups"
  | "mains"
  | "desserts";

export type MenuItem = {
  id: string;
  category: MenuCategory;

  name: string;
  description: string;

  price: number;

  image: string;
};
