import type { Meta, StoryObj } from '@storybook/react';
import { Contact } from './index';

const meta: Meta<typeof Contact> = {
  component: Contact,
  tags: ['autodocs'],
  parameters: {
    previewLayout: 'vertical'
  }
};

export default meta;
type Story = StoryObj<typeof Contact>;

export const Default: Story = {};
