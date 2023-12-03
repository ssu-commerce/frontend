import { Checkbox } from "@sc/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import type { ReactElement } from "react";
import { useState } from "react";
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

function RenderCheckbox({ children, ...args }): ReactElement {
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
  render: (args) => <RenderCheckbox {...args}>{args.children}</RenderCheckbox>,
};
