import colors from "tailwindcss/colors";

export type TwSize = "sm" | "md" | "lg";

export type TwColor =
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning";

export const twColors: Record<TwColor, string> = {
  default: colors.gray["600"],
  primary: colors.amber["600"],
  secondary: colors.violet["600"],
  error: colors.red["600"],
  info: colors.gray["300"],
  success: colors.green["600"],
  warning: colors.yellow["300"],
};
