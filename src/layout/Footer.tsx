import { Link } from "react-router-dom";
import {
  EMAIL,
  PHONE_LINK,
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
} from "../utils/contact";

export function Footer() {
  return (
    <footer>
      <section className="bg-rust px-6 py-16 text-center text-white">
        <h2 className="mb-4 font-serif text-3xl font-semibold sm:text-4xl">
          Hungry already?
        </h2>
        <p className="mx-auto mb-8 max-w-md text-white/90">
          We&apos;re one message away. Tell us what you&apos;re craving and
          we&apos;ll sort you out.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 3.5A11.8 11.8 0 0012 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.7c1.7.9 3.6 1.4 5.7 1.4 6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.1-3.4-8.3zM12 21.5c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.8 1 1-3.7-.2-.4A9.5 9.5 0 012.5 12C2.5 6.8 6.8 2.5 12 2.5S21.5 6.8 21.5 12 17.2 21.5 12 21.5z" />
            </svg>
            Message on WhatsApp
          </a>
          <a
            href={PHONE_LINK}
            className="inline-flex items-center gap-2 rounded-full border border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.2z" />
            </svg>
            Call Now
          </a>
        </div>
      </section>

      <section className="bg-ink px-6 py-12 text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
          <div>
            <p className="mb-2 font-serif text-xl font-semibold text-gold">
              Ola&apos;s Kitchen
            </p>
            <p className="text-sm text-cream/70">
              Nigerian home cooking, made to order.
            </p>
          </div>
          <div>
            <p className="mb-3 font-semibold">Quick Links</p>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>
                <Link to="/meals" className="hover:text-cream">
                  Meals
                </Link>
              </li>
              <li>
                <Link to="/snacks" className="hover:text-cream">
                  Snacks
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="hover:text-cream">
                  Recipes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold">Contact</p>
            <p className="text-sm text-cream/70">WhatsApp: {WHATSAPP_NUMBER}</p>
            <p className="text-sm text-cream/70">Email: {EMAIL}</p>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-cream/50">
          © {new Date().getFullYear()} Amaka&apos;s Kitchen
        </p>
      </section>
    </footer>
  );
}
