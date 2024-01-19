import type { ChangeEvent } from "react";
import { Children, cloneElement } from "react";
import type { RadioGroupProps } from "./radio.types";
import * as S from "./radio.styles";

const RadioGroup = ({
  children,
  value,
  onChange,
  css,
  ...args
}: RadioGroupProps) => {
  const handleChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };

  return (
    <S.Group css={css}>
      {Children.map(children, (node) =>
        cloneElement(node, {
          onChange: handleChangeChecked,
          selectedValue: value,
          ...args,
        }),
      )}
    </S.Group>
  );
};

export { RadioGroup };
