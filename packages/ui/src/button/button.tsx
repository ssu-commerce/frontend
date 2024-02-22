import { forwardRef } from "react";
import type { LegacyRef, ReactNode } from "react";
import { ColorKey, SizeKey, VariantKey } from "../constants";
import type { ButtonProps } from "./button.types";
import * as S from "./button.styles";

const Button = forwardRef<HTMLButtonElement | HTMLLinkElement, ButtonProps>(
  function Button(
    {
      children,
      color = ColorKey.Default,
      endIcon,
      fullWidth = false,
      href,
      size = SizeKey.SM,
      startIcon,
      variant = VariantKey.Contained,
      type = "button",
      target = "_self",
      testId,
      css,
      loading = false,
      disabled = false,
      ...props
    },
    ref,
  ) {
    const childrenNode = (): ReactNode => (
      <>
        {startIcon ? (
          <S.Icon colorKey={color} sizeKey={size} variantKey={variant}>
            {startIcon}
          </S.Icon>
        ) : null}
        {children}
        {endIcon ? (
          <S.Icon colorKey={color} sizeKey={size} variantKey={variant}>
            {endIcon}
          </S.Icon>
        ) : null}
      </>
    );

    if (loading)
      return (
        <S.Loading
          colorKey={color}
          data-testid={testId}
          disabled={disabled}
          fullWidth={fullWidth}
          sizeKey={size}
          variantKey={variant}
        />
      );

    if (href) {
      return (
        <S.Anchor
          colorKey={color}
          css={css}
          data-testid={testId}
          disabled={disabled}
          fullWidth={fullWidth}
          href={href}
          ref={ref as LegacyRef<HTMLAnchorElement>}
          sizeKey={size}
          target={target}
          variantKey={variant}
          {...props}
        >
          {childrenNode()}
        </S.Anchor>
      );
    }

    return (
      <S.Button
        colorKey={color}
        css={css}
        data-testid={testId}
        disabled={disabled}
        fullWidth={fullWidth}
        ref={ref as LegacyRef<HTMLButtonElement>}
        sizeKey={size}
        type={type}
        variantKey={variant}
        {...props}
      >
        {childrenNode()}
      </S.Button>
    );
  },
);

export { Button };
