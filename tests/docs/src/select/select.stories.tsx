import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import type { ReactElement } from "react";
import { ColorKey, SizeKey, Select } from "@sc/ui";

const selectCompoundArgs = {
  color: Object.values(ColorKey) as ColorKey[],
  size: Object.values(SizeKey) as SizeKey[],
  items: [
    {
      name: "item-1",
      value: "item-1",
    },
    {
      name: "item-2",
      value: "item-2",
    },
    {
      name: "item-3",
      value: "item-3",
    },
  ],
};

const meta = {
  title: "UI/Select",
  component: Select,
  parameters: {
    layout: "centered",
    variants: {
      enable: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: selectCompoundArgs.color,
    },
    size: {
      control: "switch",
      options: selectCompoundArgs.size,
    },
    disabled: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
  },
} satisfies Meta<typeof Select>;
export default meta;

type Story = StoryObj<typeof Select>;

export const DefaultSelect: Story = {
  args: {
    color: ColorKey.Default,
    size: SizeKey.SM,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectElement = canvas.getByTestId("select");
  },
  render: ({
    color,
    size,
  }: {
    color: ColorKey;
    size: SizeKey;
  }): ReactElement => {
    return (
      <Select
        color={color}
        size={size}
        testId="select"
        items={selectCompoundArgs.items}
      />
    );
  },
};
