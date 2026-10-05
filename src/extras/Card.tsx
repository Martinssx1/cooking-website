import type { Dish } from "../utils/data";
import { whatsappOrderLink } from "../utils/contact";

export function Card({ dish }: { dish: Dish }) {
  // Only Meals and Snacks are things someone can actually order — Recipes
  // and "The Latest" are informational, so they stay non-clickable.
  const orderable = dish.category === "Meals" || dish.category === "Snacks";

  const body = (
    <>
      <img
        src={dish.image}
        alt={dish.name}
        loading="lazy"
        className="h-40 w-full object-cover transition-opacity group-hover:opacity-90 sm:h-48"
      />
      <h3
        className={`mt-3 px-1 text-center font-serif text-base font-semibold leading-snug transition-colors ${
          orderable ? "group-hover:text-rust group-active:text-rust" : ""
        }`}
      >
        {dish.name}
      </h3>
    </>
  );

  if (!orderable) return <div>{body}</div>;

  return (
    <a
      href={whatsappOrderLink(dish.name)}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      aria-label={`Order ${dish.name} on WhatsApp`}
    >
      {body}
    </a>
  );
}