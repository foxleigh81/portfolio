import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './index';

const meta: Meta<typeof Footer> = {
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    previewLayout: 'vertical'
  }
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
