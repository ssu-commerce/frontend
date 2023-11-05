import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@sc/components";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "radio",
      options: [
        "default",
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
      ],
    },
    variant: {
      control: "radio",
      options: ["contained", "outlined", "text"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "default",
    variant: "contained",
    size: "sm",
    children: "default",
  },
};
