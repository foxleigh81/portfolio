import type { Meta, StoryObj } from '@storybook/react';
import { SkillGrid } from './index';
import skills from 'lib/mocks/skills';

const meta: Meta<typeof SkillGrid> = {
  component: SkillGrid,
  tags: ['autodocs'],
  parameters: {
    previewLayout: 'vertical'
  },
  args: {
    skills
  }
};

export default meta;
type Story = StoryObj<typeof SkillGrid>;

export const Default: Story = {};
