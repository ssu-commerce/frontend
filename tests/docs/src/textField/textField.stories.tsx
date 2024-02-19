import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { Fragment } from "react";
import { ColorKey, VariantKey, SizeKey, TextField } from "@sc/ui";
import { css } from "@emotion/react";

const textFieldCompoundArgs = {
  color: Object.values(ColorKey),
  variant: Object.values(VariantKey),
  size: Object.values(SizeKey),
};

const meta = {
  title: "UI/TextField",
  component: TextField,
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
      options: textFieldCompoundArgs.color,
    },
    disabled: {
      control: "boolean",
    },
    size: {
      control: "radio",
      options: textFieldCompoundArgs.size,
    },
    placeholder: {
      control: "text",
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof TextField>;

export const DefaultTextField: Story = {
  args: {
    color: ColorKey.Default,
    size: SizeKey.SM,
    disabled: false,
    placeholder: "placeholder",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const $textField = canvas.getByPlaceholderText("placeholder");
    await waitFor(async () => {
      await userEvent.type($textField, "input text");
      await expect($textField.tagName).toBe("INPUT");
      await expect($textField).toHaveValue("input text");
    });
  },
  render: (args) => {
    return <TextField {...args} />;
  },
};

export const StyleTextField: Story = {
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
        {textFieldCompoundArgs.color.map((color) => (
          <Fragment key={color}>
            {textFieldCompoundArgs.size.map((size) => (
              <li key={color + size}>
                <label
                  css={css`
                    font-size: 12px;
                    display: block;
                  `}
                  htmlFor={`${color}-${size}`}
                >
                  [{color} / {size}]
                </label>
                <TextField
                  color={color}
                  disabled={disabled}
                  id={`${color}-${size}`}
                  placeholder={`${color} / ${size}`}
                  size={size}
                />
              </li>
            ))}
          </Fragment>
        ))}
      </ul>
    );
  },
};

export const MultiTextField: Story = {
  args: {
    color: ColorKey.Default,
    size: SizeKey.SM,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const $loading = canvas.getByTestId("loading");
    await expect($loading).toBeInTheDocument();
    await expect($loading).toHaveStyle({ backgroundColor: ColorKey.Loading });

    const $hover = canvas.getByPlaceholderText("hover");
    await userEvent.hover($hover);
    await expect($hover).toBeInTheDocument();
    await expect($hover).toHaveStyle({ cursor: "text" });

    const $disabled = canvas.getByPlaceholderText("disabled");
    await expect($disabled).toBeInTheDocument();
    await expect($disabled.closest("div")).toHaveStyle({
      opacity: "0.3",
      cursor: "not-allowed",
    });
    await waitFor(async () => {
      await userEvent.type($disabled, "input text");
      await expect($disabled).toHaveValue("");
    });

    const $fullWidth = canvas.getByPlaceholderText("fullWidth");
    await expect($fullWidth).toBeInTheDocument();
    await expect($fullWidth.closest("div")).toHaveStyle({ width: "200px" });
  },
  render: ({ color, size }) => {
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
          <TextField loading placeholder="loading" testId="loading" />
        </li>
        <li>
          <TextField color={color} placeholder="hover" size={size} />
        </li>
        <li>
          <TextField
            color={color}
            disabled
            placeholder="disabled"
            size={size}
          />
        </li>
        <li>
          <TextField
            color={color}
            fullWidth
            placeholder="fullWidth"
            size={size}
          />
        </li>
      </ul>
    );
  },
};
