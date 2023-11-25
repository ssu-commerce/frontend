import type {
  ButtonColor,
  ButtonVariant,
  ButtonSize,
  ButtonStyleProps,
} from "@sc/ui";

export const buttonCompoundArgs: {
  color: ButtonColor[];
  variant: ButtonVariant[];
  size: ButtonSize[];
} = {
  color: [
    "default",
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
  ],
  variant: ["contained", "outlined", "text"],
  size: ["xs", "sm", "md", "lg", "xl"],
};

export const buttonStyleProps: Partial<Record<ButtonStyleProps, string>> = {
  hover: "hover:ui-opacity-70 ui-cursor-pointer",
  disabled:
    "ui-opacity-30 hover:ui-opacity-30 foucs:ui-outline-blue-600 ui-cursor-not-allowed",
  fullWidth: "ui-w-full",
};
