import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import type { ReactElement } from "react";
import { ColorKey, SizeKey, Checkbox } from "@sc/ui";
import * as C from "./checkbox";

const checkboxCompoundArgs = {
  color: Object.values(ColorKey),
  size: Object.values(SizeKey),
};

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
  },
} satisfies Meta<typeof Checkbox>;
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const DefaultCheckbox: Story = {
  args: {
    color: ColorKey.Default,
    size: SizeKey.SM,
    disabled: false,
    children: "default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const $checkbox = canvas.getByRole<HTMLInputElement>("checkbox");
    await userEvent.click($checkbox);
    await expect($checkbox.checked).toBe(true);
  },
  render: ({ children, ...args }): ReactElement => {
    return <C.DefaultCheckbox {...args}>{children}</C.DefaultCheckbox>;
  },
};

export const MultiCheckbox: Story = {
  args: {
    color: ColorKey.Default,
    size: SizeKey.SM,
    disabled: false,
    children: "default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const $loading = canvas.getByTestId("loading");
    await expect($loading).toBeInTheDocument();
    await expect($loading).toHaveStyle({ backgroundColor: ColorKey.Loading });

    const $checkbox1 = canvas.getByTestId<HTMLInputElement>("checkbox-1");
    await userEvent.click($checkbox1);
    await expect($checkbox1.checked).toBe(true);

    const $checkbox2 = canvas.getByTestId<HTMLInputElement>("checkbox-2");
    await userEvent.click($checkbox2);
    await expect($checkbox2.checked).toBe(true);

    const $disabled = canvas.getByTestId<HTMLInputElement>("disabled");
    await userEvent.click($disabled);
    await expect($disabled.checked).toBe(false);
  },
  render: function Render(args): ReactElement {
    return <C.MultiCheckbox {...args} />;
  },
};
