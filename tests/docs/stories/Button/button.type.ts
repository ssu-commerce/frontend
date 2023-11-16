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

export const buttonStyle =
  "ui-rounded ui-inline-flex ui-gap-1 hover:ui-opacity-70 ui-cursor-pointer ui-text-center ui-justify-center ui-items-center ui-border-0";

export const buttonColor: Record<ButtonColor, Record<ButtonVariant, string>> = {
  default: {
    contained: "ui-bg-default",
    outlined: "ui-text-default ui-border-default",
    text: "ui-text-default",
  },
  primary: {
    contained: "ui-bg-primary",
    outlined: "ui-text-primary ui-border-primary",
    text: "ui-text-primary",
  },
  secondary: {
    contained: "ui-bg-secondary",
    outlined: "ui-text-secondary ui-border-secondary",
    text: "ui-text-secondary",
  },
  error: {
    contained: "ui-bg-error",
    outlined: "ui-text-error",
    text: "ui-text-error",
  },
  info: {
    contained: "ui-bg-info",
    outlined: "ui-text-info",
    text: "ui-text-info",
  },
  success: {
    contained: "ui-bg-success",
    outlined: "ui-text-success ui-border-success",
    text: "ui-text-success",
  },
  warning: {
    contained: "ui-bg-warning",
    outlined: "ui-text-warning ui-border-warning",
    text: "ui-text-warning",
  },
};
export const buttonCommonColor = {
  contained: "ui-text-white",
  outlined: "ui-bg-white ui-border-2",
  text: "ui-bg-transparent",
};

export const buttonSize: Record<ButtonSize, string> = {
  xs: "ui-text-xs ui-h-6 ui-min-w-6 ui-px-2",
  sm: "ui-text-sm ui-h-8 ui-min-w-8 ui-px-3",
  md: "ui-text-md ui-h-10 ui-min-w-10 ui-px-4",
  lg: "ui-text-lg ui-h-12 ui-min-w-12 ui-px-6",
  xl: "ui-text-xl ui-h-14 ui-min-w-14 ui-px-8",
};

export const iconSize: Record<ButtonSize, string> = {
  xs: "ui-w-4 ui-h-4",
  sm: "ui-w-5 ui-h-5",
  md: "ui-w-6 ui-h-6",
  lg: "ui-w-7 ui-h-7",
  xl: "ui-w-8 ui-h-8",
};

export const buttonStyleProps: Partial<Record<ButtonStyleProps, string>> = {
  hover: "hover:ui-opacity-70 ui-cursor-pointer",
  disabled:
    "ui-opacity-30 hover:ui-opacity-30 foucs:ui-outline-blue-600 ui-cursor-not-allowed",
  fullWidth: "ui-w-full",
};
