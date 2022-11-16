import FrDropbox from './FrDropbox.vue';
import { Story } from '@storybook/vue3';
import { FrDropboxProps } from 'components/atoms/VnDropbox/FrDropbox.interfaces';

export default {
  title: 'Компоненты/Атомы/FrDropbox',
  component: FrDropbox,
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

const Template: Story<FrDropboxProps> = (args: FrDropboxProps) => ({
  components: { FrDropbox },
  setup() {
    return { args };
  },
  template: '<fr-dropbox v-bind="args" />',
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
