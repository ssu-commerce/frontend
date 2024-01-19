import { ToggleButtonProps } from "./toggle.types";
import { ColorKey, SizeKey } from "../constants";
import * as S from "./toggle.styles";

export const ToggleButton = ({
  css,
  onChange,
  value = "",
  disabled = false,
  itemList = [],
  size = SizeKey.MD,
  color = ColorKey.Default,
  children,
}: ToggleButtonProps) => {
  return (
    <S.Button
      active={itemList.includes(value)}
      css={css}
      disabled={disabled}
      sizeKey={size}
      colorKey={color}
      onClick={() => typeof onChange === "function" && onChange(value)}
    >
      {children}
    </S.Button>
  );
};
