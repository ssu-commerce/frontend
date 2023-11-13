import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ComponentProps,
  FunctionComponent,
} from "react";
import type { ColorType, SizeType } from "../Types";

export type ButtonColor = ColorType;

export type ButtonVariant = "contained" | "outlined" | "text";

export type ButtonSize = SizeType;

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

export type ButtonStyledProps = Partial<keyof ButtonProps> | "hover";

export const styledList: ButtonStyledProps[] = [
  "disabled",
  "fullWidth",
  "hover",
];

export const variantList: ButtonVariant[] = ["contained", "outlined", "text"];

export const colorList: ColorType[] = [
  "default",
  "primary",
  "secondary",
  "error",
  "info",
  "success",
  "warning",
];
