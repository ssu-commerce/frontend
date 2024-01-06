import type { ForwardedRef, LegacyRef, ReactElement, ReactNode } from "react";
import { forwardRef } from "react";
import type { ButtonProps } from "./button.types";
import * as C from "./button.style";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    className,
    color = "default",
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
        <C.Icon size={size} variant={variant} color={color}>
          {startIcon}
        </C.Icon>
      ) : null}
      {children}
      {endIcon ? (
        <C.Icon size={size} variant={variant} color={color}>
          {endIcon}
        </C.Icon>
      ) : null}
    </>
  );

  if (href) {
    return (
      <C.Anchor
        as="a"
        color={color}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        data-testid={testId}
        href={href}
        target={target}
        ref={ref as LegacyRef<HTMLAnchorElement>}
        {...props}
      >
        {childrenNode()}
      </C.Anchor>
    );
  }

  return (
    <C.Button
      color={color}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      data-testid={testId}
      ref={ref}
      {...props}
    >
      {childrenNode()}
    </C.Button>
  );
});

export { Button };
