import type { ChangeEventHandler } from "react";
import { forwardRef, useEffect, useState } from "react";
import { CheckedIcon, UnCheckedIcon } from "../svg";
import { Color, ColorKey, SizeKey } from "../constants";
import * as S from "./checkbox.styles";
import type { CheckboxProps } from "./checkbox.types";

const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(function Checkbox(
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
    loading = false,
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
    <S.Label css={css} disabled={disabled} ref={ref} sizeKey={size} {...props}>
      <S.Input
        checked={check}
        data-testid={testId}
        defaultChecked={defaultChecked}
        disabled={disabled}
        id={id}
        name={name}
        onChange={handleChangeCheckbox}
        ref={inputRef}
        required={required}
        type="checkbox"
        value={value}
        {...inputProps}
      />
      <>
        {check ? (
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
