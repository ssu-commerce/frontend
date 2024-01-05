import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twColors = [
  "default",
  "primary",
  "secondary",
  "error",
  "info",
  "success",
  "warning",
];

const customTwMerge = extendTailwindMerge({
  prefix: "ui-",
  extend: {
    theme: {
      spacing: ["sm", "md", "lg", "xl"],
      colors: twColors.map((color) => ({
        color: [color],
      })),
    },
  },
});

export const cn = (...classes: ClassValue[]): string =>
  customTwMerge(clsx(...classes));
