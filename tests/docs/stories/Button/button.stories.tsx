import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import ArrowDownXS from "@sc/shared/icons/arrow_down_16.svg?react";
import ArrowDownSM from "@sc/shared/icons/arrow_down_20.svg?react";
import ArrowDownMD from "@sc/shared/icons/arrow_down_24.svg?react";
import ArrowDownLG from "@sc/shared/icons/arrow_down_28.svg?react";
import ArrowDownXL from "@sc/shared/icons/arrow_down_32.svg?react";
import { userEvent, within } from "@storybook/testing-library";
import { Button } from "@sc/ui";
import { Fragment } from "react";
import {
  buttonCompoundArgs,
  buttonColor,
  buttonStyleProps,
  buttonSize,
  buttonStyle,
} from "./button.type";

const SizeIcon = {
  xs: ArrowDownXS,
  sm: ArrowDownSM,
  md: ArrowDownMD,
  lg: ArrowDownLG,
  xl: ArrowDownXL,
};

const meta = {
  title: "UI/Button",
  component: Button,
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
      options: buttonCompoundArgs.color,
    },
    disabled: {
      control: "boolean",
    },
    endIcon: {
      options: Object.keys(SizeIcon),
      mapping: {
        ArrowDownXS,
        ArrowDownSM,
        ArrowDownMD,
        ArrowDownLG,
        ArrowDownXL,
      },
      control: {
        type: "select",
        labels: {
          ArrowDownXL: "ArrowDownXL",
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
  args: {
    color: "default",
    variant: "contained",
    size: "sm",
    disabled: false,
    children: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Button");
    await expect(button.tagName).toBe("BUTTON");
    await expect(button).toHaveClass(buttonStyle);
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

export const StyleButton: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await Promise.allSettled(
      buttonCompoundArgs.color.map((color) =>
        buttonCompoundArgs.variant.map((variant) =>
          buttonCompoundArgs.size.map(async (size) => {
            const button = canvas.getByText(`${color}-${variant}-${size}`);
            await expect(button).toBeInTheDocument();
            await expect(button).toHaveClass(
              buttonColor[color][variant],
              buttonSize[size],
            );
          }),
        ),
      ),
    );
  },
  render: (args) => {
    return (
      <>
        {buttonCompoundArgs.color.map((color) => (
          <Fragment key={color}>
            {buttonCompoundArgs.variant.map((variant) => (
              <Fragment key={variant}>
                {buttonCompoundArgs.size.map((size) => (
                  <li key={color + variant + size}>
                    <Button
                      color={color}
                      disabled={args.disabled}
                      endIcon={SizeIcon[size]}
                      size={size}
                      variant={variant}
                    >
                      {color}-{variant}-{size}
                    </Button>
                  </li>
                ))}
              </Fragment>
            ))}
          </Fragment>
        ))}
      </>
    );
  },
  decorators: [
    (Story) => (
      <ul className="grid grid-cols-5 gap-4 text-center align-middle items-center bg-stripes-gray rounded-lg p-5">
        <Story />
      </ul>
    ),
  ],
  argTypes: {
    // foo is the property we want to remove from the UI
    color: {
      control: false,
    },
    variant: {
      control: false,
    },
    size: {
      control: false,
    },
    endIcon: {
      control: false,
    },
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
        value && (await expect(button).toHaveClass(value));
      }),
    );
  },
  render: (args) => {
    return (
      <>
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
      </>
    );
  },
  decorators: [
    (Story) => (
      <ul className="flex gap-4 text-center align-middle items-center bg-stripes-gray rounded-lg p-5 w-50">
        <Story />
      </ul>
    ),
  ],
};
