import type { ForwardedRef, ReactElement, ReactNode } from "react";
import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../utils/class-name-merge";
import type { ButtonProps } from "./button.types";

export const buttonVariant = cva(
  "ui-rounded ui-inline-flex ui-gap-1 hover:ui-opacity-70 ui-cursor-pointer ui-border-2 ",
  {
    variants: {
      color: {
        default:
          "ui-bg-default ui-border-default descendant:ui-fill-default ui-text-default",
        primary:
          "ui-bg-primary ui-border-primary descendant:ui-fill-primary ui-text-primary",
        secondary:
          "ui-bg-secondary ui-border-secondary descendant:ui-fill-secondary ui-text-secondary",
        error:
          "ui-bg-error ui-border-error descendant:ui-fill-error ui-text-error",
        info: "ui-bg-info ui-border-info  descendant:ui-fill-info ui-text-info",
        success:
          "ui-bg-success ui-border-success descendant:ui-fill-success ui-text-success",
        warning:
          "ui-bg-warning ui-border-warning descendant:ui-fill-warning ui-text-warning",
      },
      variant: {
        contained: "descendant:ui-fill-white ui-text-white",
        outlined: "ui-bg-white ",
        text: "ui-bg-transparent ui-border-transparent",
      },
      size: {
        sm: "ui-text-sm ui-py-1 ui-px-1",
        md: "ui-text-md ui-py-1 ui-px-2",
        lg: "ui-text-lg ui-py-1 ui-px-3",
      },
    },
    defaultVariants: {
      color: "default",
    },
  },
);

export const iconVariant = cva("", {
  variants: {
    size: {
      sm: "ui-w-5 ui-h-5",
      md: "ui-w-6 ui-h-6",
      lg: "ui-w-7 ui-h-7",
    },
    color: {
      default: "descendant:ui-fill-default",
      primary: "descendant:ui-fill-primary",
      secondary: "descendant:ui-fill-secondary",
      error: "descendant:ui-fill-error",
      info: "descendant:ui-fill-info",
      success: "descendant:ui-fill-success",
      warning: "descendant:ui-fill-warning",
    },
    variant: {
      contained: "descendant:ui-fill-white",
      outlined: "",
      text: "",
    },
  },
});

const Button = forwardRef(function Button(
  {
    children,
    className,
    color = "default",
    disabled,
    endIcon,
    fullWidth,
    href,
    size = "sm",
    startIcon,
    variant = "text",
    type = "button",
    target = "_self",
    testId,
    ...props
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
): ReactElement<ButtonProps> {
  const childrenNode = (): ReactNode => (
    <>
      {startIcon ? (
        <span className={cn(iconVariant({ color, size, variant }))}>
          {startIcon({})}
        </span>
      ) : null}
      {children}
      {endIcon ? (
        <span className={cn(iconVariant({ color, size, variant }))}>
          {endIcon({})}
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <a
        className={cn(
          buttonVariant({ color, variant, size }),
          disabled &&
            "ui-opacity-30 hover:ui-opacity-30 foucs:ui-outline-blue-600 ui-cursor-not-allowed",
          fullWidth && "ui-w-full",
          className,
        )}
        data-testid={testId}
        href={href}
        target={target}
        {...props}
        ref={ref as ForwardedRef<HTMLAnchorElement>}
      >
        {childrenNode()}
      </a>
    );
  }

  return (
    <button
      className={cn(
        buttonVariant({ color, variant, size }),
        disabled &&
          "ui-opacity-30 hover:ui-opacity-30 foucs:ui-outline-blue-600 ui-cursor-not-allowed",
        fullWidth && "ui-w-full",
        className,
      )}
      data-testid={testId}
      type={type === "button" ? "button" : "submit"}
      {...props}
      ref={ref}
    >
      {childrenNode()}
    </button>
  );
});

export { Button };
