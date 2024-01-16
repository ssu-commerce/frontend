import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import type { ReactElement } from "react";
import { useState } from "react";
import { ColorKey, SizeKey, Radio, RadioGroup } from "@sc/ui";

const radioCompoundArgs = {
  color: Object.values(ColorKey) as ColorKey[],
  size: Object.values(SizeKey) as SizeKey[],
};

const meta = {
  title: "UI/Radio",
  component: Radio,
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
      options: radioCompoundArgs.color,
    },
    disabled: {
      control: "boolean",
    },
    size: {
      control: "radio",
      options: radioCompoundArgs.size,
    },
    placeholder: {
      control: "text",
    },
  },
} satisfies Meta<typeof Radio>;
export default meta;

type Story = StoryObj<typeof Radio>;

const DefaultRadioWrapper = ({ children, ...args }): ReactElement => {
  const [checked, setChecked] = useState(false);
  return (
    <Radio
      checked={checked}
      onChange={() => {
        setChecked(!checked);
      }}
      {...args}
    >
      {children}
    </Radio>
  );
};

export const DefaultRadio: Story = {
  args: {
    color: ColorKey.Default,
    size: SizeKey.SM,
    disabled: false,
    children: "default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByRole<HTMLInputElement>("radio");
    await userEvent.click(radio);
    await expect(radio.checked).toBe(true);
  },
  render: ({ children, ...args }): ReactElement => {
    return <DefaultRadioWrapper {...args}>{children}</DefaultRadioWrapper>;
  },
};

const MultiRadioWrapper = (args): ReactElement => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const radioList = ["radio-1", "radio-2", "disabled"];

  const handleChangeRadio = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <RadioGroup onChange={handleChangeRadio} value={selectedValue}>
      {radioList.map((value) => {
        return (
          <Radio
            {...args}
            disabled={value === "disabled"}
            key={value}
            testId={value}
            value={value}
          >
            {value}
          </Radio>
        );
      })}
    </RadioGroup>
  );
};

export const MultiRadio: Story = {
  args: {
    color: ColorKey.Default,
    size: SizeKey.SM,
    disabled: false,
    children: "default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radio1 = canvas.getByTestId<HTMLInputElement>("radio-1");
    const radio2 = canvas.getByTestId<HTMLInputElement>("radio-2");
    const disabled = canvas.getByTestId<HTMLInputElement>("disabled");

    await userEvent.click(radio1);
    await userEvent.click(radio2);
    await userEvent.click(disabled);

    await expect(radio1.checked).toBe(false);
    await expect(radio2.checked).toBe(true);
    await expect(disabled.checked).toBe(false);
  },
  render: ({ children, ...args }): ReactElement => {
    return <MultiRadioWrapper {...args}>{children}</MultiRadioWrapper>;
  },
};
