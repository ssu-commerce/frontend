import type { ForwardedRef, ReactElement } from "react";
import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../utils/class-name-merge";
import { COLOR, SIZE } from "../types";
import { RadioCheckedIcon, RadioUnCheckedIcon } from "../SVG";
import type { RadioProps } from "./radio.types";

const wrapperVariant = cva(
  "ui-rounded ui-inline-flex ui-gap-2 hover:ui-opacity-70 ui-cursor-pointer ui-text-center ui-justify-center ui-items-center ui-border-0 ui-relative",
  {
    variants: {
      size: {
        xs: "ui-text-xs ui-h-6 ui-min-w-6 ui-px-2",
        sm: "ui-text-sm ui-h-8 ui-min-w-8 ui-px-3",
        md: "ui-text-md ui-h-10 ui-min-w-10 ui-px-4",
        lg: "ui-text-lg ui-h-12 ui-min-w-12 ui-px-6",
        xl: "ui-text-xl ui-h-14 ui-min-w-14 ui-px-8",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

const inputVariant = cva(
  "ui-rounded ui-absolute ui-opacity-0 ui-cursor-pointer ",
  {
    variants: {
      color: {
        default: "ui-bg-default ui-border-default ui-text-default",
        primary: "ui-bg-primary ui-border-primary ui-text-primary",
        secondary: "ui-bg-secondary ui-border-secondary ui-text-secondary",
        error: "ui-bg-error ui-border-error ui-text-error",
        info: "ui-bg-info ui-border-info ui-text-info",
        success: "ui-bg-success ui-border-success ui-text-success",
        warning: "ui-bg-warning ui-border-warning ui-text-warning",
      },
      size: {
        xs: "ui-h-4 ui-w-4 ui-left-2",
        sm: "ui-h-5 ui-w-5 ui-left-3",
        md: "ui-h-6 ui-w-6 ui-left-4",
        lg: "ui-h-7 ui-w-7 ui-left-6",
        xl: "ui-h-8 ui-w-8 ui-left-8",
      },
    },
  },
);

const Radio = forwardRef<HTMLLabelElement, RadioProps>(function Radio(
  {
    checked,
    defaultChecked,
    disabled,
    color = "default",
    size = "sm",
    inputRef,
    inputProps,
    onChange,
    required,
    name,
    id,
    className,
    testId,
    children,
    selectedValue,
    value,
    ...props
  },
  ref: ForwardedRef<HTMLLabelElement>,
): ReactElement<RadioProps> {
  const isChecked = checked || selectedValue === value;
  return (
    <label
      ref={ref}
      {...props}
      className={cn(
        wrapperVariant({ size }),
        disabled &&
          "ui-opacity-30 hover:ui-opacity-30 foucs:ui-outline-blue-600 ui-cursor-not-allowed",
        className,
      )}
    >
      {isChecked ? (
        <RadioCheckedIcon color={COLOR[color]} size={SIZE[size]} />
      ) : (
        <RadioUnCheckedIcon color={COLOR[color]} size={SIZE[size]} />
      )}
      <input
        checked={isChecked}
        className={cn(
          inputVariant({ size }),
          disabled &&
            "ui-opacity-30 hover:ui-opacity-30 foucs:ui-outline-blue-600 ui-cursor-not-allowed",
          className,
        )}
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
      {children}
    </label>
  );
});

export { Radio };
