import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ComponentProps,
  FunctionComponent,
} from "react";
import type { Action, Color, Size, Variant } from "../types";

export type ButtonColor = Color;

export type ButtonSize = Size;

export type ButtonVariant = Variant;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  Partial<{
    color: ButtonColor;
    endIcon: FunctionComponent<ComponentProps<"svg">>;
    fullWidth: boolean;
    href: string;
    size: ButtonSize;
    startIcon: FunctionComponent<ComponentProps<"svg">>;
    variant: ButtonVariant;
    testId: string;
  }>;

export type ButtonStyleProps = Partial<keyof ButtonProps> | Action;
