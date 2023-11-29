import type { ForwardedRef, ReactElement } from "react";
import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import type { Size } from "@sc/shared/icons/svg";
import { CheckIcon, UnCheckIcon } from "@sc/shared/icons/svg";
import { cn } from "../utils/class-name-merge";
import type {
  CheckboxColor,
  CheckboxProps,
  CheckboxSize,
} from "./checkbox.types";

const COLOR: Record<CheckboxColor, string> = {
  default: "#ff6b01",
  primary: "#959a9d",
  secondary: "#24282b",
  error: "#dc2626",
  info: "#d1d5db",
  success: "#16a34a",
  warning: "#fde047",
};

const SIZE: Record<CheckboxSize, Size> = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
};

const wrapperVariant = cva(
  "ui-rounded ui-inline-flex ui-gap-2 hover:ui-opacity-70 ui-cursor-pointer ui-text-center ui-justify-center ui-items-center ui-border-0 ui-relative",
  {
    variants: {
      // color: {
      //   default: "ui-bg-default ui-border-default ui-text-default",
      //   primary: "ui-bg-primary ui-border-primary ui-text-primary",
      //   secondary: "ui-bg-secondary ui-border-secondary ui-text-secondary",
      //   error: "ui-bg-error ui-border-error ui-text-error",
      //   info: "ui-bg-info ui-border-info ui-text-info",
      //   success: "ui-bg-success ui-border-success ui-text-success",
      //   warning: "ui-bg-warning ui-border-warning ui-text-warning",
      // },
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

const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(function Checkbox(
  {
    checked,
    defaultChecked,
    disabled,
    color,
    size,
    inputRef,
    inputProps,
    onChange,
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
        wrapperVariant({ size }),
        disabled &&
          "ui-opacity-30 hover:ui-opacity-30 foucs:ui-outline-blue-600 ui-cursor-not-allowed",
        className,
      )}
    >
      {checked ? (
        <CheckIcon
          color={COLOR[color ?? "default"]}
          size={SIZE[size ?? "sm"]}
        />
      ) : (
        <UnCheckIcon
          color={COLOR[color ?? "default"]}
          size={SIZE[size ?? "sm"]}
        />
      )}
      <input
        checked={checked}
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
        type="checkbox"
        {...inputProps}
      />
      {children}
    </label>
  );
});

export { Checkbox };
