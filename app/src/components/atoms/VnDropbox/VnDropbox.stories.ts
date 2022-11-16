import VnDropbox from './VnDropbox.vue';
import { Story } from '@storybook/vue3';
import { VnDropboxProps } from 'components/atoms/VnDropbox/VnDropbox.interfaces';

export default {
  title: 'Компоненты/Атомы/VnDropbox',
  component: VnDropbox,
  parameters: {},
  argTypes: {

  },
};

const Template: Story<VnDropboxProps> = (args: VnDropboxProps) => ({
  components: { VnDropbox },
  setup() {
    return { args };
  },
  template: '<VnDropbox v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.storyName = 'Playground';
Primary.args = {

};
