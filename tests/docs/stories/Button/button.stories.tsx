import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import SearchIcon from "@sc/shared/icons/search_filled_20.svg?react";
import { userEvent, within } from "@storybook/testing-library";
import { Button } from "@sc/ui";
import { Fragment } from "react";
import {
  buttonCompoundArgs,
  buttonColor,
  buttonStyleProps,
} from "./button.type";

const meta = {
  title: "UI/Button",
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
      options: buttonCompoundArgs.color,
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
      options: buttonCompoundArgs.variant,
    },
    size: {
      control: "radio",
      options: buttonCompoundArgs.size,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await Promise.allSettled(
      buttonCompoundArgs.color.map((color) =>
        buttonCompoundArgs.variant.map(async (variant) => {
          const button = canvas.getByText(`${color}-${variant}`);
          await expect(button).toBeInTheDocument();
          await expect(button).toHaveClass(buttonColor[color][variant]);
        }),
      ),
    );
  },
  render: (_args) => {
    return (
      <ul className="grid grid-cols-3 gap-4 text-center bg-stripes-gray rounded-lg p-5">
        {buttonCompoundArgs.color.map((color) => (
          <Fragment key={color}>
            {buttonCompoundArgs.variant.map((variant) => (
              <li key={variant + color}>
                <Button color={color} size="sm" variant={variant}>
                  {color}-{variant}
                </Button>
              </li>
            ))}
          </Fragment>
        ))}
      </ul>
    );
  },
};

export const ActionButton: Story = {
  args: {
    color: "default",
    variant: "contained",
    size: "sm",
    children: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await Promise.allSettled(
      Object.entries(buttonStyleProps).map(async ([name, value]) => {
        const button = canvas.getByText(name);
        await expect(button).toBeInTheDocument();
        await expect(button).toHaveClass(value);
      }),
    );
  },
  render: (args) => {
    return (
      <ul className="grid grid-cols-3 gap-4 text-center bg-stripes-gray rounded-lg p-5">
        {Object.keys(buttonStyleProps).map((name) => (
          <li key={name}>
            <Button
              color={args.color}
              disabled={name === "disabled"}
              fullWidth={name === "fullWidth"}
              size={args.size}
              variant={args.variant}
            >
              {name}
            </Button>
          </li>
        ))}
      </ul>
    );
  },
};

export const LinkButton: Story = {
  args: {
    color: "default",
    variant: "contained",
    size: "sm",
    disabled: false,
    children: "Anchor",
    href: "#",
  },
  play: async ({ canvasElement }) => {
    const currentURL = window.location.href;
    const canvas = within(canvasElement);
    const anchor = canvas.getByText("Anchor");
    await expect(anchor.tagName).toBe("A");
    await userEvent.click(anchor);
    const moveURL = window.location.href;
    await expect(moveURL).toBe(`${currentURL}#`);
  },
};
