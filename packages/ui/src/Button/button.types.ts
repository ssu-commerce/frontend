import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ComponentProps,
  FunctionComponent,
} from "react";

export type ButtonColor =
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonVariant = "contained" | "outlined" | "text";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    color?: ButtonColor;
    endIcon?: FunctionComponent<ComponentProps<"svg">>;
    fullWidth?: boolean;
    href?: string;
    size?: ButtonSize;
    startIcon?: FunctionComponent<ComponentProps<"svg">>;
    variant?: ButtonVariant;
    testId?: string;
  };

export type ButtonStyleProps = Partial<keyof ButtonProps> | "hover";
