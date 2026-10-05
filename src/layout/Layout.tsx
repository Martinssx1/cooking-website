import { Outlet } from "react-router-dom";
import { NavProvider } from "../context/NavContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <NavProvider>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </NavProvider>
  );
}
