import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type { ColorKey, SizeKey } from "../constants";
import { Color, Size, VariantKey } from "../constants";
import { calcPixel } from "../utils/style";

const MinWidth: Record<SizeKey, string> = {
  xs: "24px",
  sm: "28px",
  md: "32px",
  lg: "36px",
  xl: "40px",
};

const Padding: Record<SizeKey, string> = {
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "10px",
  xl: "12px",
};

export const Button = styled.button(
  ({
    colorType,
    sizeType,
    variantType,
    disabled,
    fullWidth,
  }: {
    colorType: ColorKey;
    sizeType: SizeKey;
    variantType: VariantKey;
    disabled?: boolean;
    fullWidth?: boolean;
  }) => {
    const [h, w] = Size.Padding[sizeType].split(" ");

    let variantColor = {
      color: "#ffffff",
      backgroundColor: "transparent",
      border: "0",
      padding: Size.Padding[sizeType],
    };

    switch (variantType) {
      case VariantKey.Contained:
        variantColor = {
          ...variantColor,
          backgroundColor: Color.RGB[colorType],
        };
        break;
      case VariantKey.Outlined:
        variantColor = {
          ...variantColor,
          backgroundColor: "#ffffff",
          color: Color.RGB[colorType],
          border: `2px solid ${Color.RGB[colorType]}`,
          padding: `${calcPixel(h, -2)} ${calcPixel(w, -2)}`,
        };
        break;
      case VariantKey.Text:
        variantColor = {
          ...variantColor,
          color: Color.RGB[colorType],
          padding: Padding[sizeType],
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
      font-size: ${Size.FontSize[sizeType]};
      line-height: ${Size.LineHeight[sizeType]};
      min-width: ${MinWidth[sizeType]};
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

export const Icon = styled.span(
  ({
    colorType,
    sizeType,
    variantType,
  }: {
    colorType: ColorKey;
    sizeType: SizeKey;
    variantType: VariantKey;
  }) => {
    return `
    display: flex;
    justify-content: center;
    alignitems: center;
    background-colorType: transparent;
    width: ${Size.Pixel[sizeType]}px;
    height: ${Size.Pixel[sizeType]}px;
    & * {
      fill: ${
        variantType === VariantKey.Contained ? "#ffffff" : Color.RGB[colorType]
      }
    };
  `;
  },
);
