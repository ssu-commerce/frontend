import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type { ColorKey, SizeKey } from "../constants";
import { Color, Size } from "../constants";
import { hexToRgba } from "../utils";

export const Wrapper = styled.div(() => {
  return css`
    width: 100%;
    position: relative;
  `;
});

export const Select = styled.label(
  ({
    colorKey,
    sizeKey,
    disabled,
  }: {
    colorKey: ColorKey;
    sizeKey: SizeKey;
    disabled: boolean;
  }) => {
    return css`
      min-width: ${Size.Pixel[sizeKey] * 8}px;
      display: flex;
      justify-content: space-between;
      position: relative;
      padding: ${Size.Padding[sizeKey]};
      border: 2px solid rgba(0, 0, 0, 0.23);
      border-radius: 4px;
      cursor: pointer;
      background-color: #ffffff;

      ${disabled
        ? {
            cursor: "not-allowed",
            opacity: 0.3,
          }
        : {
            "&:hover": {
              border: `2px solid rgba(0, 0, 0, 0.7)`,
            },
            "&:focus-within": {
              border: `2px solid ${Color.Hex[colorKey]}`,
              opacity: 1,
            },
          }}
    `;
  },
);

export const Preview = styled.div(({ sizeKey }: { sizeKey: SizeKey }) => {
  return css`
    width: 100%;
    outline: none;
    resize: none;
    border: 0;
    font-size: ${Size.FontSize[sizeKey]};
    line-height: ${Size.LineHeight[sizeKey]};
    height: ${Size.Pixel[sizeKey]}px;
    background-color: transparent;
    text-align: left;
    flex-shrink: 1;
  `;
});

export const Icon = styled.span(({ sizeKey }: { sizeKey: SizeKey }) => {
  return css`
    display: inline-flex;
    width: ${Size.Pixel[sizeKey]}px;
    height: ${Size.Pixel[sizeKey]}px;
    flex-shrink: 0;
  `;
});

export const Input = styled.input`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 100%;
`;

export const ListWrapper = styled.div`
  z-index: 101;
  position: absolute;
  border-radius: 4px;
  overflow: hidden;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  opacity: 1;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0 5px 5px -3px,
    rgba(0, 0, 0, 0.14) 0 8px 10px 1px,
    rgba(0, 0, 0, 0.12) 0 3px 14px 2px;
`;

export const ListBox = styled.ul(() => {
  return css`
    display: flex;
    padding: 12px 0;

    flex-direction: column;
    background-color: #ffffff;
  `;
});

export const ListItem = styled.li(
  ({
    sizeKey,
    colorKey,
    active,
  }: {
    sizeKey: SizeKey;
    colorKey: ColorKey;
    active: boolean;
  }) => {
    return css`
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: ${Size.Padding[sizeKey]};
      font-size: ${Size.FontSize[sizeKey]};
      line-height: ${Size.LineHeight[sizeKey]};

      &:hover {
        background-color: #f8f9fa;
      }

      ${active && {
        backgroundColor: hexToRgba(Color.Hex[colorKey], 0.3),

        "&:hover": {
          backgroundColor: hexToRgba(Color.Hex[colorKey], 0.3),
        },
      }}
    `;
  },
);

export const Dimmed = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
`;
