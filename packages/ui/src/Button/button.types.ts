import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ComponentProps,
  FunctionComponent,
  ReactElement,
  ReactNode,
} from "react";
import type { Action, Color, Size, Variant } from "../types";

export type ButtonColor = Color;

export type ButtonSize = Size;

export type ButtonVariant = Variant;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  Partial<{
    color: ButtonColor;
    endIcon: ReactNode;
    fullWidth: boolean;
    href: string;
    size: ButtonSize;
    // startIcon: ReactElement & FunctionComponent<ComponentProps<"svg">>;
    startIcon: ReactNode;
    variant: ButtonVariant;
    testId: string;
  }>;

export type ButtonStyleProps = keyof ButtonProps & Action;
