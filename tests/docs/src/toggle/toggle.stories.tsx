import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Fragment, type ReactElement } from "react";
import { ActiveOpacity, Color, ColorKey, SizeKey, hexToRgba } from "@sc/ui";
import { css } from "@emotion/react";
import { BaseToggle } from "./toggle";

const toggleCompoundArgs = {
  color: Object.values(ColorKey) as ColorKey[],
  size: Object.values(SizeKey) as SizeKey[],
  items: [
    {
      name: "item-1",
      value: "item-1",
      disabled: false,
    },
    {
      name: "item-2",
      value: "item-2",
      disabled: false,
    },
    {
      name: "item-3",
      value: "item-3",
      disabled: false,
    },
  ],
};

const meta = {
  title: "UI/Toggle",
  component: BaseToggle,
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
      options: toggleCompoundArgs.color,
    },
    size: {
      control: "radio",
      options: toggleCompoundArgs.size,
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof BaseToggle>;
export default meta;

type Story = StoryObj<typeof BaseToggle>;

export const DefaultToggle: Story = {
  args: {
    color: ColorKey.Default,
    size: SizeKey.SM,
    disabled: false,
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);
    const toggleElement = canvas.getByText<HTMLButtonElement>("item-1");
    await userEvent.click(toggleElement);
    await expect(toggleElement).toHaveStyle({
      "background-color": hexToRgba(
        Color.Hex[initialArgs.color],
        ActiveOpacity,
      ),
    });
  },
  render: ({ color, size, disabled }): ReactElement => {
    return (
      <BaseToggle
        color={color}
        disabled={disabled}
        items={toggleCompoundArgs.items}
        size={size}
      />
    );
  },
};

export const StyleToggle: Story = {
  args: {
    disabled: false,
  },
  render: ({ disabled }) => (
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
      {toggleCompoundArgs.color.map((color) => (
        <Fragment key={color}>
          {toggleCompoundArgs.size.map((size) => (
            <li
              css={css`
                display: flex;
                gap: 4px;
                flex-direction: column;
              `}
              key={color + size}
            >
              <label
                css={css`
                  font-size: 12px;
                  display: block;
                `}
                htmlFor={`${color}-${size}`}
              >
                [{color} / {size}]
              </label>
              <BaseToggle
                color={color}
                disabled={disabled}
                items={toggleCompoundArgs.items}
                size={size}
              />
            </li>
          ))}
        </Fragment>
      ))}
    </ul>
  ),
  argTypes: {
    color: {
      control: false,
    },
    size: {
      control: false,
    },
  },
};

export const ActiveToggle: Story = {
  args: {
    color: ColorKey.Default,
    size: SizeKey.SM,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const $toggleHover = canvas.getByText<HTMLButtonElement>("item-1");
    const $toggleDisabled = canvas.getByText<HTMLButtonElement>("item-4");

    await userEvent.click($toggleDisabled);
    await expect($toggleDisabled).toHaveStyle({
      opacity: "0.3",
    });

    await userEvent.hover($toggleHover);
    await expect($toggleHover).toHaveStyle({ cursor: "pointer" });
  },
  render: function Render({ color, size, disabled }): ReactElement {
    return (
      <BaseToggle
        color={color}
        disabled={disabled}
        items={[
          ...toggleCompoundArgs.items,
          {
            name: "item-4",
            value: "item-4",
            disabled: true,
          },
        ]}
        size={size}
      />
    );
  },
};
