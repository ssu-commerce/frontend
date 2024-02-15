import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Fragment, type ReactElement } from "react";
import { ActiveOpacity, Color, ColorKey, SizeKey, hexToRgba } from "@sc/ui";
import { css } from "@emotion/react";
import * as C from "./toggle";

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
  component: C.BaseToggle,
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
} satisfies Meta<typeof C.BaseToggle>;
export default meta;

type Story = StoryObj<typeof C.BaseToggle>;

export const BaseToggle: Story = {
  args: {
    color: ColorKey.Default,
    size: SizeKey.SM,
    disabled: false,
  },
  play: async ({ canvasElement, initialArgs }) => {
    const canvas = within(canvasElement);

    const $toggle = canvas.getByText<HTMLButtonElement>("item-1");
    await userEvent.click($toggle);
    await expect($toggle).toHaveStyle({
      "background-color": hexToRgba(
        Color.Hex[initialArgs.color],
        ActiveOpacity,
      ),
    });
  },
  render: ({ color, size, disabled }): ReactElement => {
    return (
      <C.BaseToggle
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
              <C.BaseToggle
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

export const MultiToggle: Story = {
  args: {
    color: ColorKey.Default,
    size: SizeKey.SM,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const $loading = canvas.getByTestId("loading");
    await expect($loading).toBeInTheDocument();
    await expect($loading).toHaveStyle({ backgroundColor: ColorKey.Loading });

    const $hover = canvas.getByText<HTMLButtonElement>("item-1");
    await userEvent.hover($hover);
    await expect($hover).toHaveStyle({ cursor: "pointer" });

    const $disabled = canvas.getByText<HTMLButtonElement>("item-4");
    await userEvent.click($disabled);
    await expect($disabled).toHaveStyle({
      opacity: "0.3",
    });
  },
  render: function Render({ color, size, disabled }): ReactElement {
    return (
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 4px;
        `}
      >
        <C.BaseToggle
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
          loading
          size={size}
          testId="loading"
        />
        <C.BaseToggle
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
          testId="loading"
        />
      </div>
    );
  },
};
