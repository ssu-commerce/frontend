import { Button } from "@sc/components";
import type { Meta, StoryObj } from "@storybook/react";
import SearchIcon from "@sc/shared/icons/search_filled_20.svg?react";

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
    disabled: {
      control: "boolean",
    },
    endIcon: {
      options: Object.keys({ SearchIcon }),
      mapping: { SearchIcon },
      control: {
        type: "select",
        labels: {
          SearchIcon: "Search",
        },
      },
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

export const DefaultButton: Story = {
  args: {
    color: "default",
    variant: "contained",
    size: "sm",
    disabled: false,
    children: "default",
  },
};
