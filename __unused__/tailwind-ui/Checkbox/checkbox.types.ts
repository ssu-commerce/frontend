import type {
  HTMLAttributes,
  InputHTMLAttributes,
  RefObject,
  ReactNode,
  ChangeEventHandler,
} from "react";
import type { Action, Color, Size, Variant } from "../types";

export type CheckboxColor = Color;

export type CheckboxSize = Size;

export type CheckboxVariant = Variant;

export type CheckboxProps = Omit<HTMLAttributes<HTMLLabelElement>, "onChange"> &
  Partial<{
    checked: boolean;
    defaultChecked: boolean;
    disabled: boolean;
    color: CheckboxColor;
    size: CheckboxSize;
    testId: string;
    inputRef: RefObject<HTMLInputElement>;
    inputProps: InputHTMLAttributes<HTMLInputElement>;
    onChange: ChangeEventHandler<HTMLInputElement>;
    required: boolean;
    name: string;
    children: ReactNode;
    value: string | readonly string[] | number;
  }>;

export type CheckboxStyleProps = keyof CheckboxProps & Action;
