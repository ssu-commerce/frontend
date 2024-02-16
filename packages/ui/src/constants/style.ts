import { keyframes } from "@emotion/react";

export enum VariantKey {
  Contained = "contained",
  Outlined = "outlined",
  Text = "text",
}

export enum SizeKey {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
}

export enum ColorKey {
  Default = "Default",
  Primary = "Primary",
  Secondary = "Secondary",
  Error = "Error",
  Info = "Info",
  Success = "Success",
  Warning = "Warning",
  Loading = "Loading",
}

export enum DirectionKey {
  Top = "top",
  Right = "right",
  Bottom = "bottom",
  Left = "left",
}

export const DirectionDegree: Record<DirectionKey, number> = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
};

export const Color = {
  Hex: {
    [ColorKey.Default]: "#ff6b01",
    [ColorKey.Primary]: "#959a9d",
    [ColorKey.Secondary]: "#24282b",
    [ColorKey.Error]: "#dc2626",
    [ColorKey.Info]: "#d1d5db",
    [ColorKey.Success]: "#16a34a",
    [ColorKey.Warning]: "#fde047",
    [ColorKey.Loading]: "#efefef",
  },
};

export const Size = {
  Pixel: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 32,
  },
  FontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
  },
  LineHeight: {
    xs: "16px",
    sm: "20px",
    md: "24px",
    lg: "28px",
    xl: "32px",
  },
  RecPadding: {
    xs: "4px 8px",
    sm: "4px 12px",
    md: "6px 16px",
    lg: "6px 20px",
    xl: "6px 24px",
  },
  Padding: {
    xs: "4px",
    sm: "6px",
    md: "8px",
    lg: "10px",
    xl: "12px",
  },
  RecHeight: {
    xs: "28px",
    sm: "32px",
    md: "36px",
    lg: "40px",
    xl: "44px",
  },
};

export const CustomKeyframe = {
  Loading: keyframes`
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  `,
};
