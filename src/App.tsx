import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import NotFound from "./extras/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
