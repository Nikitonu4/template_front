import VnButton from './VnButton.vue';
import { VnButtonProps } from './VnButton.interfaces';
import { Story } from '@storybook/vue3';

export default {
  title: 'Компоненты/Атомы/VnButton',
  component: VnButton,
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

const Template: Story<VnButtonProps> = (args: VnButtonProps) => ({
  components: { VnButton },
  setup() {
    return { args };
  },
  template: '<fr-button v-bind="args" />',
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
