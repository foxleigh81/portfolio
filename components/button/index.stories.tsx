import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button'
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'availability']
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  }
};

export const Availability: Story = {
  args: {
    variant: 'availability'
  }
};
