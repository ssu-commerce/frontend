import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Color, ColorKey, Size, SizeKey } from "../constants";

export const Group = styled.div`
  display: flex;
  gap: 1px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: rgba(0, 0, 0, 0.12);
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
    return css`
      width: ${Size.Pixel[sizeKey]}px;
      height: ${Size.Pixel[sizeKey]}px;
      padding: ${Size.Padding[sizeKey]}px;

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
              backgroundColor: Color.Hex[colorKey],
              opacity: 0.7,
            },
          }}
    `;
  },
);
