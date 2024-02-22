import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import type { Interpolation, Theme } from "@emotion/react";
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
    css: Interpolation<Theme>;
    loading: boolean;
  }>;

export type ButtonStyleProps = keyof ButtonProps & Action;
