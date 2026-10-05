export type Category = "Meals" | "Snacks" | "Recipes";

export interface Dish {
  id: number;
  name: string;
  category: Category;
  blurb: string;
  image: string;
}

/** Stable placeholder photo. Swap for a real product photo URL whenever you have one. */
const photo = (seed: string, w = 600, h = 450) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const DISHES: Dish[] = [
  // ─────────────────────────────────────
  // MEALS — 7
  // ─────────────────────────────────────

  {
    id: 1,
    name: "Jollof Rice",
    category: "Meals",
    blurb: "Smoky party-style jollof, cooked low and slow.",
    image: "jolloflandscape.png",
  },
  {
    id: 2,
    name: "Egusi Soup",
    category: "Meals",
    blurb: "Rich ground melon seed soup with spinach and assorted meat.",
    image: "landscapeegusi.png",
  },
  {
    id: 3,
    name: "Pounded Yam",
    category: "Meals",
    blurb: "Smooth, stretchy swallow, pounded fresh to order.",
    image: "yam-veg.jpg",
  },
  {
    id: 4,
    name: "Suya",
    category: "Meals",
    blurb: "Charcoal-grilled beef in a peppery yaji spice rub.",
    image: "suya.png",
  },
  {
    id: 5,
    name: "Fried Rice",
    category: "Meals",
    blurb: "Colorful Nigerian fried rice packed with vegetables and chicken.",
    image: "friedrice.png",
  },
  {
    id: 6,
    name: "Pepper Soup",
    category: "Meals",
    blurb: "Hot, aromatic broth loaded with pepper and warming spices.",
    image: photo("ak-pepper-soup"),
  },
  {
    id: 7,
    name: "Moi Moi",
    category: "Meals",
    blurb: "Steamed bean pudding made with peppers, onions and spices.",
    image: photo("ak-moi-moi"),
  },

  // ─────────────────────────────────────
  // SNACKS — 7
  // ─────────────────────────────────────

  {
    id: 8,
    name: "Puff-Puff",
    category: "Snacks",
    blurb: "Light, golden fried dough balls, served warm and soft.",
    image: "pufpuf.png",
  },
  {
    id: 9,
    name: "Chin Chin",
    category: "Snacks",
    blurb: "Crunchy fried pastry bites, lightly sweetened.",
    image: "chichin.png",
  },
  {
    id: 10,
    name: "Meat Pie",
    category: "Snacks",
    blurb: "Flaky pastry filled with seasoned minced meat and vegetables.",
    image: "meatpie.png",
  },
  {
    id: 11,
    name: "Plantain Chips",
    category: "Snacks",
    blurb: "Thin-sliced plantain, fried crisp and lightly salted.",
    image: "plantainchips.png",
  },
  {
    id: 12,
    name: "Akara",
    category: "Snacks",
    blurb: "Crispy bean fritters with a soft, flavorful center.",
    image: "akara.png",
  },
  {
    id: 13,
    name: "Samosa",
    category: "Snacks",
    blurb: "Crispy triangular pastry filled with seasoned meat and vegetables.",
    image: photo("ak-samosa"),
  },
  {
    id: 14,
    name: "Boli",
    category: "Snacks",
    blurb: "Charcoal-roasted ripe plantain served hot and smoky.",
    image: photo("ak-boli"),
  },

  // ─────────────────────────────────────
  // RECIPES — 7
  // ─────────────────────────────────────

  {
    id: 15,
    name: "How to Make Jollof Taste Like Home",
    category: "Recipes",
    blurb: "The three things that actually make the difference.",
    image: "jolloflandscape.png",
  },
  {
    id: 16,
    name: "The Secret to Rich Egusi Soup",
    category: "Recipes",
    blurb: "Simple techniques for building deep, rich flavor.",
    image: "egusi.png",
  },
  {
    id: 17,
    name: "Perfect Nigerian Fried Rice",
    category: "Recipes",
    blurb: "How to get colorful, flavorful fried rice every time.",
    image: "friedrice.png",
  },
  {
    id: 18,
    name: "How to Make Soft Puff-Puff",
    category: "Recipes",
    blurb: "The simple tricks behind light, fluffy puff-puff.",
    image: "pufpuf.png",
  },
  {
    id: 19,
    name: "The Perfect Nigerian Meat Pie",
    category: "Recipes",
    blurb: "A flaky crust with a rich, savory filling.",
    image: "meatpie.png",
  },
  {
    id: 20,
    name: "How to Make Authentic Suya",
    category: "Recipes",
    blurb: "Build your own yaji spice mix and get that smoky flavor.",
    image: "suya.png",
  },
  {
    id: 21,
    name: "The Best Fried Plantain",
    category: "Recipes",
    blurb: "How to get perfectly caramelized edges every time.",
    image: "plantainchips.png",
  },
];

/** Featured dishes for the homepage hero slider. */
export const FEATURED = DISHES.filter((d) => [1, 2, 4, 5].includes(d.id));
