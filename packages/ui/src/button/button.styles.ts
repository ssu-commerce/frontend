"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type { ColorKey, SizeKey } from "../constants";
import { Color, CustomKeyframe, Size, VariantKey } from "../constants";
import { calcPixel } from "../utils/style";

const MinWidth: Record<SizeKey, string> = {
  xs: "24px",
  sm: "28px",
  md: "32px",
  lg: "36px",
  xl: "40px",
};

export const Button = styled.button(
  ({
    colorKey,
    sizeKey,
    variantKey,
    disabled,
    fullWidth,
  }: {
    colorKey: ColorKey;
    sizeKey: SizeKey;
    variantKey: VariantKey;
    disabled?: boolean;
    fullWidth?: boolean;
  }) => {
    const [h, w] = Size.RecPadding[sizeKey].split(" ");

    let variantColor = {
      color: "#ffffff",
      backgroundColor: "transparent",
      border: "0",
      padding: Size.RecPadding[sizeKey],
    };

    switch (variantKey) {
      case VariantKey.Contained:
        variantColor = {
          ...variantColor,
          backgroundColor: Color.Hex[colorKey],
        };
        break;
      case VariantKey.Outlined:
        variantColor = {
          ...variantColor,
          backgroundColor: "#ffffff",
          color: Color.Hex[colorKey],
          border: `2px solid ${Color.Hex[colorKey]}`,
          padding: `${calcPixel(h, -2)} ${calcPixel(w, -2)}`,
        };
        break;
      case VariantKey.Text:
        variantColor = {
          ...variantColor,
          color: Color.Hex[colorKey],
          padding: Size.Padding[sizeKey],
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
      font-size: ${Size.FontSize[sizeKey]};
      line-height: ${Size.LineHeight[sizeKey]};
      min-width: ${MinWidth[sizeKey]};
      ${fullWidth && {
        width: "100%",
      }}

      cursor: pointer;
      ${variantColor}

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
    `;
  },
);

export const Anchor = Button.withComponent("a");

export const Icon = styled.span(
  ({
    colorKey,
    sizeKey,
    variantKey,
  }: {
    colorKey: ColorKey;
    sizeKey: SizeKey;
    variantKey: VariantKey;
  }) => {
    return `
    display: flex;
    justify-content: center;
    alignitems: center;
    background-colorKey: transparent;
    width: ${Size.Pixel[sizeKey]}px;
    height: ${Size.Pixel[sizeKey]}px;
    & * {
      fill: ${
        variantKey === VariantKey.Contained ? "#ffffff" : Color.Hex[colorKey]
      }
    };
  `;
  },
);

export const Loading = styled(Button)(({ sizeKey }) => {
  return css`
    width: 100%;
    min-height: ${Size.RecHeight[sizeKey]};
    background-color: ${Color.Hex.Loading};
    animation: ${CustomKeyframe.Loading} 2s ease-in-out 0.5s infinite;
    cursor: auto;
  `;
});
