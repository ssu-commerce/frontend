import type { ForwardedRef, ReactElement } from "react";
import { forwardRef } from "react";
import { CheckedIcon, UnCheckedIcon } from "../SVG";
import { Color, ColorKey, SizeKey } from "../constants";
import * as C from "./checkbox.style";
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
    ...props
  },
  ref: ForwardedRef<HTMLLabelElement>,
): ReactElement<CheckboxProps> {
  return (
    <C.Label ref={ref} {...props} disabled={disabled} size={size}>
      <C.Input
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
        <CheckedIcon color={Color.RGB[color]} size={size} />
      ) : (
        <UnCheckedIcon color={Color.RGB[color]} size={size} />
      )}
      {children}
    </C.Label>
  );
});

export { Checkbox };
