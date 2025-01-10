import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './index';

const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ['autodocs'],
  args: {
    text: 'Node.js',
    icon: 'nodedotjs',
    foreground: '#fff',
    background: '#5FA04E'
  }
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};
