import type {
  ChangeEvent,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  RefObject,
} from "react";
import type { Interpolation, Theme } from "@emotion/react";
import type { Action } from "../types";
import type { ColorKey, SizeKey } from "../constants";

export type TextFieldProps = Omit<HTMLAttributes<HTMLDivElement>, "onChange"> &
  Partial<{
    color: ColorKey;
    defaultValue: string | readonly string[] | number;
    disabled: boolean;
    error: boolean;
    fullWidth: boolean;
    inputProps: InputHTMLAttributes<HTMLInputElement>;
    inputRef: RefObject<HTMLInputElement>;
    name: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    required: boolean;
    size: SizeKey;
    type: HTMLInputTypeAttribute;
    value: string | readonly string[] | number;
    testId: string;
    id: string;
    loading: boolean;
    css: Interpolation<Theme>;
  }>;

export type TextFieldStyleProps = keyof TextFieldProps & Action;
