import type { Meta, StoryObj } from '@storybook/react';
import { Testimonials } from './index';

const meta: Meta<typeof Testimonials> = {
  component: Testimonials,
  tags: ['autodocs'],
  parameters: {
    previewLayout: 'vertical'
  }
};

export default meta;
type Story = StoryObj<typeof Testimonials>;

export const Default: Story = {};
