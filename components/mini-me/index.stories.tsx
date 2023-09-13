import type { Meta, StoryObj } from '@storybook/react';
import { MiniMe, variants } from './index';

const meta: Meta<typeof MiniMe> = {
  component: MiniMe,
  tags: ['autodocs'],
  args: {
    children: 'Button'
  },
  argTypes: {
    variant: {
      options: variants
    }
  }
};

export default meta;
type Story = StoryObj<typeof MiniMe>;

export const Default: Story = {};
