import VnInput from './VnInput.vue';
import { VnInputProps } from './VnInput.interfaces';
import { Story } from '@storybook/vue3';

export default {
  title: 'Компоненты/Атомы/VnInput',
  component: VnInput,
  parameters: {},
  argTypes: {
  },
};

const Template: Story<VnInputProps> = (args: VnInputProps) => ({
  components: { VnInput },
  setup() {
    return { args };
  },
  template: '<VnInput v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.storyName = 'Playground';
Primary.args = {

};
