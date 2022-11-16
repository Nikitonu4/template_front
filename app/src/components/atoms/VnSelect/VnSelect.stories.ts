import VnSelect from './VnSelect.vue';
import { VnSelectProps } from './VnSelect.interfaces';
import { Story } from '@storybook/vue3';

export default {
  title: 'Компоненты/Атомы/VnSelect',
  component: VnSelect,
  parameters: {},
  argTypes: {
  },
};

const Template: Story<VnSelectProps> = (args: VnSelectProps) => ({
  components: { VnSelect },
  setup() {
    return { args };
  },
  template: '<VnSelect v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.storyName = 'Playground';
Primary.args = {
};
