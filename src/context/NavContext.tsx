import { useEffect, useState, type ReactNode } from "react";
import { NavContext } from "./useNav";

export interface NavContextValue {
  /** True = header is shown. False while actively scrolling down. */
  visible: boolean;
  mobileOpen: boolean;
  toggleMobile: () => void;
  closeMobile: () => void;
}

export function NavProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const scrollingDown = y > lastY;

      // Always show near the very top of the page, and any time the
      // user scrolls up. Hide only while actively scrolling down.
      setVisible(y < 80 || !scrollingDown);
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <NavContext.Provider
      value={{
        visible,
        mobileOpen,
        toggleMobile: () => setMobileOpen((open) => !open),
        closeMobile: () => setMobileOpen(false),
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

/** Read or control the header's visibility / mobile menu from any component. */
