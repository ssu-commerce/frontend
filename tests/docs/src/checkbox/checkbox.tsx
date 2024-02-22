import { css } from "@emotion/react";
import { Checkbox } from "@sc/ui";
import type { ChangeEventHandler, ReactElement} from "react";
import { useState } from "react";

export const DefaultCheckbox = ({ children, ...args }): ReactElement => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={() => {
        setChecked(!checked);
      }}
      {...args}
    >
      {children}
    </Checkbox>
  );
};
export const MultiCheckbox = (args): ReactElement => {
  const [checked, setChecked] = useState<string[]>([]);
  const checkboxList = ["loading", "checkbox-1", "checkbox-2", "disabled"];

  const handleChangeCheck: ChangeEventHandler<HTMLInputElement> = (e): void => {
    const { value } = e.target;
    if (checked.includes(value))
      setChecked(checked.filter((checkValue) => checkValue !== value));
    else setChecked([...checked, value]);
  };

  return (
    <ul
      css={css`
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 200px;
        & li {
          display: flex;
          width: 100%;
        }
      `}
    >
      {checkboxList.map((value) => {
        return (
          <li key={value}>
            <Checkbox
              {...args}
              checked={checked.includes(value)}
              disabled={value === "disabled"}
              loading={value === "loading"}
              onChange={handleChangeCheck}
              testId={value}
              value={value}
            >
              {value}
            </Checkbox>
          </li>
        );
      })}
    </ul>
  );
};
