"use client";

import { forwardRef } from "react";
import type { ForwardedRef, LegacyRef, ReactElement, ReactNode } from "react";
import { ColorKey, SizeKey, VariantKey } from "../constants";
import type { ButtonProps } from "./button.types";
import * as C from "./button.styles";

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
    css,
    ...props
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
): ReactElement<ButtonProps> {
  const childrenNode = (): ReactNode => (
    <>
      {startIcon ? (
        <C.Icon colorKey={color} sizeKey={size} variantKey={variant}>
          {startIcon}
        </C.Icon>
      ) : null}
      {children}
      {endIcon ? (
        <C.Icon colorKey={color} sizeKey={size} variantKey={variant}>
          {endIcon}
        </C.Icon>
      ) : null}
    </>
  );

  if (href) {
    return (
      <C.Anchor
        as="a"
        colorKey={color}
        css={css}
        data-testid={testId}
        fullWidth={fullWidth}
        href={href}
        ref={ref as LegacyRef<HTMLAnchorElement>}
        sizeKey={size}
        target={target}
        variantKey={variant}
        {...props}
      >
        {childrenNode()}
      </C.Anchor>
    );
  }

  return (
    <C.Button
      colorKey={color}
      css={css}
      data-testid={testId}
      fullWidth={fullWidth}
      ref={ref}
      sizeKey={size}
      type={type}
      variantKey={variant}
      {...props}
    >
      {childrenNode()}
    </C.Button>
  );
});

export { Button };
