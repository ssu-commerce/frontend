import type { Size, Color, Variant } from "@sc/ui";
import { ColorKey, VariantKey, SizeKey, Button, ArrowIcon } from "@sc/ui";
import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import type { ReactNode } from "react";
import { Fragment } from "react";
import { css } from "@emotion/react";

const buttonCompoundArgs = {
  color: Object.values(ColorKey) as Color[],
  variant: Object.values(VariantKey) as Variant[],
  size: Object.values(SizeKey) as Size[],
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
    color: ColorKey.Default,
    variant: VariantKey.Contained,
    size: SizeKey.SM,
    disabled: false,
    children: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Button");
    await expect(button.tagName).toBe("BUTTON");
  },
  render: ({
    size = SizeKey.SM,
    endIcon,
    ...args
  }: {
    size: Size;
    endIcon: boolean;
    children: ReactNode;
  }) => (
    <Button
      endIcon={endIcon ? <ArrowIcon size={size} /> : null}
      size={size}
      {...args}
    >
      {args.children}
    </Button>
  ),
};

export const LinkButton: Story = {
  args: {
    color: ColorKey.Default,
    variant: VariantKey.Contained,
    size: SizeKey.SM,
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
      <ul
        css={css`
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-column-gap: 8px;
          grid-row-gap: 16px;
          text-align: center;
          align-items: center;
          background-color: #fff;
          background-image: linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.03) 50%,
              transparent 50%
            ),
            linear-gradient(rgba(0, 0, 0, 0.03) 50%, transparent 50%);
          background-size: 10px 10px;
          padding: 24px;
        `}
      >
        {buttonCompoundArgs.color.map((color) => (
          <Fragment key={color}>
            {buttonCompoundArgs.variant.map((variant) => (
              <Fragment key={variant}>
                {buttonCompoundArgs.size.map((size) => (
                  <li
                    css={css`
                      display: flex;
                      gap: 4px;
                      flex-direction: column;
                    `}
                    key={color + variant + size}
                  >
                    <label
                      css={css`
                        font-size: 12px;
                        display: block;
                      `}
                      htmlFor={`${color}-${variant}-${size}`}
                    >
                      [{color} / {variant} / {size}]
                    </label>
                    <Button
                      color={color}
                      disabled={disabled}
                      endIcon={<ArrowIcon size={size} />}
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
      </ul>
    );
  },
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
    color: ColorKey.Default,
    variant: VariantKey.Contained,
    size: SizeKey.SM,
    children: "Button",
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const hover = canvas.getByText("hover");
    await userEvent.hover(hover);
    await expect(hover).toBeInTheDocument();
    await expect(hover).toHaveStyle({ cursor: "pointer" });

    const disabled = canvas.getByText("disabled");
    await expect(disabled).toBeInTheDocument();
    await expect(disabled).toHaveStyle({
      opacity: "0.3",
      cursor: "not-allowed",
    });

    const fullWidth = canvas.getByText("fullWidth");
    await expect(fullWidth).toBeInTheDocument();
    await expect(fullWidth).toHaveStyle({ width: "200px" });
  },
  render: ({ color, size, variant }) => {
    return (
      <ul
        css={css`
          display: flex;
          flex-direction: column;
          gap: 2px;
          width: 200px;
          & li {
            display: flex;
            width: 100%;
            justify-content: center;
          }
        `}
      >
        <li>
          <Button color={color} size={size} variant={variant}>
            hover
          </Button>
        </li>
        <li>
          <Button color={color} disabled size={size} variant={variant}>
            disabled
          </Button>
        </li>
        <li>
          <Button color={color} fullWidth size={size} variant={variant}>
            fullWidth
          </Button>
        </li>
      </ul>
    );
  },
};
