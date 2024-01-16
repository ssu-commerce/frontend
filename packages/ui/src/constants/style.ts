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
  Default = "default",
  Primary = "primary",
  Secondary = "secondary",
  Error = "error",
  Info = "info",
  Success = "success",
  Warning = "warning",
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
  RGB: {
    default: "#ff6b01",
    primary: "#959a9d",
    secondary: "#24282b",
    error: "#dc2626",
    info: "#d1d5db",
    success: "#16a34a",
    warning: "#fde047",
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
    xl: "30px",
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
};
