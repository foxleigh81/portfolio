import type { Meta, StoryObj } from '@storybook/react';
import { Skills } from './index';

const meta: Meta<typeof Skills> = {
  component: Skills,
  tags: ['autodocs'],
  parameters: {
    previewLayout: 'vertical'
  }
};

export default meta;
type Story = StoryObj<typeof Skills>;

export const Default: Story = {};
