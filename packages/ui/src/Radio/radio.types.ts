import type {
  HTMLAttributes,
  InputHTMLAttributes,
  RefObject,
  ReactNode,
  ChangeEventHandler,
  ReactElement,
} from "react";
import type { Interpolation, Theme } from "@emotion/react";
import type { Action } from "../types";
import type { ColorKey, SizeKey } from "../constants";

export type RadioProps = Omit<HTMLAttributes<HTMLLabelElement>, "onChange"> &
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
    selectedValue: string | readonly string[] | number;
    css: Interpolation<Theme>;
  }>;

export type RadioGroupProps = Omit<
  RadioProps,
  "onChange" | "value" | "ReactNode"
> & {
  onChange: (value: string | readonly string[] | number) => void;
  value: string | readonly string[] | number;
  children: ReactElement<RadioProps>[];
};

export type RadioStyleProps = keyof RadioProps & Action;
