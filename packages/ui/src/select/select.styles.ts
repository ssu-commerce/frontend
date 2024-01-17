import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Color, ColorKey, Size, SizeKey } from "../constants";

export const Wrapper = styled.label(({ disabled }: { disabled: boolean }) => {
  return css`
    position: relative;
    cursor: pointer;

    ${disabled && {
      cursor: "not-allowed",
      opacity: 0.3,
    }}
  `;
});

export const Select = styled.div(
  ({ colorKey, sizeKey }: { colorKey: ColorKey; sizeKey: SizeKey }) => {
    return css`
      padding: ${Size.Padding[sizeKey]};
      border: 1px solid #000000;
      border-radius: 4px;

      &:hover {
        opacity: 0.23;
      }

      &:focus {
        border: 1px solid ${Color.RGB[colorKey]};
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
    padding: ${Size.RecPadding[sizeKey]};

    background-color: transparent;

    &:disabled {
      cursor: not-allowed;
    }
  `;
});

export const Input = styled.input`
  bottom: 0;
  left: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 100%;
  box-sizing: border-box;
`;

export const ListWrapper = styled.div`
  opacity: 1;
  transform: none;
  min-width: 120px;
  transition:
    opacity 267ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 178ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  top: 436px;
  left: 302px;
  transform-origin: 60px 0px;
`;

export const ListBox = styled.ul(() => {
  return css`
    display: flex;
    flex-direction: column;
  `;
});

export const ListItem = styled.li(() => {
  return css``;
});
