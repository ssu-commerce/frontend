import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Size } from "../constants";
import type { SizeKey } from "../constants";

export const Label = styled.label(
  ({ disabled }: { sizeKey: SizeKey; disabled?: boolean }) => {
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

export const Content = styled.span(({ sizeKey }: { sizeKey: SizeKey }) => {
  return css`
    font-size: ${Size.FontSize[sizeKey]};
    line-height: ${Size.LineHeight[sizeKey]};
  `;
});

export const Input = styled.input`
  appearance: none;
  position: absolute;
`;
