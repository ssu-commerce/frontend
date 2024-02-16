"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type { SizeKey } from "../constants";
import { Color, CustomKeyframe, Size } from "../constants";

export const Label = styled.label(
  ({ sizeKey, disabled }: { sizeKey: SizeKey; disabled?: boolean }) => {
    return css`
      display: inline-flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      position: relative;
      padding: ${Size.RecPadding[sizeKey]};

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

export const Loading = styled(Label)(({ sizeKey }) => {
  return css`
    width: 100%;
    min-height: ${Size.RecHeight[sizeKey]};
    background-color: ${Color.Hex.Loading};
    animation: ${CustomKeyframe.Loading} 2s ease-in-out 0.5s infinite;
    cursor: auto;
  `;
});
