import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type { SizeKey } from "../constants";
import { Color, Size, VariantKey } from "../constants";
import { calcPixel } from "../utils/style";
import type { StyleButtonProps, StyleIconProps } from "./button.types";

const MinWidth: Record<SizeKey, string> = {
  xs: "24px",
  sm: "28px",
  md: "32px",
  lg: "36px",
  xl: "40px",
};

export const Button = styled.button(
  ({
    color: colorType,
    size,
    variant,
    disabled,
    fullWidth,
  }: StyleButtonProps) => {
    const color = Color.RGB[colorType];
    const [h, w] = Size.Padding[size].split(" ");

    let variantColor = {
      color: "#ffffff",
      backgroundColor: "transparent",
      border: "0",
      padding: Size.Padding[size],
    };

    switch (variant) {
      case VariantKey.Contained:
        variantColor = {
          ...variantColor,
          backgroundColor: color,
        };
        break;
      case VariantKey.Outlined:
        variantColor = {
          ...variantColor,
          backgroundColor: "#ffffff",
          color,
          border: `2px solid ${color}`,
          padding: `${calcPixel(h, -2)} ${calcPixel(w, -2)}`,
        };
        break;
      case VariantKey.Text:
        variantColor = {
          ...variantColor,
          color,
        };
        break;
      default:
        break;
    }

    return css`
      display: inline-flex;
      text-align: center;
      justify-content: center;
      align-items: center;

      gap: 8px;
      border-radius: 4px;
      font-size: ${Size.FontSize[size]};
      line-height: ${Size.LineHeight[size]};
      min-width: ${MinWidth[size]};
      ${fullWidth && {
        width: "100%",
      }}

      cursor: pointer;
      ${disabled
        ? {
            cursor: "not-allowed",
            opacity: 0.3,
            "&:hover": {
              opacity: 0.3,
            },
          }
        : {
            "&:hover": {
              opacity: 0.7,
            },
          }}
      ${variantColor}
    `;
  },
);

export const Anchor = Button.withComponent("a");

export const Icon = styled.span(({ color, size, variant }: StyleIconProps) => {
  return `
    display: flex;
    justify-content: center;
    alignitems: center;
    background-color: transparent;
    width: ${Size.Pixel[size]}px;
    height: ${Size.Pixel[size]}px;
    & * {
      fill: ${variant === VariantKey.Contained ? "#ffffff" : Color.RGB[color]}
    };
  `;
});
