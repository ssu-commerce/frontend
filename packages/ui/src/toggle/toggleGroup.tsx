import { RadioGroup } from "../radio";
import { ToggleValue, ToggleGroupProps } from "./toggle.types";
import * as S from "./toggle.styles";
import { ColorKey, SizeKey } from "../constants";
import { Children, cloneElement, useState } from "react";

export const ToggleGroup = ({
  css,
  onChange,
  size = SizeKey.MD,
  color = ColorKey.Default,
  children = [],
  exclusive,
  value = [],
  ...args
}: ToggleGroupProps) => {
  const [toggleItems, setToggleItems] = useState<ToggleValue[]>(value);

  const handleClickItem = (selectedValue: string | readonly string[]) => {
    if (typeof onChange === "function") {
      if (toggleItems.includes(selectedValue)) {
        const filteredItems = toggleItems.filter(
          (item) => selectedValue !== item,
        );
        setToggleItems(filteredItems);
        onChange(filteredItems);
      } else if (exclusive) {
        setToggleItems([selectedValue]);
        onChange([selectedValue]);
      } else {
        setToggleItems([...toggleItems, selectedValue]);
        onChange([...toggleItems, selectedValue]);
      }
    }
  };

  return (
    <S.Group css={css}>
      {Children.map(children, (node) =>
        cloneElement(node, {
          onChange: handleClickItem,
          itemList: toggleItems,
          size,
          color,
          ...args,
        }),
      )}
    </S.Group>
  );
};
