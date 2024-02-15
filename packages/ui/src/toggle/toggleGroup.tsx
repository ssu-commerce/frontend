import type { FC } from "react";
import { Children, cloneElement, useState } from "react";
import { ColorKey, SizeKey } from "../constants";
import type { ToggleValue, ToggleGroupProps } from "./toggle.types";
import * as S from "./toggle.styles";

export const ToggleGroup: FC<ToggleGroupProps> = ({
  css,
  onChange,
  size = SizeKey.MD,
  color = ColorKey.Default,
  children = [],
  exclusive,
  value = [],
  loading,
  testId,
}) => {
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

  if (loading) return <S.Loading data-testid={testId} sizeKey={size} />;

  return (
    <S.Group css={css}>
      {Children.map(children, (node) =>
        cloneElement(node, {
          onChange: handleClickItem,
          itemList: toggleItems,
          size,
          color,
        }),
      )}
    </S.Group>
  );
};
