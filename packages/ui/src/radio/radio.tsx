import { forwardRef } from "react";
import { RadioCheckedIcon, RadioUnCheckedIcon } from "../svg";
import { Color, ColorKey, SizeKey } from "../constants";
import type { RadioProps } from "./radio.types";
import * as S from "./radio.styles";

const Radio = forwardRef<HTMLLabelElement, RadioProps>(function Radio(
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
    children,
    selectedValue,
    value,
    loading,
    ...props
  },
  ref,
) {
  const isChecked = checked || selectedValue === value;

  if (loading)
    return <S.Loading data-testid={testId} sizeKey={size} {...props} />;

  return (
    <S.Label disabled={disabled} ref={ref} sizeKey={size} {...props}>
      <S.Input
        checked={isChecked}
        data-testid={testId}
        defaultChecked={defaultChecked}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        ref={inputRef}
        required={required}
        type="radio"
        value={value}
        {...inputProps}
      />
      {isChecked ? (
        <RadioCheckedIcon color={Color.Hex[color]} size={size} />
      ) : (
        <RadioUnCheckedIcon color={Color.Hex[color]} size={size} />
      )}

      {children}
    </S.Label>
  );
});

export { Radio };
