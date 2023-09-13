import type { Meta, StoryObj } from '@storybook/react';
import { Block, names } from './index';

const meta: Meta<typeof Block> = {
  component: Block,
  tags: ['autodocs'],
  argTypes: {
    name: {
      options: names
    }
  },
  parameters: {
    previewLayout: 'vertical'
  }
};

export default meta;
type Story = StoryObj<typeof Block>;

export const Default: Story = {};
