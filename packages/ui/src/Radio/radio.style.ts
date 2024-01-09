import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Size, SizeKey } from "../constants";

export const Label = styled.label(
  ({ sizeType, disabled }: { sizeType: SizeKey; disabled?: boolean }) => {
    return css`
      display: inline-flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      position: relative;

      gap: 4px;
      border-radius: 4px;
      border: 0;
      font-size: ${Size.FontSize[sizeType]};
      line-height: ${Size.LineHeight[sizeType]};

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

export const GroupWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
