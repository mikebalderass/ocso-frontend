import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#de2324",
          accent: "#f14243",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#fec630",
          accent: "#fec63010",
          foreground: "#ffffff",
        },
        background: {
          DEFAULT: "#f8f8ff",
          accent: "#f1f1f1",
          foreground: "#0a0a0a",
        },
        foreground: {
          DEFAULT: "#0a0a0a",
          accent: "#0a0a0a",
          foreground: "#f8f8ff",
        },
      },
    },
  },
  plugins: [nextui()],
};
export default config;
