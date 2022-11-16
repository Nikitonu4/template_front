import VnRadioGroup from './VnRadioGroup.vue';
import { VnRadioGroupProps } from './VnRadioGroup.interfaces';
import { Story } from '@storybook/vue3';

export default {
  title: 'Компоненты/Атомы/VnRadioGroup',
  component: VnRadioGroup,
  parameters: {},
  argTypes: {
  },
};

const Template: Story<VnRadioGroupProps> = (args: VnRadioGroupProps) => ({
  components: { VnRadioGroup },
  setup() {
    return { args };
  },
  template: '<VnRadioGroup v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.storyName = 'Playground';
Primary.args = {

};
