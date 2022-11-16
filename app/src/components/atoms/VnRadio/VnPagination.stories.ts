import VnRadio from './VnRadio.vue';
import { VnRadioProps } from './VnRadio.interfaces';
import { Story } from '@storybook/vue3';

export default {
  title: 'Компоненты/Атомы/VnRadio',
  component: VnRadio,
  parameters: {},
  argTypes: {

  },
};

const Template: Story<VnRadioProps> = (args: VnRadioProps) => ({
  components: { VnRadio },
  setup() {
    return { args };
  },
  template: '<VnRadio v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.storyName = 'Playground';
Primary.args = {

};
