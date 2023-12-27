import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import type { ChangeEvent, ReactElement } from "react";
import { useState } from "react";
import { Checkbox } from "@sc/ui";
import { checkboxCompoundArgs } from "./checkbox.type";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    variants: {
      enable: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "radio",
      options: checkboxCompoundArgs.color,
    },
    disabled: {
      control: "boolean",
    },
    size: {
      control: "radio",
      options: checkboxCompoundArgs.size,
    },
    placeholder: {
      control: "text",
    },
  },
} satisfies Meta<typeof Checkbox>;
export default meta;

type Story = StoryObj<typeof Checkbox>;

function DefaultCheckboxWrapper({ children, ...args }): ReactElement {
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
}

export const DefaultCheckbox: Story = {
  args: {
    color: "default",
    size: "sm",
    disabled: false,
    children: "default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole<HTMLInputElement>("checkbox");
    await userEvent.click(checkbox);
    await expect(checkbox.checked).toBe(true);
  },
  render: ({ children, ...args }): ReactElement => {
    return (
      <DefaultCheckboxWrapper {...args}>{children}</DefaultCheckboxWrapper>
    );
  },
};

function MultiCheckboxWrapper(args): ReactElement {
  const [checked, setChecked] = useState<string[]>([]);
  const checkboxList = ["checkbox-1", "checkbox-2", "disabled"];

  const handleChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (checked.includes(value))
      setChecked(checked.filter((checkValue) => checkValue !== value));
    else setChecked([...checked, value]);
  };

  return (
    <ul>
      {checkboxList.map((value) => {
        return (
          <li key={value}>
            <Checkbox
              {...args}
              checked={checked.includes(value)}
              disabled={value === "disabled"}
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
}

export const MultiCheckbox: Story = {
  args: {
    color: "default",
    size: "sm",
    disabled: false,
    children: "default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox1 = canvas.getByTestId<HTMLInputElement>("checkbox-1");
    const checkbox2 = canvas.getByTestId<HTMLInputElement>("checkbox-2");
    const disabled = canvas.getByTestId<HTMLInputElement>("disabled");

    await userEvent.click(checkbox1);
    await userEvent.click(checkbox2);
    await userEvent.click(disabled);

    await expect(checkbox1.checked).toBe(true);
    await expect(checkbox2.checked).toBe(true);
    await expect(disabled.checked).toBe(false);
  },
  render: function Render(args): ReactElement {
    return <MultiCheckboxWrapper {...args} />;
  },
};
