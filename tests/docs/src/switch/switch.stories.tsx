import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import type { ChangeEvent, ReactElement } from "react";
import { Fragment, useState } from "react";
import { css } from "@emotion/react";
import { ColorKey, SizeKey, Switch } from "@sc/ui";

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
      control: "switch",
      options: switchCompoundArgs.color,
    },
    disabled: {
      control: "boolean",
    },
    checked: {
      control: "boolean",
    },
    size: {
      control: "switch",
      options: switchCompoundArgs.size,
    },
  },
} satisfies Meta<typeof Switch>;
export default meta;

type Story = StoryObj<typeof Switch>;

const DefaultSwitchWrapper = ({ children, ...args }): ReactElement => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      checked={checked}
      onChange={() => {
        setChecked(!checked);
      }}
      {...args}
    >
      {children}
    </Switch>
  );
};

export const DefaultSwitch: Story = {
  args: {
    color: ColorKey.Default,
    size: SizeKey.SM,
    disabled: false,
    children: "default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchElement = canvas.getByRole<HTMLInputElement>("checkbox");
    await userEvent.click(switchElement);
    await expect(switchElement.checked).toBe(true);
  },
  render: ({ children, ...args }): ReactElement => {
    return <DefaultSwitchWrapper {...args}>{children}</DefaultSwitchWrapper>;
  },
};

const MultiSwitchWrapper = (args): ReactElement => {
  const [checked, setChecked] = useState<string[]>([]);
  const switchList = ["switch-1", "switch-2", "disabled"];

  const handleChangeCheck = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    if (checked.includes(value))
      setChecked(checked.filter((checkValue) => checkValue !== value));
    else setChecked([...checked, value]);
  };

  return (
    <ul>
      {switchList.map((value) => {
        return (
          <li key={value}>
            <Switch
              {...args}
              checked={checked.includes(value)}
              disabled={value === "disabled"}
              onChange={handleChangeCheck}
              testId={value}
              value={value}
            >
              {value}
            </Switch>
          </li>
        );
      })}
    </ul>
  );
};

export const StyleSwitch: Story = {
  args: {
    disabled: false,
    checked: true,
  },
  render: ({ disabled, checked }) => {
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

export const MultiSwitch: Story = {
  args: {
    color: ColorKey.Default,
    size: SizeKey.SM,
    disabled: false,
    children: "default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switch1 = canvas.getByTestId<HTMLInputElement>("switch-1");
    const switch2 = canvas.getByTestId<HTMLInputElement>("switch-2");
    const disabled = canvas.getByTestId<HTMLInputElement>("disabled");

    await userEvent.click(switch1);
    await userEvent.click(switch2);
    await userEvent.click(disabled);

    await expect(switch1.checked).toBe(true);
    await expect(switch2.checked).toBe(true);
    await expect(disabled.checked).toBe(false);
  },
  render: function Render(args): ReactElement {
    return <MultiSwitchWrapper {...args} />;
  },
};
