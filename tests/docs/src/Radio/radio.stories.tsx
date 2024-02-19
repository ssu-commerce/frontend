import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import type { ReactElement } from "react";
import { ColorKey, SizeKey, Radio } from "@sc/ui";
import * as C from "./radio";

const radioCompoundArgs = {
  color: Object.values(ColorKey),
  size: Object.values(SizeKey),
};

const meta = {
  title: "UI/Radio",
  component: Radio,
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
      options: radioCompoundArgs.color,
    },
    disabled: {
      control: "boolean",
    },
    size: {
      control: "radio",
      options: radioCompoundArgs.size,
    },
  },
} satisfies Meta<typeof Radio>;
export default meta;

type Story = StoryObj<typeof Radio>;

export const DefaultRadio: Story = {
  args: {
    color: ColorKey.Default,
    size: SizeKey.SM,
    disabled: false,
    children: "default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const $radio = canvas.getByRole<HTMLInputElement>("radio");
    await userEvent.click($radio);
    await expect($radio.checked).toBe(true);
  },
  render: ({ children, ...args }): ReactElement => {
    return <C.DefaultRadio {...args}>{children}</C.DefaultRadio>;
  },
};

export const MultiRadio: Story = {
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

    const $radio1 = canvas.getByTestId<HTMLInputElement>("radio-1");
    await userEvent.click($radio1);
    await expect($radio1.checked).toBe(false);

    const $radio2 = canvas.getByTestId<HTMLInputElement>("radio-2");
    await userEvent.click($radio2);
    await expect($radio2.checked).toBe(true);

    const $disabled = canvas.getByTestId<HTMLInputElement>("disabled");
    await userEvent.click($disabled);
    await expect($disabled.checked).toBe(false);
  },
  render: ({ children, ...args }): ReactElement => {
    return <C.MultiRadio {...args}>{children}</C.MultiRadio>;
  },
};
