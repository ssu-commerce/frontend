import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { Fragment } from "react";
import type { Size, Color, Variant } from "@sc/ui";
import { ColorKey, VariantKey, SizeKey, TextField } from "@sc/ui";
import { css } from "@emotion/react";

const textFieldCompoundArgs = {
  color: Object.values(ColorKey) as Color[],
  variant: Object.values(VariantKey) as Variant[],
  size: Object.values(SizeKey) as Size[],
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

export const ActionTextField: Story = {
  args: {
    color: ColorKey.Default,
    variant: VariantKey.Contained,
    size: SizeKey.SM,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // hover
    const hover = canvas.getByPlaceholderText("hover");
    await userEvent.hover(hover);
    await expect(hover).toBeInTheDocument();
    await expect(hover).toHaveStyle({ cursor: "text" });

    // disabled
    const disabled = canvas.getByPlaceholderText("disabled");
    await expect(disabled).toBeInTheDocument();
    await expect(disabled.closest("div")).toHaveStyle({
      opacity: "0.3",
      cursor: "not-allowed",
    });
    await waitFor(async () => {
      await userEvent.type(disabled, "input text");
      await expect(disabled).toHaveValue("");
    });

    // fullWidth
    const fullWidth = canvas.getByPlaceholderText("fullWidth");
    await expect(fullWidth).toBeInTheDocument();
    await expect(fullWidth.closest("div")).toHaveStyle({ width: "200px" });
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
          <TextField
            color={color}
            size={size}
            variant={variant}
            placeholder="hover"
          />
        </li>
        <li>
          <TextField
            color={color}
            disabled
            size={size}
            variant={variant}
            placeholder="disabled"
          />
        </li>
        <li>
          <TextField
            color={color}
            fullWidth
            size={size}
            variant={variant}
            placeholder="fullWidth"
          />
        </li>
      </ul>
    );
  },
};

export const TextAreaTextField: Story = {
  args: {
    color: ColorKey.Default,
    variant: VariantKey.Contained,
    size: SizeKey.SM,
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
    await expect(disabled).toBeInTheDocument();
    await expect(disabled.closest("div")).toHaveStyle({
      opacity: "0.3",
      cursor: "not-allowed",
    });
    await waitFor(async () => {
      await userEvent.type(disabled, "input text");
      await expect(disabled).toHaveValue("");
    });

    // rows
    const rows = canvas.getByPlaceholderText("rows");
    await userEvent.type(rows, "textarea");
    await expect(rows).toHaveAttribute("rows");

    // max-min-rows
    const maxMinRows = canvas.getByPlaceholderText("max-min-rows");
    await expect(maxMinRows).toHaveStyle({ height: "68px" });
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
          <TextField multiline placeholder="multiline" {...args} />
        </li>
        <li>
          <TextField disabled placeholder="disabled" {...args} />
        </li>
        <li>
          <TextField multiline placeholder="rows" rows={3} {...args} />
        </li>
        <li>
          <TextField
            maxRows={5}
            minRows={3}
            multiline
            placeholder="max-min-rows"
            {...args}
          />
        </li>
      </ul>
    );
  },
};
