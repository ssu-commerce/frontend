import type {
  ChangeEvent,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  RefObject,
  TextareaHTMLAttributes,
} from "react";
import type { Interpolation, Theme } from "@emotion/react";
import type { Action } from "../types";
import type { ColorKey, SizeKey } from "../constants";

export type TextFieldProps = HTMLAttributes<HTMLDivElement> &
  Partial<{
    autoFocus: boolean;
    color: ColorKey;
    defaultValue: string | readonly string[] | number;
    disabled: boolean;
    error: boolean;
    fullWidth: boolean;
    inputProps: InputHTMLAttributes<HTMLInputElement> &
      TextareaHTMLAttributes<HTMLTextAreaElement>;
    inputRef: RefObject<HTMLInputElement & HTMLTextAreaElement>;
    maxRows: number;
    minRows: number;
    multiline: boolean;
    name: string;
    onChange: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>;
    placeholder: string;
    required: boolean;
    rows: number;
    size: SizeKey;
    type: HTMLInputTypeAttribute;
    value: string | readonly string[] | number;
    testId: string;
    id: string;
    css: Interpolation<Theme>;
  }>;

export type TextFieldStyleProps = keyof TextFieldProps & Action;
