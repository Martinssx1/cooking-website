import { DISHES, type Category } from "../utils/data";
import { Card } from "../extras/Card";

export function CategoryList({
  category,
  title,
  blurb,
}: {
  category: Category;
  title: string;
  blurb: string;
}) {
  const items = DISHES.filter((d) => d.category === category);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-10 text-center">
        <h1 className="mb-3 font-serif text-3xl font-semibold italic text-rust sm:text-4xl">
          {title}
        </h1>
        <p className="mx-auto max-w-md text-inksoft">{blurb}</p>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {items.map((dish) => (
          <Card key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
}
