import type { HTMLAttributes, ReactNode } from "react";
import type { Interpolation, Theme } from "@emotion/react";
import type { ColorKey, SizeKey } from "../constants";
import type { Action } from "../types";

export interface SelectItems {
  value: string;
  name: string;
}

export type SelectValue = string | readonly string[] | number;

export type SelectProps = Omit<HTMLAttributes<HTMLLabelElement>, "onChange"> &
  Partial<{
    disabled: boolean;
    color: ColorKey;
    size: SizeKey;
    testId: string;
    placeholder: string;
    onChange: (value: SelectValue) => void;
    required: boolean;
    name: string;
    children: ReactNode;
    value: SelectValue;
    css: Interpolation<Theme>;
    items: SelectItems[];
    loading: boolean;
  }>;

export interface SelectMenuProps {
  items: SelectItems[];
  size: SizeKey;
  color: ColorKey;
  onChange: (value: SelectValue) => void;
  close: () => void;
  selectedItem: SelectValue;
}

export type SelectStyleProps = keyof SelectProps & Action;
