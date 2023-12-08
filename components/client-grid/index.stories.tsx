import type { Meta, StoryObj } from '@storybook/react';
import { ClientGrid } from './index';
import clients from 'lib/mocks/clients';

const meta: Meta<typeof ClientGrid> = {
  component: ClientGrid,
  tags: ['autodocs'],
  parameters: {
    previewLayout: 'vertical'
  },
  args: {
    clients
  }
};

export default meta;
type Story = StoryObj<typeof ClientGrid>;

export const Default: Story = {};
