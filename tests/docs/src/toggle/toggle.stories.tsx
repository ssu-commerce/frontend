import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import type { ChangeEvent, ReactElement } from "react";
import { Fragment, useState } from "react";
import { css } from "@emotion/react";
import { ColorKey, SizeKey, Toggle } from "@sc/ui";

const toggleCompoundArgs = {
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

const BaseToggle = ({
  items,
  color,
  size,
  disabled,
}: {
  items: { name: string; value: string }[];
  color: ColorKey;
  size: SizeKey;
  disabled: boolean;
}) => {
  const [selectValue, setSelectValue] = useState<string[]>([]);
  const handleChange = (value: string[]) => {
    setSelectValue(value);
  };
  return (
    <Toggle.Group
      onChange={handleChange}
      color={color}
      size={size}
      disabled={disabled}
      value={selectValue}
    >
      {items.map(({ name, value }) => {
        return (
          <Toggle.Button key={value} value={value}>
            {name}
          </Toggle.Button>
        );
      })}
    </Toggle.Group>
  );
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggleElement = canvas.getByRole<HTMLInputElement>("checkbox");
    await userEvent.click(toggleElement);
    await expect(toggleElement.checked).toBe(true);
  },
  render: ({ color, size, disabled }): ReactElement => {
    return (
      <BaseToggle
        items={toggleCompoundArgs.items}
        color={color}
        size={size}
        disabled={disabled}
      />
    );
  },
};

// const MultiToggleWrapper = (args): ReactElement => {
//   const [checked, setChecked] = useState<string[]>([]);
//   const toggleList = ["toggle-1", "toggle-2", "disabled"];

//   const handleChangeCheck = (e: ChangeEvent<HTMLInputElement>): void => {
//     const { value } = e.target;
//     if (checked.includes(value))
//       setChecked(checked.filter((checkValue) => checkValue !== value));
//     else setChecked([...checked, value]);
//   };

//   return (
//     <ul>
//       {toggleList.map((value) => {
//         return (
//           <li key={value}>
//             <Toggle
//               {...args}
//               checked={checked.includes(value)}
//               disabled={value === "disabled"}
//               onChange={handleChangeCheck}
//               testId={value}
//               value={value}
//             >
//               {value}
//             </Toggle>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export const StyleToggle: Story = {
//   args: {
//     disabled: false,
//     checked: true,
//   },
//   render: ({ disabled, checked }) => (
//     <ul
//       css={css`
//         display: grid;
//         grid-template-columns: repeat(5, 1fr);
//         grid-column-gap: 8px;
//         grid-row-gap: 16px;
//         text-align: center;
//         align-items: center;
//         background-color: #fff;
//         background-image: linear-gradient(
//             90deg,
//             rgba(0, 0, 0, 0.03) 50%,
//             transparent 50%
//           ),
//           linear-gradient(rgba(0, 0, 0, 0.03) 50%, transparent 50%);
//         background-size: 10px 10px;
//         padding: 24px;
//       `}
//     >
//       {toggleCompoundArgs.color.map((color) => (
//         <Fragment key={color}>
//           {toggleCompoundArgs.size.map((size) => (
//             <li
//               css={css`
//                 display: flex;
//                 gap: 4px;
//                 flex-direction: column;
//               `}
//               key={color + size}
//             >
//               <label
//                 css={css`
//                   font-size: 12px;
//                   display: block;
//                 `}
//                 htmlFor={`${color}-${size}`}
//               >
//                 [{color} / {size}]
//               </label>
//               <Toggle
//                 checked={checked}
//                 color={color}
//                 disabled={disabled}
//                 id={`${color}-${size}`}
//                 size={size}
//               >
//                 toggle
//               </Toggle>
//             </li>
//           ))}
//         </Fragment>
//       ))}
//     </ul>
//   ),
//   argTypes: {
//     color: {
//       control: false,
//     },
//     size: {
//       control: false,
//     },
//   },
// };

// export const MultiToggle: Story = {
//   args: {
//     color: ColorKey.Default,
//     size: SizeKey.SM,
//     disabled: false,
//     children: "default",
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const toggle1 = canvas.getByTestId<HTMLInputElement>("toggle-1");
//     const toggle2 = canvas.getByTestId<HTMLInputElement>("toggle-2");
//     const disabled = canvas.getByTestId<HTMLInputElement>("disabled");

//     await userEvent.click(toggle1);
//     await userEvent.click(toggle2);
//     await userEvent.click(disabled);

//     await expect(toggle1.checked).toBe(true);
//     await expect(toggle2.checked).toBe(true);
//     await expect(disabled.checked).toBe(false);
//   },
//   render: function Render(args): ReactElement {
//     return <MultiToggleWrapper {...args} />;
//   },
// };
