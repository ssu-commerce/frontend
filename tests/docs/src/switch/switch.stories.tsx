import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import type { ReactElement } from "react";
import { Fragment } from "react";
import { css } from "@emotion/react";
import { ColorKey, SizeKey, Switch } from "@sc/ui";
import * as C from "./switch";

const switchCompoundArgs = {
  color: Object.values(ColorKey) as ColorKey[],
  size: Object.values(SizeKey) as SizeKey[],
};

const meta = {
  title: "UI/Switch",
  component: Switch,
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
      options: switchCompoundArgs.color,
    },
    disabled: {
      control: "boolean",
    },
    checked: {
      control: "boolean",
    },
    size: {
      control: "radio",
      options: switchCompoundArgs.size,
    },
  },
} satisfies Meta<typeof Switch>;
export default meta;

type Story = StoryObj<typeof Switch>;

export const DefaultSwitch: Story = {
  args: {
    color: ColorKey.Default,
    size: SizeKey.SM,
    disabled: false,
    children: "default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const $switch = canvas.getByRole<HTMLInputElement>("checkbox");
    await userEvent.click($switch);
    await expect($switch.checked).toBe(true);
  },
  render: ({ children, ...args }): ReactElement => {
    return <C.DefaultSwitch {...args}>{children}</C.DefaultSwitch>;
  },
};

export const StyleSwitch: Story = {
  args: {
    disabled: false,
    checked: true,
  },
  render: ({ disabled, checked }) => (
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
      {switchCompoundArgs.color.map((color) => (
        <Fragment key={color}>
          {switchCompoundArgs.size.map((size) => (
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
              <Switch
                checked={checked}
                color={color}
                disabled={disabled}
                id={`${color}-${size}`}
                size={size}
              >
                switch
              </Switch>
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

export const MultiSwitch: Story = {
  args: {
    color: ColorKey.Default,
    size: SizeKey.SM,
    disabled: false,
    children: "default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const $loading = canvas.getByTestId("loading");
    await expect($loading).toBeInTheDocument();
    await expect($loading).toHaveStyle({ backgroundColor: ColorKey.Loading });

    const $switch1 = canvas.getByTestId<HTMLInputElement>("switch-1");
    await userEvent.click($switch1);
    await expect($switch1.checked).toBe(true);

    const $switch2 = canvas.getByTestId<HTMLInputElement>("switch-2");
    await userEvent.click($switch2);
    await expect($switch2.checked).toBe(true);

    const $disabled = canvas.getByTestId<HTMLInputElement>("disabled");
    await userEvent.click($disabled);
    await expect($disabled.checked).toBe(false);
  },
  render: function Render(args): ReactElement {
    return <C.MultiSwitch {...args} />;
  },
};
