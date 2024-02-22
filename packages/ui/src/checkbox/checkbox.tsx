import { forwardRef } from "react";
import { CheckedIcon, UnCheckedIcon } from "../svg";
import { Color, ColorKey, SizeKey } from "../constants";
import * as S from "./checkbox.styles";
import type { CheckboxProps } from "./checkbox.types";

const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(function Checkbox(
  {
    checked,
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
    loading = false,
    ...props
  },
  ref,
) {
  if (loading)
    return (
      <S.Loading data-testid={testId} disabled={disabled} sizeKey={size} />
    );

  return (
    <S.Label css={css} disabled={disabled} ref={ref} sizeKey={size} {...props}>
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
      <>
        {checked ? (
          <CheckedIcon color={Color.Hex[color]} size={size} />
        ) : (
          <UnCheckedIcon color={Color.Hex[color]} size={size} />
        )}
        <S.Content sizeKey={size}>{children}</S.Content>
      </>
    </S.Label>
  );
});

export { Checkbox };
