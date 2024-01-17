import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Color, ColorKey, Size, SizeKey } from "../constants";

export const Wrapper = styled.div(({ disabled }: { disabled: boolean }) => {
  return css`
    width: 100%;
    position: relative;

    ${disabled && {
      cursor: "not-allowed",
      opacity: 0.3,
    }}
  `;
});

export const Select = styled.label(
  ({ colorKey, sizeKey }: { colorKey: ColorKey; sizeKey: SizeKey }) => {
    return css`
      min-width: 120px;
      display: flex;
      position: relative;
      padding: ${Size.RecPadding[sizeKey]};
      border: 2px solid rgba(0, 0, 0, 0.23);
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        border: 2px solid rgba(0, 0, 0, 0.7);
      }

      &:focus-within {
        border: 2px solid ${Color.RGB[colorKey]};
        opacity: 1;
      }
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
  box-sizing: border-box;
`;

export const ListWrapper = styled.div`
  z-index: 1;
  position: absolute;
  border-radius: 4px;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  opacity: 1;
  min-width: 120px;
  transition:
    opacity 267ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 178ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 5px 5px -3px,
    rgba(0, 0, 0, 0.14) 0px 8px 10px 1px,
    rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
`;

export const ListBox = styled.ul(() => {
  return css`
    display: flex;
    flex-direction: column;
  `;
});

export const ListItem = styled.li(({ sizeKey }: { sizeKey: SizeKey }) => {
  return css`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: ${Size.RecPadding[sizeKey]};
    font-size: ${Size.FontSize[sizeKey]};
    line-height: ${Size.LineHeight[sizeKey]};
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  `;
});

export const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
`;
