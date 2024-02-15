import type {
  ChangeEvent,
  HTMLAttributes,
  RefObject,
  TextareaHTMLAttributes,
} from "react";
import type { Interpolation, Theme } from "@emotion/react";
import type { Action } from "../types";
import type { ColorKey, SizeKey } from "../constants";

export type TextAreaProps = Omit<HTMLAttributes<HTMLDivElement>, "onChange"> &
  Partial<{
    autoFocus: boolean;
    color: ColorKey;
    defaultValue: string | readonly string[] | number;
    disabled: boolean;
    error: boolean;
    fullWidth: boolean;
    inputProps: TextareaHTMLAttributes<HTMLTextAreaElement>;
    inputRef: RefObject<HTMLTextAreaElement>;
    maxRows: number;
    minRows: number;
    multiline: boolean;
    name: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder: string;
    required: boolean;
    rows: number;
    size: SizeKey;
    value: string | readonly string[] | number;
    testId: string;
    id: string;
    css: Interpolation<Theme>;
  }>;

export type TextAreaStyleProps = keyof TextAreaProps & Action;
