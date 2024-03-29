import type { ChangeEvent } from "react";
import { Children, cloneElement, useState } from "react";
import type { RadioGroupProps } from "./radio.types";

function RadioGroup({ children, value, onChange, ...args }: RadioGroupProps) {
  const handleChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };

  return Children.map(children, (node) =>
    cloneElement(node, {
      onChange: handleChangeChecked,
      selectedValue: value,
      ...args,
    }),
  );
}

export { RadioGroup };
