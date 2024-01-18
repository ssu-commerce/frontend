import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type { SizeKey } from "../constants";
import { Size } from "../constants";

export const Label = styled.label(
  ({ sizeKey, disabled }: { sizeKey: SizeKey; disabled?: boolean }) => {
    return css`
      display: inline-flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      position: relative;

      gap: 4px;
      border-radius: 4px;
      border: 0;
      font-size: ${Size.FontSize[sizeKey]};
      line-height: ${Size.LineHeight[sizeKey]};

      cursor: pointer;
      ${disabled && {
        cursor: "not-allowed",
        opacity: 0.3,
      }}
    `;
  },
);

export const Input = styled.input`
  appearance: none;
  position: absolute;
`;

export const Group = styled.div`
  display: flex;
  gap: 8px;
`;
