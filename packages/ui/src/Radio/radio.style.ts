import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Size } from "../constants";
import { RadioLabelProps } from "./radio.types";

export const Label = styled.label(({ size, disabled }: RadioLabelProps) => {
  return css`
    display: inline-flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: relative;

    gap: 4px;
    border-radius: 4px;
    border: 0;
    font-size: ${Size.FontSize[size]};
    line-height: ${Size.LineHeight[size]};

    cursor: pointer;
    ${disabled && {
      cursor: "not-allowed",
      opacity: 0.3,
    }}
  `;
});

export const Input = styled.input`
  appearance: none;
  position: absolute;
`;

export const GroupWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
