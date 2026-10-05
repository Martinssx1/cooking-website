import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FEATURED } from "../utils/data";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % FEATURED.length),
      3000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[360px] overflow-hidden sm:h-[480px]">
      {FEATURED.map((dish, i) => (
        <div
          key={dish.id}
          className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "pointer-events-none opacity-0"}`}
        >
          <img
            src={dish.image}
            alt={dish.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white sm:bottom-10 sm:left-10">
            <h2 className="mb-4 font-serif text-3xl font-semibold sm:text-5xl">
              {dish.name}
            </h2>
            <Link
              to="/recipes"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
            >
              Grab the recipe →
            </Link>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 right-6 flex gap-1.5 sm:bottom-10 sm:right-10">
        {FEATURED.map((dish, i) => (
          <span
            key={dish.id}
            className={`h-[3px] w-6 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
