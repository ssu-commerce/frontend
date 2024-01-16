import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Wrapper = styled.div(({ disabled }: { disabled: boolean }) => {
  return css`
    position: relative;
    cursor: pointer;

    ${disabled && {
      cursor: "not-allowed",
      opacity: 0.3,
    }}
  `;
});

export const Select = styled.div(() => {
  return css``;
});

export const Preview = styled.div(() => {
  return css``;
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
