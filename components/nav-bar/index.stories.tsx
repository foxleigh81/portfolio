import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './index';

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  tags: ['autodocs'],
  parameters: {
    previewLayout: 'vertical'
  }
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {};
