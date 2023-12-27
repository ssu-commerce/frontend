export { CheckedIcon } from "./checked";
export { UnCheckedIcon } from "./unChecked";
export { RadioCheckedIcon } from "./radioChecked";
export { RadioUnCheckedIcon } from "./radioUnChecked";
export { ArrowIcon } from "./arrow";

export type Color = string;
export type Size = 16 | 20 | 24 | 28 | 32 | "xs" | "sm" | "md" | "lg" | "xl";

export interface IconProps {
  color?: Color;
  size?: Size;
}

export enum DIRECTION {
  "top" = 0,
  "right" = 90,
  "bottom" = 180,
  "left" = 270,
}
