import type {
  ChangeEvent,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  RefObject,
  TextareaHTMLAttributes,
} from "react";
import type { Action, Color } from "../types";

// TODO: Omit등 Size override 필요
export type TextFieldSize = "sm" | "md" | "lg";

export type TextFieldColor = Color;

export type TextFieldProps = HTMLAttributes<HTMLDivElement> &
  Partial<{
    autoFocus: boolean;
    color: TextFieldColor;
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
    size: TextFieldSize;
    type: HTMLInputTypeAttribute;
    value: string | readonly string[] | number;
    testId: string;
  }>;

export type TextFieldStyleProps = keyof TextFieldProps & Action;
