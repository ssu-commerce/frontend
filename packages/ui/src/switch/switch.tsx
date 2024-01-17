"use client";

import type { ForwardedRef, ReactElement } from "react";
import { forwardRef } from "react";
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
    css,
    ...props
  },
  ref: ForwardedRef<HTMLLabelElement>,
): ReactElement<SwitchProps> {
  return (
    <S.Label css={css} disabled={disabled} ref={ref} {...props}>
      <S.Switch sizeKey={size}>
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
        <S.Thumb checked={checked} colorKey={color} sizeKey={size} />
        <S.Track checked={checked} colorKey={color} sizeKey={size} />
      </S.Switch>
      {children ? <S.Content sizeKey={size}>{children}</S.Content> : null}
    </S.Label>
  );
});
