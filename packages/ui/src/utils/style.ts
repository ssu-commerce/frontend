import { REGEX } from "../constants";

export const calcPixel = (pixel: string, num: number): string => {
  if (REGEX.PIXEL.test(pixel)) {
    const size = Number(pixel.replace("px", ""));
    return `${size + num}px`;
  }
  return pixel;
};

export const hexToRgba = (hex: string, opacity: number) => {
  // Remove the hash if it exists
  hex = hex.replace(/^#/, "");

  // Parse the hex values for red, green, and blue
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Return the RGBA string
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
