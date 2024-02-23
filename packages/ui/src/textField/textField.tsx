import { forwardRef } from "react";
import { ColorKey, SizeKey } from "../constants";
import type { TextFieldProps } from "./textField.types";
import * as S from "./textField.styles";

const TextField = forwardRef<HTMLDivElement, TextFieldProps>(function TextField(
  {
    color = ColorKey.Default,
    defaultValue,
    disabled,
    fullWidth,
    inputProps,
    inputRef,
    name,
    onChange,
    placeholder,
    required,
    size = SizeKey.SM,
    type = "text",
    value,
    testId,
    id,
    loading,
    css,
    ...props
  },
  ref,
) {
  if (loading)
    return (
      <S.Loading
        colorKey={color}
        data-testid={testId}
        disabled={disabled}
        sizeKey={size}
      />
    );

  return (
    <S.TextFieldWrapper
      colorKey={color}
      css={css}
      fullWidth={fullWidth}
      ref={ref}
      sizeKey={size}
      {...props}
    >
      <S.TextInput
        data-testid={testId}
        defaultValue={defaultValue}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        ref={inputRef}
        required={required}
        sizeKey={size}
        type={type}
        value={value}
        {...inputProps}
      />
    </S.TextFieldWrapper>
  );
});

export { TextField };
