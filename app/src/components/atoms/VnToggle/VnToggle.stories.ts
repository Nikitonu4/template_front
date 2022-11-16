import VnToggle from './VnToggle.vue';
import { Story } from '@storybook/vue3';
import { VnToggleProps } from './VnToggle.interfaces';

export default {
  title: 'Компоненты/Атомы/VnToggle',
  component: VnToggle,
  parameters: {},
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'select' },
      options: ['S', 'M', 'L'],
    },
    style: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

const Template: Story<VnToggleProps> = (args: VnToggleProps) => ({
  components: { VnToggle },
  setup() {
    return { args };
  },
  template: '<vn-toggle v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.storyName = 'Playground';
Primary.args = {
  label: 'Button',
  mainIcon: {
    name: '',
  },
  leftIcon: {
    name: '',
  },
  rightIcon: {
    name: '',
  },
};
