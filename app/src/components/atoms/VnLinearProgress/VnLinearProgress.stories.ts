import VnLinearProgress from './VnLinearProgress.vue';
import { VnLinearProgressProps } from './VnLinearProgress.interfaces';
import { Story } from '@storybook/vue3';

export default {
  title: 'Компоненты/Атомы/VnLinearProgress',
  component: VnLinearProgress,
  parameters: {},
  argTypes: {
  },
};

const Template: Story<VnLinearProgressProps> = (args: VnLinearProgressProps) => ({
  components: { VnLinearProgress },
  setup() {
    return { args };
  },
  template: '<VnLinearProgress v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.storyName = 'Playground';
Primary.args = {
};
