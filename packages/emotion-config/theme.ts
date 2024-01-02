import { css } from "@emotion/react";

export type TypoType = typeof typo;

export type TypoKey = keyof TypoType;

export const typo = {
  SEMI_BOLD_20: css`
    font-family: Apple SD Gothic Neo;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px; /* 140% */
  `,
  SEMI_BOLD_18: css`
    font-family: Apple SD Gothic Neo;
    font-size: 18px;
    font-weight: 600;
    line-height: 26px; /* 144.444% */
  `,
  SEMI_BOLD_17: css`
    font-family: Apple SD Gothic Neo;
    font-size: 17px;
    font-weight: 600;
    line-height: 20px;
  `,
  MEDIUM_32: css`
    font-size: 32px;
    font-weight: 500;
    line-height: 44px; /* 137.5% */
  `,
  REGULAR_20: css`
    font-family: Apple SD Gothic Neo;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px; /* 140% */
  `,
  REGULAR_16: css`
    font-family: Apple SD Gothic Neo;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
  `,
  REGULAR_12: css`
    font-family: Apple SD Gothic Neo;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px; /* 150% */
  `,
};
