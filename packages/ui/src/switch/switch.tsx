"use client";

import type { ChangeEventHandler } from "react";
import { forwardRef, useEffect, useState } from "react";
import { ColorKey, SizeKey } from "../constants";
import * as S from "./switch.styles";
import type { SwitchProps } from "./switch.types";

export const Switch = forwardRef<HTMLLabelElement, SwitchProps>(function Switch(
  {
    checked = false,
    defaultChecked,
    disabled = false,
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
    loading,
    css,
    ...props
  },
  ref,
) {
  const [check, setCheck] = useState(checked);

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  if (loading)
    return (
      <S.Loading data-testid={testId} disabled={disabled} sizeKey={size} />
    );

  const handleChangeCheckbox: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCheck(e.target.checked);
    if (typeof onChange === "function") onChange(e);
  };

  return (
    <S.Label css={css} disabled={disabled} ref={ref} {...props}>
      <S.Switch sizeKey={size}>
        <S.Input
          checked={check}
          data-testid={testId}
          defaultChecked={defaultChecked}
          disabled={disabled}
          id={id}
          name={name}
          onChange={handleChangeCheckbox}
          readOnly={!onChange}
          ref={inputRef}
          required={required}
          type="checkbox"
          value={value}
          {...inputProps}
        />
        <S.Thumb checked={check} colorKey={color} sizeKey={size} />
        <S.Track checked={check} colorKey={color} sizeKey={size} />
      </S.Switch>
      {children ? <S.Content sizeKey={size}>{children}</S.Content> : null}
    </S.Label>
  );
});
