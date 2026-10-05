import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-28 text-center">
      <h1 className="mb-3 font-serif text-4xl font-semibold">Page not found</h1>
      <p className="mb-8 text-inksoft">
        That page doesn&apos;t exist, or may have moved.
      </p>
      <Link
        to="/"
        className="rounded-full bg-rust px-6 py-3 text-sm font-semibold text-white"
      >
        Back to home
      </Link>
    </div>
  );
}
