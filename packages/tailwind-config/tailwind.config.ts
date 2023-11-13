import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      fontSize: {
        sm: ["14px", "20px"],
        md: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
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
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("descendant", "& *");
      addVariant("child", "& > *");
    }),
  ],
};

export default config;
