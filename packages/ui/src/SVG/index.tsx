import { ESize } from "../constants";
import { Size } from "../types";

export { CheckedIcon } from "./checked";
export { UnCheckedIcon } from "./unChecked";
export { RadioCheckedIcon } from "./radioChecked";
export { RadioUnCheckedIcon } from "./radioUnChecked";
export { ArrowIcon } from "./arrow";

export type SVGSize = Size | ESize;

export interface IconProps {
  color?: string;
  size?: SVGSize;
}

export enum DIRECTION {
  "top" = 0,
  "right" = 90,
  "bottom" = 180,
  "left" = 270,
}
