import { useEffect } from "react";
import { Hero } from "../layout/Hero";
import { CardRow } from "../extras/CardRow";
import { DISHES } from "../utils/data";

import { useLocation } from "react-router-dom";
import { Marquee } from "../layout/Marquee";

const LATEST = DISHES.filter((d) => [9, 10, 11, 12].includes(d.id));
const MEALS = DISHES.filter((d) => d.category === "Meals");
const SNACKS = DISHES.filter((d) => d.category === "Snacks");

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    el?.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  return (
    <div>
      <Hero />
      <Marquee />

      <section className="border-b border-line px-6 py-16 sm:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-[1.3fr_1fr] sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-rust">
              From Ola&apos;s Kitchen
            </p>
            <h1 className="font-serif text-4xl font-bold leading-[1.05] sm:text-6xl">
              What are you
              <br />
              <span className="italic text-rust">craving today?</span>
            </h1>
          </div>
          <div className="sm:pb-2">
            <p className="mb-4 text-inksoft">
              Home cooking, Nigerian classics, and new favorites made for
              sharing.
            </p>
            <div className="flex items-center gap-2 border border-line bg-white px-5 py-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4-4" />
              </svg>
              <input
                placeholder="Search rice, soup, snacks..."
                className="flex-1 bg-transparent text-sm outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      <CardRow title="The" accent="Latest" items={LATEST} />
      <CardRow id="meals" title="Available" accent="meals" items={MEALS} />
      <CardRow id="snacks" accent="Snacks" items={SNACKS} />
    </div>
  );
}
