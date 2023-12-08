import type { Meta, StoryObj } from '@storybook/react';
import { ClientDescription } from './index';

import clientsMock from 'lib/mocks/clients';

const meta: Meta<typeof ClientDescription> = {
  component: ClientDescription,
  tags: ['autodocs'],
  args: {
    name: clientsMock[0].name,
    date_started: clientsMock[0].date_started,
    date_ended: clientsMock[0].date_ended,
    description: clientsMock[0].description,
    role: clientsMock[0].role
  },
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: clientsMock.map((client) => client.name)
      }
    },
    date_started: {
      control: {
        type: 'text'
      }
    },
    date_ended: {
      control: {
        type: 'text'
      }
    },
    description: {
      control: {
        type: 'text'
      }
    },
    role: {
      control: {
        type: 'text'
      }
    }
  },
  parameters: {
    previewLayout: 'vertical'
  }
};

export default meta;
type Story = StoryObj<typeof ClientDescription>;

export const Default: Story = {};
