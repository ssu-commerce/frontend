import type { FC } from "react";
import { ColorKey, SizeKey } from "../constants";
import type { ToggleButtonProps } from "./toggle.types";
import * as S from "./toggle.styles";

export const ToggleButton: FC<ToggleButtonProps> = ({
  css,
  onChange,
  value = "",
  disabled = false,
  itemList = [],
  size = SizeKey.MD,
  color = ColorKey.Default,
  children,
}) => {
  const handleClickButton = () => {
    if (typeof onChange === "function") {
      onChange(value);
    }
  };
  return (
    <S.Button
      active={itemList.includes(value)}
      colorKey={color}
      css={css}
      disabled={disabled}
      onClick={handleClickButton}
      sizeKey={size}
    >
      {children}
    </S.Button>
  );
};
