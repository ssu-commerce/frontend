import { Switch } from "@sc/ui";
import type { ReactElement, ChangeEvent } from "react";
import { useState } from "react";

export const MultiSwitch = (args): ReactElement => {
  const [checked, setChecked] = useState<string[]>([]);
  const switchList = ["loading", "switch-1", "switch-2", "disabled"];

  const handleChangeCheck = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    if (checked.includes(value))
      setChecked(checked.filter((checkValue) => checkValue !== value));
    else setChecked([...checked, value]);
  };

  return (
    <ul>
      {switchList.map((value) => {
        return (
          <li key={value}>
            <Switch
              {...args}
              checked={checked.includes(value)}
              disabled={value === "disabled"}
              loading={value === "loading"}
              onChange={handleChangeCheck}
              testId={value}
              value={value}
            >
              {value}
            </Switch>
          </li>
        );
      })}
    </ul>
  );
};

export const DefaultSwitch = ({ children, ...args }): ReactElement => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      checked={checked}
      onChange={() => {
        setChecked(!checked);
      }}
      {...args}
    >
      {children}
    </Switch>
  );
};
