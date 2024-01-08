import { forwardRef } from "react";
import type { ForwardedRef, LegacyRef, ReactElement, ReactNode } from "react";
import { ColorKey, SizeKey, VariantKey } from "../constants";
import type { ButtonProps } from "./button.types";
import * as C from "./button.style";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    color = ColorKey.Default,
    endIcon,
    fullWidth,
    href,
    size = SizeKey.SM,
    startIcon,
    variant = VariantKey.Contained,
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
        <C.Icon color={color} size={size} variant={variant}>
          {startIcon}
        </C.Icon>
      ) : null}
      {children}
      {endIcon ? (
        <C.Icon color={color} size={size} variant={variant}>
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
        data-testid={testId}
        fullWidth={fullWidth}
        href={href}
        ref={ref as LegacyRef<HTMLAnchorElement>}
        size={size}
        target={target}
        variant={variant}
        {...props}
      >
        {childrenNode()}
      </C.Anchor>
    );
  }

  return (
    <C.Button
      color={color}
      data-testid={testId}
      fullWidth={fullWidth}
      ref={ref}
      size={size}
      type={type}
      variant={variant}
      {...props}
    >
      {childrenNode()}
    </C.Button>
  );
});

export { Button };
