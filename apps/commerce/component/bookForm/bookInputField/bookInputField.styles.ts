"use client";

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LabelTitle = styled.span`
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  width: 100px;
`;

export const InputWrapper = styled.div(
  ({ width = "auto", flexGrow = 0 }: { width?: string; flexGrow?: number }) => {
    return `
        width: ${width};
        flex-grow: ${flexGrow};

        & > div {
            width: 100%;
        }
    `;
  },
);
