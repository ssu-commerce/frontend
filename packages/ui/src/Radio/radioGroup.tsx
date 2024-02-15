import type { ChangeEventHandler, FC } from "react";
import { Children, cloneElement } from "react";
import type { RadioGroupProps } from "./radio.types";
import * as S from "./radio.styles";

const RadioGroup: FC<RadioGroupProps> = ({
  children,
  value,
  onChange,
  ...args
}) => {
  const handleChangeChecked: ChangeEventHandler<HTMLInputElement> = (e) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };

  return (
    <S.Group>
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
