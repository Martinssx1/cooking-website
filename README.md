# Amaka's Kitchen

A Nigerian home-cooking storefront built with React, TypeScript, Tailwind CSS, and React Router. Frontend only — no backend, no payments; the goal is to get people to message or call to order.

---

## Tech stack

| Layer     | Tools                            |
| --------- | -------------------------------- |
| Framework | React + TypeScript (Vite)        |
| Styling   | Tailwind CSS                     |
| Routing   | React Router                     |
| State     | React Context API (`NavContext`) |

---

## Features

- Auto-sliding hero (every 3s) showing featured dishes with a "Grab the recipe" CTA
- Header that **hides while scrolling down, and reappears the moment you scroll up** — handled by `NavContext`, not a page-specific hack
- Four real pages via React Router: Home, Meals, Snacks, Recipes — not just anchor-scroll sections
- "Order now!" button in the nav and a WhatsApp + Call CTA band in the footer, both reading from one shared contact file
- Mobile menu with the same links and CTA, collapsed behind a hamburger
- Horizontal scrolling teaser rows on the homepage (The Latest / Meals / Snacks), full grids on each category page

---

## Getting started

```bash
npm create vite@latest maliks-kitchen -- --template react-ts
cd maiks-kitchen
npm install react-router-dom
npm install -D tailwindcss@3 postcss autoprefixer
```

## Project structure

```
src/
  context/
    NavContext.tsx       Scroll-direction visibility + mobile menu open state
  components/
    layout/
      Layout.tsx          Wraps every page: Navbar + <Outlet/> + Footer
      Navbar.tsx           Desktop nav, mobile menu, "Order now!" CTA
      Footer.tsx           CTA band ("Hungry already?") + dark footer
    Hero.tsx                Auto-sliding featured dishes
    Card.tsx                 Single photo + caption
    CardRow.tsx              Horizontal scroll row (used on the homepage)
    CategoryList.tsx         Full grid (used by Meals / Snacks / Recipes pages)
  pages/
    Home.tsx, Meals.tsx, Snacks.tsx, Recipes.tsx, NotFound.tsx
  data.ts                    All dish data + placeholder photos
  contact.ts                 WhatsApp link, phone, email — edit once, used everywhere
  App.tsx                    Route definitions
```

---

## Things to personalize before launch

1. **Contact details** — `src/contact.ts` holds the WhatsApp number, phone link, and email. Everything (nav button, footer CTA, footer contact column) reads from this one file.
2. **Photos** — `src/data.ts` uses [Lorem Picsum](https://picsum.photos) seeded placeholder photos so the layout has real images to work with. Replace any `photo('seed-name')` call with a real photo URL once you have one — nothing else needs to change.
3. **Dish list** — also in `data.ts`. Add, remove, or recategorize dishes; `Meals`, `Snacks`, and `Recipes` pages pull from this automatically.

---

## How the scroll-aware nav works

`NavContext` listens to `window.scroll` once, compares the current scroll position to the last one, and exposes a single `visible` boolean:

- Near the top of the page (`scrollY < 80`) → always visible
- Scrolling down → hidden
- Scrolling up, at any point → visible again

`Navbar.tsx` just reads that boolean and toggles a `translate-y` Tailwind class with a transition — no scroll logic lives in the component itself, so if you ever add a second header (e.g. on a future admin page) it can reuse the same context.

---

## Not included yet

- No cart, ordering flow, or payment — every "order" action is a WhatsApp/phone link, by design
- No CMS or backend — dish data is a static TypeScript file
- No individual recipe detail pages — Recipe cards are teasers; wire them to real pages or a blog later if needed
