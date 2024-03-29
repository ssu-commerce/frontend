import type { ChangeEventHandler } from "react";
import { forwardRef, useEffect, useRef, useState } from "react";
import { ColorKey, DirectionKey, SizeKey } from "../constants";
import { ArrowIcon } from "../svg";
import * as S from "./select.styles";
import type { SelectMenuProps, SelectProps, SelectValue } from "./select.types";

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
    loading,
  },
  ref,
) {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState<SelectValue>(value);

  useEffect(() => {
    if (value) setSelect(value);
  }, [value]);

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const handleChangeSelectBox = (selectedValue: SelectValue) => {
    setSelect(selectedValue);
    if (typeof onChange === "function") onChange(selectedValue);
  };

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSelect(e.target.value);
  };

  if (loading) return <S.Loading data-testid={testId} sizeKey={size} />;

  return (
    <S.Wrapper css={css}>
      <S.Select
        colorKey={color}
        disabled={disabled}
        onClick={openMenu}
        sizeKey={size}
      >
        <S.Preview sizeKey={size}>{select || placeholder}</S.Preview>
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
          onChange={handleChangeInput}
          ref={ref}
          required={required}
          type="text"
          value={select}
        />
      </S.Select>
      {open ? (
        <SelectMenu
          close={closeMenu}
          color={color}
          items={items}
          onChange={handleChangeSelectBox}
          selectedItem={value}
          size={size}
        />
      ) : null}
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

  const handleClickItem = (value: SelectValue) => {
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
                active={value === selectedItem}
                colorKey={color}
                key={value}
                onClick={() => {
                  handleClickItem(value);
                }}
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
