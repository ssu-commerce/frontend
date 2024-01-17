"use client";

import { useState } from "react";
import { ColorKey, SizeKey } from "../constants";
import * as S from "./select.styles";
import type { SelectProps } from "./select.types";
import { Portal } from "../portal";

export const Select = ({
  disabled = false,
  color = ColorKey.Default,
  size = SizeKey.SM,
  onChange,
  required,
  name,
  testId,
  value,
  css,
  placeholder,
  items = [],
  portalId,
}: SelectProps) => {
  const previewText = value ?? placeholder;

  const [open, setOpen] = useState(false);

  const handleClickSelectBox = () => {
    setOpen(!open);
  };

  const handleChangeSelectBox = (value: string) => {
    onChange && onChange(value);
  };

  return (
    <S.Wrapper css={css} disabled={disabled}>
      <S.Select onClick={handleClickSelectBox} colorKey={color} sizeKey={size}>
        <S.Preview sizeKey={size}>{previewText}</S.Preview>
        <S.Input
          data-testid={testId}
          disabled={disabled}
          name={name}
          required={required}
          value={value}
        />
      </S.Select>

      {open && (
        <Portal selector={portalId}>
          <S.ListWrapper>
            <S.ListBox>
              {items.map(({ value, name }) => {
                return (
                  <S.ListItem
                    onClick={() => handleChangeSelectBox(value)}
                    key={value}
                  >
                    {name}
                  </S.ListItem>
                );
              })}
            </S.ListBox>
          </S.ListWrapper>
        </Portal>
      )}
    </S.Wrapper>
  );
};
