import type { TextFieldColor, TextFieldSize } from "@sc/ui";

export const textFieldCompoundArgs: {
  color: TextFieldColor[];
  size: TextFieldSize[];
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

export const textFieldStyleProps = [
  "hover",
  "disabled",
  "fullWidth",
  "autoFocus",
];
