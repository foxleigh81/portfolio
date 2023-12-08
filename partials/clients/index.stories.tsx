import type { Meta, StoryObj } from '@storybook/react';
import { Clients } from './index';

const meta: Meta<typeof Clients> = {
  component: Clients,
  tags: ['autodocs'],
  parameters: {
    previewLayout: 'vertical'
  }
};

export default meta;
type Story = StoryObj<typeof Clients>;

export const Default: Story = {};
