import { ChangeEvent, Children, cloneElement } from "react";
import { RadioGroupProps } from "./radio.types";
import { GroupWrapper } from "./radio.style";

function RadioGroup({ children, value, onChange, ...args }: RadioGroupProps) {
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
}

export { RadioGroup };
