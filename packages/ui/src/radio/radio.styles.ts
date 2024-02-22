"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type { SizeKey } from "../constants";
import { Color, CustomKeyframe, Size } from "../constants";

export const Label = styled.label(
  ({ sizeKey, disabled }: { sizeKey: SizeKey; disabled?: boolean }) => {
    return css`
      display: inline-flex;
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

export const Loading = styled(Label)(({ sizeKey }) => {
  return css`
    min-height: ${Size.RecHeight[sizeKey]};
    background-color: ${Color.Hex.Loading};
    animation: ${CustomKeyframe.Loading} 2s ease-in-out 0.5s infinite;
    cursor: auto;
  `;
});
