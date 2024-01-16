import type {
  HTMLAttributes,
  InputHTMLAttributes,
  RefObject,
  ReactNode,
  ChangeEventHandler,
} from "react";
import type { Interpolation, Theme } from "@emotion/react";
import type { ColorKey, SizeKey } from "../constants";
import type { Action } from "../types";

export type SelectProps = Omit<HTMLAttributes<HTMLLabelElement>, "onChange"> &
  Partial<{
    checked: boolean;
    defaultChecked: boolean;
    disabled: boolean;
    color: ColorKey;
    size: SizeKey;
    testId: string;
    inputRef: RefObject<HTMLInputElement>;
    inputProps: InputHTMLAttributes<HTMLInputElement>;
    onChange: ChangeEventHandler<HTMLInputElement>;
    required: boolean;
    name: string;
    children: ReactNode;
    value: string | readonly string[] | number;
    css: Interpolation<Theme>;
  }>;

export type SelectStyleProps = keyof SelectProps & Action;
