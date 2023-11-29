import type { ForwardedRef, ReactElement } from "react";
import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../utils/class-name-merge";
import type { CheckboxProps } from "./checkbox.types";

const wrapperVariant = cva(
  "ui-rounded ui-inline-flex ui-gap-1 hover:ui-opacity-70 ui-cursor-pointer ui-text-center ui-justify-center ui-items-center ui-border-0",
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
      variant: {
        contained: "ui-text-white",
        outlined: "ui-bg-white  ui-border-2",
        text: "ui-bg-transparent",
      },
      size: {
        xs: "ui-text-xs ui-h-6 ui-min-w-6 ui-px-2",
        sm: "ui-text-sm ui-h-8 ui-min-w-8 ui-px-3",
        md: "ui-text-md ui-h-10 ui-min-w-10 ui-px-4",
        lg: "ui-text-lg ui-h-12 ui-min-w-12 ui-px-6",
        xl: "ui-text-xl ui-h-14 ui-min-w-14 ui-px-8",
      },
    },
    defaultVariants: {
      color: "default",
      variant: "contained",
      size: "sm",
    },
  },
);

const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(function Checkbox(
  {
    checked,
    defaultChecked,
    disabled,
    color,
    size,
    variant,
    inputRef,
    inputProps,
    onClick,
    required,
    name,
    id,
    className,
    testId,
    children,
    ...props
  },
  ref: ForwardedRef<HTMLLabelElement>,
): ReactElement<CheckboxProps> {
  return (
    <label
      ref={ref}
      {...props}
      className={cn(
        wrapperVariant({ color, size, variant }),
        disabled &&
          "ui-opacity-30 hover:ui-opacity-30 foucs:ui-outline-blue-600 ui-cursor-not-allowed",
        className,
      )}
    >
      <input
        checked={checked}
        data-testid={testId}
        defaultChecked={defaultChecked}
        disabled={disabled}
        id={id}
        name={name}
        onClick={onClick}
        ref={inputRef}
        required={required}
        type="checkbox"
        {...inputProps}
      />
      {children}
    </label>
  );
});

export { Checkbox };
