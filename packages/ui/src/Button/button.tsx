import type { ForwardedRef, ReactElement, ReactNode } from "react";
import { forwardRef } from "react";
import type { ClassNameValue } from "tailwind-merge";
// import { cva } from "class-variance-authority";
import type {
  ButtonColor,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from "./button.types";
import { cn } from "../Util/classNameMerge";

// export const buttonVariant = cva("", {
//   variants: {
//     color: {
//       default: ["ui-bg-gray-800"],
//       primary: { 0: "p-0", 2: "p-2", 4: "p-4", 8: "p-8" },
//       secondary: { 0: "p-0", 2: "p-2", 4: "p-4", 8: "p-8" },
//     },
//   },
//   defaultVariants: {
//     color: "default",
//   },
// });

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
  const buttonColor: Record<ButtonColor, Record<ButtonVariant, string>> = {
    default: {
      contained: "ui-bg-gray-800",
      outlined:
        "ui-text-gray-800 ui-border-gray-800 descendant:ui-fill-gray-800",
      text: "ui-text-gray-800 descendant:ui-fill-gray-800",
    },
    primary: {
      contained: "ui-bg-amber-600",
      outlined:
        "ui-text-amber-600 ui-border-amber-600 descendant:ui-fill-amber-600",
      text: "ui-text-amber-600 descendant:ui-fill-amber-600",
    },
    secondary: {
      contained: "ui-bg-amber-300",
      outlined:
        "ui-text-amber-300 ui-border-amber-300 descendant:ui-fill-amber-300",
      text: "ui-text-amber-300 descendant:ui-fill-amber-300",
    },
    error: {
      contained: "ui-bg-red-600",
      outlined: "ui-text-red-600 ui-border-red-600 descendant:ui-fill-red-600",
      text: "ui-text-red-600 descendant:ui-fill-red-600",
    },
    info: {
      contained: "ui-bg-gray-300",
      outlined:
        "ui-text-gray-300 ui-border-gray-300 descendant:ui-fill-gray-300",
      text: "ui-text-gray-300 descendant:ui-fill-gray-300",
    },
    success: {
      contained: "ui-bg-green-600",
      outlined:
        "ui-text-green-600 ui-border-green-600 descendant:ui-fill-green-600",
      text: "ui-text-green-600 descendant:ui-fill-green-600",
    },
    warning: {
      contained: "ui-bg-yellow-300",
      outlined:
        "ui-text-yellow-300 ui-border-yellow-300 descendant:ui-fill-yellow-300",
      text: "ui-text-yellow-300 descendant:ui-fill-yellow-300",
    },
  };
  const buttonCommonColor = {
    contained: "ui-text-white descendant:ui-fill-white",
    outlined: "ui-bg-white ui-border-2",
    text: "ui-bg-transparent",
  };

  const buttonSize: Record<ButtonSize, ClassNameValue> = {
    sm: "ui-text-sm ui-py-1 ui-px-1",
    md: "ui-text-md ui-py-1 ui-px-2",
    lg: "ui-text-lg ui-py-1 ui-px-3",
  };

  const iconSize: Record<ButtonSize, ClassNameValue> = {
    sm: "ui-w-5 ui-h-5",
    md: "ui-w-6 ui-h-6",
    lg: "ui-w-7 ui-h-7",
  };

  const classNames = cn(
    buttonColor[color][variant],
    buttonCommonColor[variant],
    buttonSize[size],
    disabled
      ? "ui-opacity-30 hover:ui-opacity-30 foucs:ui-outline-blue-800 ui-cursor-not-allowed"
      : "hover:ui-opacity-70 ui-cursor-pointer",
    fullWidth && "ui-w-full",
    "ui-rounded ui-inline-flex ui-gap-1",
    className,
  );

  const iconClassName = cn(iconSize[size]);

  const childrenNode = (): ReactNode => (
    <>
      {startIcon ? (
        <span className={iconClassName}>{startIcon({})}</span>
      ) : null}
      {children}
      {endIcon ? <span className={iconClassName}>{endIcon({})}</span> : null}
    </>
  );

  if (href) {
    return (
      <a
        className={classNames}
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
      className={classNames}
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
