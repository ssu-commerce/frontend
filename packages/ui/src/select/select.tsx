"use client";

import { useState, type ReactElement } from "react";
import { ColorKey, SizeKey } from "../constants";
import * as S from "./select.styles";
import type { SelectProps } from "./select.types";

export const Select = ({
  checked = false,
  defaultChecked,
  disabled = false,
  color = ColorKey.Default,
  size = SizeKey.SM,
  inputProps,
  onChange,
  required,
  name,
  id,
  testId,
  value,
  children,
  css,
  placeholder,
  item,
  ...props
}): ReactElement<SelectProps> => {
  const previewText = value ?? placeholder;

  const [open, setOpen] = useState(false);

  const handleClickSelectBox = () => {
    setOpen(!open);
  };

  return (
    <S.Wrapper css={css} disabled={disabled} {...props}>
      <S.Select>
        <S.Preview>{previewText}</S.Preview>
        <S.Input
          data-testid={testId}
          defaultChecked={defaultChecked}
          disabled={disabled}
          id={id}
          name={name}
          onChange={onChange}
          required={required}
          value={value}
        />
      </S.Select>

      {open && (
        <S.ListWrapper>
          <S.ListBox>
            {item.map(() => {
              return <S.ListItem key={value}></S.ListItem>;
            })}
          </S.ListBox>
        </S.ListWrapper>
      )}
    </S.Wrapper>
  );
};
