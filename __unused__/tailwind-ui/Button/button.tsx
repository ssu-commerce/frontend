import type { ForwardedRef, ReactElement, ReactNode } from "react";
import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../utils/class-name-merge";
import type { ButtonProps } from "./button.types";

const buttonVariant = cva(
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

const iconVariant = cva("", {
  variants: {
    size: {
      xs: "ui-w-4 ui-h-4",
      sm: "ui-w-5 ui-h-5",
      md: "ui-w-6 ui-h-6",
      lg: "ui-w-7 ui-h-7",
      xl: "ui-w-8 ui-h-8",
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

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
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
    variant = "contained",
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
        <span
          className={cn(
            iconVariant({ color, size, variant }),
            "ui-flex ui-justify-center ui-items-center",
          )}
        >
          {startIcon}
        </span>
      ) : null}
      {children}
      {endIcon ? (
        <span
          className={cn(
            iconVariant({ color, size, variant }),
            "ui-flex ui-justify-center ui-items-center",
          )}
        >
          {endIcon}
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <a
        className={cn(
          buttonVariant({ color, size, variant }),
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
