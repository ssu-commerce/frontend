import type {
  HTMLAttributes,
  InputHTMLAttributes,
  RefObject,
  ReactNode,
  ChangeEventHandler,
} from "react";
import type { ColorKey, SizeKey } from "../constants";
import type { Action } from "../types";

export type CheckboxProps = Omit<HTMLAttributes<HTMLLabelElement>, "onChange"> &
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
  }>;

export type CheckboxStyleProps = keyof CheckboxProps & Action;

export interface StyleLabelProps {
  size: SizeKey;
  disabled?: boolean;
}
