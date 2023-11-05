import { Button } from "@sc/components";
import type { Meta, StoryObj } from "@storybook/react";

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
      defaultValue: "default",
      options: [
        "default",
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
        "black",
        "slate-100",
      ],
    },
    size: {
      control: "radio",
      defaultValue: "lg",
      options: ["lg", "md", "sm"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

function ButtonHooks(args): ReactElement<ButtonProps> {
  return <Button {...args}>Button</Button>;
}

export const Primary: Story = {
  render: (args) => <ButtonHooks color={args.color} {...args} />,
};
