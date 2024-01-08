import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import type { ColorKey, SizeKey, VariantKey } from "../constants";
import type { Action } from "../types";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  Partial<{
    color: ColorKey;
    endIcon: ReactNode;
    fullWidth: boolean;
    href: string;
    size: SizeKey;
    startIcon: ReactNode;
    variant: VariantKey;
    testId: string;
  }>;

export type ButtonStyleProps = keyof ButtonProps & Action;

export interface StyleIconProps {
  color: ColorKey;
  size: SizeKey;
  variant: VariantKey;
}

export interface StyleButtonProps {
  color: ColorKey;
  size: SizeKey;
  variant: VariantKey;
  disabled?: boolean;
  fullWidth?: boolean;
}
