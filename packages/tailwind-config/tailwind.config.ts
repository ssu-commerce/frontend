import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      default: "#1fb6ff",
      primary: "#7e5bef",
      secondary: "#ff49db",
      error: "#ff7849",
      info: "#13ce66",
      success: "#ffc82c",
      warning: "#273444",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      textColor: {
        default: "#1fb6ff",
        primary: "#7e5bef",
        secondary: "#ff49db",
        error: "#ff7849",
        info: "#13ce66",
        success: "#ffc82c",
        warning: "#273444",
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  fontFamily: {
    pretendard: ["Pretendard", ...fontFamily.sans],
  },
  plugins: [],
};

export default config;
