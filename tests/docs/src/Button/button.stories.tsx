import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import ArrowDownXS from "@sc/shared/icons/arrow_down_16.svg?react";
import ArrowDownSM from "@sc/shared/icons/arrow_down_20.svg?react";
import ArrowDownMD from "@sc/shared/icons/arrow_down_24.svg?react";
import ArrowDownLG from "@sc/shared/icons/arrow_down_28.svg?react";
import ArrowDownXL from "@sc/shared/icons/arrow_down_32.svg?react";
import { userEvent, within } from "@storybook/testing-library";
import type { ReactNode } from "react";
import { Fragment } from "react";
import type { ButtonSize } from "@sc/ui";
import { Button } from "@sc/ui";
import { buttonCompoundArgs, buttonStyleProps } from "./button.type";

const sizeIcon: Record<ButtonSize, React.VFC<React.SVGProps<SVGSVGElement>>> = {
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
      control: "boolean",
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
    endIcon: false,
    children: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Button");
    await expect(button.tagName).toBe("BUTTON");
  },
  render: ({
    size,
    endIcon,
    ...args
  }: {
    size: ButtonSize;
    endIcon: boolean;
    children: ReactNode;
  }) => (
    <Button endIcon={endIcon ? sizeIcon[size] : undefined} {...args}>
      {args.children}
    </Button>
  ),
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
  args: {
    disabled: false,
  },
  render: ({ disabled }) => {
    return (
      <>
        {buttonCompoundArgs.color.map((color) => (
          <Fragment key={color}>
            {buttonCompoundArgs.variant.map((variant) => (
              <Fragment key={variant}>
                {buttonCompoundArgs.size.map((size) => (
                  <li key={color + variant + size}>
                    <label
                      className="text-xs block bg-white p-1 rounded-md w-fit mx-auto m"
                      htmlFor={`${color}-${variant}-${size}`}
                    >
                      [{color} / {variant} / {size}]
                    </label>
                    <Button
                      className="my-2"
                      color={color}
                      disabled={disabled}
                      endIcon={sizeIcon[size]}
                      id={`${color}-${variant}-${size}`}
                      size={size}
                      variant={variant}
                    >
                      button
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
      <ul className="grid grid-cols-5 gap-4 text-center align-middle items-center">
        <Story />
      </ul>
    ),
  ],
  argTypes: {
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
  render: ({ color, size, variant }) => {
    return (
      <>
        {Object.keys(buttonStyleProps).map((name) => (
          <li className="w-52" key={name}>
            <Button
              color={color}
              disabled={name === "disabled"}
              fullWidth={name === "fullWidth"}
              size={size}
              variant={variant}
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
      <ul className="flex flex-col gap-4 text-center align-middle items-center w-52">
        <Story />
      </ul>
    ),
  ],
};
