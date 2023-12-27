import type { RadioColor, RadioSize } from "@sc/ui";

export const radioCompoundArgs: {
  color: RadioColor[];
  size: RadioSize[];
} = {
  color: [
    "default",
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
  ],
  size: ["sm", "md", "lg"],
};

export const radioStyleProps = ["hover", "disabled", "fullWidth", "autoFocus"];
