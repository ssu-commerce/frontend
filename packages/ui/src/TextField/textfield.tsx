import type { ForwardedRef, ReactElement } from "react";
import { forwardRef } from "react";
import { ColorKey, SizeKey } from "../constants";
import type { TextFieldProps } from "./textfield.types";
import * as C from "./textfield.styles";

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
    css,
    ...props
  }: TextFieldProps,
  ref: ForwardedRef<HTMLDivElement>,
): ReactElement<TextFieldProps> {
  return (
    <C.TextFieldWrapper
      color={color}
      css={css}
      fullWidth={fullWidth}
      ref={ref}
      size={size}
      {...props}
    >
      <C.TextInput
        data-testid={testId}
        defaultValue={defaultValue}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        ref={inputRef}
        required={required}
        styleSize={size}
        type={type}
        value={value}
        {...inputProps}
      />
    </C.TextFieldWrapper>
  );
});

export { TextField };
