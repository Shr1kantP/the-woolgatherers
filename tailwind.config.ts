import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "hosts-plum": "#3F022F",
        "hosts-olive": "#5A5532",
        "hosts-orange": "#C86A1E",
        "hosts-maroon": "#5D1515",
        "hosts-mustard": "#FBCE6E",
        "hosts-cream": "#F5DFA0",
      },
    },
  },
  plugins: [],
};

export default config;
