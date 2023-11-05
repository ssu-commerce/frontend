import type { ForwardedRef, ReactElement } from "react";
import { forwardRef } from "react";
import type { ClassNameValue } from "tailwind-merge";
import { twMerge } from "tailwind-merge";
import type {
  ButtonColor,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from "./button.types";

const Button = forwardRef(function Button(
  {
    size = "lg",
    type = "button",
    variant = "text",
    color = "default",
    className,
    children,
    ...props
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
): ReactElement<ButtonProps> {
  const textColor: Record<ButtonColor, ClassNameValue> = {
    default: "ui-text-default",
    primary: "ui-text-primary",
    secondary: "ui-text-secondary",
    error: "ui-text-error",
    info: "ui-text-info",
    success: "ui-text-success",
    warning: "ui-text-warning",
  };

  const buttonVariant: Record<ButtonVariant, ClassNameValue> = {
    contained: "ui-border-0",
    outlined: "ui-border-2",
    text: "ui-border-0",
  };
  const buttonSize: Record<ButtonSize, ClassNameValue> = {
    sm: "ui-sm",
    md: "ui-md",
    lg: "ui-lg",
  };

  return (
    <button
      className={twMerge(
        textColor[color],
        buttonVariant[variant],
        buttonSize[size],
        className,
      )}
      type={type === "button" ? "button" : "submit"}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  );
});

export { Button };
