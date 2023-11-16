import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import { Config } from "tailwindcss/types";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        default: colors.gray["600"],
        primary: colors.amber["600"],
        secondary: colors.violet["600"],
        error: colors.red["600"],
        info: colors.gray["300"],
        success: colors.green["600"],
        warning: colors.yellow["300"],
      },
      spacing: {
        "1": "4px",
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
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        md: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "28px"],
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
