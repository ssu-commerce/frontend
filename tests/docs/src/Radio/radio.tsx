"use client";

import { css } from "@emotion/react";
import { Radio, RadioGroup } from "@sc/ui";
import type { ReactElement} from "react";
import { useState } from "react";

export const DefaultRadio = ({ children, ...args }): ReactElement => {
  const [checked, setChecked] = useState(false);
  return (
    <Radio
      checked={checked}
      onChange={() => {
        setChecked(!checked);
      }}
      {...args}
    >
      {children}
    </Radio>
  );
};

export const MultiRadio = (args): ReactElement => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const radioList = ["loading", "radio-1", "radio-2", "disabled"];

  const handleChangeRadio = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <RadioGroup onChange={handleChangeRadio} value={selectedValue}>
      {radioList.map((value) => {
        return (
          <Radio
            {...args}
            css={css`
              min-width: 100px;
              width: 100px;
            `}
            disabled={value === "disabled"}
            key={value}
            loading={value === "loading"}
            testId={value}
            value={value}
          >
            {value}
          </Radio>
        );
      })}
    </RadioGroup>
  );
};
