import type { Meta, StoryObj } from '@storybook/react';
import { About } from './index';

const meta: Meta<typeof About> = {
  component: About,
  tags: ['autodocs'],
  parameters: {
    previewLayout: 'vertical'
  }
};

export default meta;
type Story = StoryObj<typeof About>;

export const Default: Story = {};
