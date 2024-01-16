import { css } from "@emotion/react";
import styled from "@emotion/styled";
import type { ColorKey, SizeKey } from "../constants";
import { Color, Size } from "../constants";

export const Label = styled.label(({ disabled }: { disabled: boolean }) => {
  return css`
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 8px;
    ${disabled && {
      cursor: "not-allowed",
      opacity: 0.3,
    }}
  `;
});

export const Switch = styled.span(({ sizeType }: { sizeType: SizeKey }) => {
  return css`
    display: inline-flex;
    vertical-align: middle;
    overflow: hidden;
    padding: ${Size.Padding[sizeType]};
    position: relative;
  `;
});

export const Thumb = styled.span(
  ({
    sizeType,
    colorType,
    checked,
  }: {
    sizeType: SizeKey;
    colorType: ColorKey;
    checked: boolean;
  }) => {
    return css`
      z-index: 1;
      border-radius: 100%;
      box-shadow:
        0 2px 1px -1px rgba(0, 0, 0, 0.2),
        0 1px 1px 0 rgba(0, 0, 0, 0.14),
        0 1px 3px 0 rgba(0, 0, 0, 0.12);
      width: ${Size.Pixel[sizeType]}px;
      height: ${Size.Pixel[sizeType]}px;
      background-color: ${checked ? Color.RGB[colorType] : "#ffffff"};
      position: absolute;
      top: 50%;
      left: ${checked ? 100 : 0}%;
      transform: translate(${checked ? -100 : 0}%, -50%);
      transition:
        left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    `;
  },
);

export const Track = styled.span(
  ({
    sizeType,
    colorType,
    checked,
  }: {
    sizeType: SizeKey;
    colorType: ColorKey;
    checked: boolean;
  }) => {
    return css`
      height: ${Size.Pixel[sizeType] - 6}px;
      width: ${(Size.Pixel[sizeType] - 6) * 2.5}px;
      background-color: ${checked ? Color.RGB[colorType] : "#000"};
      opacity: ${checked ? 0.5 : 0.38};
      border-radius: 100px;
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
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  appearance: none;
`;
