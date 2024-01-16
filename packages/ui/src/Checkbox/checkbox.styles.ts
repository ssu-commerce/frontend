import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Size } from "../constants";
import type { SizeKey  } from "../constants";

export const Label = styled.label(
  ({ disabled }: { sizeType: SizeKey; disabled?: boolean }) => {
    return css`
      display: inline-flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      position: relative;

      gap: 4px;
      border-radius: 4px;
      border: 0;

      cursor: pointer;
      ${disabled && {
        cursor: "not-allowed",
        opacity: 0.3,
      }}
    `;
  },
);

export const Content = styled.span(({ sizeType }: { sizeType: SizeKey }) => {
  return css`
    font-size: ${Size.FontSize[sizeType]};
    line-height: ${Size.LineHeight[sizeType]};
  `;
});

export const Input = styled.input`
  appearance: none;
  position: absolute;
`;
