import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import { Config } from "tailwindcss/types";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        default: "#ff6b01",
        primary: "#959a9d",
        secondary: "#24282b",
        error: "#dc2626",
        info: "#d1d5db",
        success: "#16a34a",
        warning: "#fde047",
      },
      spacing: {
        "0.5": "2px",
        "1": "4px",
        "1.5": "6px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "7": "28px",
        "8": "32px",
        "9": "36px",
        "10": "40px",
        "11": "44px",
        "12": "48px",
        "13": "52px",
        "14": "56px",
      },
      // https://tailwindcss.com/docs/font-size
      fontSize: {
        XS: ["12px", "16px"],
        SM: ["14px", "20px"],
        MD: ["16px", "24px"],
        LG: ["18px", "28px"],
        XL: ["20px", "28px"],
        "2xl": ["24px", "32px"],
        "3xl": ["30px", "36px"],
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
