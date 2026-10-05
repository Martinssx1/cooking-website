import { useContext, createContext } from "react";
import type { NavContextValue } from "./NavContext";

export const NavContext = createContext<NavContextValue | undefined>(undefined);

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used within a NavProvider");
  return ctx;
}
