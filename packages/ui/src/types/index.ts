import { EVariant, EColor, ESize } from "../constants";

export type Action = "hover" | "focus";

export type Variant = keyof typeof EVariant;

export type Color = keyof typeof EColor;

export type Size = keyof typeof ESize;
