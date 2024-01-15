"use client";

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
    css,
    ...props
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
): ReactElement<ButtonProps> {
  const childrenNode = (): ReactNode => (
    <>
      {startIcon ? (
        <C.Icon colorType={color} sizeType={size} variantType={variant}>
          {startIcon}
        </C.Icon>
      ) : null}
      {children}
      {endIcon ? (
        <C.Icon colorType={color} sizeType={size} variantType={variant}>
          {endIcon}
        </C.Icon>
      ) : null}
    </>
  );

  if (href) {
    return (
      <C.Anchor
        as="a"
        colorType={color}
        css={css}
        data-testid={testId}
        fullWidth={fullWidth}
        href={href}
        ref={ref as LegacyRef<HTMLAnchorElement>}
        sizeType={size}
        target={target}
        variantType={variant}
        {...props}
      >
        {childrenNode()}
      </C.Anchor>
    );
  }

  return (
    <C.Button
      colorType={color}
      css={css}
      data-testid={testId}
      fullWidth={fullWidth}
      ref={ref}
      sizeType={size}
      type={type}
      variantType={variant}
      {...props}
    >
      {childrenNode()}
    </C.Button>
  );
});

export { Button };
