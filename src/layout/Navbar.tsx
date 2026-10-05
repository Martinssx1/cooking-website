import { NavLink, Link } from "react-router-dom";
import { useNav } from "../context/useNav";
import { WHATSAPP_LINK } from "../utils/contact";

// Meals and Snacks aren't separate pages — they're sections on the homepage,
// so these link to the homepage with a hash; Home.tsx scrolls to the
// matching section on load. Recipes is a real route.
const LINKS = [
  { to: "/", label: "Home", type: "route" as const },
  { to: "/#meals", label: "Meals", type: "hash" as const },
  { to: "/#snacks", label: "Snacks", type: "hash" as const },
  { to: "/recipes", label: "Recipes", type: "route" as const },
];

export function Navbar() {
  const { visible, mobileOpen, toggleMobile, closeMobile } = useNav();

  return (
    <header
      className={`sticky top-0 z-40 border-b border-line bg-cream/90 backdrop-blur transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          onClick={closeMobile}
          className="font-serif text-xl font-semibold"
        >
          Ola&apos;s <span className="italic text-rust">Kitchen</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-inksoft md:flex">
          {LINKS.map((l) =>
            l.type === "hash" ? (
              <Link
                key={l.to}
                to={l.to}
                className="transition-colors hover:text-rust active:text-rust"
              >
                {l.label}
              </Link>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `transition-colors active:text-rust ${isActive ? "text-rust" : "hover:text-rust"}`
                }
              >
                {l.label}
              </NavLink>
            ),
          )}
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-rust px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:inline-flex"
        >
          Order now!
        </a>

        <button
          type="button"
          onClick={toggleMobile}
          aria-label="Menu"
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="flex flex-col gap-4 border-t border-line bg-cream px-6 py-5 md:hidden">
          {LINKS.map((l) =>
            l.type === "hash" ? (
              <Link
                key={l.to}
                to={l.to}
                onClick={closeMobile}
                className="text-base font-medium text-inksoft transition-colors active:text-rust"
              >
                {l.label}
              </Link>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors active:text-rust ${isActive ? "text-rust" : "text-inksoft"}`
                }
              >
                {l.label}
              </NavLink>
            ),
          )}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-rust px-5 py-3 text-sm font-semibold text-white"
          >
            Order now!
          </a>
        </div>
      )}
    </header>
  );
}
