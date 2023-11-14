import type {
  ButtonColor,
  ButtonVariant,
  ButtonSize,
  ButtonStyledProps,
} from "@sc/ui";

export const buttonColor: Record<ButtonColor, Record<ButtonVariant, string>> = {
  default: {
    contained: "ui-bg-default",
    outlined: "ui-text-default ui-border-default descendant:ui-fill-default",
    text: "ui-text-default descendant:ui-fill-default",
  },
  primary: {
    contained: "ui-bg-primary",
    outlined: "ui-text-primary ui-border-primary descendant:ui-fill-primary",
    text: "ui-text-primary descendant:ui-fill-primary",
  },
  secondary: {
    contained: "ui-bg-secondary",
    outlined:
      "ui-text-secondary ui-border-secondary descendant:ui-fill-secondary",
    text: "ui-text-secondary descendant:ui-fill-secondary",
  },
  error: {
    contained: "ui-bg-error",
    outlined: "ui-text-error ui-border-error descendant:ui-fill-error",
    text: "ui-text-error descendant:ui-fill-error",
  },
  info: {
    contained: "ui-bg-info",
    outlined: "ui-text-info ui-border-info descendant:ui-fill-info",
    text: "ui-text-info descendant:ui-fill-info",
  },
  success: {
    contained: "ui-bg-success",
    outlined: "ui-text-success ui-border-success descendant:ui-fill-success",
    text: "ui-text-success descendant:ui-fill-success",
  },
  warning: {
    contained: "ui-bg-warning",
    outlined: "ui-text-warning ui-border-warning descendant:ui-fill-warning",
    text: "ui-text-warning descendant:ui-fill-warning",
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
    "ui-opacity-30 hover:ui-opacity-30 foucs:ui-outline-blue-600 ui-cursor-not-allowed",
  fullWidth: "ui-w-full",
};
