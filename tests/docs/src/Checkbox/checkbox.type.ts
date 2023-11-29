import type { CheckboxColor, CheckboxSize } from "@sc/ui";

export const checkboxCompoundArgs: {
  color: CheckboxColor[];
  size: CheckboxSize[];
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

export const checkboxStyleProps = [
  "hover",
  "disabled",
  "fullWidth",
  "autoFocus",
];
