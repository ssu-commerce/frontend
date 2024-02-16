import type { ColorKey, SizeKey } from "@sc/ui";
import { Toggle } from "@sc/ui";
import { useState } from "react";

export const BaseToggle = ({
  items,
  color,
  size,
  disabled,
  testId,
  loading,
}: {
  items: { name: string; value: string; disabled: boolean }[];
  color: ColorKey;
  size: SizeKey;
  disabled: boolean;
  testId?: string;
  loading?: boolean;
}) => {
  const [selectValue, setSelectValue] = useState<string[]>([items[1].value]);
  const handleChange = (value: string[]) => {
    setSelectValue(value);
  };
  return (
    <Toggle.Group
      color={color}
      loading={loading}
      onChange={handleChange}
      size={size}
      testId={testId}
      value={selectValue}
    >
      {items.map(({ name, value, disabled: disabledItem }) => {
        return (
          <Toggle.Button
            disabled={disabledItem || disabled}
            key={value}
            value={value}
          >
            {name}
          </Toggle.Button>
        );
      })}
    </Toggle.Group>
  );
};
