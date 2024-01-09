import type {
  HTMLAttributes,
  InputHTMLAttributes,
  RefObject,
  ReactNode,
  ChangeEventHandler,
  ReactElement,
} from "react";
import type { Action } from "../types";
import { ColorKey, SizeKey } from "../constants";

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
    value: string | ReadonlyArray<string> | number;
    selectedValue: string | ReadonlyArray<string> | number;
  }>;

export type RadioGroupProps = Omit<
  RadioProps,
  "onChange" | "value" | "ReactNode"
> & {
  onChange: (value: string | ReadonlyArray<string> | number) => void;
  value: string | ReadonlyArray<string> | number;
  children: ReactElement<RadioProps>[];
};

export type RadioStyleProps = keyof RadioProps & Action;
