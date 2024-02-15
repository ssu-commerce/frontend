import type { ReactNode, ReactElement } from "react";
import type { Interpolation, Theme } from "@emotion/react";
import type { ColorKey, SizeKey } from "../constants";

export type ToggleValue = string | readonly string[];

export type ToggleButtonProps = Partial<{
  value: string;
  onChange: (value: ToggleValue) => void;
  itemList: ToggleValue[];
  color: ColorKey;
  size: SizeKey;
  css: Interpolation<Theme>;
  disabled: boolean;
  children: ReactNode;
}>;

export type ToggleGroupProps = Partial<{
  color: ColorKey;
  size: SizeKey;
  testId: string;
  onChange: (value: ToggleValue[]) => void;
  required: boolean;
  children: ReactElement<ToggleButtonProps>[];
  css: Interpolation<Theme>;
  exclusive: boolean;
  value: ToggleValue[];
  loading: boolean;
}>;
