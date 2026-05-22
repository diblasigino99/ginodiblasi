import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#171411",
        ink: "#211c18",
        espresso: "#4d3327",
        crema: "#f5ead8",
        parchment: "#cdbb9d",
        olive: "#59624c",
        brass: "#bd8c4a",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "Arial", "sans-serif"],
      },
      boxShadow: {
        cinematic: "0 30px 90px rgba(0, 0, 0, 0.38)",
      },
    },
  },
  plugins: [],
};

export default config;
