"use client";

import {
  ForwardedRef,
  ReactElement,
  forwardRef,
  useRef,
  useState,
} from "react";
import { ColorKey, SizeKey } from "../constants";
import * as S from "./select.styles";
import type { SelectMenuProps, SelectProps } from "./select.types";

export const Select = forwardRef<HTMLInputElement, SelectProps>(function Select(
  {
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
  }: SelectProps,
  ref: ForwardedRef<HTMLInputElement>,
): ReactElement<SelectProps> {
  const [open, setOpen] = useState(false);

  const [selected, setSeleted] = useState<
    string | readonly string[] | number | undefined
  >(value);

  const previewText = selected ?? placeholder;

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const handleChangeSelectBox = (
    value: string | readonly string[] | number,
  ) => {
    onChange && onChange(value);
    setSeleted(value);
  };

  return (
    <S.Wrapper css={css} disabled={disabled}>
      <S.Select colorKey={color} sizeKey={size}>
        <S.Preview sizeKey={size}>{previewText}</S.Preview>
        <S.Input
          data-testid={testId}
          disabled={disabled}
          name={name}
          required={required}
          value={value}
          ref={ref}
          onClick={openMenu}
        />
      </S.Select>

      {open && (
        <SelectMenu
          items={items}
          size={size}
          close={closeMenu}
          onClick={handleChangeSelectBox}
        />
      )}
    </S.Wrapper>
  );
});

export const SelectMenu = ({
  items = [],
  size,
  onClick,
  close,
}: SelectMenuProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickItem = (value: string | readonly string[] | number) => {
    onClick(value);
    close();
  };

  const handleClickDimmed = () => {
    close();
  };

  return (
    <>
      <S.Dimmed onClick={handleClickDimmed} />
      <S.ListWrapper ref={ref}>
        <S.ListBox>
          {items.map(({ value, name }) => {
            return (
              <S.ListItem
                onClick={() => handleClickItem(value)}
                key={value}
                sizeKey={size}
              >
                {name}
              </S.ListItem>
            );
          })}
        </S.ListBox>
      </S.ListWrapper>
    </>
  );
};
