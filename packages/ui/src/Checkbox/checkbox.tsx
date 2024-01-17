"use client";

import type { ForwardedRef, ReactElement } from "react";
import { forwardRef } from "react";
import { CheckedIcon, UnCheckedIcon } from "../svg";
import { Color, ColorKey, SizeKey } from "../constants";
import * as S from "./checkbox.styles";
import type { CheckboxProps } from "./checkbox.types";

const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(function Checkbox(
  {
    checked,
    defaultChecked,
    disabled,
    color = ColorKey.Default,
    size = SizeKey.SM,
    inputRef,
    inputProps,
    onChange,
    required,
    name,
    id,
    testId,
    value,
    children,
    css,
    ...props
  },
  ref: ForwardedRef<HTMLLabelElement>,
): ReactElement<CheckboxProps> {
  return (
    <S.Label css={css} disabled={disabled} ref={ref} sizeType={size} {...props}>
      <S.Input
        checked={checked}
        data-testid={testId}
        defaultChecked={defaultChecked}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        ref={inputRef}
        required={required}
        type="checkbox"
        value={value}
        {...inputProps}
      />
      {checked ? (
        <CheckedIcon color={Color.Hex[color]} size={size} />
      ) : (
        <UnCheckedIcon color={Color.Hex[color]} size={size} />
      )}
      <S.Content sizeType={size}>{children}</S.Content>
    </S.Label>
  );
});

export { Checkbox };
