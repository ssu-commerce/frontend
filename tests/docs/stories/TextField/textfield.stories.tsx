import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { Fragment } from "react";
import { TextField } from "@sc/ui";
import { textFieldCompoundArgs, textFieldStyleProps } from "./textfield.type";

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
    color: "default",
    size: "sm",
    disabled: false,
    placeholder: "placeholder",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textField = canvas.getByPlaceholderText("placeholder");
    await waitFor(async () => {
      await userEvent.type(textField, "input text");
      await expect(textField.tagName).toBe("INPUT");
      await expect(textField).toHaveValue("input text");
    });
  },
  render: (args) => {
    return <TextField {...args} />;
  },
};

export const StyleTextField: Story = {
  render: ({ disabled }) => {
    return (
      <>
        {textFieldCompoundArgs.color.map((color) => (
          <Fragment key={color}>
            {textFieldCompoundArgs.size.map((size) => (
              <li key={color + size}>
                <label
                  className="text-xs block bg-white p-1 rounded-md w-fit mx-auto m"
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
      </>
    );
  },
  decorators: [
    (Story) => (
      <ul className="grid grid-cols-3 gap-4 text-center align-middle items-center">
        <Story />
      </ul>
    ),
  ],
};

export const ActionTextField: Story = {
  args: {
    color: "default",
    size: "sm",
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // hover
    const hover = canvas.getByPlaceholderText("hover");
    await expect(hover.parentNode).toHaveClass("hover:ui-bg-white");

    // disabled
    const disabled = canvas.getByPlaceholderText("disabled");
    await expect(disabled).toHaveClass("ui-cursor-not-allowed");
    await expect(disabled.parentNode).toHaveClass(
      "ui-opacity-30 hover:ui-opacity-30 ui-cursor-not-allowed",
    );
    await waitFor(async () => {
      await userEvent.type(disabled, "input text");
      await expect(disabled).toHaveValue("");
    });

    // fullWidth
    const fullWidth = canvas.getByPlaceholderText("fullWidth");
    await expect(fullWidth.parentNode).toHaveClass("ui-w-full");

    // autoFocus
    const autoFocus = canvas.getByPlaceholderText("autoFocus");
    await waitFor(async () => {
      await expect(autoFocus).toHaveFocus();
    });
  },
  render: () => {
    return (
      <>
        {Object.keys(textFieldStyleProps).map((name) => (
          <li className="w-52" key={name}>
            <TextField
              // eslint-disable-next-line jsx-a11y/no-autofocus -- for test
              autoFocus={name === "autoFocus"}
              disabled={name === "disabled"}
              fullWidth={name === "fullWidth"}
              placeholder={name}
            />
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

export const TextAreaTextField: Story = {
  args: {
    color: "default",
    size: "sm",
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // multiline;
    const multiline = canvas.getByPlaceholderText("multiline");
    await waitFor(async () => {
      await userEvent.type(multiline, "textarea");
      await expect(multiline.tagName).toBe("TEXTAREA");
      await expect(multiline).toHaveValue("textarea");
    });

    // disabled
    const disabled = canvas.getByPlaceholderText("disabled");
    await expect(disabled).toHaveClass("ui-cursor-not-allowed");
    await expect(disabled.parentNode).toHaveClass(
      "ui-opacity-30 hover:ui-opacity-30 ui-cursor-not-allowed",
    );
    await userEvent.type(disabled, "input text");
    await expect(disabled).toHaveValue("");

    // rows
    const rows = canvas.getByPlaceholderText("rows");
    await userEvent.type(rows, "textarea");
    await expect(rows).toHaveAttribute("rows");

    // max-min-rows
    const maxMinRows = canvas.getByPlaceholderText("max-min-rows");
    await expect(maxMinRows).toHaveStyle("height: 68px");
    /**
     * TODO: waitFor 안에 type을 넣어야만 onChange 속 함수들이 정상적으로 동작합니다 why?
     *
     * TODO: waitFor 속 type; expect를 조합 시 type의 타이핑이 중복으로 되는 현상이 있습니다.
     *
     * @example
     * ```typescript
     *    await waitFor(async () =>  {
     *      await userEvent.type(maxMinRows, "maxRowsMinRows ");
     *      await expect(maxMinRows).toHaveStyle("height: 56px");
     *    })
     * ```
     */
    await waitFor(async () => {
      await userEvent.type(
        maxMinRows,
        "maxRows-minRows\nmaxRows-minRows\nmaxRows-minRows\nmaxRows-minRows\nmaxRows-minRows\nmaxRows-minRows\nmaxRows-minRows",
      );
      await expect(maxMinRows).toHaveStyle("height: 108px");
    });
  },
  render: (args) => {
    return (
      <>
        <li className="w-52">
          <TextField multiline placeholder="multiline" {...args} />
        </li>
        <li className="w-52">
          <TextField disabled placeholder="disabled" {...args} />
        </li>
        <li className="w-52">
          <TextField multiline placeholder="rows" rows={3} {...args} />
        </li>
        <li className="w-52">
          <TextField
            maxRows={5}
            minRows={3}
            multiline
            placeholder="max-min-rows"
            {...args}
          />
        </li>
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
