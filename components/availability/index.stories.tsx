import type { Meta, StoryObj } from '@storybook/react';
import { Availability, statuses } from './index';

const meta: Meta<typeof Availability> = {
  component: Availability,
  tags: ['autodocs'],
  argTypes: {
    status: {
      options: statuses
    }
  },
  parameters: {
    previewLayout: 'vertical'
  }
};

export default meta;
type Story = StoryObj<typeof Availability>;

export const Available: Story = {};

export const Unavailable = {
  args: {
    status: 'unavailable'
  }
};

export const Soon = {
  args: {
    status: 'available-soon',
    date: '2027-12-02'
  }
};

export const Freelance = {
  args: {
    status: 'freelance'
  }
};
