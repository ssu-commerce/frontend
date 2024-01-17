"use client";

import {
  ForwardedRef,
  ReactElement,
  forwardRef,
  useRef,
  useState,
} from "react";
import { ColorKey, DirectionKey, SizeKey } from "../constants";
import * as S from "./select.styles";
import type { SelectMenuProps, SelectProps } from "./select.types";
import { ArrowIcon } from "../svg";

export const Select = forwardRef<HTMLInputElement, SelectProps>(function Select(
  {
    disabled = false,
    color = ColorKey.Default,
    size = SizeKey.SM,
    onChange,
    required,
    name,
    testId,
    value = "",
    css,
    placeholder,
    items = [],
  }: SelectProps,
  ref: ForwardedRef<HTMLInputElement>,
): ReactElement<SelectProps> {
  const [open, setOpen] = useState(false);

  const [selectedItem, setSeletedItem] = useState<
    string | readonly string[] | number
  >(value);

  const previewText = selectedItem ?? placeholder;

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const handleChangeSelectBox = (
    value: string | readonly string[] | number,
  ) => {
    setSeletedItem(value);
    onChange && onChange(value);
  };

  return (
    <S.Wrapper css={css}>
      <S.Select colorKey={color} sizeKey={size} disabled={disabled}>
        <S.Preview sizeKey={size}>{previewText}</S.Preview>
        <S.Icon sizeKey={size}>
          <ArrowIcon
            direction={open ? DirectionKey.Top : DirectionKey.Bottom}
            size={size}
          />
        </S.Icon>
        <S.Input
          data-testid={testId}
          disabled={disabled}
          name={name}
          required={required}
          defaultValue={selectedItem}
          ref={ref}
          onClick={openMenu}
          type="text"
        />
      </S.Select>

      {open && (
        <SelectMenu
          items={items}
          size={size}
          color={color}
          close={closeMenu}
          onChange={handleChangeSelectBox}
          selectedItem={selectedItem}
        />
      )}
    </S.Wrapper>
  );
});

export const SelectMenu = ({
  items = [],
  size,
  color,
  onChange,
  close,
  selectedItem,
}: SelectMenuProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickItem = (value: string | readonly string[] | number) => {
    if (value !== selectedItem) onChange(value);
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
                colorKey={color}
                active={value === selectedItem}
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
