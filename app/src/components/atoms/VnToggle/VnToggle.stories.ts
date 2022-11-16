import VnToggle from './VnToggle.vue';
import { Story } from '@storybook/vue3';
import { VnToggleProps } from './VnToggle.interfaces';

export default {
  title: 'Компоненты/Атомы/VnToggle',
  component: VnToggle,
  parameters: {},
  argTypes: {
  },
};

const Template: Story<VnToggleProps> = (args: VnToggleProps) => ({
  components: { VnToggle },
  setup() {
    return { args };
  },
  template: '<VnToggle v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.storyName = 'Playground';
Primary.args = {

};
