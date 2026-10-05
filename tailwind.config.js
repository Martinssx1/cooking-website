/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF3E7",
        ink: "#2A1B12",
        inksoft: "#6B5644",
        rust: "#C1442D",
        rustdark: "#8C2A1A",
        palm: "#46603C",
        gold: "#B5790F",
        line: "#E7DCC9",
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ['"Work Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 24s linear infinite",
      },
    },
  },
  plugins: [],
};
