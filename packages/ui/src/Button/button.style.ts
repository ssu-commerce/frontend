import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Color, Size, Variant } from "../types";
import { EColor, ESize } from "../constants";

interface IconProps {
  color: Color;
  size: Size;
  variant: Variant;
}

interface ButtonProps {
  color: Color;
  size: Size;
  variant: Variant;
  disabled?: boolean;
  fullWidth?: boolean;
}

const FontSize: Record<Size, string> = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
};

const LineHeight: Record<Size, string> = {
  xs: "16px",
  sm: "20px",
  md: "24px",
  lg: "28px",
  xl: "30px",
};

const MinWidth: Record<Size, string> = {
  xs: "24px",
  sm: "28px",
  md: "32px",
  lg: "36px",
  xl: "40px",
};

const Padding: Record<Size, string> = {
  xs: "4px 8px",
  sm: "4px 12px",
  md: "6px 16px",
  lg: "6px 20px",
  xl: "6px 24px",
};

const RegexPixel = /\d+px$/;

const calcPixel = (pixel: string, num: number): string => {
  if (RegexPixel.test(pixel)) {
    const size = Number(pixel.replace("px", ""));
    return size + num + "px";
  }
  return pixel;
};

export const Button = styled.button(
  ({ color: colorType, size, variant, disabled, fullWidth }: ButtonProps) => {
    const color = EColor[colorType];
    let variantColor = {
      color: "#ffffff",
      backgroundColor: "transparent",
      border: "0",
      padding: Padding[size],
    };

    switch (variant) {
      case "contained":
        variantColor = {
          ...variantColor,
          backgroundColor: color,
        };
        break;
      case "outlined":
        const [h, w] = Padding[size].split(" ");
        variantColor = {
          ...variantColor,
          backgroundColor: "#ffffff",
          color: color,
          border: `2px solid ${color}`,
          padding: `${calcPixel(h, -2)} ${calcPixel(w, -2)}`,
        };
        break;
      case "text":
        variantColor = {
          ...variantColor,
          color: color,
        };
        break;
    }

    return css`
      display: inline-flex;
      text-align: center;
      justify-content: center;
      align-items: center;

      gap: 2px;
      border-radius: 4px;
      font-size: ${FontSize[size]};
      line-height: ${LineHeight[size]};
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

export const Icon = styled.span(({ color, size, variant }: IconProps) => {
  return `
    display: flex;
    justify-content: center;
    alignitems: center;
    background-color: transparent;
    width: ${ESize[size]};
    height: ${ESize[size]};
    & * {
      fill: ${variant === "contained" ? "#ffffff" : EColor[color]}
    };
  `;
});
