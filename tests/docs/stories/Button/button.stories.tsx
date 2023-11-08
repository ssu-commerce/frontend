import { Button } from "@sc/components";
import type { Meta, StoryObj } from "@storybook/react";
import SearchIcon from "@sc/shared/icons/search_filled_20.svg?react";
import { userEvent, within } from "@storybook/testing-library";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
    vitest: {
      testFile: "Button.test.tsx",
    },
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

type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    color: "default",
    variant: "contained",
    size: "sm",
    disabled: false,
    children: "default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText("default"));
  },
};

export const PrimaryButton: Story = {
  args: {
    color: "primary",
    variant: "outlined",
    size: "md",
    disabled: false,
    children: "primary",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText("primary"));
  },
};

// export const CombinedStories: Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);

//     // Runs the FirstStory and Second story play function before running this story's play function
//     await DefaultButton.play({ canvasElement });
//     await PrimaryButton.play({ canvasElement });
//     // await userEvent.click(canvas.getByText("primary"));
//   },
// };
