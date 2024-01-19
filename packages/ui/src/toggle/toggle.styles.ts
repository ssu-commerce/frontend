import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Color, ColorKey, Size, SizeKey } from "../constants";
import { hexToRgba } from "../utils";

export const Group = styled.div`
  display: inline-flex;
  gap: 1px;
  border-radius: 4px;
`;

export const Button = styled.button(
  ({
    active,
    disabled,
    colorKey,
    sizeKey,
  }: {
    active: boolean;
    disabled: boolean;
    colorKey: ColorKey;
    sizeKey: SizeKey;
  }) => {
    const activeOpacity = active ? 0.08 : 0;
    return css`
      display: inline-flex;
      justify-content: center;
      align-items: center;
      position: relative;
      outline: 0;
      min-width: ${Size.Pixel[sizeKey]}px;
      min-height: ${Size.Pixel[sizeKey]}px;
      padding: ${Size.Padding[sizeKey]};
      font-size: ${Size.FontSize[sizeKey]};
      line-height: ${Size.LineHeight[sizeKey]};
      border: 1px solid rgba(0, 0, 0, 0.12);
      cursor: pointer;

      &:first-of-type {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      &:not(:first-of-type) {
        left: -1px;
        border-left: 1px solid transparent;
        margin-left: -1px;
      }

      background-color: ${hexToRgba(Color.Hex[colorKey], 0 + activeOpacity)};

      ${disabled
        ? {
            cursor: "not-allowed",
            opacity: 0.3,
            "&:hover, &:active": {
              opacity: 0.3,
            },
          }
        : {
            "&:hover": {
              backgroundColor: hexToRgba(
                Color.Hex[colorKey],
                0.04 + activeOpacity,
              ),
            },
            "&:active": {
              backgroundColor: hexToRgba(Color.Hex[colorKey], 0.2),
            },
          }};
    `;
  },
);
