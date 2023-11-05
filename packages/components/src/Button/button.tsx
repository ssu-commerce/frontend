import type { ForwardedRef, ReactElement, ReactNode } from "react";
import { forwardRef } from "react";
import type { ClassNameValue } from "tailwind-merge";
import { cn } from "../Util/classNameMerge";
import type {
  ButtonColor,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from "./button.types";

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
    ...props
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
): ReactElement<ButtonProps> {
  const buttonColor: Record<ButtonColor, Record<ButtonVariant, string>> = {
    default: {
      contained: "sc-bg-gray-800",
      outlined:
        "sc-text-gray-800 sc-border-gray-800 descendant:sc-fill-gray-800",
      text: "sc-text-gray-800 descendant:sc-fill-gray-800",
    },
    primary: {
      contained: "sc-bg-amber-600",
      outlined:
        "sc-text-amber-600 sc-border-amber-600 descendant:sc-fill-amber-600",
      text: "sc-text-amber-600 descendant:sc-fill-amber-600",
    },
    secondary: {
      contained: "sc-bg-amber-300",
      outlined:
        "sc-text-amber-300 sc-border-amber-300 descendant:sc-fill-amber-300",
      text: "sc-text-amber-300 descendant:sc-fill-amber-300",
    },
    error: {
      contained: "sc-bg-red-600",
      outlined: "sc-text-red-600 sc-border-red-600 descendant:sc-fill-red-600",
      text: "sc-text-red-600 descendant:sc-fill-red-600",
    },
    info: {
      contained: "sc-bg-gray-300",
      outlined:
        "sc-text-gray-300 sc-border-gray-300 descendant:sc-fill-gray-300",
      text: "sc-text-gray-300 descendant:sc-fill-gray-300",
    },
    success: {
      contained: "sc-bg-green-600",
      outlined:
        "sc-text-green-600 sc-border-green-600 descendant:sc-fill-green-600",
      text: "sc-text-green-600 descendant:sc-fill-green-600",
    },
    warning: {
      contained: "sc-bg-yellow-300",
      outlined:
        "sc-text-yellow-300 sc-border-yellow-300 descendant:sc-fill-yellow-300",
      text: "sc-text-yellow-300 descendant:sc-fill-yellow-300",
    },
  };
  const buttonCommonColor = {
    contained: "sc-text-white descendant:sc-fill-white",
    outlined: "sc-bg-white sc-border-2",
    text: "sc-bg-transparent",
  };

  const buttonSize: Record<ButtonSize, ClassNameValue> = {
    sm: "sc-text-sm sc-py-1 sc-px-1",
    md: "sc-text-md sc-py-1 sc-px-2",
    lg: "sc-text-lg sc-py-1 sc-px-3",
  };

  const iconSize: Record<ButtonSize, ClassNameValue> = {
    sm: "sc-w-5 sc-h-5",
    md: "sc-w-6 sc-h-6",
    lg: "sc-w-7 sc-h-7",
  };

  const classNames = cn(
    buttonColor[color][variant],
    buttonCommonColor[variant],
    buttonSize[size],
    disabled
      ? "sc-opacity-30 hover:sc-opacity-30 foucs:sc-outline-blue-800 sc-cursor-not-allowed"
      : "hover:sc-opacity-70 sc-cursor-pointer",
    fullWidth && "sc-w-full",
    "sc-rounded sc-inline-flex sc-gap-1",
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
      type={type === "button" ? "button" : "submit"}
      {...props}
      ref={ref}
    >
      {childrenNode()}
    </button>
  );
});

export { Button };
