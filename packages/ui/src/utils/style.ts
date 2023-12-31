import { REGEX } from "../constants/regex";

export const calcPixel = (pixel: string, num: number): string => {
  if (REGEX.PIXEL.test(pixel)) {
    const size = Number(pixel.replace("px", ""));
    return `${size + num}px`;
  }
  return pixel;
};
