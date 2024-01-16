import type { ChangeEvent } from "react";
import { Children, cloneElement } from "react";
import type { RadioGroupProps } from "./radio.types";
import { GroupWrapper } from "./radio.styles";

const RadioGroup = ({
  children,
  value,
  onChange,
  ...args
}: RadioGroupProps) => {
  const handleChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };

  return (
    <GroupWrapper>
      {Children.map(children, (node) =>
        cloneElement(node, {
          onChange: handleChangeChecked,
          selectedValue: value,
          ...args,
        }),
      )}
    </GroupWrapper>
  );
};

export { RadioGroup };
