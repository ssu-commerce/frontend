import type { HTMLAttributes, ReactNode } from "react";
import type { Interpolation, Theme } from "@emotion/react";
import type { ColorKey, SizeKey } from "../constants";
import type { Action } from "../types";

export interface SelectItems {
  value: string;
  name: string;
}

export type SelectProps = Omit<HTMLAttributes<HTMLLabelElement>, "onChange"> &
  Partial<{
    disabled: boolean;
    color: ColorKey;
    size: SizeKey;
    testId: string;
    placeholder: string;
    onChange: (value: string) => void;
    required: boolean;
    name: string;
    children: ReactNode;
    value: string | readonly string[] | number;
    css: Interpolation<Theme>;
    items: SelectItems[];
  }> & {
    portalId: string;
  };

export type SelectStyleProps = keyof SelectProps & Action;
