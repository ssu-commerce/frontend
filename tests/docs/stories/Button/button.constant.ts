import type {
  ButtonColor,
  ButtonVariant,
  ButtonSize,
  ButtonStyledProps,
} from "@sc/ui";

export const buttonColor: Record<ButtonColor, Record<ButtonVariant, string>> = {
  default: {
    contained: "ui-bg-gray-800",
    outlined: "ui-text-gray-800 ui-border-gray-800 descendant:ui-fill-gray-800",
    text: "ui-text-gray-800 descendant:ui-fill-gray-800",
  },
  primary: {
    contained: "ui-bg-amber-600",
    outlined:
      "ui-text-amber-600 ui-border-amber-600 descendant:ui-fill-amber-600",
    text: "ui-text-amber-600 descendant:ui-fill-amber-600",
  },
  secondary: {
    contained: "ui-bg-amber-300",
    outlined:
      "ui-text-amber-300 ui-border-amber-300 descendant:ui-fill-amber-300",
    text: "ui-text-amber-300 descendant:ui-fill-amber-300",
  },
  error: {
    contained: "ui-bg-red-600",
    outlined: "ui-text-red-600 ui-border-red-600 descendant:ui-fill-red-600",
    text: "ui-text-red-600 descendant:ui-fill-red-600",
  },
  info: {
    contained: "ui-bg-gray-300",
    outlined: "ui-text-gray-300 ui-border-gray-300 descendant:ui-fill-gray-300",
    text: "ui-text-gray-300 descendant:ui-fill-gray-300",
  },
  success: {
    contained: "ui-bg-green-600",
    outlined:
      "ui-text-green-600 ui-border-green-600 descendant:ui-fill-green-600",
    text: "ui-text-green-600 descendant:ui-fill-green-600",
  },
  warning: {
    contained: "ui-bg-yellow-300",
    outlined:
      "ui-text-yellow-300 ui-border-yellow-300 descendant:ui-fill-yellow-300",
    text: "ui-text-yellow-300 descendant:ui-fill-yellow-300",
  },
};
export const buttonCommonColor = {
  contained: "ui-text-white descendant:ui-fill-white",
  outlined: "ui-bg-white ui-border-2",
  text: "ui-bg-transparent",
};

export const buttonSize: Record<ButtonSize, string> = {
  sm: "ui-text-sm ui-py-1 ui-px-1",
  md: "ui-text-md ui-py-1 ui-px-2",
  lg: "ui-text-lg ui-py-1 ui-px-3",
};

export const iconSize: Record<ButtonSize, string> = {
  sm: "ui-w-5 ui-h-5",
  md: "ui-w-6 ui-h-6",
  lg: "ui-w-7 ui-h-7",
};

export const buttonStyledProps: Record<ButtonStyledProps, string> = {
  hover: "hover:ui-opacity-70 ui-cursor-pointer",
  disabled:
    "ui-opacity-30 hover:ui-opacity-30 foucs:ui-outline-blue-800 ui-cursor-not-allowed",
  fullWidth: "ui-w-full",
};
