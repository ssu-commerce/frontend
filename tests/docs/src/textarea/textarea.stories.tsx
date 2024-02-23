import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { Fragment } from "react";
import { ColorKey, VariantKey, SizeKey, TextArea } from "@sc/ui";
import { css } from "@emotion/react";

const TextAreaCompoundArgs = {
  color: Object.values(ColorKey),
  variant: Object.values(VariantKey),
  size: Object.values(SizeKey),
};

const meta = {
  title: "UI/TextArea",
  component: TextArea,
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
      options: TextAreaCompoundArgs.color,
    },
    disabled: {
      control: "boolean",
    },
    size: {
      control: "radio",
      options: TextAreaCompoundArgs.size,
    },
    placeholder: {
      control: "text",
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof TextArea>;

export const DefaultTextArea: Story = {
  args: {
    color: ColorKey.Default,
    size: SizeKey.SM,
    disabled: false,
    placeholder: "placeholder",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const $textarea = canvas.getByPlaceholderText("placeholder");
    await userEvent.type($textarea, "input text");
    await expect($textarea.tagName).toBe("TEXTAREA");
    await expect($textarea).toHaveValue("input text");
  },
  render: (args) => {
    return <TextArea {...args} />;
  },
};

export const StyleTextArea: Story = {
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
        {TextAreaCompoundArgs.color.map((color) => (
          <Fragment key={color}>
            {TextAreaCompoundArgs.size.map((size) => (
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
                <TextArea
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

export const MultiTextArea: Story = {
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
          <TextArea loading multiline placeholder="loading" testId="loading" />
        </li>
        <li>
          <TextArea color={color} placeholder="hover" size={size} />
        </li>
        <li>
          <TextArea color={color} disabled placeholder="disabled" size={size} />
        </li>
        <li>
          <TextArea
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

export const MultilineTextArea: Story = {
  args: {
    color: ColorKey.Default,
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
          <TextArea multiline placeholder="multiline" {...args} />
        </li>
        <li>
          <TextArea disabled placeholder="disabled" {...args} />
        </li>
        <li>
          <TextArea multiline placeholder="rows" rows={3} {...args} />
        </li>
        <li>
          <TextArea
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
