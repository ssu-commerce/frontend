import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'ui';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'radio',
      options: [
        'default',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
        'black',
        'slate-100',
      ],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const ButtonHooks = args => {
  return <Button {...args}>Button</Button>;
};

export const Primary: Story = {
  render: args => <ButtonHooks color={args.color} {...args} />,
};
