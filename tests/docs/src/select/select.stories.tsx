import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { Fragment, type ReactElement } from "react";
import { ColorKey, SizeKey, Select } from "@sc/ui";
import { expect } from "@storybook/jest";
import { css } from "@emotion/react";

const selectCompoundArgs = {
  color: Object.values(ColorKey) as ColorKey[],
  size: Object.values(SizeKey) as SizeKey[],
  items: [
    {
      name: "item-1",
      value: "item-1",
    },
    {
      name: "item-2",
      value: "item-2",
    },
    {
      name: "item-3",
      value: "item-3",
    },
  ],
};

const meta = {
  title: "UI/Select",
  component: Select,
  parameters: {
    layout: "centered",
    variants: {
      enable: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: selectCompoundArgs.color,
    },
    size: {
      control: "switch",
      options: selectCompoundArgs.size,
    },
    disabled: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
  },
} satisfies Meta<typeof Select>;
export default meta;

type Story = StoryObj<typeof Select>;

export const DefaultSelect: Story = {
  args: {
    color: ColorKey.Default,
    size: SizeKey.SM,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const $select = canvas.getByTestId("select");
    const $label = $select.closest("label");
    await expect($label).toBeInTheDocument();
    if ($label) {
      await userEvent.click($label);
      if (selectCompoundArgs.items.length > 0) {
        const item = selectCompoundArgs.items[0];
        const $selectItem = canvas.getByText(item.name);
        await expect($selectItem).toBeInTheDocument();
        await userEvent.click($selectItem);
        await expect($select).toHaveAttribute("value", item.value);
      }
    }
  },
  render: ({
    color,
    size,
  }: {
    color: ColorKey;
    size: SizeKey;
  }): ReactElement => {
    return (
      <Select
        color={color}
        items={selectCompoundArgs.items}
        size={size}
        testId="select"
      />
    );
  },
};

export const StyleSelect: Story = {
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
        {selectCompoundArgs.color.map((color) => (
          <Fragment key={color}>
            {selectCompoundArgs.size.map((size) => (
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
                <Select
                  color={color}
                  disabled={disabled}
                  items={selectCompoundArgs.items}
                  size={size}
                  testId="select"
                />
              </li>
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
    size: {
      control: false,
    },
  },
};

export const MultiSelect: Story = {
  args: {
    color: ColorKey.Default,
    size: SizeKey.SM,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const $hover = canvas.getByTestId("hover").closest("label");
    await expect($hover).toBeInTheDocument();
    if ($hover) {
      await userEvent.hover($hover);
      await expect($hover).toHaveStyle({ cursor: "pointer" });
    }

    const $disabled = canvas.getByTestId("disabled").closest("label");
    if ($disabled) {
      await expect($disabled).toBeInTheDocument();
      await expect($disabled).toHaveStyle({
        opacity: "0.3",
        cursor: "not-allowed",
      });
      await userEvent.hover($disabled);
      await expect($disabled).toHaveStyle({
        opacity: "0.3",
        cursor: "not-allowed",
      });
    }
  },
  render: function Render({ color, size }): ReactElement {
    return (
      <ul>
        <li>
          <Select
            color={color}
            items={selectCompoundArgs.items}
            size={size}
            testId="hover"
          />
        </li>
        <li>
          <Select
            color={color}
            disabled
            items={selectCompoundArgs.items}
            size={size}
            testId="disabled"
          />
        </li>
      </ul>
    );
  },
};
