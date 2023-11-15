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
  size: ["sm", "md", "lg"],
};

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
  sm: "ui-text-sm ui-py-1 ui-px-1",
  md: "ui-text-md ui-py-1 ui-px-2",
  lg: "ui-text-lg ui-py-1 ui-px-3",
};

export const iconSize: Record<ButtonSize, string> = {
  sm: "ui-w-5 ui-h-5",
  md: "ui-w-6 ui-h-6",
  lg: "ui-w-7 ui-h-7",
};

export const buttonStyleProps: Record<ButtonStyleProps, string> = {
  hover: "hover:ui-opacity-70 ui-cursor-pointer",
  disabled:
    "ui-opacity-30 hover:ui-opacity-30 foucs:ui-outline-blue-600 ui-cursor-not-allowed",
  fullWidth: "ui-w-full",
};
