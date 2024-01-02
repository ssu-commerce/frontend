import type {
  HTMLAttributes,
  InputHTMLAttributes,
  RefObject,
  ReactNode,
  ChangeEventHandler,
  ReactElement,
} from "react";
import type { Action, Color, Size, Variant } from "../types";

export type RadioColor = Color;

export type RadioSize = Size;

export type RadioVariant = Variant;

export type RadioProps = Omit<HTMLAttributes<HTMLLabelElement>, "onChange"> &
  Partial<{
    checked: boolean;
    defaultChecked: boolean;
    disabled: boolean;
    color: RadioColor;
    size: RadioSize;
    testId: string;
    inputRef: RefObject<HTMLInputElement>;
    inputProps: InputHTMLAttributes<HTMLInputElement>;
    onChange: ChangeEventHandler<HTMLInputElement>;
    required: boolean;
    name: string;
    children: ReactNode;
    value: string | readonly string[] | number;
    selectedValue: string | readonly string[] | number;
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
