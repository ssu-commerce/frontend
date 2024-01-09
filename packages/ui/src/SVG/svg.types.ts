import type { SizeKey } from "../constants";

export type SVGSize = SizeKey | 16 | 20 | 24 | 28 | 32;

export interface IconProps {
  color?: string;
  size?: SVGSize;
}
