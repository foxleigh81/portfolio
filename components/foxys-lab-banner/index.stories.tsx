import type { Meta, StoryObj } from '@storybook/react';
import { FoxysLabBanner } from './index';

const meta: Meta<typeof FoxysLabBanner> = {
  component: FoxysLabBanner,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof FoxysLabBanner>;

export const Default: Story = {};
