import type { Dish } from "../utils/data";
import { Card } from "../extras/Card";

import { useRef } from "react";

export function CardRow({
  title,
  accent,
  items,
  id,
}: {
  /** Plain prefix, e.g. "The" or "Available". Omit for a single accented word like "Snacks". */
  title?: string;
  /** The word rendered italic and rust — the second part of the header. */
  accent: string;
  items: Dish[];
  id?: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id={id} className="scroll-mt-24 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
            {title ? `${title} ` : ""}
            <span className="italic text-rust">{accent}</span>
          </h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label={`Scroll ${title ?? accent} left`}
              className="flex h-9 w-9 items-center justify-center border border-line text-inksoft transition-colors hover:border-ink hover:text-ink"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label={`Scroll ${title ?? accent} right`}
              className="flex h-9 w-9 items-center justify-center border border-line text-inksoft transition-colors hover:border-ink hover:text-ink"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex scroll-smooth gap-5 overflow-x-auto pb-2 [scrollbar-width:none]"
        >
          {items.map((dish) => (
            <div key={dish.id} className="w-[72%] flex-none sm:w-64">
              <Card dish={dish} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
