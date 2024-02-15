import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type { ColorKey, SizeKey } from "../constants";
import { Color, CustomKeyframe, Size } from "../constants";

const MinWidth: Record<SizeKey, string> = {
  xs: "24px",
  sm: "28px",
  md: "32px",
  lg: "36px",
  xl: "40px",
};

export const TextFieldWrapper = styled.div(
  ({
    colorKey,
    sizeKey,
    fullWidth,
  }: {
    colorKey: ColorKey;
    sizeKey: SizeKey;
    disabled?: boolean;
    fullWidth?: boolean;
  }) => {
    return css`
      display: inline-flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      position: relative;

      gap: 4px;
      border-radius: 4px;
      border: 2px solid #e2e8f9;
      height: fit-content;
      min-width: ${MinWidth[sizeKey]};
      cursor: pointer;

      background-color: #f1f5f9;
      &:hover {
        background-color: #ffffff;
      }

      &:focus-within {
        background-color: #ffffff;
        border: 2px solid ${Color.Hex[colorKey]};
      }

      &:has(input:disabled),
      &:has(textarea:disabled) {
        cursor: not-allowed;
        opacity: 0.3;
        &:hover {
          background-color: #f1f5f9;
        }
      }

      ${fullWidth && {
        width: "100%",
      }}
    `;
  },
);

export const TextareaWrapper = styled(TextFieldWrapper)(() => {
  return css`
    height: fit-content;
    position: relative;
  `;
});

export const TextInput = styled.input(({ sizeKey }: { sizeKey: SizeKey }) => {
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

export const Textarea = TextInput.withComponent("textarea");

export const HiddenTextarea = styled.textarea(() => {
  return css`
    visibility: hidden;
    height: fit-content;
    position: absolute;
    inset: 0;
  `;
});

export const Loading = styled(TextFieldWrapper)(({
  sizeKey,
}: {
  sizeKey: SizeKey;
}) => {
  return css`
    width: 100%;
    min-height: ${Size.RecHeight[sizeKey]};
    background-color: ${Color.Hex.Loading};
    animation: ${CustomKeyframe.Loading} 2s ease-in-out 0.5s infinite;
    cursor: auto;
    border: 0;
    &:hover {
      background-color: ${Color.Hex.Loading};
    }
  `;
});
