import VnCheckbox from './VnCheckbox.vue';
import { VnCheckboxProps } from './VnCheckbox.interfaces';
import { Story } from '@storybook/vue3';

export default {
  title: 'Компоненты/Атомы/VnCheckbox',
  component: VnCheckbox,
  parameters: {},
  argTypes: {

  },
};

const Template: Story<VnCheckboxProps> = (args: VnCheckboxProps) => ({
  components: { VnCheckbox },
  setup() {
    return { args };
  },
  template: '<VnCheckbox v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.storyName = 'Playground';
Primary.args = {

};
