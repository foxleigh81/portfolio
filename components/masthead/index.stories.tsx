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
    miniMeVariant: 'available'
  },
  argTypes: {
    miniMeVariant: {
      options: miniMeVariants
    }
  }
};

export default meta;
type Story = StoryObj<typeof Masthead>;

export const Default: Story = {};
