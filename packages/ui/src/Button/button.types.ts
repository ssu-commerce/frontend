import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Color, Size, Variant, Action } from "../types";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  Partial<{
    color: Color;
    endIcon: ReactNode;
    fullWidth: boolean;
    href: string;
    size: Size;
    startIcon: ReactNode;
    variant: Variant;
    testId: string;
  }>;

export type ButtonStyleProps = keyof ButtonProps & Action;
