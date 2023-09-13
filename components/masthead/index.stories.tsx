import type { Meta, StoryObj } from '@storybook/react';
import { Masthead } from './index';
import { variants as miniMeVariants } from '../mini-me';

const meta: Meta<typeof Masthead> = {
  component: Masthead,
  tags: ['autodocs'],
  parameters: {
    previewLayout: 'vertical'
  },
  args: {
    miniMeVariant: 'available',
    hour: 12,
    date: '2027-12-02'
  },
  argTypes: {
    miniMeVariant: {
      options: miniMeVariants
    },
    hour: {
      control: {
        type: 'range',
        min: 0,
        max: 24,
        step: 1
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Masthead>;

export const Default: Story = {};
